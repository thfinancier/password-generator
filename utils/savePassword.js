import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import os from 'os'
import chalk from 'chalk'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

export default function savePassword(password) {
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('Password saved to passwords.txt'))
      })
    })
  })
}
