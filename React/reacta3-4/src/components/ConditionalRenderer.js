import React, { useState } from 'react';

const ConditionalRenderer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div>
        {isVisible ? 'Component is Visible' : 'Component is Hidden'}
      </div>
      <button onClick={toggleVisibility}>
        Toggle Visibility
      </button>
    </div>
  );
};

export default ConditionalRenderer;
