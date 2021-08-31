import SnakeAppCanvas from "./components/snake-app-canvas";
import Header from "./components/header";
import Footer from "./components/footer";
import LatestScores from "./components/latest-scores";
import BestScores from "./components/best-scores";

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <main className="container">
                <SnakeAppCanvas />
                <LatestScores />
                <BestScores />
            </main>
            <Footer />
        </>
    );
};

export default App;
