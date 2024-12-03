import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Switch } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

const htmlEntities: Record<string, string> = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
  '&': '&amp;',
};

const reverseHtmlEntities: Record<string, string> = Object.fromEntries(
  Object.entries(htmlEntities).map(([key, value]) => [value, key])
);

export const HTMLEntityEncoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [isEncode, setIsEncode] = useState(true);
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (isEncode) {
      setOutput(
        input.replace(/[<>"'&]/g, char => htmlEntities[char] || char)
      );
    } else {
      setOutput(
        input.replace(/&[^;]+;/g, entity => 
          reverseHtmlEntities[entity] || entity
        )
      );
    }
  }, [input, isEncode]);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-bold">HTML Entity Encoder/Decoder</h2>
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
          placeholder={isEncode ? "Enter HTML to encode" : "Enter HTML entities to decode"}
          size="sm"
          showPaste
        />
        <TextArea
          label="Output"
          value={output}
          size="sm"
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
};