import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.5";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();
    console.log("Processing contact form:", { name, email });

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Save to database
    const { data: submission, error: dbError } = await supabaseClient
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          message,
          status: "pending"
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save contact submission");
    }

    console.log("Contact submission saved:", submission.id);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Joseph Victor <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b;">Thank you for reaching out, ${name}!</h1>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br>Joseph Victor</p>
          <p style="color: #6b7280; font-size: 14px;">Videographer & Video Editor</p>
        </div>
      `,
    });

    // Send notification email to Joseph
    const adminEmailResponse = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["alijosephvictor@gmail.com"],
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b;">New Contact Form Submission</h1>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">Submission ID: ${submission.id}</p>
        </div>
      `,
    });

    console.log("Emails sent successfully");

    // Update database record to mark as sent
    await supabaseClient
      .from("contact_submissions")
      .update({ 
        status: "sent", 
        sent_at: new Date().toISOString() 
      })
      .eq("id", submission.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully",
        submissionId: submission.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to process contact form",
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);