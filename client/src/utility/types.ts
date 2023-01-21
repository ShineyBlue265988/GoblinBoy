/*
 Generated by typeshare 1.0.0
*/

/** A single entry in the game log */
export type LogMessage = string;

/**
 * A single unit change in relative position meant to be added to a `Position`
 * values intended to be either 1, 0 or -1 and transformed from a `Direction`
 */
export interface Delta {
	x: number;
	y: number;
}

/** Information about the size of a 2D space */
export interface Dimensions2d {
	width: number;
	height: number;
}

/** Represents the location of something on a 2D grid */
export interface Position {
	x: number;
	y: number;
}

export interface EntityIndex {
	idx: number;
}

/** Information about a sprite to render */
export interface SpriteUpdate {
	entity: EntityIndex;
	pos: Position;
	sprite: SpriteTexture;
}

/** Information about an entity to display to the user */
export interface EntityData {
	name: string;
	blocksLight: boolean;
	visibleToPlayer: boolean;
}

/**
 * Yes I know this name sucks. What's better?
 * https://en.wikipedia.org/wiki/Body_relative_direction
 */
export enum BodyRelative {
	Up = "up",
	Down = "down",
	Left = "left",
	Right = "right",
}

/** A sprite to render that represents a visible entity */
export enum SpriteTexture {
	WallBrick = "wallBrick",
	PcBoneyBoi = "pcBoneyBoi",
	PcKidZilla = "pcKidZilla",
	ObjectRedSoda = "objectRedSoda",
	ObjectSewerGrate = "objectSewerGrate",
	ObjectWindow = "objectWindow",
	ObjectLadderUp = "objectLadderUp",
	ObjectLadderDown = "objectLadderDown",
	ObjectSlime = "objectSlime",
	ObjectWater = "objectWater",
	FloorGrass = "floorGrass",
	FloorConcrete = "floorConcrete",
	NpcRat = "npcRat",
	Unrecognized = "unrecognized",
	Empty = "empty",
}

/** Tell client to play audio */
export enum Sound {
	Punch = "punch",
}

/** An input interaction from the client */
export type ClientMessage = 
	| { type: "tileHover", content: Position }
	| { type: "tileClick", content: Position }
	| { type: "initialize", content?: undefined }
	| { type: "keypress", content: BodyRelative }
	| { type: "disconnect", content?: undefined }
	/**
	 * Clients should send every 30 seconds or so to
	 * keep from getting your socket closed when hosting on free services
	 */
	| { type: "keepAlive", content?: undefined };

/** Communicates information about the active game to one client */
export type ServerMessageSingleClient = 
	| { type: "tileHover", content?: EntityData }
	| { type: "entityPositionChange", content: SpriteUpdate }
	| { type: "centreCamera", content: Position }
	| { type: "updateFullGameMap", content: {
	camera: Position;
	entities: SpriteUpdate[];
}}
	| { type: "removeSprite", content: EntityIndex }
	| { type: "playSound", content: Sound };

/** Communicates information about the active game to one client */
export type ServerMessageAllClients = 
	| { type: "tileClick", content: LogMessage }
	| { type: "moveCount", content: number };

