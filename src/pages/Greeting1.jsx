import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';
import '../styles/CV.css';

const Greeting1 = () => {
  const { name, greeting, imageUrl, title, email, phone, address, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="cv1-container">
      <aside className="cv1-sidebar">
        <img src={imageUrl} alt={name} className="cv1-profile-img" />

        <div className="cv1-contact-section">
          <div className="cv1-contact-item">{email}</div>
          <div className="cv1-contact-item">{phone}</div>
          <div className="cv1-contact-item">{address}</div>
        </div>

        <div className="cv1-sidebar-section">
          <h3>Skills</h3>
          <ul className="cv1-skill-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="cv1-main">
        <header className="cv1-header">
          <h1 className="cv1-name">{name}</h1>
          <p className="cv1-title">{title}</p>
        </header>

        <section className="cv1-section">
          <h2 className="cv1-section-title">Professional Summary</h2>
          <p>{greeting}</p>
          <p>{text1}</p>
          <p>{text2}</p>
        </section>

        <section className="cv1-section">
          <h2 className="cv1-section-title">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="cv1-exp-item">
              <div className="cv1-exp-header">
                <span>{exp.role}</span>
                <span>{exp.period}</span>
              </div>
              <div style={{ color: '#7f8c8d', marginBottom: '10px' }}>{exp.company}</div>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="cv1-section">
          <h2 className="cv1-section-title">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="cv1-edu-item">
              <div className="cv1-exp-header">
                <span>{edu.degree}</span>
                <span>{edu.year}</span>
              </div>
              <div style={{ color: '#7f8c8d' }}>{edu.school}</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Greeting1;
