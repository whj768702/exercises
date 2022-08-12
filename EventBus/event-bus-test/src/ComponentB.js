import { useEffect, useState } from 'react';
import EVENTBUS from './EventBus';

const ComponentB = () => {
  const [msg, setMsg] = useState('component b');

  useEffect(() => {
    EVENTBUS.$on('msg', (msg) => {
      setMsg(msg);
    });
  }, []);

  return (
    <div>
      <h1>ComponentB</h1>
      <div>msg: {msg}</div>
    </div>
  );
};

export default ComponentB;
