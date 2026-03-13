export function FooterOrcamento() {
  return (
    <footer className="relative py-8 bg-background border-t border-surface-light/30 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-[11px] md:text-xs text-center md:text-left">
          © 2026 Sistemaxi. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted text-xs hover:text-bronze transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="text-muted text-xs hover:text-bronze transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
