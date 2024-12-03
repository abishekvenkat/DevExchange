import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { jwtDecode } from 'jwt-decode';
import { TextArea } from '../shared/TextArea';

export const JWTDebugger: React.FC = () => {
  const [token, setToken] = useState('');
  const [header, setHeader] = useState('');
  const [payload, setPayload] = useState('');
  const [signature, setSignature] = useState('');

  useEffect(() => {
    try {
      if (token) {
        const [headerB64, payloadB64, signatureB64] = token.split('.');
        const decodedHeader = jwtDecode(token, { header: true });
        const decodedPayload = jwtDecode(token);
        
        setHeader(JSON.stringify(decodedHeader, null, 2));
        setPayload(JSON.stringify(decodedPayload, null, 2));
        setSignature(signatureB64 || '');
      }
    } catch (error) {
      setHeader('Invalid JWT Header');
      setPayload('Invalid JWT Payload');
      setSignature('Invalid JWT Signature');
    }
  }, [token]);

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">JWT Debugger</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <TextArea
          label="JWT Token"
          value={token}
          onChange={setToken}
          placeholder="Paste your JWT token here"
          showPaste
          size="sm"
        />
        <Divider />
        <TextArea
          label="Header"
          value={header}
          readOnly
          showCopy
          size="sm"
        />
        <TextArea
          label="Payload"
          value={payload}
          readOnly
          showCopy
          size="sm"
        />
        <TextArea
          label="Signature"
          value={signature}
          readOnly
          showCopy
          size="sm"
        />
      </CardBody>
    </Card>
  );
};