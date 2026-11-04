import React from 'react';
import logoImg from '../assets/logo-transparent.png';

interface LogoProps {
  className?: string;
  size?: 'normal' | 'small' | 'navbar';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'navbar' }) => {
  const getHeightClass = () => {
    switch (size) {
      case 'small':
        return 'h-[32px]';
      case 'normal':
        return 'h-[38px]';
      case 'navbar':
      default:
        return 'h-[44px] md:h-[48px]';
    }
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="TradeFlow 360 - The connected way to manage trade."
        className={`${getHeightClass()} w-auto object-contain transition-all`}
        style={{
          aspectRatio: '505 / 83',
        }}
      />
    </div>
  );
};

