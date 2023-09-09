import DraftLog from 'draftlog';
import chalkTable from 'chalk-table';
import chalk from 'chalk';
import readline from 'readline';
import terminalConfig from './config/terminal.js';

const TABLE_OPTIONS = terminalConfig.table;

class CustomTerminal {
  constructor() {
    this.print = {};
    this.data = [];
  }

  initialize() {
    // TODO: Initialize your terminal with the main instance
    DraftLog(console).addLineListener(process.stdin);
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  // TODO: You'll need more methods down here as well, be creative
  InitializeTable(){
    const table = chalkTable(TABLE_OPTIONS, this.data);
    this.print = console.draft(table)
  }

  addItemToTable(item) {
    this.data.push(item);
  }

  question(msg = '') {
    return new Promise(resolve => this.terminal.question(msg, resolve))
  }

  closeTerminal() {
    this.terminal.close();
  }
}

export default CustomTerminal;