// Select color input
 // Select size input
 
 // When size is submitted by the user, call makeGrid()
const buttonPress = document.querySelector('#sizePicker').firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
const columns = document.querySelector('#input_height');
const rows = document.querySelector('#input_width');
const table = document.querySelector('#pixel_canvas');
const picker = document.querySelector('#colorPicker');
//console.log(picker);
	

function makeGrid(event) {


	let valueColumns = parseInt(columns.value);
	let valueRows = parseInt(rows.value);
	//console.log(valueColumns, valueRows);
	rows.setAttribute('max', "60");
	columns.setAttribute('max', "60");
	//console.log(columns, rows);

			//delete content <table>
			table.innerHTML = '';

			

			//make and add rows;

			for(let y = 0; y<valueRows; y++){
				let row = document.createElement('tr');
					row.className = 'main row';
					//row.innerHTML = "A";
					table.appendChild(row);
				
			//make and add columns;
			for (let i = 0; i<valueColumns; i++){
					let column = document.createElement('td');	
						column.className = 'main column';
						column.innerHTML = 'B';
						row.appendChild(column);
					
				
		}		
	
	}
	event.preventDefault();
}
let makeColor = function(event){
	let tableChange = event.target;
	// get value of color

	let numberOfColor = tableChange.value;

	console.log(numberOfColor);
	let changeElement = tableChange.nextSibling.nextSibling.nextSibling.nextSibling;
	//console.log(changeElement);
	changeElement.onclick = function(event){
		
		let elementOfTable = event.target;
		//let numberDeFault = 'white';
		//console.log(elementOfTable);

		 // painting and erasing pixel;
		 if (elementOfTable.style.backgroundColor == 'black'){
		 	elementOfTable.style.backgroundColor = 'white';
		 } else elementOfTable.style.backgroundColor = 'black';
			
			
		}
		return false;
	}



picker.addEventListener('click', makeColor);
buttonPress.addEventListener('click', makeGrid);
	