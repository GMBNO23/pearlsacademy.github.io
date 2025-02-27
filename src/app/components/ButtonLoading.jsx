// components/ButtonLoading.jsx
"use client";

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const ButtonLoading = ({ 
  children, 
  className, 
  type = "button", 
  disabled, 
  isLoading = false, 
  onClick, 
  ...props 
}) => {
  return (
    <Button 
      type={type}
      className={className}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default ButtonLoading;