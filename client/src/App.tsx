import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import TestComponent from './components/testComponent/testComponent';

const App: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setUsername(user.username));
  }, []);

  return (
    <>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <TestComponent />
    </>
  );
};

export default hot(App);
