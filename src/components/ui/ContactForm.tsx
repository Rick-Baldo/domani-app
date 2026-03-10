'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', phone: '' })

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 11)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    return value
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'phone' ? formatPhone(value) : value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')

    await new Promise((res) => setTimeout(res, 1200))

    const message = encodeURIComponent(
      `Olá! Sou ${form.name} e vim pelo site. Quero levar a Domani.AI para minha empresa. Meu telefone é ${form.phone}.`
    )
    window.open(`https://wa.me/552131904210?text=${message}`, '_blank')
    setFormState('success')
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold mb-2">Mensagem enviada!</h3>
        <p className="text-white/50 text-sm">
          Abrimos o WhatsApp para você continuar a conversa. Retornaremos em breve!
        </p>
        <button
          onClick={() => {
            setFormState('idle')
            setForm({ name: '', phone: '' })
          }}
          className="mt-6 text-domani-orange text-sm hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Como podemos te chamar?"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-domani-orange focus:ring-2 focus:ring-domani-orange/40 focus:bg-white/[0.12] transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1.5">
          Telefone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="(21) 99999-9999"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-domani-orange focus:ring-2 focus:ring-domani-orange/40 focus:bg-white/[0.12] transition-all duration-300"
        />
      </div>

      {/* Botão CTA — hover brightness + orange glow */}
      <button
        type="submit"
        disabled={formState === 'loading' || !form.name || !form.phone}
        className="
          w-full text-white font-bold py-3.5 rounded-xl
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2
          transition-all duration-300
        "
        style={{
          background: '#E56D23',
          boxShadow: '0 0 0px rgba(229,109,35,0)',
        }}
        onMouseEnter={(e) => {
          const btn = e.currentTarget
          btn.style.filter = 'brightness(1.15)'
          btn.style.boxShadow = '0 0 28px rgba(229,109,35,0.55), 0 4px 16px rgba(229,109,35,0.30)'
        }}
        onMouseLeave={(e) => {
          const btn = e.currentTarget
          btn.style.filter = 'brightness(1)'
          btn.style.boxShadow = '0 0 0px rgba(229,109,35,0)'
        }}
      >
        {formState === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>Quero transformar minha operação →</>
        )}
      </button>

      <p className="text-center text-white/30 text-xs">
        Seus dados são tratados com total privacidade. Sem spam.
      </p>
    </form>
  )
}
