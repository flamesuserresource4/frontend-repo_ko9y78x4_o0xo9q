import { ShoppingBag, Search, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <a href="#" className="font-semibold tracking-tight text-lg sm:text-xl">
            Atelier
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#collections" className="hover:text-black transition-colors">Collections</a>
            <a href="#new" className="hover:text-black transition-colors">New Arrivals</a>
            <a href="#story" className="hover:text-black transition-colors">Our Story</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm text-gray-700 hover:bg-black/5">
            <Search className="w-4 h-4" />
            <span className="hidden md:inline">Search</span>
          </button>
          <button className="p-2 rounded-full hover:bg-black/5"><User className="w-5 h-5" /></button>
          <button className="p-2 rounded-full hover:bg-black/5"><ShoppingBag className="w-5 h-5" /></button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2 text-gray-700">
            <a href="#collections" className="py-2">Collections</a>
            <a href="#new" className="py-2">New Arrivals</a>
            <a href="#story" className="py-2">Our Story</a>
          </div>
        </div>
      )}
    </header>
  );
}
