import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';

const Greeting3 = () => {
  const greetingData = useContext(GreetingContext);

  return (
    <section>
      <h1>Greeting 3</h1>
      <article>
        <p><strong>{greetingData.greeting}</strong></p>
        <p>Name: {greetingData.name}</p>
        <img src={greetingData.imageUrl} alt="User" style={{ border: '1px solid black' }} />
        <ul>
          <li>{greetingData.text1}</li>
          <li>{greetingData.text2}</li>
        </ul>
      </article>
    </section>
  );
};

export default Greeting3;
