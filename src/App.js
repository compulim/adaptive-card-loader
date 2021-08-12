import './App.css';

import AdaptiveCardJSONPanel from './AdaptiveCardJSONPanel';
import AdaptiveCardRenderPanel from './AdaptiveCardRenderPanel';
import useSessionState from './useSessionState';

const DEFAULT_ADAPTIVE_CARD_JSON = `
{
  type: "AdaptiveCard",
  "body": [
  ]
}
`;

function App() {
  const [adaptiveCardJSON, setAdaptiveCardJSON] = useSessionState(DEFAULT_ADAPTIVE_CARD_JSON, 'ADAPTIVE_CARD_JSON');

  return (
    <div className="app">
      <div className="app__set">
        <h1 className="app__panel-title">Adaptive Card JSON</h1>
        <AdaptiveCardJSONPanel onChange={setAdaptiveCardJSON} value={adaptiveCardJSON} />
      </div>
      <div className="app__set">
        <h1 className="app__panel-title">Render</h1>
        <AdaptiveCardRenderPanel json={adaptiveCardJSON} />
      </div>
    </div>
  );
}

export default App;
