"use strict";

/**
 * Represents an agent in a 2D grid environment.
 * @param {number} x - The x coordinate of the agent.
 * @param {number} y - The y coordinate of the agent.
 * @param {string} color - The color of the agent.
 */
export class Agent {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	/**
	 * Moves the agent to a new location.
	 * @param {number} dx - The change in x coordinate.
	 * @param {number} dy - The change in y coordinate.
	 */
	move(dx, dy) {
		this.x += dx;
		this.y += dy;
		return [this.x, this.y];
	}
}

/**
 * Represents an point of interest in a 2D grid environment.
 * @param {number} x - The x coordinate of the POI.
 * @param {number} y - The y coordinate of the POI.
 * @param {string} color - The color of the POI.
 */
export class POI {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	/**
	 * Moves the POI to a new location.
	 * @param {number} dx - The change in x coordinate.
	 * @param {number} dy - The change in y coordinate.
	 */
	move(dx, dy) {
		this.x += dx;
		this.y += dy;
		return [this.x, this.y];
	}
}
