class Button extends Component {
    constructor() {
      super();
    }

    value = 'Press';

    setValue (newValue) {
      this.value = newValue;
      return this
    }

    draw () {
      return `<button id="${this.id}">${this.value}</button>`;
    }
};