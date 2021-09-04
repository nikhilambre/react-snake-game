import {useState, useEffect} from "react";
import SnakeDot from "../snake-dot/snake-dot";
import {initialSnake} from "../../data";
import {ISnakeElement} from "../../types";
import classes from "./snake-app-canvas.module.scss";

const SnakeAppCanvas = (): JSX.Element => {
    const [direction, setDirection] = useState<number>(1); // 0-up, 1-right, 2-down, 3-left
    const [speed, setSpeed] = useState<number>(5);
    const [snake, setSnake] = useState<ISnakeElement[]>(initialSnake);
    const [matrix, setMatrix] = useState<number[][]>(
        Array.from({length: 20}, () => Array.from({length: 20}, () => 0))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            snake.forEach((ele) => {
                console.log("ele", ele);
            });
        }, speed * 200);
        return () => clearInterval(interval);
    }, []);

    //  Create snake playground
    const rows = [...Array(20)].map((_, i) => {
        const row = [...Array(20)].map((_, j) => <SnakeDot key={j} x={i} y={j} matrix={matrix} />);
        return (
            <div key={i} className={`${classes.row} row-${i}`}>
                {row}
            </div>
        );
    });

    return <div className={classes.snakeCanvas}>{rows}</div>;
};

export default SnakeAppCanvas;
