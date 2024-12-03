import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Variable,
  Binary,
  Image,
  Key,
  Link2,
  Code2,
  Braces,
  FileJson,
  QrCode,
  Database,
  Type,
  Terminal,
  Text,
  Hash,
  Palette
} from 'lucide-react';
import { useSidebarStore } from '../store/sidebar';

const tools = [
  { id: 'base64-text', name: 'Base64 Text', icon: Binary },
  { id: 'base64-image', name: 'Base64 Image', icon: Image },
  { id: 'jwt', name: 'JWT Debugger', icon: Key },
  { id: 'url', name: 'URL Encoder', icon: Link2 },
  { id: 'html', name: 'HTML Entity', icon: Code2 },
  { id: 'escape', name: 'Backslash Escape', icon: Terminal },
  { id: 'yaml-json', name: 'YAML/JSON', icon: FileJson },
  { id: 'qr', name: 'QR Generator', icon: QrCode },
  { id: 'sql', name: 'SQL Formatter', icon: Database },
  { id: 'case', name: 'Case Converter', icon: Type },
  { id: 'ascii', name: 'ASCII Converter', icon: Braces },
  { id: 'lorem-ipsum', name: 'Lorem Ipsum', icon: Text },
  { id: 'number-base', name: 'Number Base', icon: Hash },
  { id: 'color', name: 'RBG/Hex', icon: Palette },
];

export const Sidebar: React.FC = () => {
  const { isOpen, isPinned, toggleOpen } = useSidebarStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIconClick = () => {
    setIsAnimating(true);
    toggleOpen();

    // Remove the animation class after the animation ends
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Duration of the animation
  };

  return (
    <div
      className={`fixed left-0 h-screen bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-16 bg-gray-200'
      } ${!isPinned && !isOpen ? 'translate-x-0' : 'translate-x-0'}`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && <h1 className="text-xl font-bold">DevExchange</h1>}
        <div className="flex gap-2">
          
          <Button isIconOnly variant="light" onClick={handleIconClick}>
            <Variable
              className={`icon ${isAnimating ? 'rotate' : ''}`}
              size={20}
            />
          </Button>
        </div>
      </div>
      <nav className="mt-4">
        {tools.map((tool) => {
          const path = `/${tool.id}`;
          const isActive = location.pathname === path;
          
          return (
            <Button
              key={tool.id}
              variant={isActive ? "flat" : "light"}
              className={`w-full justify-start rounded-none px-4 py-3 ${
                !isOpen ? 'justify-center' : ''
              } ${isActive ? 'bg-primary-100 dark:bg-primary-900' : ''}`}
              onClick={() => navigate(path)}
            >
              <tool.icon size={20} />
              {isOpen && <span className="ml-3">{tool.name}</span>}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;