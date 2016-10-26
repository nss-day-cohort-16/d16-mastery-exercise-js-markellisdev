// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.

// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.

// A key that specifies which character to use to build the pine tree.

// The character to use should be from user input in a <input type="text"> field in the DOM.


var tree = {
	height: userHeight,
	character: userChar
};

// function growTree(height, char) {
// 	// body... call variables inside so they don't come up as undefined
// }



var treeButton = document.getElementById("yourTree");




function checkInput(yes) {
	var height = document.getElementById("userHeight").value;
	var char = document.getElementById("userChar").value;
	if (isNaN(height)  || (char.length > 1 || char.length < 1)) {
	alert("Please make sure you enter a number for height and a character before trying to grow your tree");
// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
	}
	else {
		growTree(height, char);
	}
	console.log("height", height);
}


function growTree(height, char) {
	var numSpaces = " ";
	for (i=0; i <= height; i++) {
		console.log((numSpaces * (height - 1))  + char[i] + numSpaces);
	}
}



// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.


treeButton.addEventListener("click", checkInput);







// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.