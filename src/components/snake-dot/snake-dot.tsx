import classes from "./snake-dot.module.scss";

type props = {
    x: number;
    y: number;
    matrix: number[][];
};

const SnakeDot = ({x, y, matrix}: props): JSX.Element => {
    return (
        <div className={`${classes.dot} ${matrix[x][y] == 1 ? classes.dotActive : null}`}>
            <span></span>
        </div>
    );
};

export default SnakeDot;
