import React from 'react';
import { Textarea } from '@nextui-org/react';
import { CopyButton } from './CopyButton';
import { PasteButton } from './PasteButton';

interface TextAreaProps {
  value: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  showCopy?: boolean;
  showPaste?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  label,
  placeholder,
  readOnly = false,
  showCopy = false,
  showPaste = false,
}) => {
  return (
    <div className="relative">
      <Textarea
        label={label}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="min-h-[200px]"
      />
      {showCopy && <CopyButton text={value} />}
      {showPaste && onChange && <PasteButton onPaste={onChange} />}
    </div>
  );
};