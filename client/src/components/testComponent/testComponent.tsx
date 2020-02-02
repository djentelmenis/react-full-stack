import React from 'react';
import ReactImage from '../../../public/img/react.png';

import './testComponent.scss';

const TestComponent: React.FC = (): JSX.Element => {
  return (
    <>
      <img src={ReactImage} alt="react" />
    </>
  );
};

export default TestComponent;
