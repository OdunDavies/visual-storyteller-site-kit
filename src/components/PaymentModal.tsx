import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Check } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, packageName }) => {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const accountDetails = {
    name: "Ali Joseph",
    bank: "First Bank",
    accountNumber: "3057598858"
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDone = () => {
    const whatsappNumber = "2348136557795";
    const message = `Hello, I've just made payment for the ${packageName} package. Kindly confirm.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-black text-black max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-black">
            Payment Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Card className="bg-white border-black">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-black">Account Name:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-black">{accountDetails.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(accountDetails.name, 'name')}
                    className="h-6 w-6 p-0 text-black"
                  >
                    {copiedField === 'name' ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-black">Bank:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-black">{accountDetails.bank}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(accountDetails.bank, 'bank')}
                    className="h-6 w-6 p-0 text-black"
                  >
                    {copiedField === 'bank' ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-black">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold font-mono text-black">{accountDetails.accountNumber}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(accountDetails.accountNumber, 'account')}
                    className="h-6 w-6 p-0 text-black"
                  >
                    {copiedField === 'account' ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center p-4 bg-white rounded-lg border border-black">
            <p className="font-bold text-black mb-2">
              Kindly make payment to the account above and click 'Done' when completed.
            </p>
            <p className="text-sm text-gray-600">
              Selected Package: <span className="text-black font-semibold">{packageName}</span>
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-black text-black hover:bg-black hover:text-white"
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              onClick={handleDone}
              className="flex-1 border-black text-black hover:bg-black hover:text-white font-semibold"
            >
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};