import { useState } from 'react'

const TELEFONE_PATTERN = '^\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}$'

function formatTelefone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function LeadForm({ onSubmit, submitLabel = 'Quero participar do Evento Esquadria Milionária', idPrefix = '' }) {
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  function handleTelefoneChange(e) {
    setTelefone(formatTelefone(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit?.({ email, telefone })
  }

  const n = (id) => idPrefix ? `${idPrefix}-${id}` : id

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          id={n('email')}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite seu melhor e-mail:"
          className="w-full px-4 py-3 rounded-lg bg-background border border-surface-light text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>
      <div className="flex rounded-lg bg-background border border-surface-light overflow-hidden focus-within:border-gold/50 transition-colors">
        <div className="flex items-center gap-1.5 pl-4 pr-2 text-muted shrink-0">
          <span className="text-lg" aria-hidden>🇧🇷</span>
          <span className="text-sm font-medium">+55</span>
          <span className="text-muted/80" aria-hidden>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <input
          id={n('telefone')}
          type="tel"
          value={telefone}
          onChange={handleTelefoneChange}
          required
          pattern={TELEFONE_PATTERN}
          title="Use o formato (00) 00000-0000 ou (00) 0000-0000"
          placeholder="WhatsApp com DDD - Ex: (11) 98765-1234"
          className="flex-1 min-w-0 px-3 py-3 bg-transparent text-white placeholder:text-muted focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-background bg-gold hover:bg-gold-light transition-all duration-200 rounded-full shadow-lg shadow-black/20 hover:shadow-gold/30 uppercase tracking-wider"
      >
        {submitLabel}
      </button>
    </form>
  )
}
