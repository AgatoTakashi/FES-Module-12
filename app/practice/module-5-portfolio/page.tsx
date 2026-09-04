'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

type Project = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Cedar & Salt',
    description: 'An editorial storefront that makes product discovery feel personal and unhurried.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright store interior with clothes on display',
    tags: ['Next.js', 'Commerce', 'UX'],
  },
  {
    title: 'Signal Desk',
    description: 'An operations dashboard that helps teams sort customer signals into decisive next steps.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Analytics dashboard shown on a laptop screen',
    tags: ['React', 'Analytics', 'Systems'],
  },
  {
    title: 'Field Notes',
    description: 'A calm writing environment for capturing ideas, shaping drafts, and sharing observations.',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Open notebook and pen on a desk',
    tags: ['TypeScript', 'Content', 'Design'],
  },
]

const skills = ['TypeScript', 'React', 'Next.js', 'Accessible HTML', 'Tailwind CSS', 'Product strategy']

export default function Module5Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
  const isFormValid = formData.name.trim() && isEmailValid && formData.message.trim()
  const pageTheme = isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-stone-50 text-slate-900'
  const mutedText = isDarkMode ? 'text-slate-300' : 'text-slate-600'

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value })
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isFormValid) setSubmitted(true)
  }

  return (
    <main className={`min-h-screen scroll-smooth transition-colors duration-300 ${pageTheme}`}>
      <header className={`sticky top-0 z-10 border-b backdrop-blur ${isDarkMode ? 'border-slate-800 bg-slate-950/90' : 'border-stone-200 bg-stone-50/90'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="font-serif text-xl font-bold tracking-wide">Avery Lin</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-semibold sm:flex">
            <a href="#work" className="hover:text-teal-700">Work</a>
            <a href="#about" className="hover:text-teal-700">About</a>
            <a href="#contact" className="hover:text-teal-700">Contact</a>
          </nav>
          <button type="button" onClick={() => setIsDarkMode(mode => !mode)} aria-label={isDarkMode ? 'Use light theme' : 'Use dark theme'} className={`rounded-md border px-3 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-4 ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 focus:ring-slate-700' : 'border-stone-300 hover:bg-stone-200 focus:ring-stone-300'}`}>{isDarkMode ? 'Light' : 'Dark'}</button>
        </div>
      </header>

      <section id="home" className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="portfolio-enter">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Designer and frontend developer</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-tight sm:text-6xl">Interfaces with a point of view.</h1>
          <p className={`mt-6 max-w-xl text-lg leading-8 ${mutedText}`}>I turn complicated digital work into clear, considered experiences for people who need to get things done.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="#work" className="rounded-md bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300">View selected work</a><a href="#contact" className={`rounded-md border px-5 py-3 font-semibold transition focus:outline-none focus:ring-4 focus:ring-teal-200 ${isDarkMode ? 'border-slate-600 hover:border-teal-500 hover:text-teal-300' : 'border-slate-300 hover:border-teal-700 hover:text-teal-800'}`}>Get in touch</a></div>
        </div>
        <div className="portfolio-enter overflow-hidden rounded-lg shadow-xl">
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Person working at a desk with a laptop" width={1200} height={1500} priority className="aspect-[4/5] w-full object-cover" />
        </div>
      </section>

      <section id="work" className={isDarkMode ? 'bg-slate-900' : 'bg-white'}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Selected work</p><h2 className="mt-3 font-serif text-4xl font-bold">Useful, human-centered products.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{projects.map(project => <article key={project.title} className={`group overflow-hidden rounded-lg border transition duration-200 hover:-translate-y-1 hover:shadow-xl ${isDarkMode ? 'border-slate-700 bg-slate-950' : 'border-stone-200 bg-stone-50'}`}><Image src={project.imageUrl} alt={project.imageAlt} width={1200} height={900} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105" /><div className="p-5"><h3 className="font-serif text-2xl font-bold">{project.title}</h3><p className={`mt-3 leading-6 ${mutedText}`}>{project.description}</p><ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag} className="rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-900">{tag}</li>)}</ul><a href="https://github.com" target="_blank" rel="noreferrer" className="mt-5 inline-block font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800">View project</a></div></article>)}</div></div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]"><Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" alt="Creative team collaborating around a table" width={900} height={900} className="aspect-square w-full rounded-lg object-cover" /><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">About me</p><h2 className="mt-3 font-serif text-4xl font-bold">Clarity is a craft.</h2><p className={`mt-6 leading-8 ${mutedText}`}>I am a product-minded developer who enjoys the practical details: information architecture, responsive behavior, accessible interactions, and code that is comfortable to return to six months later.</p><ul className="mt-7 flex flex-wrap gap-3" aria-label="Skills">{skills.map(skill => <li key={skill} className={`rounded-md border px-3 py-2 text-sm font-medium ${isDarkMode ? 'border-slate-700 bg-slate-900' : 'border-stone-300 bg-white'}`}>{skill}</li>)}</ul></div></section>

      <section id="contact" className={isDarkMode ? 'bg-slate-900' : 'bg-teal-50'}><div className="mx-auto max-w-2xl px-5 py-20 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Contact</p><h2 className="mt-3 font-serif text-4xl font-bold">Have a project in mind?</h2><form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5"><div><label htmlFor="name" className="block text-sm font-semibold">Name</label><input id="name" value={formData.name} onChange={event => updateField('name', event.target.value)} required className="mt-1.5 block w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-teal-700 focus:ring-4 focus:ring-teal-200" /></div><div><label htmlFor="email" className="block text-sm font-semibold">Email</label><input id="email" type="email" value={formData.email} onChange={event => updateField('email', event.target.value)} aria-invalid={formData.email.length > 0 && !isEmailValid} aria-describedby="email-help" required className="mt-1.5 block w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-teal-700 focus:ring-4 focus:ring-teal-200" /><p id="email-help" className={`mt-1 text-sm ${mutedText}`}>Use an address where I can reply.</p></div><div><label htmlFor="message" className="block text-sm font-semibold">Message</label><textarea id="message" rows={5} value={formData.message} onChange={event => updateField('message', event.target.value)} required className="mt-1.5 block w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-teal-700 focus:ring-4 focus:ring-teal-200" /></div><button type="submit" disabled={!isFormValid} className="rounded-md bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:cursor-not-allowed disabled:opacity-50">Send message</button>{submitted && <p role="status" className="font-medium text-teal-700">Thanks for reaching out. I will be in touch shortly.</p>}</form></div></section>

      <footer className="border-t border-slate-800 bg-slate-950 text-stone-100"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-8"><div><p className="font-serif text-xl font-bold">Avery Lin</p><p className="mt-1 text-sm text-slate-300">Building clear digital experiences.</p></div><div className="flex gap-5 text-sm font-semibold text-teal-300"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Avery Lin on GitHub" className="hover:text-white">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Avery Lin on LinkedIn" className="hover:text-white">LinkedIn</a><a href="mailto:avery@example.com" aria-label="Email Avery Lin" className="hover:text-white">Email</a></div></div></footer>
    </main>
  )
}