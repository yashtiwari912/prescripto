export function BedIcon({ occupied, adjustable }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-full h-full p-1 ${occupied ? "text-gray-400" : "text-gray-600"}`}
    >
      <path d="M2 4v16M22 4v16M2 12h20M6 8v8M18 8v8" />
      {adjustable && <path d="M6 12c0-2 2-4 6-4s6 2 6 4" />}
    </svg>
  )
}

