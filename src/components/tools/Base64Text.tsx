import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Switch } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

export const Base64Text: React.FC = () => {
  const [input, setInput] = useState('');
  const [isEncode, setIsEncode] = useState(true);

  const converted = React.useMemo(() => {
    try {
      if (isEncode) {
        return btoa(input);
      } else {
        return atob(input);
      }
    } catch (error) {
      return 'Invalid input';
    }
  }, [input, isEncode]);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-bold">Base64 Text Converter</h2>
        <div className="flex items-center gap-2">
          <span>Decode</span>
          <Switch
            defaultSelected
            size="sm"
            color="default"
            isSelected={isEncode}
            onValueChange={setIsEncode}
          />
          <span>Encode</span>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder={isEncode ? "Enter text to encode" : "Enter base64 to decode"}
          showPaste
        />
        <TextArea
          label="Output"
          value={converted}
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
};