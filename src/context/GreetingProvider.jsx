import React, { useState } from 'react';
import { GreetingContext } from './GreetingContext';

/**
 * @typedef {Object} Greeting
 * @property {string} name
 * @property {string} greeting
 * @property {string} imageUrl
 * @property {string} text1
 * @property {string} text2
 */

/** @type {Greeting} */
const defaultGreeting = {
  name: "John Doe",
  greeting: "Hello there!",
  imageUrl: "https://via.placeholder.com/150",
  text1: "Welcome to our application.",
  text2: "We are glad to have you here."
};

export const GreetingProvider = ({ children }) => {
  const [greetingData] = useState(defaultGreeting);

  return (
    <GreetingContext.Provider value={greetingData}>
      {children}
    </GreetingContext.Provider>
  );
};
