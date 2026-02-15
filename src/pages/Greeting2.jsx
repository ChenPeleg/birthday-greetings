import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';

const Greeting2 = () => {
  const greetingData = useContext(GreetingContext);

  return (
    <div>
      <h1>2 Greeting</h1>
      <h2>{greetingData.greeting}</h2>
      <h3>Name: {greetingData.name}</h3>
      <img src={greetingData.imageUrl} alt="profile" height="100" />
      <div>
        <span>{greetingData.text1}</span>
        <br />
        <span>{greetingData.text2}</span>
      </div>
    </div>
  );
};

export default Greeting2;
