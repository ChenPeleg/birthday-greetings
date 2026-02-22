import React, { useContext } from 'react';
import { GreetingContext } from '../context/GreetingContext';

const Greeting3 = () => {
  const { name, greeting, title, email, phone, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="bg-[#0f172a] text-[#e2e8f0] min-h-screen p-[50px_20px] font-mono text-left">
      <div className="max-w-[850px] mx-auto bg-[#1e293b] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-[#334155]">
        <header className="p-5 md:p-10 border-b border-[#334155] bg-[#0f172a]">
          <h1 className="text-[#10b981] text-[1.8rem] md:text-[2.5rem] m-0 font-bold">{name}</h1>
          <p className="text-[#38bdf8] text-[1.2rem] mt-[10px] mb-5">&gt; {title}</p>
          <div className="text-[0.85rem] text-[#94a3b8] flex flex-wrap gap-5">
            <span>[ EMAIL: {email} ]</span>
            <span>[ PHONE: {phone} ]</span>
          </div>
        </header>

        <div className="p-5 md:p-10">
          <div className="text-[#94a3b8] mb-10 leading-relaxed p-5 bg-[#0f172a]/50 rounded border-l-4 border-[#10b981]">
            <p>// {greeting}</p>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>

          <section className="mb-[50px]">
            <span className="text-[#10b981] text-[1.4rem] mb-[25px] font-semibold block">01_SKILLS.sh</span>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px]">
              {skills.map((skill, index) => (
                <div key={index} className="text-[#38bdf8]">* {skill}</div>
              ))}
            </div>
          </section>

          <section className="mb-[50px]">
            <span className="text-[#10b981] text-[1.4rem] mb-[25px] font-semibold block">02_EXPERIENCE.exe</span>
            {experience.map((exp, index) => (
              <div key={index} className="mb-[35px]">
                <div className="mb-[10px] flex justify-between items-center flex-wrap gap-2">
                  <h4 className="m-0 text-[#f8fafc] text-[1.1rem] font-bold">{exp.role}</h4>
                  <span className="text-[#10b981] text-[0.9rem]">[{exp.period}]</span>
                </div>
                <p className="my-[5px] text-[#94a3b8]">@ {exp.company}</p>
                <p className="my-[5px] text-[#94a3b8]">&gt; {exp.description}</p>
              </div>
            ))}
          </section>

          <section className="mb-[50px]">
            <span className="text-[#10b981] text-[1.4rem] mb-[25px] font-semibold block">03_EDUCATION.cfg</span>
            {education.map((edu, index) => (
              <div key={index} className="mb-[35px]">
                <div className="mb-[10px] flex justify-between items-center flex-wrap gap-2">
                  <h4 className="m-0 text-[#f8fafc] text-[1.1rem] font-bold">{edu.degree}</h4>
                  <span className="text-[#10b981] text-[0.9rem]">{edu.year}</span>
                </div>
                <p className="my-[5px] text-[#94a3b8]">- {edu.school}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Greeting3;
