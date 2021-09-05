import {useState, useEffect} from "react";
import SnakeDot from "../snake-dot/snake-dot";
import {initialSnake} from "../../data";
import {ISnakeElement, Directions} from "../../types";
import {GetNewElement} from "../../utils";
import classes from "./snake-app-canvas.module.scss";

const SnakeAppCanvas = (): JSX.Element => {
    const [direction, setDirection] = useState<Directions>(1); // 0-up, 1-right, 2-down, 3-left
    const [speed, setSpeed] = useState<number>(5); // 1 to 5, beginner, medium, expert, pro, legend
    const [snake, setSnake] = useState<ISnakeElement[]>(initialSnake);
    const [matrix, setMatrix] = useState<number[][]>(
        Array.from({length: 20}, () => Array.from({length: 20}, () => 0))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            // add new ele based on direction
            setSnake((oldArray) => {
                return [GetNewElement(oldArray[0], direction), ...oldArray].filter(
                    (_, i) => i !== snake.length
                );
            });

            // in forEach - move snake by updating arr add in direction, dec counter & remove count 0 ele
            // if new ele is food update accordingly

            console.log("ele", snake);
        }, speed * 200);
        return () => clearInterval(interval);
    }, [snake, direction]);

    //  Create snake playground
    const rows = [...Array(20)].map((_, i) => {
        const row = [...Array(20)].map((_, j) => <SnakeDot key={j} x={j} y={i} snake={snake} />);
        return (
            <div key={i} className={`${classes.row} row-${i}`}>
                {row}
            </div>
        );
    });

    return <div className={classes.snakeCanvas}>{rows}</div>;
};

export default SnakeAppCanvas;
