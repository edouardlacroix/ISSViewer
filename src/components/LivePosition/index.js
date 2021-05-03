import './styles.scss';
import WinBox from "winbox/src/js/winbox";
import "winbox/dist/css/winbox.min.css";
import { useState } from 'react';

function LivePosition() {
    const [isVisible, setIsVisible] = useState(true)

    const createWindow = () => {
        setIsVisible(false)
        new WinBox({
            title: "ISS Live Position",
            x: "center",
            y: "center",
            width: "30%",
            height: "38%",
            mount: document.getElementById("content")
                .cloneNode(true),
            border: "0.2em",
            class: ["no-full"],
            onclose: () => setIsVisible(true)

        });
    }


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
                style={{ display: isVisible ? 'block' : 'none' }}
            />

            <div id="hiddenContent" style={{ display: "none" }}>
                <div id="content">
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
            </div>
            <div onClick={() => createWindow()} className={'openWindowWrapper'}> <p>{'[ ]'}</p></div>
        </div>
    );
}

export default LivePosition;
