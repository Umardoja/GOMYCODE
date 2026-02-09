const { UssdStateMachine, UssdMenuBuilder } = require('../ussd/stateMachine');

const newsStore = {
  politics: [
    'FG announces new economic reforms',
    'INEC updates voter registration process'
  ],
  sports: [
    'Super Eagles prepare for AFCON qualifiers',
    'Osimhen scores again in Europe'
  ],
  entertainment: [
    'New Nollywood movie tops box office',
    'Afrobeats artist wins international award'
  ]
};

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createNewsApp() {
  const machine = new UssdStateMachine();
  const builder = new UssdMenuBuilder(machine);

  machine.setDefaultState('home');

  builder
    .menu('home', '🗞️ Naija News\n\n')
    .option('1', 'Daily Headlines', 'daily')
    .option('2', 'Random News', 'random')
    .option('0', 'Exit', 'exit')
    .done();

  builder.dynamic('daily', async () => {
    let msg = "Today's Headlines:\n\n";
    msg += `1. ${newsStore.politics[0]}\n`;
    msg += `2. ${newsStore.sports[0]}\n`;
    msg += `3. ${newsStore.entertainment[0]}\n`;
    return `END ${msg}`;
  }, { terminal: true });

  builder.dynamic('random', async () => {
    const category = randomItem(Object.keys(newsStore));
    const headline = randomItem(newsStore[category]);
    return `END ${headline}\n\nCategory: ${category.toUpperCase()}`;
  }, { terminal: true });

  builder.end('exit', 'Thank you for using Naija News 🇳🇬');

  return machine;
}

module.exports = {
  createNewsApp
};
