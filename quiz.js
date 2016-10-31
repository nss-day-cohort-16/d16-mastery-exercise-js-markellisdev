// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.


// A key that specifies the height of the pine tree.

// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.

// A key that specifies which character to use to build the pine tree.

// The character to use should be from user input in a <input type="text"> field in the DOM.

// It accepts a single object as an argument. The object should have two key/value pairs.

var tree = {
	height: userHeight,
	character: userChar
};

var treeButton = document.getElementById("yourTree");

//This function is for the Enter button

function enterInput(event) {
	if (event.keyCode === 13) {
		checkInput(true);
	}
};

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

function checkInput(yes) {
	tree.height = document.getElementById("userHeight").value;
	tree.character = document.getElementById("userChar").value;
	if (isNaN(tree.height)  || (tree.character.length > 1 || tree.character.length < 1)) {
	alert("Please make sure you enter a number for height and a character before trying to grow your tree");
	}
	else {
		growTree(tree);
	}
};

//This is the function to grow the tree.

function growTree(tree) {

	var space = (" ");

	for (i = 1; i <= tree.height; i++) {
		console.log("test", space.repeat(tree.height-i) + tree.character.repeat((i*2)-1));
	}
};

// click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button

treeButton.addEventListener("click", checkInput);

// Event listeners for Enter keypress

userChar.addEventListener("keypress", enterInput);

userHeight.addEventListener("keypress", enterInput);