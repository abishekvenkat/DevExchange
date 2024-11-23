import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';
import { format } from 'sql-formatter';

export const SQLFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const formatSQL = () => {
    try {
      setOutput(format(input));
    } catch (error) {
      setOutput('Invalid SQL');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">SQL Formatter</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="SQL Input"
          value={input}
          onChange={setInput}
          placeholder="Enter SQL query"
          showPaste
        />
        <div className="flex justify-center">
          <Button onClick={formatSQL} className="btn btn-primary w-auto">Format SQL</Button>
        </div>
        <TextArea
          label="Formatted SQL Output"
          value={output}
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
}; 