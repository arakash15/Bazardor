export default function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Bazardor icon">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1fa75b" />
          <stop offset="100%" stopColor="#0c5f3d" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="28" fill="#f4fbf5" />
      <path d="M24 81c0-20 16-35 35-35 13 0 25 7 31 18l-17 7c-3-6-9-10-16-10-11 0-20 9-20 20 0 11 9 20 20 20 7 0 13-4 16-10l17 7c-6 11-18 18-31 18-19 0-35-15-35-35Zm65-28h14v21H89Zm-12 13h35v11H77Z" fill="url(#g)"/>
      <circle cx="94" cy="40" r="9" fill="#0d2d20" opacity="0.9"/>
    </svg>
  );
}
