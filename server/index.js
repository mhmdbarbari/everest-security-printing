import cors from 'cors'
import express from 'express'
import db from './db.js'

const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(express.json())

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value, maxLen) {
  return typeof value === 'string' ? value.trim().slice(0, maxLen) : ''
}

app.post('/api/quotations', (req, res) => {
  const body = req.body ?? {}
  const company = clean(body.company, 200)
  const name = clean(body.name, 200)
  const title = clean(body.title, 200)
  const phone = clean(body.phone, 50)
  const email = clean(body.email, 200)
  const request = clean(body.request, 4000)

  if (!company || !name || !email || !request) {
    return res.status(400).json({ error: 'Company, name, email and request are required.' })
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const stmt = db.prepare(
    `INSERT INTO quotations (company, name, title, phone, email, request) VALUES (?, ?, ?, ?, ?, ?)`,
  )
  const info = stmt.run(company, name, title, phone, email, request)

  res.status(201).json({ id: info.lastInsertRowid })
})

app.get('/api/quotations', (_req, res) => {
  const rows = db.prepare('SELECT * FROM quotations ORDER BY id DESC').all()
  res.json(rows)
})

app.listen(PORT, () => {
  console.log(`Everest quotations API listening on http://localhost:${PORT}`)
})
