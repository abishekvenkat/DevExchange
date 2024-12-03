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
      <CardBody>
        <div className="flex gap-4  h-600px ">
          <div className="flex-1 ">
          <TextArea
            label="SQL Input"
            value={input}
            onChange={setInput}
            placeholder="Enter SQL query"
            showPaste
            size='lg'
          />
          </div>
          <div className="flex flex-col justify-center gap-2 px-4">
          <Button
              onClick={formatSQL}
              color="default"
              variant="flat"
              className="w-40"
              >
                Format SQL
          </Button>
         </div>
        <div className="flex-1">
          <TextArea
            label="Formatted SQL Output"
            value={output}
            readOnly
            showCopy
            size="lg"
          />
        </div>
       </div>
      </CardBody>
    </Card>
  );
}; 