import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Select, SelectItem } from '@nextui-org/react';
import { TextArea } from '../shared/TextArea';
import QRCode from 'qrcode';

const errorCorrectionLevels = [
  { value: 'L', label: 'Low (7%)' },
  { value: 'M', label: 'Medium (15%)' },
  { value: 'Q', label: 'Quartile (25%)' },
  { value: 'H', label: 'High (30%)' },
];

export const QRGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [qrImage, setQRImage] = useState('');
  const [errorLevel, setErrorLevel] = useState('L');
  const [error, setError] = useState('');

  useEffect(() => {
    const generateQR = async () => {
      try {
        setError('');
        if (!input) {
          setQRImage('');
          return;
        }

        const qr = await QRCode.toDataURL(input, {
          errorCorrectionLevel: errorLevel as 'L' | 'M' | 'Q' | 'H',
          margin: 1,
          maskPattern: 4,
        });
        setQRImage(qr);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to generate QR code');
        setQRImage('');
      }
    };

    generateQR();
  }, [input, errorLevel]);

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">QR Code Generator</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="Text/URL"
          value={input}
          onChange={setInput}
          placeholder="Enter text or URL to generate QR code"
          showPaste
        />
        <Select
          label="Error Correction Level"
          selectedKeys={[errorLevel]}
          onChange={(e) => setErrorLevel(e.target.value)}
        >
          {errorCorrectionLevels.map((level) => (
            <SelectItem key={level.value} value={level.value}>
              {level.label}
            </SelectItem>
          ))}
        </Select>
        {error && <p className="text-danger text-sm">{error}</p>}
        {qrImage && (
          <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
            <img src={qrImage} alt="Generated QR Code" className="max-w-[300px]" />
            <a
              href={qrImage}
              download="qrcode.png"
              className="text-primary hover:underline"
            >
              Download QR Code
            </a>
          </div>
        )}
      </CardBody>
    </Card>
  );
};