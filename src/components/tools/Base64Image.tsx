import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';

export const Base64Image: React.FC = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (value: string) => {
    setInput(value);
    setError('');
    if (!value.startsWith('data:image')) {
      setError('Input must be a valid base64 image (data:image/...)');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">Base64 Image Converter</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="Base64 Image String"
          value={input}
          onChange={handleInputChange}
          placeholder="Paste base64 image string (data:image/...)"
          showPaste
        />
        {error ? (
          <p className="text-danger">{error}</p>
        ) : input && (
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Preview</h3>
            <Image
              src={input}
              alt="Base64 Preview"
              className="max-w-full h-auto"
              fallback="Invalid image data"
            />
          </div>
        )}
      </CardBody>
    </Card>
  );
};