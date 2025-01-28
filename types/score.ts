import { Player } from './player';

// Surely not the best choice
export type Point = number;

export type PointsData = {
  PLAYER_ONE: Point;
  PLAYER_TWO: Point;
};

export type FortyData = {
  player: Player; // The player who have forty points
  otherPoint: Point; // Points of the other player
};

// Exerice 0: Write all type constructors of Points, Deuce, Forty and Advantage types.

export type Game = {
  kind: 'GAME';
  player: Player; // Player has won
};

export const game = (winner: Player): Game => ({
  kind: 'GAME',
  player: winner,
});

export type Points = {
  kind: 'POINTS';
  pointsData: PointsData;
};


export const points = (
  playerOnePoints: Point,
  playerTwoPoints: Point
): Points => ({
  kind: 'POINTS',
  pointsData: {
    PLAYER_ONE: playerOnePoints,
    PLAYER_TWO: playerTwoPoints,
  },
});


export type Deuce = {
  kind: 'DEUCE';
};

export const deuce = (): Deuce => ({
  kind: 'DEUCE',
})

export type Forty = {
  kind: 'FORTY';
  fortyData: FortyData;
};

export const forty = (fortyData: FortyData): Forty => ({
  kind: 'FORTY',
  fortyData: fortyData,
});

export type Advantage = {
  kind: 'ADVANTAGE';
  player: Player;
};

export const advantage = (player: Player): Advantage => ({
  kind: 'ADVANTAGE',
  player: player,
});


export type Score = Points | Game;
