import {ISnakeElement} from "../../types";
import classes from "./snake-dot.module.scss";

type props = {
    x: number;
    y: number;
    snake: ISnakeElement[];
};

const SnakeDot = ({x, y, snake}: props): JSX.Element => {
    return (
        <div
            className={`${classes.dot} ${
                snake.some((e) => e.x === x && e.y === y) ? classes.dotActive : null
            }`}
            data-x={x}
            data-y={y}
        >
            <span></span>
        </div>
    );
};

export default SnakeDot;
