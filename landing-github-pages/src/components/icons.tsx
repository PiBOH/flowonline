import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconFlow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="16" width="7" height="5" rx="1.5" />
      <path d="M6.5 8v4a2 2 0 0 0 2 2h6.5" />
      <path d="M13 11l2 3-2 3" />
    </svg>
  );
}

export function IconPlay(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 4.5v15l13-7.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTerminal(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

export function IconCode(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M8 8l-4 4 4 4" />
      <path d="M16 8l4 4-4 4" />
      <path d="M13.5 5l-3 14" />
    </svg>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9s1-6.5 3.5-9z" />
    </svg>
  );
}

export function IconHeart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.3-9.3-8.5C1.2 8.6 2.6 5.5 5.6 5.1 7.5 4.8 9 5.8 12 8.5c3-2.7 4.5-3.7 6.4-3.4 3 .4 4.4 3.5 2.9 6.4C19 15.7 12 20 12 20z" />
    </svg>
  );
}

export function IconBolt(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

export function IconDevice(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path d="M2 17h14" />
      <rect x="17" y="9" width="5" height="11" rx="1.5" />
    </svg>
  );
}

export function IconRefresh(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v4h-4" />
    </svg>
  );
}

export function IconShare(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" />
    </svg>
  );
}

export function IconCursor(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 3l6 16 2.2-6.3L19.5 11z" />
    </svg>
  );
}

export function IconGithub(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.8c-2.93.64-3.55-1.41-3.55-1.41-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.41-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.34.1-2.8 0 0 .89-.28 2.9 1.08a10.1 10.1 0 0 1 5.28 0c2.01-1.36 2.9-1.08 2.9-1.08.57 1.46.21 2.53.1 2.8.68.74 1.09 1.68 1.09 2.83 0 4.04-2.47 4.93-4.82 5.19.38.33.71.97.71 1.96v2.9c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5z" />
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconChevron(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconSparkles(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M19 14l.7 1.9L21.6 17l-1.9.7L19 19.6l-.7-1.9L16.4 17l1.9-.7z" />
    </svg>
  );
}

export function IconLayers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export const ICONS: Record<string, (p: IconProps) => ReactElement> = {
  flow: IconFlow,
  play: IconPlay,
  terminal: IconTerminal,
  code: IconCode,
  globe: IconGlobe,
  heart: IconHeart,
  bolt: IconBolt,
  device: IconDevice,
  refresh: IconRefresh,
  share: IconShare,
  cursor: IconCursor,
};
