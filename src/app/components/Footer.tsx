import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <footer className="border-t border-border py-12 md:py-16" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <div className="md:col-span-7">
            <div className="text-lg font-semibold mb-3">
              Даурен Токмагамбетов
            </div>
            <p className="text-[14px] text-foreground/60 leading-relaxed max-w-[500px]">
              BIM/AEC эксперт. Технологический консалтинг и стратегическое развитие в области цифровизации строительства.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="text-[14px] font-semibold mb-4">Навигация</div>
            <nav className="flex flex-col gap-2.5">
              <a href="#about" className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors">
                Обо мне
              </a>
              <a href="#expertise" className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors">
                Экспертиза
              </a>
              <a href="#projects" className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors">
                Проекты
              </a>
              <a href="#speaking" className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors">
                Публичная деятельность
              </a>
            </nav>
          </div>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <p className="text-[13px] text-foreground/50 text-center md:text-left">
            © {currentYear} Даурен Токмагамбетов. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
