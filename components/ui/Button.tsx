import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-md hover:shadow-lg',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };
  
  // Combine classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
