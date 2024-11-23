import React from 'react';
import { Button } from '@nextui-org/react';
import { ClipboardPaste } from 'lucide-react';

interface PasteButtonProps {
  onPaste: (text: string) => void;
}

export const PasteButton: React.FC<PasteButtonProps> = ({ onPaste }) => {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onPaste(text);
    } catch (error) {
      console.error('Failed to paste:', error);
    }
  };

  return (
    <Button
      isIconOnly
      variant="light"
      onClick={handlePaste}
      className="absolute right-2 top-2"
    >
      <ClipboardPaste size={20} />
    </Button>
  );
};