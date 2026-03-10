import { WA_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-domani-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Símbolo vertical — logotipo empilhado para rodapé */}
          <div className="flex flex-col items-center sm:items-start gap-0.5 select-none">
            {/* Ícone D estilizado */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-domani-orange/10 border border-domani-orange/20 mb-1">
              <span className="text-domani-orange font-extrabold text-lg leading-none">d</span>
            </div>
            <span className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase">
              domani<span className="text-domani-orange">.</span>AI
            </span>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm text-center">
            © {new Date().getFullYear()} Domani.AI · IA, Automação e Estratégia para grandes empresas
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-white/30 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-150">Privacidade</a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-domani-orange transition-colors duration-150"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
