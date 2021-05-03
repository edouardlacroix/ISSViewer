import './App.scss';
import { useEffect } from 'react'
import Infos from '../components/Infos'
import LiveFeed from '../components/LiveFeed'
import LivePosition from '../components/LivePosition'



function App() {

  useEffect(() => {
    const issLiveIframe = document.getElementById('issLiveIframe')
    if (issLiveIframe) {
      issLiveIframe.click()
    }
  })
  return (
    <div className="App">
      <LiveFeed />
      <LivePosition />
      <Infos />
    </div>
  );
}

export default App;
