import { AnimatedCard } from './AnimatedCard'
import { LeadForm } from './LeadForm'

export function OfertaSection({ onSubmit }) {
  return (
    <section id="oferta" className="relative py-20 md:py-28 bg-background overflow-hidden px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Garanta sua vaga no Evento{' '}
          <span className="underline-gold"><span className="gradient-text-gold">Esquadria Milionária</span></span>
        </h2>
        <p className="text-muted text-base md:text-lg text-center mb-2 font-medium">
          Preencha seus dados abaixo e receba o acesso.
        </p>
        <p className="text-muted text-sm text-center mb-8 font-medium">
          As vagas são limitadas.
        </p>

        <AnimatedCard className="p-6 md:p-8" innerBg="bg-surface">
          <LeadForm onSubmit={onSubmit} />
          <p className="text-muted text-xs sm:text-sm text-center mt-4 font-medium">
            Quarta-feira, dia 11 de março às 20h
          </p>
        </AnimatedCard>
      </div>
    </section>
  )
}
