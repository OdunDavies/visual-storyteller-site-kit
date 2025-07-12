
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
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-amber-500">
            Payment Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-600">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Account Name:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{accountDetails.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(accountDetails.name, 'name')}
                    className="h-6 w-6 p-0"
                  >
                    {copiedField === 'name' ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Bank:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{accountDetails.bank}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(accountDetails.bank, 'bank')}
                    className="h-6 w-6 p-0"
                  >
                    {copiedField === 'bank' ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold font-mono">{accountDetails.accountNumber}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(accountDetails.accountNumber, 'account')}
                    className="h-6 w-6 p-0"
                  >
                    {copiedField === 'account' ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <p className="font-bold text-amber-500 mb-2">
              Kindly make payment to the account above and click 'Done' when completed.
            </p>
            <p className="text-sm text-gray-400">
              Selected Package: <span className="text-white font-semibold">{packageName}</span>
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDone}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold"
            >
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
