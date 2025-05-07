
import { useState, useEffect } from 'react';

export type ToastType = 'default' | 'destructive' | 'success';

interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: ToastType;
}

interface ToastState extends ToastProps {
  id: string;
  open: boolean;
}

interface ToastContextType {
  toasts: ToastState[];
  toast: (props: ToastProps) => void;
  dismiss: (id: string) => void;
}

// Skapa en enkel hook för toast-meddelanden
export function useToast(): ToastContextType {
  const [toasts, setToasts] = useState<ToastState[]>([]);
  
  const toast = ({ id, ...props }: ToastProps) => {
    const toastId = id || String(Math.random());
    
    setToasts((prevToasts) => [
      ...prevToasts,
      { id: toastId, ...props, open: true },
    ]);

    // Automatiskt ta bort toast efter 5 sekunder
    setTimeout(() => {
      dismiss(toastId);
    }, 5000);

    return toastId;
  };
  
  const dismiss = (id: string) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== id)
    );
  };
  
  return { toasts, toast, dismiss };
}

// Skapa en separat funktion för att förenkla användning utan hook
export const toast = (props: ToastProps) => {
  // Skapa en dummy-toast-funktion för enkel användning utan kontext
  console.log("Toast:", props);
  // I verkliga implementationer skulle denna anropa någon form av global toast-handler
};
