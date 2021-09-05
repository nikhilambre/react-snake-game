import {useState, useEffect, useRef} from "react";
import SnakeDot from "../snake-dot/snake-dot";
import {initialSnake} from "../../data";
import {ISnakeElement} from "../../types";
import {GetNewElement, ALLOWED_KEYS, GetDirectionForKey, AddFoodElement} from "../../utils";
import classes from "./snake-app-canvas.module.scss";

const SnakeAppCanvas = (): JSX.Element => {
    const direction = useRef(1);
    const counter = useRef(0);
    const isFoodCollected = useRef(false);
    const foodPosition = useRef({x: 3, y: 3});

    const [speed, setSpeed] = useState<number>(5); // 1 to 5, beginner, medium, expert, pro, legend
    const [snake, setSnake] = useState<ISnakeElement[]>(initialSnake);
    const playGroundLength = 20;

    useEffect(() => {
        const interval = setInterval(() => {
            counter.current++;

            // add new ele based on direction
            setSnake((oldArray) => {
                return [GetNewElement(oldArray[0], direction.current), ...oldArray].filter(
                    (_, i) => i !== snake.length
                );
            });

            // add food randomly
            if (counter.current === 30 || isFoodCollected.current) {
                counter.current = 0;
                foodPosition.current = AddFoodElement(snake, playGroundLength);
            }

            // if new ele is food update accordingly

            console.log("ele", snake);
        }, speed * 200);

        document.addEventListener("keydown", onKeyDown);

        return () => {
            clearInterval(interval);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    const onKeyDown = (e: KeyboardEvent) => {
        if (ALLOWED_KEYS.includes(e.key)) {
            e.preventDefault();
            direction.current = GetDirectionForKey(e.key, direction.current);
        }
    };

    //  Create snake playground
    const rows = [...Array(playGroundLength)].map((_, i) => {
        const row = [...Array(playGroundLength)].map((_, j) => (
            <SnakeDot key={j} x={j} y={i} snake={snake} foodPosition={foodPosition.current} />
        ));
        return (
            <div key={i} className={`${classes.row} row-${i}`}>
                {row}
            </div>
        );
    });

    return <div className={classes.snakeCanvas}>{rows}</div>;
};

export default SnakeAppCanvas;
