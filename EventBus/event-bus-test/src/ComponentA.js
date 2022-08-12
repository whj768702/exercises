import { useState } from 'react';
import EVENTBUS from './EventBus.js';

const ComponentA = () => {
  const [msg] = useState('component a');
  
  const handleClick = () => {
    EVENTBUS.$emit('msg', 'component a');
  }
  return (
    <div>
      <h1>ComponentA</h1>
      <div>msg: {msg}</div>
      <button onClick={handleClick}>pass msg to component b</button>
    </div>
  );
};

export default ComponentA;