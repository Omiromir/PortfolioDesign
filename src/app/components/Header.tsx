import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Даурен Токмагамбетов
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Обо мне
            </a>
            <a href="#expertise" className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Экспертиза
            </a>
            <a href="#experience" className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Опыт
            </a>
            <a href="#projects" className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Проекты
            </a>
            <a href="#speaking" className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Публичная деятельность
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <nav className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Обо мне
            </a>
            <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Экспертиза
            </a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Опыт
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Проекты
            </a>
            <a href="#speaking" onClick={() => setIsMenuOpen(false)} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Публичная деятельность
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
