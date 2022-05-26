export type BoxStatus = 'WrongPosition' | 'Correct' | 'Empty' | 'Incorrect';

/* Defining a type called GameStatus that can be one of three values: Won, Lost, or Playing. */
export const enum GameStatus{
    Won,
    Lost,
    Playing,
}