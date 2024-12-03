import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Input, Textarea } from '@nextui-org/react';
import { hexToRgb, rgbToHex } from '../../utils/colorConverter';

export const ColorConverter: React.FC = () => {
  const [hex, setHex] = useState('#000000');
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });

  useEffect(() => {
    const rgbValue = hexToRgb(hex);
    if (rgbValue) {
      setRgb(rgbValue);
    }
  }, [hex]);

  const handleRgbChange = (value: string, component: 'r' | 'g' | 'b') => {
    const num = parseInt(value) || 0;
    const newRgb = { ...rgb, [component]: Math.min(255, Math.max(0, num)) };
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">Color Converter</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <Input
          label="HEX Color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          placeholder="#000000"
        />
        <div className="flex gap-4">
          <Input
            type="number"
            label="Red"
            value={rgb.r.toString()}
            onChange={(e) => handleRgbChange(e.target.value, 'r')}
            min="0"
            max="255"
          />
          <Input
            type="number"
            label="Green"
            value={rgb.g.toString()}
            onChange={(e) => handleRgbChange(e.target.value, 'g')}
            min="0"
            max="255"
          />
          <Input
            type="number"
            label="Blue"
            value={rgb.b.toString()}
            onChange={(e) => handleRgbChange(e.target.value, 'b')}
            min="0"
            max="255"
          />
        </div>
        <Textarea
          label="RGB Output"
          value={`RGB: (${rgb.r}, ${rgb.g}, ${rgb.b})`}
          readOnly
        />
        <div 
          className="w-full h-20 rounded-lg border"
          style={{ backgroundColor: hex }}
        />
      </CardBody>
    </Card>
  );
};