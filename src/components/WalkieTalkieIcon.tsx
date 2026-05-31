export function WalkieTalkieIcon({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="6" />
      <rect x="7" y="6" width="10" height="15" rx="2" />
      <line x1="9.5" y1="10" x2="14.5" y2="10" />
      <line x1="9.5" y1="12" x2="14.5" y2="12" />
      <line x1="9.5" y1="14" x2="14.5" y2="14" />
      <line x1="7" y1="9" x2="5" y2="9" />
      <rect x="9" y="7" width="6" height="2" rx="0.5" fill={color} stroke="none" opacity="0.3" />
    </svg>
  )
}
