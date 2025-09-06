import { SVGProps } from 'react';

interface LadleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const LadleIcon = ({ size = 24, className, ...props }: LadleIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ladle bowl */}
      <path d="M25 75 C25 82 32 88 40 88 C48 88 55 82 55 75 L55 65 C55 58 48 52 40 52 C32 52 25 58 25 65 Z" />
      {/* Ladle handle */}
      <path d="M55 60 Q65 55 75 45 Q80 40 85 30 Q88 25 87 20 Q86 15 82 12 Q78 10 75 12 Q70 15 68 20" />
    </svg>
  );
};