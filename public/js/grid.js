/**
 * Function to set the stash grid overlay
 */
function setGrid() {
	// PoE Stash is 12 x 12
	x = 12;
	y = 12;

	// Grid Parent
	const gridParent = document.getElementById('grid');
	// Grid Table
	const gridTable = document.getElementById('grid_table');

	// Cell Rows
	for(var _y=0; _y < y; _y++) {
		const gridRow = document.createElement('tr');
		gridRow.className = ('row');
		gridTable.appendChild(gridRow);

		// Columns
		for(var _x=0; _x < x; _x++) {

			// Cells
			const cell = document.createElement('td');
			const cellDiv = document.createElement('div');

			cell.appendChild(cellDiv);
			cellDiv.className = ('cell');

			// cell price input
			const cellInput = document.createElement('input');
			cellInput.type = ('text');
			cellInput.className = ('cellInput');
			cellInput.setAttribute("y",_y);
			cellInput.setAttribute("x",_x);

			cellDiv.appendChild(cellInput);
			gridRow.appendChild(cell);
		}
	}
}

/**
 * Function to get and display the forum post
 */
document.getElementById('getPostButton').onclick = function() {

	const cellInput = document.getElementsByClassName('cellInput');
	var postText = [];

	for(var i=0; i < cellInput.length; i++) {
		var thisInputValue = cellInput[i].value;
		if(thisInputValue !== "") {

			const y = cellInput[i].getAttribute("y");
			const x = cellInput[i].getAttribute("x");

			postText.push(`[linkItem location="Stash6" league="Blight" x="${x}" y="${y}"]`);
			postText.push(`~b/o ${thisInputValue} chaos`);
		}
	}

	postText = postText.join("\n");
	document.getElementById('postTextArea').value = postText;
};


/**
 * Function to clear the grid on button push
 */
document.getElementById('clearGridButton').onclick = function() {
	const cellInput = document.getElementsByClassName('cellInput');
	for(var i=0; i < cellInput.length; i++) {
		cellInput[i].value = "";
	}
}
