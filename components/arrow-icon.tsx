type Direction = "up-right" | "up-left" | "down-right" | "up" | "left" | "right" | "restart";

export function ArrowIcon({direction="up-right",className=""}:{direction?:Direction;className?:string}) {
  const paths:Record<Direction,React.ReactNode>={
    "up-right":<><path d="M5 19 19 5"/><path d="M8 5h11v11"/></>,
    "up-left":<><path d="M19 19 5 5"/><path d="M5 16V5h11"/></>,
    "down-right":<><path d="M5 5 19 19"/><path d="M19 8v11H8"/></>,
    up:<><path d="M12 20V4"/><path d="m5 11 7-7 7 7"/></>,
    left:<><path d="M20 12H4"/><path d="m11 5-7 7 7 7"/></>,
    right:<><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></>,
    restart:<><path d="M4 11a8 8 0 1 0 3-6"/><path d="M4 4v7h7"/></>,
  };
  return <svg className={`arrow-icon ${className}`} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[direction]}</svg>;
}
