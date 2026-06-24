import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/* =========================================================
   Shared UI primitives — eliminano le ripetizioni tra le sezioni
   ========================================================= */

/* ---------- Logo (navbar + footer) ---------- */
function LogoMark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-900/40">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
        <rect
          x="3"
          y="3"
          width="7"
          height="5"
          rx="1.6"
          fill="currentColor"
          opacity="0.9"
        />
        <rect
          x="14"
          y="16"
          width="7"
          height="5"
          rx="1.6"
          fill="currentColor"
          opacity="0.55"
        />
        <path
          d="M6.5 8v3.5a2 2 0 0 0 2 2h6.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 12l2.4 1.6L13 15.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[17px] font-bold tracking-tight text-white">
        Flow<span className="text-gradient">Online</span>
      </span>
    </a>
  );
}

export { LogoMark };

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  eyebrowClass = "text-violet-300",
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  eyebrowClass?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em]",
            eyebrowClass
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-zinc-400",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- Window chrome (header con pallini) ---------- */
export function WindowChrome({
  title,
  dots = true,
  children,
  className,
}: {
  title: ReactNode;
  dots?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3",
        className
      )}
    >
      {dots && (
        <>
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </>
      )}
      <span
        className={cn(
          "font-mono text-xs text-zinc-400",
          dots && "ml-2"
        )}
      >
        {title}
      </span>
      {children != null && (
        <div className="ml-auto flex items-center gap-2">{children}</div>
      )}
    </div>
  );
}

/* ---------- Buttons ---------- */
type AnchorBtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function PrimaryButton({
  href,
  children,
  className,
  external = true,
}: AnchorBtnProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition-transform hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
  className,
  external = true,
}: AnchorBtnProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/10",
        className
      )}
    >
      {children}
    </a>
  );
}
