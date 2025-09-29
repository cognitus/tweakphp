import path from 'path'
import os from 'os'
import fs from 'fs'
import Database from 'better-sqlite3'

const appDataDir = path.join(os.homedir(), '.tweakphp')

if (!fs.existsSync(appDataDir)) {
  fs.mkdirSync(appDataDir, { recursive: true })
}

const dbPath = path.join(appDataDir, 'tweakphp.db')

console.log(`DB PATH: ${dbPath}`)

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

export { db }
