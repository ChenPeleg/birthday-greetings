import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';
import '../styles/CV.css';

const Greeting3 = () => {
  const { name, greeting, title, email, phone, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="cv3-container">
      <div className="cv3-terminal">
        <header className="cv3-header">
          <h1 className="cv3-name">{name}</h1>
          <p className="cv3-title">&gt; {title}</p>
          <div className="cv3-contact">
            <span>[ EMAIL: {email} ]</span>
            <span>[ PHONE: {phone} ]</span>
          </div>
        </header>

        <div className="cv3-body">
          <div className="cv3-summary">
            <p>// {greeting}</p>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>

          <section className="cv3-section">
            <span className="cv3-section-title">01_SKILLS.sh</span>
            <div className="cv3-grid">
              {skills.map((skill, index) => (
                <div key={index} className="cv3-skill-item">* {skill}</div>
              ))}
            </div>
          </section>

          <section className="cv3-section">
            <span className="cv3-section-title">02_EXPERIENCE.exe</span>
            {experience.map((exp, index) => (
              <div key={index} className="cv3-exp-item">
                <div className="cv3-exp-header">
                  <h4>{exp.role}</h4>
                  <span>[{exp.period}]</span>
                </div>
                <p>@ {exp.company}</p>
                <p>&gt; {exp.description}</p>
              </div>
            ))}
          </section>

          <section className="cv3-section">
            <span className="cv3-section-title">03_EDUCATION.cfg</span>
            {education.map((edu, index) => (
              <div key={index} className="cv3-edu-item">
                <div className="cv3-exp-header">
                  <h4>{edu.degree}</h4>
                  <span>{edu.year}</span>
                </div>
                <p>- {edu.school}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Greeting3;
