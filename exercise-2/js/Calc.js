
window.Calc = (function() {
    // Write a constructor function which takes a number, stores it, and
    // defines all Calc API functions 
    var c = function(num) {
    	var calc = {};
    	var calc.currNum = num;
        // Find a way to store all instance viariables and functions
        // for this calculator
	    // Implement getVal, plus, minus, times, divide, and clear
	    var calc.getVal = function() {
	    	return this.currNum;
	    }

	    var calc.plus = function(num) {
	    	this.currNum += num;
	    	return this;
	    }

	    var calc.minus = function(num) {
	    	this.currNum -= num;
	    	return this;
	    }

	    var calc.times = function(num) {
	    	this.currNum *= num;
	    	return this;
	    }
	    var calc.divide = function(num) {
	    	this.currNum = this.currNum/num;
	    	return this;
	    }

	    var calc.clear = function(num) {
	    	this.currNum = 0;
	    	return this;
	    }
    };



    // Return your constructed object
    return c;
})();