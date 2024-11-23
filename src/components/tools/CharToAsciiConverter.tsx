import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

export const CharToAsciiConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const asciiValues = input.split('').map(char => char.charCodeAt(0)).join(' ');
    setOutput(asciiValues);
  }, [input]); // Update output whenever input changes

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">Character to ASCII Converter</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Enter characters"
          showPaste
        />
        <TextArea
          label="ASCII Output"
          value={output}
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
};