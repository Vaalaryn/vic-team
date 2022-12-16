class Button extends Component {
    constructor() {
      super();
    }

    value = 'Press';

    changeValue (newValue) {
      document.getElementById(this.id).innerText = newValue;
      return this;
    }

    changeColor(color) {
      document.getElementById(this.id).style.backgroundColor = color;
      return this;
    }

    changeWidth(width) {
      document.getElementById(this.id).style.width = width;
      return this;
    }

    changeHeight(height){
      document.getElementById(this.id).style.height = height;
      return this;
    }

    draw () {
      return `<button id="${this.id}" draggable="true" ondragstart="drag(event)">${this.value}</button>`;
    }
};