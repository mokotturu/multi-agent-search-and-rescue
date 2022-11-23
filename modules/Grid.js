"use strict";

/**
 * Represents a 2D grid environment.
 * @param {number} width - The width of the grid.
 * @param {number} height - The height of the grid.
 * @param {number} rows - The number of rows in the grid.
 * @param {number} cols - The number of columns in the grid.
 * @param {string} color - The background color of the grid.
 */
export default class Grid {
	constructor(width, height, rows, cols, color) {
		this.width = width;
		this.height = height;

		this.rows = rows;
		this.cols = cols;

		this.cellWidth = this.width / this.cols;
		this.cellHeight = this.height / this.rows;

		this.spriteWidth = 0.75 * this.width / this.cols;

		this.color = color;

		this.agents = [];
		this.pois = [];
	}

	/**
	 * Draws the grid with any agents and POIs.
	 */
	draw() {
		background(this.color);

		stroke(0);
		for (let i = this.width / this.cols; i < this.width; i += this.width / this.cols) {
			line(i, 0, i, this.height);
		}

		for (let i = this.height / this.rows; i < this.height; i += this.height / this.rows) {
			line(0, i, this.width, i);
		}

		for (const agent of this.agents) {
			fill(agent.color);
			circle(
				agent.x * this.cellWidth + this.cellWidth / 2,
				agent.y * this.cellHeight + this.cellHeight / 2,
				this.spriteWidth
			);
		}

		for (const poi of this.pois) {
			fill(poi.color);
			triangle(
				poi.x * this.cellWidth + this.cellWidth / 2,
				poi.y * this.cellHeight + this.cellHeight / 2 - this.spriteWidth / 2,
				poi.x * this.cellWidth + this.cellWidth / 2 + this.spriteWidth / 2,
				poi.y * this.cellHeight + this.cellHeight / 2 + this.spriteWidth / 2,
				poi.x * this.cellWidth + this.cellWidth / 2 - this.spriteWidth / 2,
				poi.y * this.cellHeight + this.cellHeight / 2 + this.spriteWidth / 2,
			);
		}
	}

	/**
	 * Adds agents to the grid.
	 * @param {Array} agents - Array of agents to add.
	 */
	addAgents(agents) {
		this.agents = this.agents.concat(agents);
	}

	/**
	 * Adds points of interest to the grid.
	 * @param {Array} pois - Array of points of interest to add.
	 */
	addPOIs(pois) {
		this.pois = this.pois.concat(pois);
	}

	/**
	 * Returns the agent at the given index in the agents array.
	 * @param {number} index - The index of the agent.
	 * @param {number} dx - The change in x coordinate.
	 * @param {number} dy - The change in y coordinate.
	 */
	moveAgent(index, dx, dy) {
		if (
			this.agents[index].x + dx >= 0
			&& this.agents[index].x + dx < this.cols
			&& this.agents[index].y + dy >= 0
			&& this.agents[index].y + dy < this.rows
		) this.agents[index].move(dx, dy);
		return [index, this.agents[index].x, this.agents[index].y];
	}

	/**
	 * Returns the POI at the given index in the POIs array.
	 * @param {number} index - The index of the POI.
	 * @param {number} dx - The change in x coordinate.
	 * @param {number} dy - The change in y coordinate.
	 */
	movePOI(index, dx, dy) {
		if (
			this.pois[index].x + dx >= 0
			&& this.pois[index].x + dx < this.cols
			&& this.pois[index].y + dy >= 0
			&& this.pois[index].y + dy < this.rows
		) this.pois[index].move(dx, dy);
		return [index, this.pois[index].x, this.pois[index].y];
	}
}
