export function ProgressCircle({
  progress,
  showLabel = true,
  size = "sm",
  strokeWidth = 2,
  color = "text-black",
}: {
  progress: number
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
  strokeWidth?: number
  color?: string
}) {
  const sizeMap = {
    sm: "size-8",
    md: "size-12",
    lg: "size-16",
  }
  const radiusMap = {
    sm: 8,
    md: 12,
    lg: 16,
  }
  const radius = radiusMap[size]
  const strokeDasharray = 2 * Math.PI * (radius - strokeWidth / 2)
  return (
    <div
      className={`relative ${sizeMap[size]}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progress"
    >
      <svg className="size-full" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        <circle
          className="stroke-current text-zinc-200"
          strokeWidth={strokeWidth}
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
        />
        <circle
          className={`stroke-current ${color}`}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={`calc(${strokeDasharray} - (${strokeDasharray} * ${progress}) / 100)`}
        />
      </svg>
      {showLabel && (
        <span className="absolute inset-0 flex items-center justify-center text-sm">
          {progress}%
        </span>
      )}
    </div>
  )
}
