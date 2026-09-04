'use client'

import Image from 'next/image'
import { ButtonHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react'

/**
 * MODULE 4: Project Rules (Teaching Copilot Your Style)
 *
 * This page helps you define, test, and refine your Copilot rules.
 * Copilot reads `.github/copilot-instructions.md` and follows your preferred coding patterns automatically.
 *
 * This module is RULES-FOCUSED and uses AGENT MODE tasks (bigger, goal-driven prompts).
 * No “suggestions” training here — you’ll direct Copilot to scaffold real components/features that must follow your rules.
 */

export default function Module4Practice() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 4: Project Rules</h1>
          <p className="text-gray-600">Teach Copilot to follow your coding voice and style (Agent Mode)</p>
        </header>

        {/* LESSON 4.1 — Create Rules File */}
        <section className="bg-white p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.1 — Setting Up Your Rules File</h2>
          <p className="text-gray-700 mb-4">
            Your project rules live in <code>.github/copilot-instructions.md</code>. Once created, Copilot automatically
            uses these instructions whenever you write or edit code in this repo.
          </p>

          <div className="bg-gray-50 p-4 rounded border text-sm text-gray-800 mb-4">
            <p className="font-semibold mb-2">Recommended rules:</p>
            <pre className="bg-white p-4 rounded border text-sm text-gray-800 overflow-x-auto">
{`# Copilot Instructions

- Use React functional components with arrow functions.
- Write TypeScript types or interfaces for component props and state.
- Style with Tailwind CSS; avoid inline styles.
- Keep components small, clean, and modular; extract helpers if a function grows large.
- Add concise comments for non-obvious logic.
- Prefer accessibility-first HTML (semantic elements; label interactive controls).
`}
            </pre>
          </div>

          <p className="text-gray-700">
            Save your rules file, then move on to the next section to validate that Copilot follows them in Agent Mode.
          </p>
        </section>

        {/* LESSON 4.2 — Test Rules with Agent Mode */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-blue-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.2 — Testing Your Rules (Agent Mode)</h2>
          <p className="text-gray-700 mb-4">
            Use the practice area below to **direct Copilot (Agent Mode)** to scaffold real features. Each task should
            naturally follow your rules: arrow functions, TypeScript types, Tailwind classes, and minimal, purposeful comments.
          </p>

          <div className="border-2 border-blue-400 rounded p-4 bg-blue-50">
            <h3 className="font-semibold mb-2 text-gray-800">Practice Area — Agent Tasks</h3>
            <p className="text-sm text-gray-600 mb-4">Add a comment below and run the task with Copilot (Agent Mode):</p>

            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              <li>
                <code>// Scaffold a LoginForm with email, password, and submit button. Client-side validation, Tailwind styling, accessible labels.</code>
              </li>
              <li>
                <code>// Build a ProfileCard with avatar image, name, bio, and a “Contact” button. Keep layout responsive and concise.</code>
              </li>
              <li>
                <code>// Create a PrimaryButton component (props: children, onClick, type?). Apply our standard Tailwind button style.</code>
              </li>
              <li>
                <code>// Implement a simple SearchBar with input, clear button, and debounced onChange callback (300ms).</code>
              </li>
            </ul>

            <p className="text-sm text-gray-600 mb-2">Expected (based on your rules):</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Arrow-function components</li>
              <li>TypeScript props/interfaces</li>
              <li>Tailwind classes (no inline styles)</li>
              <li>Small, focused structure + brief comments for non-obvious logic</li>
              <li>Accessible markup for inputs and controls</li>
            </ul>

            {/* Practice area for Copilot (Agent Mode) generation */}
            {/* // Scaffold a LoginForm with email, password, and submit button. Client-side validation, Tailwind styling, accessible labels. */}
            <LoginForm />
            
            {/* // Build a ProfileCard with avatar image, name, bio, and a “Contact” button. Keep layout responsive and concise. */}
            <ProfileCard />

            {/* // Create a PrimaryButton component (props: children, onClick, type?). Apply our standard Tailwind button style. */}
            <PrimaryButton className="mt-6">Click Me</PrimaryButton>

            {/* // Implement a simple SearchBar with input, clear button, and debounced onChange callback (300ms). */}
            <SearchBar />
            
          </div>
        </section>

        {/* LESSON 4.3 — Consistency Across Multiple Components */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-green-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.3 — Consistency Across Components</h2>
          <p className="text-gray-700 mb-4">
            Generate multiple components and verify that Copilot keeps your rules consistent across different feature shapes.
          </p>

          <div className="border-2 border-green-400 rounded p-4 bg-green-50">
            <p className="text-sm text-gray-700 mb-4">Agent tasks to try one-by-one:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              <li>
                <code>// Create a NotificationBadge (props: count, maxCount?) that displays “99+” when over max.</code>
              </li>
              <li>
                <code>// Create a ProgressBar (props: value 0–100, label?). Include accessible markup for screen readers.</code>
              </li>
              <li>
                <code>// Create a ModalDialog (props: open, onClose, title). Include a close button and focus trap note in comments.</code>
              </li>
              <li>
                <code>// Create a DataTable shell (columns prop, rows prop). Responsive table layout with Tailwind utilities.</code>
              </li>
            </ul>

            <p className="text-sm text-gray-700">
              After each generation, check for rule adherence (arrow functions, typed props, Tailwind rhythm, minimal comments). If anything drifts,
              adjust <code>.github/copilot-instructions.md</code> and retry the task.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="font-medium text-gray-800">Unread notifications</span>
              <NotificationBadge count={124} />
            </div>
            <ProgressBar value={72} label="Course progress" />
            <PrimaryButton className="mt-6" onClick={() => setIsModalOpen(true)}>Open dialog</PrimaryButton>
            <ModalDialog open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Project update">
              <p className="text-gray-600">Your project changes are ready to review.</p>
            </ModalDialog>
            <DataTable
              columns={[
                { key: 'project', label: 'Project' },
                { key: 'owner', label: 'Owner' },
                { key: 'status', label: 'Status' },
              ]}
              rows={[
                { id: 'cedar-salt', project: 'Cedar & Salt', owner: 'Maya Chen', status: 'In review' },
                { id: 'signal-desk', project: 'Signal Desk', owner: 'Jordan Lee', status: 'In progress' },
              ]}
            />
          </div>
        </section>

        {/* LESSON 4.4 — Refining and Expanding Rules */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-purple-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.4 — Refining and Expanding Rules</h2>
          <p className="text-gray-700 mb-4">
            As your project grows, evolve your rules with specific, reusable patterns so Agent Mode drafts match your voice without reminders.
          </p>

          <p className="text-gray-700 mb-4">Examples you can add to your rules file:</p>
          <pre className="bg-gray-50 p-4 rounded border text-sm text-gray-800 overflow-x-auto mb-4">
{`- Primary button style: 'px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60'.
- Form inputs: use label + id + aria-describedby; include error text with role="alert".
- Components over ~25 lines: extract helpers; keep render paths simple and readable.
- Prefer composition over prop drilling; create small utilities/hooks for repeated logic.
`}
          </pre>

          <p className="text-gray-700">
            Keep the file updated as your standards change. Copilot will follow the latest version across all Agent Mode tasks.
          </p>
        </section>

        {/* SUMMARY */}
        <section className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Define once, follow everywhere.</strong> Copilot reads your rules automatically.</li>
            <li><strong>Direct with Agent Mode.</strong> Use bigger tasks to see your rules applied in realistic code.</li>
            <li><strong>Refine as you go.</strong> When you see drift, clarify the rule and retry.</li>
            <li><strong>Keep it modular.</strong> Small components + typed props + Tailwind rhythm = consistent output.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const isPasswordValid = password.length >= 8
  const isFormValid = isEmailValid && isPasswordValid

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isFormValid) setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4 rounded-lg border border-blue-200 bg-white p-5 shadow-sm" noValidate>
      <h4 className="text-lg font-semibold text-gray-900">Sign in</h4>
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="login-email" type="email" value={email} onChange={event => { setEmail(event.target.value); setSubmitted(false) }} aria-invalid={email.length > 0 && !isEmailValid} aria-describedby="login-email-help" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
        <p id="login-email-help" className="mt-1 text-xs text-gray-500">Use a valid email address.</p>
      </div>
      <div>
        <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
        <input id="login-password" type="password" value={password} onChange={event => { setPassword(event.target.value); setSubmitted(false) }} aria-invalid={password.length > 0 && !isPasswordValid} aria-describedby="login-password-help" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
        <p id="login-password-help" className="mt-1 text-xs text-gray-500">Use at least 8 characters.</p>
      </div>
      <PrimaryButton type="submit" disabled={!isFormValid}>Sign in</PrimaryButton>
      {submitted && <p role="status" className="text-sm font-medium text-green-700">You are signed in.</p>}
    </form>
  )
}

const ProfileCard = () => (
  <article className="mt-6 flex max-w-md flex-col gap-5 rounded-lg border border-blue-200 bg-white p-5 shadow-sm sm:flex-row">
    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" alt="Portrait of Maya Chen" width={96} height={96} className="h-24 w-24 rounded-full object-cover" />
    <div>
      <h4 className="text-lg font-semibold text-gray-900">Maya Chen</h4>
      <p className="mt-1 text-sm leading-6 text-gray-600">Product designer creating considerate tools for people doing focused work.</p>
      <a href="mailto:maya@example.com" className="mt-3 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800">Contact Maya</a>
    </div>
  </article>
)

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const PrimaryButton = ({ children, className = '', ...props }: PrimaryButtonProps) => (
  <button {...props} className={`rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}>
    {children}
  </button>
)

type NotificationBadgeProps = {
  count: number
  maxCount?: number
}

const NotificationBadge = ({ count, maxCount = 99 }: NotificationBadgeProps) => {
  const safeCount = Math.max(0, count)
  const displayCount = safeCount > maxCount ? `${maxCount}+` : safeCount

  return (
    <span aria-label={`${safeCount} unread notifications`} className="inline-flex min-w-6 items-center justify-center rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
      {displayCount}
    </span>
  )
}

type ProgressBarProps = {
  value: number
  label?: string
}

const ProgressBar = ({ value, label = 'Progress' }: ProgressBarProps) => {
  const progress = Math.min(100, Math.max(0, value))

  return (
    <div className="mt-6 max-w-md">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-gray-800">
        <label htmlFor="course-progress">{label}</label>
        <span>{progress}%</span>
      </div>
      <progress id="course-progress" value={progress} max={100} aria-valuetext={`${progress}% complete`} className="h-3 w-full overflow-hidden rounded-full accent-green-600">
        {progress}% complete
      </progress>
    </div>
  )
}

type ModalDialogProps = {
  children: ReactNode
  onClose: () => void
  open: boolean
  title: string
}

const ModalDialog = ({ children, onClose, open, title }: ModalDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const dialog = dialogRef.current
  // Keep Tab and Shift+Tab navigation inside the active dialog.
    const focusableElements = dialog?.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    focusableElements?.[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-950/50 p-4" role="presentation">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="modal-title" className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <h3 id="modal-title" className="text-xl font-semibold text-gray-900">{title}</h3>
          <button type="button" onClick={onClose} aria-label="Close dialog" className="rounded-md px-2 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-200">X</button>
        </div>
        <div className="mt-4">{children}</div>
        <PrimaryButton className="mt-6" onClick={onClose}>Done</PrimaryButton>
      </div>
    </div>
  )
}

type DataTableColumn = {
  key: string
  label: string
}

type DataTableRow = Record<string, ReactNode> & {
  id: string
}

type DataTableProps = {
  columns: DataTableColumn[]
  rows: DataTableRow[]
}

const DataTable = ({ columns, rows }: DataTableProps) => (
  <div className="mt-6 overflow-x-auto rounded-lg border border-green-200 bg-white">
    <table className="w-full min-w-[480px] text-left text-sm">
      <caption className="sr-only">Project status</caption>
      <thead className="bg-green-50 text-xs uppercase tracking-wide text-gray-700">
        <tr>
          {columns.map(column => <th key={column.key} scope="col" className="px-4 py-3 font-semibold">{column.label}</th>)}
        </tr>
      </thead>
      <tbody className="divide-y divide-green-100">
        {rows.map(row => (
          <tr key={row.id} className="text-gray-700 hover:bg-green-50/60">
            {columns.map(column => <td key={column.key} className="whitespace-nowrap px-4 py-3">{row[column.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedQuery(query), 300)
    return () => window.clearTimeout(timeoutId)
  }, [query])

  return (
    <div className="mt-6 max-w-md">
      <label htmlFor="practice-search" className="block text-sm font-medium text-gray-700">Search</label>
      <div className="mt-1 flex gap-2">
        <input id="practice-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects" className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
        <button type="button" onClick={() => setQuery('')} disabled={!query} aria-label="Clear search" className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50">Clear</button>
      </div>
      <p role="status" className="mt-2 text-sm text-gray-600">{debouncedQuery ? `Searching for “${debouncedQuery}”` : 'Enter a term to search.'}</p>
    </div>
  )
}
