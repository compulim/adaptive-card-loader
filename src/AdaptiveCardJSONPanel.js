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

  const handlePrettify = useCallback(() => {
    onChange(JSON.stringify(parse(valueRef.current || ''), null, 2) + '\n');
  }, [onChange, valueRef]);

  return (
    <div className="ac-json-panel">
      <div className="ac-json-panel--buttons">
        <button onClick={handlePrettify}>Make it pretty</button>
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
