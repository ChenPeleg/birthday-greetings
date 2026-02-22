import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';

const Greeting2 = () => {
  const { name, greeting, imageUrl, title, email, phone, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="max-w-[1100px] mx-auto my-5 bg-[#f8fafc] font-sans text-left">
      <header className="bg-linear-to-br from-[#4f46e5] to-[#7c3aed] text-white p-[60px_40px] flex flex-col md:flex-row items-center gap-10 rounded-none">
        <img src={imageUrl} alt={name} className="w-[180px] h-[180px] rounded-[30px] border-[6px] border-white/20 object-cover" />
        <div>
          <h1 className="text-[3.5rem] m-0 font-extrabold leading-tight">{name}</h1>
          <p className="text-[1.5rem] opacity-90 mt-[10px] m-0">{title}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[30px] p-[30px]">
        <aside>
          <div className="bg-white p-[25px] rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] mb-[25px]">
            <h3 className="mt-0 text-[#1e293b] text-[1.25rem] border-b-2 border-[#f1f5f9] pb-[10px] mb-5 font-bold">Contact</h3>
            <ul className="list-none p-0">
              <li className="mb-3 text-[0.95rem] text-[#475569]">📧 {email}</li>
              <li className="mb-3 text-[0.95rem] text-[#475569]">📱 {phone}</li>
            </ul>
          </div>

          <div className="bg-white p-[25px] rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] mb-[25px]">
            <h3 className="mt-0 text-[#1e293b] text-[1.25rem] border-b-2 border-[#f1f5f9] pb-[10px] mb-5 font-bold">Skills</h3>
            <div className="flex flex-wrap gap-[10px]">
              {skills.map((skill, index) => (
                <span key={index} className="bg-[#eef2ff] text-[#4f46e5] px-[14px] py-1.5 rounded-full text-[0.85rem] font-semibold">{skill}</span>
              ))}
            </div>
          </div>
        </aside>

        <main>
          <section className="mb-[30px]">
            <h2 className="text-[#1e293b] text-[1.75rem] mb-[25px] flex items-center after:content-[''] after:flex-1 after:h-[2px] after:bg-[#f1f5f9] after:ml-5 font-bold">About Me</h2>
            <div className="bg-white p-[25px] rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] mb-[25px]">
              <p><strong>{greeting}</strong></p>
              <p>{text1} {text2}</p>
            </div>
          </section>

          <section className="mb-[30px]">
            <h2 className="text-[#1e293b] text-[1.75rem] mb-[25px] flex items-center after:content-[''] after:flex-1 after:h-[2px] after:bg-[#f1f5f9] after:ml-5 font-bold">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-[30px] mb-[30px] border-l-2 border-[#e2e8f0] before:content-[''] before:absolute before:left-[-7px] before:top-0 before:w-3 before:h-3 before:rounded-full before:bg-[#7c3aed] before:border-2 before:border-white">
                <div className="mb-[10px]">
                  <h4 className="m-0 text-[1.2rem] text-[#1e293b] font-bold">{exp.role}</h4>
                  <span className="text-[0.9rem] text-[#7c3aed] font-semibold">{exp.period}</span>
                </div>
                <div className="text-[#64748b] mb-[10px]">{exp.company}</div>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>

          <section className="mb-[30px]">
            <h2 className="text-[#1e293b] text-[1.75rem] mb-[25px] flex items-center after:content-[''] after:flex-1 after:h-[2px] after:bg-[#f1f5f9] after:ml-5 font-bold">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="relative pl-[30px] mb-[30px] border-l-2 border-[#e2e8f0] before:content-[''] before:absolute before:left-[-7px] before:top-0 before:w-3 before:h-3 before:rounded-full before:bg-[#7c3aed] before:border-2 before:border-white">
                <div className="mb-[10px]">
                  <h4 className="m-0 text-[1.2rem] text-[#1e293b] font-bold">{edu.degree}</h4>
                  <span className="text-[0.9rem] text-[#7c3aed] font-semibold">{edu.year}</span>
                </div>
                <div className="text-[#64748b]">{edu.school}</div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Greeting2;
