import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Select, SelectItem, Input } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const types = [
  { value: 'paragraph', label: 'Paragraphs' },
  { value: 'sentence', label: 'Sentences' },
  { value: 'word', label: 'Words' },
  { value: 'email', label: 'Email Addresses' },
  { value: 'url', label: 'URLs' }
];

export const LoremIpsumGenerator: React.FC = () => {
  const [type, setType] = useState('paragraph');
  const [count, setCount] = useState(1);
  const [output, setOutput] = useState('');

  const generateText = () => {
    switch (type) {
      case 'paragraph':
        setOutput(lorem.generateParagraphs(count));
        break;
      case 'sentence':
        setOutput(lorem.generateSentences(count));
        break;
      case 'word':
        setOutput(lorem.generateWords(count));
        break;
      case 'email':
        setOutput(Array(count).fill(0).map(() => 
          `${lorem.generateWords(1).toLowerCase()}@${lorem.generateWords(1).toLowerCase()}.com`
        ).join('\n'));
        break;
      case 'url':
        setOutput(Array(count).fill(0).map(() =>
          `https://${lorem.generateWords(1).toLowerCase()}.com/${lorem.generateWords(1).toLowerCase()}`
        ).join('\n'));
        break;
    }
  };

  React.useEffect(generateText, [type, count]);

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">Lorem Ipsum Generator</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="flex gap-4">
          <Select
            label="Type"
            selectedKeys={[type]}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="number"
            label="Count"
            value={count.toString()}
            onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
          />
        </div>
        <TextArea
          label="Generated Text"
          value={output}
          readOnly
          showCopy
        />
      </CardBody>
    </Card>
  );
};