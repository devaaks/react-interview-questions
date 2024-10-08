import './styles.css';

const LandingPage = () => {
    return (
        <ol className="question-list">
            <li><a href='/random-color-generator'>Random Color Generator</a></li>
            <li><a href='/single-video-play'>Single Video Play</a></li>
            <li><a href='/stop-button-render'>Stop Button Render</a></li>
            <li><a href='/debounce-question'>Debounce on Search Input</a></li>
        </ol>
    );
}

export default LandingPage;