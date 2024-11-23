import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Switch } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';
import { dump, load } from 'js-yaml';

export const YAMLConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [isYAMLToJSON, setIsYAMLToJSON] = useState(true);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      setError('');
      if (input.trim() === '') {
        setOutput('');
        return;
      }

      if (isYAMLToJSON) {
        const obj = load(input);
        setOutput(JSON.stringify(obj, null, 2));
      } else {
        const obj = JSON.parse(input);
        setOutput(dump(obj));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid input');
      setOutput('');
    }
  }, [input, isYAMLToJSON]);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-bold">YAML/JSON Converter</h2>
        <div className="flex items-center gap-2">
          <span>To YAML</span>
          <Switch
            defaultSelected
            size="sm"
            color="default"
            isSelected={isYAMLToJSON}
            onValueChange={setIsYAMLToJSON}
          />
          <span>To JSON</span>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label={isYAMLToJSON ? "YAML Input" : "JSON Input"}
          value={input}
          onChange={setInput}
          placeholder={isYAMLToJSON ? "Enter YAML" : "Enter JSON"}
          showPaste
        />
        {error && <p className="text-danger text-sm">{error}</p>}
        <TextArea
          label={isYAMLToJSON ? "JSON Output" : "YAML Output"}
          value={output}
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
};