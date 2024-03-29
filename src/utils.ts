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

export const ALLOWED_KEYS = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "w", "d", "s", "a"];

export const GetDirectionForKey = (key: string, direction: Directions): number => {
    if ((key === "ArrowUp" || key === "w") && direction !== 2) return 0;
    if ((key === "ArrowRight" || key === "d") && direction !== 3) return 1;
    if ((key === "ArrowDown" || key === "s") && direction !== 0) return 2;
    if ((key === "ArrowLeft" || key === "a") && direction !== 1) return 3;
    return direction;
};

export const AddFoodElement = (snake: ISnakeElement[], arrLength: number) => {
    const randomX = getRandomInt(0, arrLength);
    const randomY = getRandomInt(0, arrLength);

    snake.forEach((ele) => {
        if (ele.x === randomX && ele.y === randomY) {
            AddFoodElement(snake, arrLength);
        }
    });
    return {x: randomX, y: randomY};
};

export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
