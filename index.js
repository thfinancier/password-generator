import chalk from 'chalk'
import clipboardy from 'clipboardy'
import { Command } from 'commander'
import createPassword from './utils/createPassword.js'
import savePassword from './utils/savePassword.js'
const program = new Command()

program.version('1.0.0').description('Simple Password Generator')

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  // With these two lines below symbols and numbers are by default true
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const { length, save, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save password to a passwords.txt file
if (save) {
  savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password and related info
console.log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword))
console.log(chalk.dim('Password copied to clipboard'))