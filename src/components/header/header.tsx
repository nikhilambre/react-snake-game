import classes from "./header.module.scss";

const Header = (): JSX.Element => {
    return (
        <header className={classes.headerWrap}>
            <div className="container">
                <h1>Snake App</h1>
            </div>
        </header>
    );
};

export default Header;
