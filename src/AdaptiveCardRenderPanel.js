import { AdaptiveCard, SerializationContext } from 'adaptivecards';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import MarkdownIt from 'markdown-it';
import JSON from 'json5';

import './AdaptiveCardRenderPanel.css';

import useSessionState from './useSessionState';

const AdaptiveCardRenderPanel = ({ className, json }) => {
  const [rawEnableMarkdown, setRawEnableMarkdown] = useSessionState('false', 'ENABLE_MARKDOWN');
  const adaptiveCardContentRef = useRef();

  const enableMarkdown = rawEnableMarkdown === 'true';
  const setEnableMarkdown = useCallback(value => setRawEnableMarkdown(!!value + ''), [setRawEnableMarkdown]);

  const handleEnableMarkdownChange = useCallback(
    ({ target: { checked } }) => {
      setEnableMarkdown(checked);
    },
    [setEnableMarkdown]
  );

  const markdownIt = useMemo(() => enableMarkdown && new MarkdownIt(), [enableMarkdown]);

  const { adaptiveCard, error } = useMemo(() => {
    try {
      const adaptiveCard = new AdaptiveCard();

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

      if (eventCount) {
        let errors = [];

        for (let i = 0; i < eventCount; i++) {
          errors.push(serializationContext.getEventAt(i));
        }

        return { error: errors.join(', ') };
      }

      return { adaptiveCard };
    } catch (err) {
      return { error: err.message };
    }
  }, [json, markdownIt]);

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
      <div className="ac-render-panel__button-bar">
        <label>
          <input type="checkbox" checked={enableMarkdown} onChange={handleEnableMarkdownChange} />
          Enable Markdown
        </label>
      </div>
      {error ? (
        <div className="ac-render-panel__error">{error}</div>
      ) : (
        <div className="ac-render-panel__adaptive-card" ref={adaptiveCardContentRef} />
      )}
    </div>
  );
};

export default AdaptiveCardRenderPanel;
