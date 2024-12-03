import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { convertBase } from '../../utils/numberBaseConverter';

const bases = [2, 8, 10, 16, 32];

export const NumberBaseConverter: React.FC = () => {
  const [values, setValues] = useState<Record<number, string>>(
    Object.fromEntries(bases.map(base => [base, '']))
  );

  const handleChange = (newValue: string, fromBase: number) => {
    try {
      const newValues = { ...values, [fromBase]: newValue };
      if (newValue) {
        bases.forEach(toBase => {
          if (toBase !== fromBase) {
            newValues[toBase] = convertBase(newValue, fromBase, toBase);
          }
        });
      } else {
        bases.forEach(base => {
          newValues[base] = '';
        });
      }
      setValues(newValues);
    } catch (error) {
      setValues({ ...values, [fromBase]: newValue });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">Number Base Converter</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        {bases.map(base => (
          <Input
            key={base}
            label={`Base ${base}`}
            value={values[base]}
            onChange={(e) => handleChange(e.target.value, base)}
            placeholder={`Enter base ${base} number`}
          />
        ))}
      </CardBody>
    </Card>
  );
};