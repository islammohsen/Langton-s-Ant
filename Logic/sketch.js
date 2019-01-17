var grid;
var rows;
var cols;
var resolution = 40;
var ant;

function setup() {
	createCanvas(800, 600);
	frameRate(10);
	rows = height / resolution;
	cols = width / resolution;
	create2DArray();
	ant = new Ant(rows, cols);
}

function draw() {
	background(0);
	drawGrid();
}

function drawGrid(){
	for(var i = 0; i < rows; i++){
		for(var j = 0; j < cols; j++){
			var x = j * resolution;
			var y = i * resolution;
			if(i == ant.y && j == ant.x){
				print(ant.x + ' ' + ant.y);
				fill(255, 0, 0);
				rect(x, y, resolution, resolution);
				if(grid[i][j] == 0)
					ant.rotateRight();
				else
					ant.rotateLeft();
				grid[i][j] = !grid[i][j];
			}
			else if(grid[i][j] == 1){
				fill(255);
				rect(x, y, resolution, resolution);
			}
		}
	}
	ant.move();
}

function create2DArray(){
	grid = new Array(rows);
	for(var i = 0; i < rows; i++){
		grid[i] = new Array(cols);
	}
	for(var i = 0; i < rows; i++){
		for(var j = 0; j < cols; j++){
			grid[i][j] = floor(random(2));
		}
	}
}
