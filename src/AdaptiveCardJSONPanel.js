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

  return <textarea className={classNames('ac-json-panel', className)} onChange={handleChange} value={value} />;
};

export default AdaptiveCardJSONPanel;
