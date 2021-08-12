import { parse } from 'json5';
import { useCallback, useRef } from 'react';
import classNames from 'classnames';

import './AdaptiveCardJSONPanel.css';

const AdaptiveCardJSONPanel = ({ className, onChange, value }) => {
  const valueRef = useRef();

  valueRef.current = value;

  const handleChange = useCallback(
    ({ target: { value } }) => {
      onChange && onChange(value);
    },
    [onChange]
  );

  const handleLoadHelloWorld = useCallback(() => {
    onChange(
      JSON.stringify(
        {
          type: 'AdaptiveCard',
          body: [
            {
              text: 'Hello, World!',
              type: 'TextBlock'
            }
          ]
        },
        null,
        2
      )
    );
  }, [onChange]);

  const handlePrettify = useCallback(() => {
    onChange(JSON.stringify(parse(valueRef.current || ''), null, 2) + '\n');
  }, [onChange, valueRef]);

  return (
    <div className="ac-json-panel">
      <div className="ac-json-panel--buttons">
        <button className="ac-json-panel--button" onClick={handlePrettify}>Make it pretty</button>
        <button className="ac-json-panel--button" onClick={handleLoadHelloWorld}>Load a Hello World</button>
      </div>
      <textarea
        className={classNames('ac-json-panel__text-area', className)}
        onChange={handleChange}
        spellCheck="false"
        value={value}
      />
    </div>
  );
};

export default AdaptiveCardJSONPanel;
