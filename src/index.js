import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';

const VOCABULARY = {
  STOP: ':q',
};

const terminal = new CustomTerminal();
terminal.initialize();

const service = new IncomeService();

async function mainLoop() {
  console.info('🚀 Running...\n');
  try {
    // TODO: Looks like you have some work to do right here :)
    terminal.InitializeTable();
    const answer = await terminal.question('Qual seu cargo e pretenção salarial em BRL? (position; expectation)')
    if (answer === VOCABULARY.STOP) {
      terminal.closeTerminal();
      console.log("Process Finished!!")
      return;
    }

    const income = await service.generateIncomeFromString(answer)
    terminal.addItemToTable(income.format());

    console.log("Success")
  } catch (error) {
    // TODO: Don't forget of handling some errors beautifully ;)
    console.log("Error: " + error)
  }
  return mainLoop();
}

await mainLoop();