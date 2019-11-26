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
	const gridTable = document.createElement('table');
	gridTable.id = 'grid_table';
	gridParent.appendChild(gridTable);

	// Cell Rows
	for(var _y=0; _y<y; _y++) {
		const gridRow = document.createElement('tr');
		gridRow.className = ('row');
		gridTable.appendChild(gridRow);

		// Columns
		for(var _x=0; _x<x; _x++) {

			// Cells
			const cell = document.createElement('td');
			const cellDiv = document.createElement('div');

			cell.appendChild(cellDiv);
			cellDiv.className = ('cell');

			// cell price input
			const cellInput = document.createElement('input');
			cellInput.type = ('text');
			cellInput.className = ('cellInput');
			cellInput.id = (`${_y}-${_x}`);

			cellDiv.appendChild(cellInput);
			gridRow.appendChild(cell);
		}
	}
}

/**
 * Function to get and display the forum post
 */
document.getElementById('getPostButton').onclick = function(){

	const cellInput = document.getElementsByClassName('cellInput');

	const postTextDiv = document.getElementById('post');

	for(var i=0; i < cellInput.length; i++) {
		var thisInputValue = cellInput[i].value;
		if(thisInputValue !== "") {

			const yx = cellInput[i].id.split("-");
			const y = yx[0];
			const x = yx[1];

			const postItem = document.createElement('p');
			postItem.textContent = (`[linkItem location="Stash6" league="Blight" x="${x}" y="${y}"]`);
			postTextDiv.appendChild(postItem);

			const postPrice = document.createElement('p');
			postPrice.textContent = (`~b/o ${thisInputValue} chaos`);
			postTextDiv.appendChild(postPrice);
		}
	}
};