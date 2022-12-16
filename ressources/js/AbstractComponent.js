class Component {

    constructor() {
      if (this.constructor == Component) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }

    id = (Math.random() + 1).toString(36).substring(7);

    changeValue (newValue) {
        return this;
      }
  
      changeColor(color) {
        return this;
      }
  
      changeWidth(width) {
        return this;
      }
  
      changeHeight(height){
        return this;
      }
  }