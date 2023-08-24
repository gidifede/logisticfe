// TooltipContent.tsx
import React from "react";

interface TooltipContentProps {
  city: string;
}

const TooltipContent: React.FC<TooltipContentProps> = ({ city }) => {
  return (
    <div>
      <strong>{city}</strong>
      {/* Aggiungi ulteriori dettagli qui */}
    </div>
  );
};

export default TooltipContent;
