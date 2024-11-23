import React from 'react';
import { Button } from '@nextui-org/react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      isIconOnly
      variant="light"
      onClick={handleCopy}
      className="absolute right-2 top-2"
    >
      {copied ? <Check size={20} className="text-success" /> : <Copy size={20} />}
    </Button>
  );
};