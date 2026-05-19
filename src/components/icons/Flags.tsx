type FlagProps = { className?: string };

export function ColombiaFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <clipPath id="co-clip">
          <circle cx="32" cy="32" r="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#co-clip)">
        <rect x="2" y="2" width="60" height="30" fill="#FCD116" />
        <rect x="2" y="32" width="60" height="15" fill="#003893" />
        <rect x="2" y="47" width="60" height="15" fill="#CE1126" />
      </g>
    </svg>
  );
}

export function UsaFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <clipPath id="us-clip">
          <circle cx="32" cy="32" r="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#us-clip)">
        <rect x="2" y="2" width="60" height="60" fill="#B22234" />
        <g fill="#FFFFFF">
          <rect x="2" y="6.615" width="60" height="4.615" />
          <rect x="2" y="15.846" width="60" height="4.615" />
          <rect x="2" y="25.077" width="60" height="4.615" />
          <rect x="2" y="34.308" width="60" height="4.615" />
          <rect x="2" y="43.538" width="60" height="4.615" />
          <rect x="2" y="52.769" width="60" height="4.615" />
        </g>
        <rect x="2" y="2" width="24" height="32.31" fill="#3C3B6E" />
      </g>
    </svg>
  );
}
