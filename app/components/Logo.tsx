export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-gradient-1" x1="15" y1="5" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4E6EFF" />
          <stop offset="1" stopColor="#FF58D5" />
        </linearGradient>
        <linearGradient id="logo-gradient-2" x1="5" y1="35" x2="65" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF58D5" />
          <stop offset="1" stopColor="#4E6EFF" />
        </linearGradient>
      </defs>
      
      {/* Outer bounding shapes simulating the interlocking P */}
      <path 
        d="M15 40C15 20.67 30.67 5 50 5H65C76.0457 5 85 13.9543 85 25V50C85 69.33 69.33 85 50 85H35C23.9543 85 15 76.0457 15 65V40Z" 
        fill="url(#logo-gradient-1)" 
        fillOpacity="0.8"
      />
      <path 
        d="M5 35C5 18.4315 18.4315 5 35 5H65V35C65 51.5685 51.5685 65 35 65H5V35Z" 
        fill="url(#logo-gradient-2)" 
      />
      <path 
        d="M35 35C35 23.9543 43.9543 15 55 15V35C55 46.0457 46.0457 55 35 55V35Z" 
        fill="url(#logo-gradient-2)" 
      />
    </svg>
  );
}
