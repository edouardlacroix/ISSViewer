import './styles.scss';

function LivePosition() {

    return (
        <div className="livePositionWrapper">
            <iframe
                id="issLivePositionIframe"
                title="ISS Live Position"
                frameborder="0"
                height="100%"
                width="100%"
                scrolling="no"
                src={'https://isstracker.spaceflight.esa.int'}
            />
        </div>
    );
}

export default LivePosition;
