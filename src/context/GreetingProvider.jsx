import React, { useState } from 'react';
import { GreetingContext } from './GreetingContext';

/**
 * @typedef {Object} Experience
 * @property {string} company
 * @property {string} role
 * @property {string} period
 * @property {string} description
 */

/**
 * @typedef {Object} Education
 * @property {string} school
 * @property {string} degree
 * @property {string} year
 */

/**
 * @typedef {Object} Greeting
 * @property {string} name
 * @property {string} title
 * @property {string} greeting
 * @property {string} imageUrl
 * @property {string} text1
 * @property {string} text2
 * @property {string} email
 * @property {string} phone
 * @property {string} address
 * @property {string[]} skills
 * @property {Experience[]} experience
 * @property {Education[]} education
 */

/** @type {Greeting} */
const defaultGreeting = {
  name: "John Doe",
  title: "Full Stack Developer",
  greeting: "Hello there!",
  imageUrl: "https://via.placeholder.com/150",
  text1: "I am a passionate developer with experience in building modern web applications.",
  text2: "I specialize in React, Node.js, and cloud technologies.",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Avenue, San Francisco, CA",
  skills: ["React", "JavaScript", "TypeScript", "Node.js", "CSS/Tailwind", "PostgreSQL", "Docker", "AWS"],
  experience: [
    {
      company: "Tech Innovators Inc.",
      role: "Senior Software Engineer",
      period: "2021 - Present",
      description: "Leading the development of a high-traffic e-commerce platform using React and Microservices architecture."
    },
    {
      company: "Web Solutions Co.",
      role: "Software Developer",
      period: "2018 - 2021",
      description: "Developed and maintained various client websites and internal tools using modern JavaScript frameworks."
    }
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "B.S. in Computer Science",
      year: "2018"
    }
  ]
};

export const GreetingProvider = ({ children }) => {
  const [greetingData] = useState(defaultGreeting);

  return (
    <GreetingContext.Provider value={greetingData}>
      {children}
    </GreetingContext.Provider>
  );
};
