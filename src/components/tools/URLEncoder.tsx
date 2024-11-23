import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Switch } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

export const URLEncoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [isEncode, setIsEncode] = useState(true);
  const [output, setOutput] = useState('');

  useEffect(() => {
    try {
      if (isEncode) {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (error) {
      setOutput('Invalid input');
    }
  }, [input, isEncode]);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-bold">URL Encoder/Decoder</h2>
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
          placeholder={isEncode ? "Enter URL to encode" : "Enter URL to decode"}
          showPaste
        />
        <TextArea
          label="Output"
          value={output}
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
};