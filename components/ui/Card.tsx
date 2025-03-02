import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  href,
  onClick,
}) => {
  // Base classes
  const baseClasses = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300';
  
  // Combine classes
  const cardClasses = `${baseClasses} ${className}`;
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {children}
      </Link>
    );
  }
  
  // Render as clickable div if onClick is provided
  if (onClick) {
    return (
      <div className={`${cardClasses} cursor-pointer`} onClick={onClick}>
        {children}
      </div>
    );
  }
  
  // Otherwise render as regular div
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
