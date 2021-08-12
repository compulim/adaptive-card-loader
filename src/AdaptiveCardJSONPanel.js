import { parse } from 'json5';
import { useCallback } from 'react';
import classNames from 'classnames';

import './AdaptiveCardJSONPanel.css';

const AdaptiveCardJSONPanel = ({ className, onChange, value }) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      onChange && onChange(value);
    },
    [onChange]
  );

  const handlePrettify = useCallback(() => {
    onChange(JSON.stringify(parse(value), null, 2) + '\n');
  }, [onChange]);

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
