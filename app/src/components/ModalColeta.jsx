import { useEffect } from 'react'
import { LeadForm } from './LeadForm'
import { AnimatedCard } from './AnimatedCard'

export function ModalColeta({ isOpen, onClose, onSubmit }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  async function handleSubmit(data) {
    const result = await Promise.resolve(onSubmit?.(data))
    if (result?.ok) onClose?.()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg">
        <AnimatedCard className="p-6 md:p-8" innerBg="bg-surface">
          <div className="flex justify-between items-center mb-6">
            <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-white">
              Participar gratuitamente
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-muted hover:text-white hover:bg-surface-light transition-colors"
              aria-label="Fechar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-muted text-sm mb-6">
            Preencha seus dados abaixo e receba o acesso.
          </p>
          <LeadForm
            idPrefix="modal"
            onSubmit={handleSubmit}
            submitLabel="Participar gratuitamente"
          />
        </AnimatedCard>
      </div>
    </div>
  )
}
