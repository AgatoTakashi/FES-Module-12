'use client'

import { useMemo, useState } from 'react'

/**
 * MODULE 2: Copilot Chat - Core Agent Features
 *
 * This file contains exercises for:
 * - Fixing broken code (Edit Mode)
 * - Adding new features (Agent Mode)
 * - Writing tests (Agent + Edit Mode)
 * - Freeform conversations (Ask Mode)
 */

export default function Module2Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 2: Core Agent Features</h1>
          <p className="text-gray-600">Fix code, add features, and write tests with Copilot</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 🔧 LESSON 2.1 - EXERCISE: FIX BROKEN CODE
           * ==========================================
           *
           * ✅ TODO: FIX THE BROKEN CODE BELOW USING /fix
           *
           * Instructions:
           * 1. Highlight the BrokenCalculator component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /fix
           * 4. Review the patch and accept it
           * 5. Follow up with: "Explain what was wrong originally"
           *
           * The code has several intentional bugs - let Copilot find and fix them!
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🔧 Lesson 2.1: Fix Broken Code</h2>
            <BrokenCalculator />
          </section>

          {/* ==========================================
           * ➕ LESSON 2.2 - EXERCISE: ADD A FEEDBACK FORM
           * ==========================================
           *
           * ✅ TODO: ADD A FEEDBACK FORM HERE
           *
           * Instructions:
           * 1. Place your cursor after this comment block
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Create a form with name, email, and message fields"
           * 4. Review the generated code
           * 5. Refine with follow-ups:
           *    - "Style it with Tailwind"
           *    - "Disable submit until all fields are filled"
           *    - "Add validation for email format"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">➕ Lesson 2.2: Add a Feedback Form</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to create a form component below:</p>

            <FeedbackForm />
          </section>

          {/* ==========================================
           * 🧪 LESSON 2.3 - EXERCISE: WRITE TESTS
           * ==========================================
           *
           * ✅ TODO: GENERATE TESTS FOR THE FUNCTION BELOW
           *
           * Instructions:
           * 1. Highlight the calculateDiscount function
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /tests
           * 4. Review the generated test suite
           * 5. Add a new parameter to the function
           * 6. Ask: "Update the tests to cover the new parameter"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧪 Lesson 2.3: Write Tests</h2>
            <TestableComponent />
          </section>

          {/* ==========================================
           * 💬 LESSON 2.4 - EXERCISE: FREEFORM CONVERSATIONS
           * ==========================================
           *
           * ✅ TODO: ASK COPILOT QUESTIONS ABOUT THE CODE BELOW
           *
           * Instructions:
           * 1. Highlight the UserDashboard component
           * 2. Open Copilot Chat (Ctrl/Cmd + Shift + I)
           * 3. Try these Ask Mode questions:
           *    - "What are potential performance issues here?"
           *    - "How would you refactor this into smaller functions?"
           *    - "What security risks might exist in this component?"
           *    - "How can I make this more accessible?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">💬 Lesson 2.4: Freeform Conversations</h2>
            <UserDashboard />
          </section>

          {/* ==========================================
           * 🎨 CHALLENGE: CREATE A PRICING CARD
           * ==========================================
           *
           * ✅ TODO: BUILD A PRICING CARD COMPONENT
           *
           * Instructions:
           * 1. Start simple: "Create a PricingCard with title, price, and description"
           * 2. Iterate and refine:
           *    - "Add a Pro plan that's highlighted"
           *    - "Make the layout responsive on mobile"
           *    - "Add a list of features for each plan"
           *    - "Add hover effects"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Challenge: Pricing Card</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to build a pricing card component:</p>
            <PricingCard />
          </section>
        </div>
      </div>
    </div>
  )
}

/* ==========================================
 * ➕ FEEDBACK FORM COMPONENT
 * ========================================== */
function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
  const isSubmitDisabled =
    !formData.name.trim() || !formData.email.trim() || !isEmailValid || !formData.message.trim()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitDisabled) return
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          aria-invalid={formData.email.length > 0 && !isEmailValid}
          required
        />
        {formData.email.length > 0 && !isEmailValid && (
          <p className="text-sm text-red-600" role="alert">
            Please enter a valid email address.
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="block w-full resize-y rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-indigo-600"
      >
        Submit Feedback
      </button>
    </form>
  )
}

/* ==========================================
 * 🎨 PRICING CARD COMPONENT
 * ========================================== */
function PricingCard() {
  const plans = [
    {
      title: 'Starter',
      price: '$9',
      description: 'For individuals building their first projects.',
      features: ['3 active projects', '5 GB storage', 'Community support'],
    },
    {
      title: 'Pro',
      price: '$29',
      description: 'For teams ready to ship more, together.',
      features: ['Unlimited projects', '100 GB storage', 'Priority support', 'Team collaboration'],
      featured: true,
    },
    {
      title: 'Business',
      price: '$79',
      description: 'For growing organizations with advanced needs.',
      features: ['Everything in Pro', '1 TB storage', 'Dedicated support', 'Advanced analytics'],
    },
  ]

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map(plan => (
        <article
          key={plan.title}
          className={`relative flex min-h-[365px] flex-col rounded-lg border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
            plan.featured
              ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600'
              : 'border-gray-200 bg-white hover:border-indigo-300'
          }`}
        >
          {plan.featured && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
              MOST POPULAR
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
          <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">{plan.description}</p>
          <p className="mt-5 text-4xl font-bold text-gray-900">
            {plan.price}<span className="text-base font-medium text-gray-500">/month</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-gray-700">
            {plan.features.map(feature => (
              <li key={feature} className="flex gap-2">
                <span className="font-bold text-green-600" aria-hidden="true">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`mt-6 w-full rounded-md px-4 py-2.5 font-semibold transition focus:outline-none focus:ring-4 ${
              plan.featured
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-200'
                : 'border border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white focus:ring-indigo-100'
            }`}
          >
            Choose {plan.title}
          </button>
        </article>
      ))}
    </div>
  )
}

/* ==========================================
 * 🔧 BROKEN CALCULATOR COMPONENT
 * This component has intentional bugs for you to fix!
 * ========================================== */
function BrokenCalculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  // Bug: This function has issues with type conversion and error handling
  const calculate = () => {
    const sum = Number(num1) + Number(num2)
    setResult(sum)
  }

  // Bug: Missing divide by zero check
  const divide = () => {
    const n1 = Number(num1)
    const n2 = Number(num2)
    if (n2 === 0) {
      return
    }
    setResult(n1 / n2)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Number 1"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Number 2"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>

      <div className="space-x-2">
        <button
          onClick={calculate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          onClick={divide}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Divide
        </button>
      </div>

      <p className="text-lg">Result: {result}</p>
    </div>
  )
}

/* ==========================================
 * 🧪 TESTABLE COMPONENT
 * Use /tests to generate tests for these functions
 * ========================================== */
function TestableComponent() {
  const [price, setPrice] = useState(100)
  const [discount, setDiscount] = useState(10)

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight the calculateDiscount function and use /tests to generate test cases
      </p>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Discount %"
          value={discount}
          onChange={e => setDiscount(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-lg">Final Price: ${calculateDiscount(price, discount)}</p>
      </div>
    </div>
  )
}

// Function to test - highlight this and use /tests
// Test cases:
// - calculateDiscount(100, 10) returns 97.43
// - calculateDiscount(100, 10, 0) returns 90
// - calculateDiscount(100, 0, 0) returns 100
// - calculateDiscount(100, 100, 0) returns 0
// - calculateDiscount(0, 10, 0) returns 0
// - calculateDiscount(100, -1, 0) returns 100
// - calculateDiscount(100, 101, 0) returns 100
// - calculateDiscount(-100, 10, 0) returns -100
// - calculateDiscount(100, 10, 5) returns 94.5
// - calculateDiscount(100, 0, 10) returns 110
// - calculateDiscount(100, 10, -1) returns 89.1
function calculateDiscount(price: number, discountPercent: number, tax = 8.25): number {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    return price
  }
  const discountAmount = (price * discountPercent) / 100
  const discountedPrice = price - discountAmount
  const finalPrice = discountedPrice + (discountedPrice * tax) / 100
  return Math.round(finalPrice * 100) / 100
}

/* ==========================================
 * 💬 USER DASHBOARD COMPONENT
 * Ask Copilot questions about this code!
 * ========================================== */
type UserStatus = 'active' | 'inactive'

interface DashboardUser {
  id: number
  name: string
  email: string
  status: UserStatus
  lastLogin: string
}

const DASHBOARD_USERS: readonly DashboardUser[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    lastLogin: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
    lastLogin: '2024-01-10',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'active',
    lastLogin: '2024-01-16',
  },
]

function UserDashboard() {

  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUsers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return DASHBOARD_USERS.filter(user => {
      const matchesFilter = filter === 'all' || user.status === filter
      const matchesSearch =
        user.name.toLowerCase().includes(normalizedQuery) ||
        user.email.toLowerCase().includes(normalizedQuery)
      return matchesFilter && matchesSearch
    })
  }, [filter, searchQuery])

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight this component and ask Copilot about performance, security, or refactoring
      </p>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          aria-label="Search users by name or email"
          autoComplete="off"
          maxLength={100}
          className="px-4 py-2 border rounded"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          aria-label="Filter users by status"
          className="px-4 py-2 border rounded"
        >
          <option value="all">All Users</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="space-y-2">
        {filteredUsers.map(user => (
          <div key={user.id} className="p-4 border rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {user.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Last login: {user.lastLogin}</p>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 py-8">No users found</p>
      )}
    </div>
  )
}
