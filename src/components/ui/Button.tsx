"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200";
  
  const variants = {
    primary: "bg-accent-gold text-stone-900 hover:bg-accent-bronze hover:text-white",
    outline: "border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-stone-900",
    ghost: "text-stone-600 hover:text-stone-900 hover:bg-stone-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
