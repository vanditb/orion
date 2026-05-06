import { cn } from "@/lib/utils";

type OrionLogoProps = {
  className?: string;
  showWordmark?: boolean;
  markClassName?: string;
};

export function OrionLogo({
  className,
  markClassName,
  showWordmark = true,
}: OrionLogoProps) {
  return (
    <div className={cn("flex items-center gap-1 sm:gap-1.5", className)}>
      <svg
        aria-hidden="true"
        className={cn("h-[50px] w-[47px] shrink-0 overflow-visible sm:h-[58px] sm:w-[54px]", markClassName)}
        fill="none"
        viewBox="34 14 112 128"
      >
        <defs>
          <filter
            id="orion-mark-glow"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            x="34"
            y="13"
            width="112"
            height="132"
          >
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="#5865F2"
              floodOpacity="0.34"
              stdDeviation="3.2"
            />
          </filter>
        </defs>
        <path
          d="M103 27L55 97L104 84L103 27"
          filter="url(#orion-mark-glow)"
          stroke="#6674FF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.5"
        />
        <path
          d="M104 84L126 126"
          filter="url(#orion-mark-glow)"
          stroke="#8EA2FF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.5"
        />
        <circle cx="103" cy="27" fill="#6674FF" filter="url(#orion-mark-glow)" r="7.5" />
        <circle cx="55" cy="97" fill="#5865F2" filter="url(#orion-mark-glow)" r="7.5" />
        <circle cx="104" cy="84" fill="#6674FF" filter="url(#orion-mark-glow)" r="7.5" />
        <circle cx="126" cy="126" fill="#8EA2FF" filter="url(#orion-mark-glow)" r="7.5" />
      </svg>
      {showWordmark ? (
        <span className="orion-wordmark text-[34px] text-[#F5F8FF] sm:text-[40px]">
          orion
        </span>
      ) : null}
    </div>
  );
}
