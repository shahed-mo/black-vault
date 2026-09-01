import { useState } from "react";
import Nav from "./Nav";

interface HeaderProps {
  onNewCase: () => void;
}
function Header({ onNewCase }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gold-dim
      bg-background/90 text-primary backdrop-blur-md shadow-2xl"
    >
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between
        px-4 py-4 md:px-8"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <span
            className="font-headline-lg text-headline-lg tracking-tighter
            text-primary uppercase font-bold"
          >
            BLACK VAULT
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Nav />
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <button
            className="font-label-caps text-label-caps uppercase
            text-on-surface-variant transition-colors duration-300
            hover:text-primary"
          >
            LOGOUT
          </button>

          <button onClick={onNewCase}
            className="border border-primary-container
            bg-primary-container px-6 py-2
            font-label-caps text-label-caps uppercase
            text-on-primary-container shadow-lg
            shadow-primary-container/20
            transition-all duration-300
            hover:opacity-80 active:scale-[0.99]"
          >
            NEW CASE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary md:hidden"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gold-dim transition-all
        duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          <Nav mobile/>

          <button
            className="w-fit font-label-caps text-label-caps
            uppercase text-on-surface-variant transition-colors
            duration-300 hover:text-primary"
          >
            LOGOUT
          </button>

          <button onClick={onNewCase}
            className="w-full border border-primary-container
            bg-primary-container px-6 py-3
            font-label-caps text-label-caps uppercase
            text-on-primary-container transition-opacity
            duration-300 hover:opacity-80"
          >
            NEW CASE
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
