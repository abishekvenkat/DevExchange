import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Switch } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

export const BackslashEscape: React.FC = () => {
  const [input, setInput] = useState('');
  const [isEscape, setIsEscape] = useState(true);
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (isEscape) {
      setOutput(
        input.replace(/[\\\n\r\t'"]/g, (char) => {
          const escapes: Record<string, string> = {
            '\\': '\\\\',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            "'": "\\'",
            '"': '\\"',
          };
          return escapes[char] || char;
        })
      );
    } else {
      setOutput(
        input.replace(/\\([\\nrt'"])/g, (_, char) => {
          const unescapes: Record<string, string> = {
            '\\': '\\',
            'n': '\n',
            'r': '\r',
            't': '\t',
            "'": "'",
            '"': '"',
          };
          return unescapes[char] || char;
        })
      );
    }
  }, [input, isEscape]);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-bold">Backslash Escape/Unescape</h2>
        <div className="flex items-center gap-2">
          <span>Unescape</span>
          <Switch
            defaultSelected
            size="sm"
            color="default"
            isSelected={isEscape}
            onValueChange={setIsEscape}
          />
          <span>Escape</span>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder={isEscape ? "Enter text to escape" : "Enter text to unescape"}
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