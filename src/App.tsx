import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Base64Text } from './components/tools/Base64Text';
import { Base64Image } from './components/tools/Base64Image';
import { JWTDebugger } from './components/tools/JWTDebugger';
import { URLEncoder } from './components/tools/URLEncoder';
import { HTMLEntityEncoder } from './components/tools/HTMLEntityEncoder';
import { BackslashEscape } from './components/tools/BackslashEscape';
import { YAMLConverter } from './components/tools/YAMLConverter';
import { QRGenerator } from './components/tools/QRGenerator';
import { SQLFormatter } from './components/tools/SQLFormatter';
import { CaseConverter } from './components/tools/CaseConverter';
import { CharToAsciiConverter } from './components/tools/CharToAsciiConverter';
import { LoremIpsumGenerator } from './components/tools/LoremIpsumGenerator';
import { NumberBaseConverter } from './components/tools/NumberBaseConverter';
import { ColorConverter } from './components/tools/ColorConverter';

function App() {
  
  return (
    <NextUIProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/base64-text" replace />} />
            <Route path="/base64-text" element={<Base64Text />} />
            <Route path="/base64-image" element={<Base64Image />} />
            <Route path="/jwt" element={<JWTDebugger />} />
            <Route path="/url" element={<URLEncoder />} />
            <Route path="/html" element={<HTMLEntityEncoder />} />
            <Route path="/escape" element={<BackslashEscape />} />
            <Route path="/yaml-json" element={<YAMLConverter />} />
            <Route path="/qr" element={<QRGenerator />} />
            <Route path="/sql" element={<SQLFormatter />} />
            <Route path="/case" element={<CaseConverter />} />
            <Route path="/ascii" element={<CharToAsciiConverter />} />
            <Route path="/lorem-ipsum" element={<LoremIpsumGenerator />} />
            <Route path="/number-base" element={<NumberBaseConverter />} />
            <Route path="/color" element={<ColorConverter />} />
          </Routes>
        </Layout>
      </Router>
    </NextUIProvider>
  );
}

export default App;