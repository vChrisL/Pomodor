type IconProps = {
  svgClass: string
}

export function CheckmarkIcon({svgClass}: IconProps) {
  return (
    <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="inherit"
            d="M9.765 3.205a.75.75 0 0 1 .03 1.06l-4.25 4.5a.75.75 0 0 1-1.075.015L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.705 1.704l3.72-3.939a.75.75 0 0 1 1.06-.03"/>
    </svg>
  )
}

export function PlusIcon({svgClass}: IconProps) {
  return (
    <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="inherit" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"/>
    </svg>
  )
}

export function SunIcon({svgClass}: IconProps) {
  return (
    <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none">
        <g stroke="inherit" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSunDuotone0)">
          <path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/>
          <path stroke-linecap="round"
                d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"/>
        </g>
        <defs>
          <clipPath id="siSunDuotone0">
            <path fill="#fff" d="M0 0h24v24H0z"/>
          </clipPath>
        </defs>
      </g>
    </svg>
  )
}

export function MoonIcon({svgClass}: IconProps) {
  return (
    <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="inherit"
            d="m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12m18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z"/>
    </svg>
  )
}

export function TrophyIcon({svgClass}: IconProps) {
  return (
    <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="inherit"
            d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m5 3.2q1.25 0 2.125-.875T15 11V5H9v6q0 1.25.875 2.125T12 14m5-3.2q.9-.325 1.45-1.088T19 8V7h-2zm-5-1.3"/>
    </svg>
  )
}

export function MenuIcon({svgClass}: IconProps) {
  return (
    <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="inherit">
        <path
          d="M8 6.983a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 3.017a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"/>
        <path fill-rule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
              clip-rule="evenodd"/>
      </g>
    </svg>
  )
}