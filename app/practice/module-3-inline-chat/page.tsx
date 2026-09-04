'use client'

import { useMemo, useState } from 'react'

/**
 * MODULE 3: Inline Chat - Edit Mode in Depth
 *
 * This file contains exercises for making precise, surgical edits:
 * - Converting to async/await
 * - Improving accessibility
 * - Refactoring for clarity
 * - Style and performance tweaks
 */

export default function Module3Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 3: Inline Chat - Precision Edits</h1>
          <p className="text-gray-600">Make surgical edits to improve code quality</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 🔄 LESSON 3.1 - EXERCISE: CONVERT TO ASYNC/AWAIT
           * ==========================================
           *
           * ✅ TODO: REFACTOR THIS TO USE ASYNC/AWAIT
           *
           * Instructions:
           * 1. Highlight the fetchUserData function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Rewrite this to use async/await"
           * 4. Review the patch and accept it
           * 5. Test that it still works correctly
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🔄 Lesson 3.1: Convert to Async/Await</h2>
            <PromiseBasedComponent />
          </section>

          {/* ==========================================
           * ♿ LESSON 3.2 - EXERCISE: IMPROVE ACCESSIBILITY
           * ==========================================
           *
           * ✅ TODO: ADD ACCESSIBILITY FEATURES
           *
           * Instructions:
           * 1. Highlight the InaccessibleForm component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Add aria-labels and make this accessible for screen readers"
           * 4. Review and accept the improvements
           * 5. Ask follow-up: "What other accessibility improvements can be made?"
           *
           * Other improvements include using semantic HTML and visible labels, setting
           * appropriate input types, adding clear instructions and accessible error
           * messages, managing keyboard focus, ensuring visible focus indicators and
           * sufficient color contrast, and using aria-live for dynamic status updates.
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">♿ Lesson 3.2: Improve Accessibility</h2>
            <InaccessibleForm />
          </section>

          {/* ==========================================
           * 🧹 LESSON 3.3 - EXERCISE: REFACTOR FOR CLARITY
           * ==========================================
           *
           * ✅ TODO: BREAK INTO SMALLER FUNCTIONS
           *
           * Instructions:
           * 1. Highlight the MessyComponent function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Break this into smaller functions with clear names"
           * 4. Review the refactored code
           * 5. Ask: "Can this be simplified further?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧹 Lesson 3.3: Refactor for Clarity</h2>
            <MessyComponent />
          </section>

          {/* ==========================================
           * 🎨 LESSON 3.4 - EXERCISE: STYLE AND PERFORMANCE
           * ==========================================
           *
           * ✅ TODO: APPLY MULTIPLE IMPROVEMENTS
           *
           * Try these inline chat commands on the component below:
           * 1. "Convert this to a functional component" (if it was class-based)
           * 2. "Use Tailwind classes instead of inline styles"
           * 3. "Optimize this loop for better performance"
           * 4. "Add TypeScript types for better type safety"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Lesson 3.4: Style & Performance</h2>
            <StylableComponent />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: YOUR TURN
           * ==========================================
           *
           * ✅ TODO: PRACTICE ALL INLINE CHAT TECHNIQUES
           *
           * Instructions:
           * Create your own component below and practice:
           * - Converting callback patterns to async/await
           * - Adding accessibility features
           * - Refactoring complex logic
           * - Improving styling and performance
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a component below and practice all Inline Chat techniques
            </p>

            {/* 
            
            ⬇️⬇️⬇️ CREATE YOUR PRACTICE COMPONENT HERE ⬇️⬇️⬇️
            
            Ideas:
            - A form with complex validation
            - A data fetching component with loading states
            - A filtering/sorting interface
            - An interactive widget
            
            Then use Inline Chat to improve it step by step!
            
            */}

            <FormComplexValidation />
          </section>
        </div>
      </div>
    </div>
  )
}

/* ==========================================
 * 🔄 PROMISE-BASED COMPONENT
 * Refactor this to use async/await!
 * ========================================== */
function PromiseBasedComponent() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
// This uses .then() chains - convert it to async/await!
  const fetchUserData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const userData = await response.json()
      setData(userData)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses .then() chains. Highlight the fetchUserData function and convert it to
        async/await!
      </p>

      <button
        onClick={fetchUserData}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Loading...' : 'Fetch User Data'}
      </button>

      {error && <div className="p-4 bg-red-100 text-red-700 rounded">Error: {error}</div>}

      {data && (
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.email}</p>
          <p className="text-sm text-gray-600">{data.phone}</p>
        </div>
      )}
    </div>
  )
}

/* ==========================================
 * ♿ INACCESSIBLE FORM
 * Add accessibility features to this form!
 * ========================================== */
function InaccessibleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This form lacks accessibility features. Add aria-labels, proper labels, and keyboard
        navigation!
      </p>

      <form onSubmit={handleSubmit} aria-label="Contact form">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Name"
            aria-label="Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            placeholder="Message"
            aria-label="Message"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%', minHeight: '100px' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <button
            type="submit"
            aria-label="Submit contact form"
            style={{
              background: '#3B82F6',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

/* ==========================================
 * 🧹 MESSY COMPONENT
 * Refactor this into smaller, clearer functions!
 * ========================================== */
type InventoryItem = {
  id: number
  name: string
  category: string
  price: number
  inStock: boolean
}

type DisplayItem = InventoryItem & {
  discountedPrice: number
  formattedPrice: string
  isOnSale: boolean
}

const inventoryItems: InventoryItem[] = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.5, inStock: true },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.8, inStock: true },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 1.2, inStock: false },
  { id: 4, name: 'Dates', category: 'Fruit', price: 3.0, inStock: true },
]

function filterAvailableItems(items: InventoryItem[], category: string) {
  return items.filter(item => {
    const matchesCategory = !category || item.category.toLowerCase() === category.toLowerCase()
    return matchesCategory && item.inStock
  })
}

function sortItems(items: InventoryItem[], sortBy: string) {
  return [...items].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price
    return a.name.localeCompare(b.name)
  })
}

function formatItemForDisplay(item: InventoryItem): DisplayItem {
  const isOnSale = item.price > 2
  const discountedPrice = isOnSale ? item.price * 0.9 : item.price
  return {
    ...item,
    discountedPrice,
    formattedPrice: `$${discountedPrice.toFixed(2)}`,
    isOnSale,
  }
}

function prepareDisplayItems(items: InventoryItem[], category: string, sortBy: string) {
  return sortItems(filterAvailableItems(items, category), sortBy).map(formatItemForDisplay)
}

function InventoryItemCard({ item }: { item: DisplayItem }) {
  const { name, category, isOnSale, formattedPrice, price, id } = item

  return (
    <div key={id} className="border rounded p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
        {isOnSale && (
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">SALE</span>
        )}
      </div>
      <p className="text-lg font-bold mt-2">{formattedPrice}</p>
      {isOnSale && <p className="text-xs text-gray-500 line-through">${price.toFixed(2)}</p>}
    </div>
  )
}

function MessyComponent() {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('name')
  const processedItems = prepareDisplayItems(inventoryItems, filter, sort)

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component does too much in one place. Highlight it and ask Copilot to break it into
        smaller functions!
      </p>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {processedItems.map(item => <InventoryItemCard key={item.id} item={item} />)}
      </div>
    </div>
  )
}

/* ==========================================
 * 🎨 STYLABLE COMPONENT
 * Improve the styling and performance!
 * ========================================== */
function StylableComponent(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  const calculationResult = useMemo<number>(() => {
    const count = 1000000
    return (count * (count - 1)) / 2
  }, [])

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses inline styles and has performance issues. Improve it!
      </p>

      <div className="mt-4 rounded-lg bg-gray-100 p-6">
        <p className="text-2xl font-bold text-gray-800">Count: {count}</p>
        <p className="mt-2 text-gray-500">
          Expensive calculation: {calculationResult}
        </p>

        <div className="mt-4">
          <button
            className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => setCount(currentCount => currentCount + 1)}
          >
            Increment
          </button>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

function FormComplexValidation(): JSX.Element {
  const [formData, setFormData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const validate = (): boolean => {
    let valid = true
    const newErrors = {
      firstName: '',
      middleInitial: '',
      lastName: '',
      email: '',
      phone: '',
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required'
      valid = false
    }

    const trimmedMiddleInitial = formData.middleInitial.trim()
    if (trimmedMiddleInitial && !/^[A-Za-z]$/.test(trimmedMiddleInitial)) {
      newErrors.middleInitial = 'Middle initial must be one letter'
      valid = false
    } else {
      newErrors.middleInitial = ''
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required'
      valid = false
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      valid = false
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
      valid = false
    } else if (!/^\+?[\d\s()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      alert('Form submitted successfully!')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">First name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          className="mt-1 block w-full border rounded px-4 py-2"
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Middle initial</label>
        <input
          type="text"
          maxLength={1}
          value={formData.middleInitial}
          onChange={e => setFormData({ ...formData, middleInitial: e.target.value })}
          className="mt-1 block w-full border rounded px-4 py-2"
        />
        {errors.middleInitial && (
          <p className="text-red-500">{errors.middleInitial}</p>
        )}
      </div>

      <div>
        <label className="block text-gray-700">Last name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          className="mt-1 block w-full border rounded px-4 py-2"
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full border rounded px-4 py-2"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Phone number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full border rounded px-4 py-2"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  )
}