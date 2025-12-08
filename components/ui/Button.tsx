import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-neon-orange text-white hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(255,107,53,0.6)]",
    secondary: "bg-orange-100 text-gray-800 hover:bg-orange-200 border border-orange-200",
    outline: "border border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-white",
    glow: "bg-gradient-to-r from-neon-orange to-orange-500 text-white shadow-[0_0_15px_rgba(255,107,53,0.5)] hover:shadow-[0_0_30px_rgba(255,107,53,0.8)] border border-white/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};