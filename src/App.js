import './App.css';

import AdaptiveCardJSONPanel from './AdaptiveCardJSONPanel';
import AdaptiveCardRenderPanel from './AdaptiveCardRenderPanel';
import useSessionState from './useSessionState';

function App() {
  const [adaptiveCardJSON, setAdaptiveCardJSON] = useSessionState('', 'ADAPTIVE_CARD_JSON');

  return (
    <div className="app">
      <div className="app__set">
        <div className="app__panel-title">Adaptive Card JSON</div>
        <AdaptiveCardJSONPanel onChange={setAdaptiveCardJSON} value={adaptiveCardJSON} />
      </div>
      <div className="app__set">
        <div className="app__panel-title">Adaptive Card render</div>
        <AdaptiveCardRenderPanel json={adaptiveCardJSON} />
      </div>
    </div>
  );
}

export default App;
