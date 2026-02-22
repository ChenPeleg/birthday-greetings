import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';

const Greeting1 = () => {
  const { name, greeting, imageUrl, title, email, phone, address, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="max-w-[1000px] mx-auto bg-white text-[#333] shadow-[0_0_20px_rgba(0,0,0,0.1)] flex flex-col md:flex-row min-h-[1000px] text-left font-sans">
      <aside className="w-full md:w-[300px] bg-[#2c3e50] text-[#ecf0f1] p-[40px] px-[30px]">
        <img src={imageUrl} alt={name} className="w-[150px] h-[150px] rounded-full border-[5px] border-[#34495e] mx-auto mb-[30px] object-cover" />

        <div className="mb-10">
          <div className="mb-[10px] text-[0.9rem] break-all">{email}</div>
          <div className="mb-[10px] text-[0.9rem] break-all">{phone}</div>
          <div className="mb-[10px] text-[0.9rem] break-all">{address}</div>
        </div>

        <div className="mb-10">
          <h3 className="border-b border-[#5d6d7e] pb-[10px] mb-[15px] uppercase text-[1.1rem] tracking-[1px]">Skills</h3>
          <ul className="list-none p-0">
            {skills.map((skill, index) => (
              <li key={index} className="mb-2 text-[0.95rem]">{skill}</li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-[30px] md:p-[50px]">
        <header className="mb-10 border-b-2 border-[#eee] pb-5">
          <h1 className="text-[3rem] m-0 text-[#2c3e50] font-bold leading-[1.1]">{name}</h1>
          <p className="text-[1.5rem] text-[#7f8c8d] mt-[5px] m-0">{title}</p>
        </header>

        <section className="mb-10">
          <h2 className="text-[#2c3e50] uppercase text-[1.4rem] mb-5 border-l-[5px] border-[#2c3e50] pl-[15px]">Professional Summary</h2>
          <p>{greeting}</p>
          <p>{text1}</p>
          <p>{text2}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-[#2c3e50] uppercase text-[1.4rem] mb-5 border-l-[5px] border-[#2c3e50] pl-[15px]">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-[25px]">
              <div className="flex justify-between font-bold mb-[5px] text-[#34495e]">
                <span>{exp.role}</span>
                <span>{exp.period}</span>
              </div>
              <div className="text-[#7f8c8d] mb-[10px]">{exp.company}</div>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-[#2c3e50] uppercase text-[1.4rem] mb-5 border-l-[5px] border-[#2c3e50] pl-[15px]">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-[25px]">
              <div className="flex justify-between font-bold mb-[5px] text-[#34495e]">
                <span>{edu.degree}</span>
                <span>{edu.year}</span>
              </div>
              <div className="text-[#7f8c8d]">{edu.school}</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Greeting1;
