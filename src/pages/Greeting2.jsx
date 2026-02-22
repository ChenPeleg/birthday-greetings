import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';
import '../styles/CV.css';

const Greeting2 = () => {
  const { name, greeting, imageUrl, title, email, phone, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="cv2-container">
      <header className="cv2-header">
        <img src={imageUrl} alt={name} className="cv2-profile-img" />
        <div className="cv2-header-content">
          <h1 className="cv2-name">{name}</h1>
          <p className="cv2-title">{title}</p>
        </div>
      </header>

      <div className="cv2-main">
        <aside className="cv2-sidebar">
          <div className="cv2-card">
            <h3>Contact</h3>
            <ul className="cv2-contact-list">
              <li>📧 {email}</li>
              <li>📱 {phone}</li>
            </ul>
          </div>

          <div className="cv2-card">
            <h3>Skills</h3>
            <div className="cv2-skill-tags">
              {skills.map((skill, index) => (
                <span key={index} className="cv2-tag">{skill}</span>
              ))}
            </div>
          </div>
        </aside>

        <main className="cv2-content">
          <section className="cv2-section">
            <h2>About Me</h2>
            <div className="cv2-card">
              <p><strong>{greeting}</strong></p>
              <p>{text1} {text2}</p>
            </div>
          </section>

          <section className="cv2-section">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="cv2-exp-item">
                <div className="cv2-exp-header">
                  <h4>{exp.role}</h4>
                  <span>{exp.period}</span>
                </div>
                <div style={{ color: '#64748b', marginBottom: '10px' }}>{exp.company}</div>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>

          <section className="cv2-section">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="cv2-edu-item">
                <div className="cv2-exp-header">
                  <h4>{edu.degree}</h4>
                  <span>{edu.year}</span>
                </div>
                <div style={{ color: '#64748b' }}>{edu.school}</div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Greeting2;
