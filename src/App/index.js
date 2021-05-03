import './App.scss';
import { useEffect } from 'react'
import Infos from '../components/Infos'

function App() {

  useEffect(() => {
    const issLiveIframe = document.getElementById('issLiveIframe')
    if (issLiveIframe) {
      issLiveIframe.click()
    }
  })
  return (
    <div className="App">
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
      <div className="livePositionWrapper">
        <iframe
          id="issLiveIframe"
          title="ISS Live Feed"
          frameborder="0"
          height="100%"
          width="100%"
          scrolling="no"
          src={'https://isstracker.spaceflight.esa.int'}
        />
      </div>
      <Infos />
    </div>
  );
}

export default App;
