var MinStack = function() {
 this.stack = [];
 this.minstack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);

    const currentmin = this.minstack.length >0? this.minstack[this.minstack.length - 1]:val;
    this.minstack.push(Math.min(currentmin,val));
};

MinStack.prototype.pop = function() {
    if(this.minstack.length === 0 || this.stack.length ===0){
        throw new Error('the stack is empty');
    }
    this.minstack.pop();
    this.stack.pop();
};

MinStack.prototype.top = function() {
    if(this.stack.length === 0){
        throw new Error('the stack is empty');
    }
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    if(this.minstack.length === 0){
        throw new Error('the stack is empty');
    }
    return this.minstack[this.minstack.length- 1];
};
