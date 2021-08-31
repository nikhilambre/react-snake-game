import classes from "./footer.module.scss";

const Footer = (): JSX.Element => {
    return (
        <footer className={classes.footerWrap}>
            <div className={`container fx ${classes.footer}`}>
                <p>
                    Made with React by <a href="https://github.com/nikhilambre">Nikhil Ambre</a>
                </p>
                <p>All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
