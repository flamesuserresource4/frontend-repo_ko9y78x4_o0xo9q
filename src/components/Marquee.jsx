import { Star } from "lucide-react";

function Dot() {
  return <span className="mx-3 inline-block h-1 w-1 rounded-full bg-gray-400" />;
}

export default function Marquee() {
  return (
    <div className="bg-white border-y border-black/5 py-3 overflow-hidden">
      <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap text-gray-700">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="inline-flex items-center text-sm tracking-wide uppercase">
            <Star className="w-4 h-4 mx-2" />
            Minimal Design
            <Dot />
            Elevated Essentials
            <Dot />
            Crafted for You
            <Dot />
            Seasonless Style
            <Dot />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
