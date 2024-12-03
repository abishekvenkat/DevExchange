import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

export const CaseConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');


const cases = [
  { type: 'upper', label: 'UPPER CASE' },
  { type: 'lower', label: 'lower case' },
  { type: 'camel', label: 'camelCase' },
  { type: 'pascal', label: 'PascalCase' },
  { type: 'kebab', label: 'kebab-case' },
  { type: 'snake', label: 'snake_case' },
];

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

  const handleInputChange = (value: string) => {
    setInput(value);
    convertCase('camel'); // Default conversion
  };

  return (
    <Card className="w-full">
    <CardHeader>
      <h2 className="text-xl font-bold">Case Converter</h2>
    </CardHeader>
    <CardBody>
      <div className="flex gap-4  h-600px ">
        <div className="flex-1 ">
          <TextArea
            label="Input Text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter text to convert"
            showPaste
            size="lg"
          />
        </div>
        
        <div className="flex flex-col justify-center gap-2 px-4">
          {cases.map((c) => (
            <Button
              key={c.type}
              color="default"
              variant="flat"
              className="w-40"
              onClick={() => convertCase(c.type)}
            >
              {c.label}
            </Button>
          ))}
        </div>

        <div className="flex-1">
          <TextArea
            label="Converted Text"
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