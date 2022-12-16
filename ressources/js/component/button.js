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
      return `<button id="${this.id}" draggable="true" ondragstart="drag(event)">${this.value}</button>`;
    }
};