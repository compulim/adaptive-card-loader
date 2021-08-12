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

  return (
    <div className="ac-json-panel">
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
