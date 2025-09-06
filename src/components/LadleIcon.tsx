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
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ladle bowl - more rounded and elegant */}
      <path d="M15 65 C15 75 22 85 35 85 C48 85 55 75 55 65 C55 55 48 45 35 45 C22 45 15 55 15 65 Z" />
      {/* Inner bowl detail */}
      <path d="M20 62 C20 70 26 77 35 77 C44 77 50 70 50 62" />
      {/* Ladle handle - elegant curved S-shape matching the uploaded design */}
      <path d="M55 55 C60 52 65 48 68 42 C72 35 75 28 77 20 C78 15 78 12 76 10 C74 8 71 8 68 10 C65 12 63 16 62 20 C61 24 61 27 62 30" />
    </svg>
  );
};