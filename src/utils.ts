import {ISnakeElement, Directions} from "./types";

export const GetNewElement = (element: ISnakeElement, direction: Directions): ISnakeElement => {
    let x = element.x + 1;
    let y = element.y;

    if (direction === Directions.UP) {
        x = element.x;
        y = element.y - 1;
    }
    if (direction === Directions.DOWN) {
        x = element.x;
        y = element.y + 1;
    }
    if (direction === Directions.LEFT) {
        x = element.x - 1;
        y = element.y;
    }

    return {x: x, y: y};
};
