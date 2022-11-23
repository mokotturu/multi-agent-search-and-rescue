"use strict";

import { Agent, POI } from './modules/Members.js';
import Grid from './modules/Grid.js';

let grid;

window.setup =  () => {
	const width = 500;
	const height = 500;
	const rows = 20;
	const cols = 20;

	let canvas = createCanvas(width, height);
	canvas.parent('canvas-container');

	grid = new Grid(width, height, rows, cols, '#FFFFFF');
	
	grid.addAgents([
		new Agent(0, 0, '#FF0000'),
		new Agent(4, 3, '#FFF000'),
	]);
	
	grid.addPOIs([
		new POI(5, 1, '#00FF00'),
		new POI(1, 6, '#0000FF'),
	]);

	grid.draw();
}

window.draw = () => {
	frameRate(1);
	grid.movePOI(0, 1, 1);
	grid.draw();
}
