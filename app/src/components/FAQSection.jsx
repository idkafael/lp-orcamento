import { useState } from 'react'

const faqs = [
  {
    q: 'O que é o Esquadria Milionária?',
    a: 'O Esquadria Milionária é uma mentoria completa para donos de esquadrias, serralheiros e vidraceiros que desejam escalar seus negócios e multiplicar o faturamento.',
  },
  {
    q: 'Para quem é essa mentoria?',
    a: 'Para donos de esquadrias, serralheiros e vidraceiros que querem sair do operacional, empresários do setor estagnados que precisam dar o próximo passo, e quem deseja multiplicar o faturamento.',
  },
  {
    q: 'Sou serralheiro ou vidraceiro. A mentoria serve para o meu negócio?',
    a: 'Sim. A mentoria é voltada para o mercado de esquadrias, alumínio e vidros — incluindo serralheiros e vidraceiros que trabalham com portas, janelas, fachadas e estruturas metálicas. Os métodos de gestão, vendas e operação se aplicam ao seu dia a dia.',
  },
  {
    q: 'Quanto tempo dura o acesso?',
    a: 'O acesso à mentoria é completo e você pode assistir no seu ritmo. São 2 dias de imersão + todo o material de apoio.',
  },
  {
    q: 'Eu já tenho uma empresa, mas estou estagnado. Essa mentoria serve para mim?',
    a: 'Sim! A mentoria foi desenvolvida especialmente para ajudar empresários do setor — donos de esquadrias, serralheiros e vidraceiros — que estão estagnados a quebrar barreiras e dar o próximo passo no crescimento.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim, oferecemos garantia de satisfação. Entre em contato para mais detalhes.',
  },
]

function FAQItem({ pergunta, resposta, isOpen, onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left p-5 md:p-6 rounded-xl bg-surface border border-surface-light hover:border-gold/30 transition-colors duration-300"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-sm font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${isOpen ? 'rotate-45' : ''}`}
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </span>
            <span className="text-white font-semibold text-sm md:text-base">{pergunta}</span>
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 p-5 md:p-6 pt-0 text-muted text-sm md:text-base leading-relaxed">
          {resposta}
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
          Dúvidas <span className="italic gradient-text-gold">frequentes:</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              pergunta={faq.q}
              resposta={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
