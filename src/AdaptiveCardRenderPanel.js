import { AdaptiveCard, SerializationContext } from 'adaptivecards';
import { Fragment, useCallback, useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import MarkdownIt from 'markdown-it';
import JSON from 'json5';

import './AdaptiveCardRenderPanel.css';

import createWebChatHostConfig from './createWebChatHostConfig';
import useSessionState from './useSessionState';

const AdaptiveCardRenderPanel = ({ className, json }) => {
  const [rawEnableHostConfig, setRawEnableHostConfig] = useSessionState('false', 'ENABLE_HOST_CONFIG');
  const [rawEnableMarkdown, setRawEnableMarkdown] = useSessionState('false', 'ENABLE_MARKDOWN');
  const adaptiveCardContentRef = useRef();

  const enableHostConfig = rawEnableHostConfig === 'true';
  const setEnableHostConfig = useCallback(value => setRawEnableHostConfig(!!value + ''), [setRawEnableHostConfig]);

  const handleEnableHostConfigChange = useCallback(
    ({ target: { checked } }) => setEnableHostConfig(checked),
    [setEnableHostConfig]
  );

  const enableMarkdown = rawEnableMarkdown === 'true';
  const setEnableMarkdown = useCallback(value => setRawEnableMarkdown(!!value + ''), [setRawEnableMarkdown]);

  const handleEnableMarkdownChange = useCallback(
    ({ target: { checked } }) => setEnableMarkdown(checked),
    [setEnableMarkdown]
  );

  const hostConfig = useMemo(() => enableHostConfig && createWebChatHostConfig(), [enableHostConfig]);
  const markdownIt = useMemo(() => enableMarkdown && new MarkdownIt(), [enableMarkdown]);

  const { adaptiveCard, error, validationEvents } = useMemo(() => {
    try {
      const adaptiveCard = new AdaptiveCard();

      if (hostConfig) {
        adaptiveCard.hostConfig = hostConfig;
      }

      if (markdownIt) {
        adaptiveCard.constructor.onProcessMarkdown = (text, result) => {
          result.outputHtml = markdownIt.render(text);
          result.didProcess = true;
        };
      } else {
        adaptiveCard.constructor.onProcessMarkdown = undefined;
      }

      const content = JSON.parse(json);
      const serializationContext = new SerializationContext();

      adaptiveCard.parse(content, serializationContext);

      const { eventCount } = serializationContext;
      const { validationEvents } = adaptiveCard.validateProperties();

      if (eventCount) {
        let errors = [];

        for (let i = 0; i < eventCount; i++) {
          errors.push(serializationContext.getEventAt(i));
        }

        return { error: errors.join(', ') };
      }

      return { adaptiveCard, validationEvents };
    } catch (err) {
      return { error: err.message };
    }
  }, [hostConfig, json, markdownIt]);

  useEffect(() => {
    if (!adaptiveCard) {
      return;
    }

    const { current: adaptiveCardContent } = adaptiveCardContentRef;
    const element = adaptiveCard.render();

    while (adaptiveCardContent.children.length) {
      adaptiveCardContent.removeChild(adaptiveCardContent.children[0]);
    }

    adaptiveCardContent.appendChild(element);
  }, [adaptiveCard, adaptiveCardContentRef]);

  return (
    <div className={classNames('ac-render-panel', className)}>
      <div className="ac-render-panel__section ac-render-panel__button-bar">
        <h2 className="ac-render-panel__header">Options</h2>
        <div className="ac-render-panel__option">
          <label>
            <input type="checkbox" checked={enableMarkdown} onChange={handleEnableMarkdownChange} />
            Enable Markdown
          </label>
        </div>
        <div className="ac-render-panel__option">
          <label>
            <input type="checkbox" checked={enableHostConfig} onChange={handleEnableHostConfigChange} />
            Use Adaptive Cards host config from Web Chat
          </label>
        </div>
      </div>
      {error ? (
        <div className="ac-render-panel__section ac-render-panel__error">
          <h2 className="ac-render-panel__header">Fatal error</h2>
          <div className="ac-render-panel__error-message">{error}</div>
        </div>
      ) : (
        <div className="ac-render-panel__section">
          <h2 className="ac-render-panel__header">Rendering</h2>
          <div className="ac-render-panel__adaptive-card" ref={adaptiveCardContentRef} />
          {!!validationEvents.length && (
            <div>
              <h2 className="ac-render-panel__header">Validation issues (non-fatal)</h2>
              <ul className="ac-render-panel__validation-events-list">
                {validationEvents.map(({ message }, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdaptiveCardRenderPanel;
