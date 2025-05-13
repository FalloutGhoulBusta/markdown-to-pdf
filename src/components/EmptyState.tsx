import React from 'react';
import { AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-48 text-neutral-500 bg-neutral-50 rounded-md">
      <AlertCircle size={24} className="mb-2 text-neutral-400" />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;