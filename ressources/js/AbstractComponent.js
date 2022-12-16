class Component {

    constructor() {
      if (this.constructor == Component) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }

    setBase(){

    }
  
    draw() {

    }

    style() {

    }

    update() {

    }

    delete() {

    }
  }