import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';

const Greeting1 = () => {
  const greetingData = useContext(GreetingContext);

  return (
    <div>
      <h1>Greeting 1</h1>
      <h2>{greetingData.greeting}, {greetingData.name}!</h2>
      <img src={greetingData.imageUrl} alt={greetingData.name} style={{ width: '150px' }} />
      <p>{greetingData.text1}</p>
      <p>{greetingData.text2}</p>
    </div>
  );
};

export default Greeting1;
