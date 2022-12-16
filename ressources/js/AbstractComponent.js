class Component {

    constructor() {
      if (this.constructor == Component) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }

    id = (Math.random() + 1).toString(36).substring(7);

    setBase(){

    }
  
    draw() {
        return 'Wesh'
    }

    style() {

    }

    update() {

    }

    delete() {

    }
  }