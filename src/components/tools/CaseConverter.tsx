import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

export const CaseConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const convertCase = (caseType: string) => {
    let result = '';
    switch (caseType) {
      case 'upper':
        result = input.toUpperCase();
        break;
      case 'lower':
        result = input.toLowerCase();
        break;
      case 'camel':
        result = input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
          index === 0 ? match.toLowerCase() : match.toUpperCase()
        );
        break;
      case 'pascal':
        result = input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) =>
          match.toUpperCase()
        );
        break;
      case 'kebab':
        result = input.replace(/\s+/g, '-').toLowerCase();
        break;
      case 'snake':
        result = input.replace(/\s+/g, '_').toLowerCase();
        break;
      default:
        break;
    }
    setOutput(result);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">Case Converter</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Enter text to convert"
          showPaste
        />
        <div className="flex justify-center gap-2"> {/* Center the buttons */}
          {['upper', 'lower', 'camel', 'pascal', 'kebab', 'snake'].map((caseType) => (
            <Button key={caseType} onClick={() => convertCase(caseType)} className="btn btn-primary w-auto">
              {caseType.charAt(0).toUpperCase() + caseType.slice(1)}
            </Button>
          ))}
        </div>
        <TextArea
          label="Converted Output"
          value={output}
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
};