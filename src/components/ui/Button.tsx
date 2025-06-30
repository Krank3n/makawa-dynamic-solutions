
import React from 'react';
import Link from 'next/link';

// Base props shared by both button and link variants
type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

// Props for when the component is a standard HTML button
type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    asLink?: false;
    href?: never;
  };

// Props for when the component is a Next.js Link styled as a button
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    asLink: true;
    href: string;
  };

// Create a union type for all possible props
type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', children, className = '' } = props;

  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center";

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-orange-vibrant text-white hover:bg-yellow-golden focus:ring-orange-vibrant',
    secondary: 'bg-blue-steel text-white hover:bg-opacity-80 focus:ring-blue-steel',
    outline: 'border-2 border-orange-vibrant text-orange-vibrant hover:bg-orange-vibrant hover:text-white dark:border-orange-vibrant dark:text-orange-vibrant dark:hover:bg-orange-vibrant dark:hover:text-white focus:ring-orange-vibrant',
    ghost: 'bg-transparent text-charcoal-deep dark:text-white hover:bg-gray-warm/20 dark:hover:bg-gray-warm/10 focus:ring-gray-warm',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (props.asLink) {
    // Destructure props for the Link component, forwarding valid anchor attributes
    const { asLink: _asLink, variant: _variant, size: _size, className: _className, children: _children, ...linkProps } = props;
    return (
      <Link className={combinedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  // Destructure props for the button element, forwarding valid button attributes
  const { asLink: _asLink, variant: _variant, size: _size, className: _className, children: _children, ...buttonProps } = props;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
