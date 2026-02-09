class UssdStateMachine {
    constructor() {
      this.states = {};
      this.defaultState = null;
    }
  
    setDefaultState(state) {
      this.defaultState = state;
    }
  
    async processRequest({ text }) {
      const inputs = text ? text.split('*') : [];
      let currentState = this.defaultState;
  
      for (const input of inputs) {
        const state = this.states[currentState];
        if (!state || !state.options || !state.options[input]) {
          return 'END Invalid option';
        }
        currentState = state.options[input].next;
      }
  
      const state = this.states[currentState];
      return state.handler();
    }
  }
  
  class UssdMenuBuilder {
    constructor(machine) {
      this.machine = machine;
    }
  
    menu(stateName, message) {
      this.machine.states[stateName] = {
        message,
        options: {},
        handler: async () => {
          let menu = `CON ${message}`;
          for (const key in this.machine.states[stateName].options) {
            menu += `\n${key}. ${this.machine.states[stateName].options[key].label}`;
          }
          return menu;
        }
      };
      this.currentState = stateName;
      return this;
    }
  
    option(key, label, nextState) {
      this.machine.states[this.currentState].options[key] = {
        label,
        next: nextState
      };
      return this;
    }
  
    dynamic(stateName, handler) {
      this.machine.states[stateName] = { handler };
    }
  
    end(stateName, message) {
      this.machine.states[stateName] = {
        handler: async () => `END ${message}`
      };
    }
  
    done() {
      return this;
    }
  }
  
  module.exports = {
    UssdStateMachine,
    UssdMenuBuilder
  };
  