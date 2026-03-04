'use client'
import { useState } from 'react'
import Link from 'next/link'

type FormState = { name: string; email: string; message: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

const faqs = [
  {
    q: 'What types of businesses do you supply equipment to?',
    a: 'We serve restaurants, grocery stores, butcher shops, bakeries, cafes, convenience stores, pizza stores, hotels, banquet halls, and any commercial foodservice operation across Ontario.',
  },
  {
    q: 'Do you offer a free consultation before purchase?',
    a: 'Absolutely. We offer free consultations to help you identify the right equipment for your space, volume, and budget. Just fill out the form or call us and we will set up a time.',
  },
  {
    q: 'Can you help with a full kitchen fitout from scratch?',
    a: 'Yes. We work with new restaurant owners and established businesses on full kitchen design and equipment packages. We can source everything from cooking equipment to smallwares and furniture.',
  },
  {
    q: 'Do you carry specific brands? Can I request a particular brand?',
    a: 'We carry a wide range of leading commercial foodservice brands. If you have a specific brand or model in mind, contact us and we will source it for you.',
  },
  {
    q: 'What is the delivery timeframe for equipment?',
    a: 'Delivery times vary by product and availability. In-stock items typically ship within 3-7 business days. Special orders or large equipment packages may take 2-4 weeks. We will give you an accurate timeline when you place your order.',
  },
  {
    q: 'Do you offer warranties on the equipment you sell?',
    a: 'All equipment comes with the manufacturer warranty. We can also assist with warranty claims and connect you with authorized service technicians when needed.',
  },
  {
    q: 'Can you help a business that is just starting out?',
    a: 'Absolutely — we love working with startups. We will help you prioritize your equipment budget and build a practical package that fits your opening needs and plan for growth.',
  },
]

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+1 (416) 435-9147', href: 'tel:+14164359147' },
  { icon: '✉️', label: 'Email', value: 'info@nationalfoodconsulting.com', href: 'mailto:info@nationalfoodconsulting.com' },
  { icon: '⏰', label: 'Business Hours', value: 'Mon–Sat: 9AM–6PM', href: null },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`frost-border rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-sky-500/40' : ''}`}>
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium text-sm leading-snug group-hover:text-sky-300 transition-colors">{q}</span>
        <span className={`text-sky-400 text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40' : 'max-h-0'}`}>
        <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-sky-900/30 pt-4">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Please write at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name as keyof FormState]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  const inputCls = (f: keyof FormState) =>
    `w-full bg-[#0a1520] border ${errors[f] ? 'border-red-500/60' : 'border-sky-900/50 focus:border-sky-500/70'} rounded-xl px-4 py-4 text-white placeholder-slate-600 text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-sky-500/30`

  return (
    <div className="min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
            <h1 className="font-display text-7xl md:text-8xl text-white tracking-wider leading-none mb-6">
              LET'S BUILD<br /><span className="temp-display">YOUR KITCHEN.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us about your foodservice operation and what equipment you need. Our team will get back to you within one business day with a tailored recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-12 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="frost-border rounded-2xl p-8">
                <h2 className="font-display text-3xl text-white tracking-wider mb-6">GET IN TOUCH</h2>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-900/40 border border-sky-700/40 flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-sky-400 text-xs tracking-widest uppercase mb-1">{item.label}</div>
                        {item.href
                          ? <a href={item.href} className="text-white text-sm hover:text-sky-300 transition-colors break-all">{item.value}</a>
                          : <p className="text-white text-sm">{item.value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="frost-border rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-3xl text-white tracking-wider mb-2">SEND A MESSAGE</h2>
                <p className="text-slate-400 text-sm mb-8">We respond within 1 business day.</p>

                {status === 'success' ? (
                  <div className="text-center py-16">
                    <div className="text-7xl mb-6">🍽</div>
                    <h3 className="font-display text-4xl text-sky-400 tracking-wider mb-4">MESSAGE SENT!</h3>
                    <p className="text-slate-300 text-lg mb-2">Thanks for reaching out to National Food Consulting!</p>
                    <p className="text-slate-400 text-sm">We will review your request and be in touch within one business day.</p>
                    <button onClick={() => setStatus('idle')} className="mt-8 px-6 py-3 rounded-xl border border-sky-500/40 text-sky-300 text-sm hover:bg-sky-900/30 transition-all duration-300">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="block text-xs text-sky-400 tracking-widest uppercase mb-2">Name <span className="text-red-400">*</span></label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputCls('name')} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-sky-400 tracking-widest uppercase mb-2">Email <span className="text-red-400">*</span></label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls('email')} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-sky-400 tracking-widest uppercase mb-2">Message <span className="text-red-400">*</span></label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={7} placeholder="Tell us about your business type, what equipment you need, your timeline, and any other details..." className={`${inputCls('message')} resize-none`} />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      <p className="text-slate-600 text-xs mt-1">{form.message.length} characters</p>
                    </div>
                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-red-900/20 border border-red-800/40 text-red-400 text-sm">
                        Something went wrong. Please email us directly at info@nationalfoodconsulting.com
                      </div>
                    )}
                    <button onClick={handleSubmit} disabled={status === 'loading'} className="btn-primary w-full px-8 py-4 rounded-xl text-white font-semibold tracking-wider text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      <span className="flex items-center justify-center gap-3">
                        {status === 'loading' ? (
                          <><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                        ) : <>Book Free Consultation 🍽</>}
                      </span>
                    </button>
                    <p className="text-center text-slate-500 text-xs">
                      By submitting, you agree to our <a href="#" className="text-sky-500 hover:text-sky-400 transition-colors">Privacy Policy</a>. We never share your information.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLAPSIBLE FAQ */}
      <section className="py-20 px-6 border-t border-sky-900/30 bg-[#060f18]/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">COMMON QUESTIONS</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-400 text-sm mb-6">Still have questions? We are happy to help.</p>
            <a href="tel:+14164359147" className="btn-primary px-8 py-4 rounded-xl text-white font-semibold tracking-wider inline-block">
              <span>📞 Call +1 (416) 435-9147</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
