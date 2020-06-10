let isBalancedParenthesis = (str) => {
	    
	    return !str.split('').reduce((uptoPrevChar, thisChar) => {
	        if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
	            return ++uptoPrevChar;
	        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
	            return --uptoPrevChar;
	        }
	

	        return uptoPrevChar
	    }, 0);
	}
	

	// Test Cases
	console.log(isBalancedParenthesis("[()]{}{[()()]()}"));  // returns true
	console.log(isBalancedParenthesis("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));  // returns true
	console.log(isBalancedParenthesis("({(()))}}"));  // returns false

