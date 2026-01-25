import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

/**
 * Reusable SVG icon component
 * Uses Lucide/Feather style icons
 */
export function Icon({ name, size = 24, ...props }: IconProps): React.JSX.Element {
  // Base SVG props
  const baseProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    width: size,
    height: size,
    ...props,
  };

  // Icon paths mapped by name
  const icons: Record<string, React.JSX.Element> = {
    check: (
      <svg {...baseProps}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    arrow: (
      <svg {...baseProps}>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    // Add more icons as needed
  };

  return icons[name] || <svg {...baseProps} />;
}
