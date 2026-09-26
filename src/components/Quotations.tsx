import { type FormEvent, useState } from 'react'
import { quotations } from '../data/content'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Quotations() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')

    try {
      const res = await fetch('/api/quotations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: data.get('company'),
          name: data.get('name'),
          title: data.get('title'),
          phone: data.get('phone'),
          email: data.get('email'),
          request: data.get('request'),
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="quotations" className="bg-[#F5F1E9] py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <h2 className="text-2xl font-normal leading-tight text-[#101D2B] md:text-4xl">
            {quotations.heading}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#101D2B]/75">
            {quotations.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal grid gap-4 rounded-[2rem] bg-[#EFE7D6] p-8 sm:grid-cols-2 md:p-10"
        >
          <Field label="Company Name" name="company" />
          <Field label="Name" name="name" />
          <Field label="Job Title" name="title" />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Email" name="email" type="email" className="sm:col-span-2" />
          <label className="flex flex-col gap-1.5 text-sm font-medium text-[#101D2B] sm:col-span-2">
            Request
            <textarea
              name="request"
              required
              rows={4}
              className="rounded-xl border border-[#101D2B]/15 bg-[#F5F1E9] px-3.5 py-2.5 text-[15px] outline-none transition focus:border-[#C4A46A]"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-[#101D2B] px-7 py-3 text-sm font-medium text-[#F5F1E9] transition hover:bg-[#1b2f45] disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Request'}
            </button>
            {status === 'sent' && (
              <span className="ml-4 text-sm text-[#101D2B]/70">
                Thank you — we'll be in touch soon.
              </span>
            )}
            {status === 'error' && (
              <span className="ml-4 text-sm text-red-600">
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  className = '',
}: {
  label: string
  name: string
  type?: string
  className?: string
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm font-medium text-[#101D2B] ${className}`}>
      {label}
      <input
        name={name}
        type={type}
        required
        className="rounded-xl border border-[#101D2B]/15 bg-[#F5F1E9] px-3.5 py-2.5 text-[15px] outline-none transition focus:border-[#C4A46A]"
      />
    </label>
  )
}
