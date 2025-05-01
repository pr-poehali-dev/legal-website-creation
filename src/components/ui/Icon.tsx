
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  fallback?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback, size = 24, className }) => {
  // @ts-ignore - dynamically access the icon from lucide-react
  const IconComponent = LucideIcons[name] || (fallback ? LucideIcons[fallback] : null);

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found and no fallback provided`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
