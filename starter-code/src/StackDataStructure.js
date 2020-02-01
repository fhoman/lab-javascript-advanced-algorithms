class StackDataStructure {

  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false;
    }
  }

  canPush() {
    if (this.stackControl.length >= this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }

  push(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    }
    return 'Stack Overflow'
  }

  pop() {

    if (!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      return 'Stack Underflow';
    }
  }
}