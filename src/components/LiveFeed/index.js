import './styles.scss';

function LiveFeed() {

    return (
        <div className="liveFeedWrapper">
            <iframe
                id="issLiveIframe"
                title="ISS Live Feed"
                frameborder="0"
                height="100%"
                width="100%"
                src={'https://ustream.tv/embed/17074538?autoplay=true&controls=false&showtitle=false&html5ui=0'}
            />
        </div>
    );
}

export default LiveFeed;
