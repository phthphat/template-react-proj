import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div class={`${style.home} bg-red-300`}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;
