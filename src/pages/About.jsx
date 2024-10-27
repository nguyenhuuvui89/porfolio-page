import largBird from '../assets/pic/Large_Blue_Bird_PNG_Cartoon_Clipart.png';
import bottomCloud from '../assets/pic/pngegg.png';
import mountain from '../assets/pic/—9014431.png';
import skill from '../assets/pic/skills.png';
import business from '../assets/pic/business-analyst.png';
import me from '../assets/pic/ImageVui.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {experiences} from '../documents';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="main_con">
      <section className="intro">
        <img className="bird" src={largBird} alt="bird" />
        <h1 className="name">Vincent Nguyen</h1>
        {/* <p className="job-title">a Petroleum Engineer</p> */}
        <img className="bottom-cloud" src={bottomCloud} alt="cloud" />
        <img className="mountain" src={mountain} alt="mountain" />
        <hr />

        <div className="summary">
          <h2>Hello</h2>
          <p>
            {/* With 10+ years of experience, I have gained my knowledge in well
            drilling field engineer, data analysis, test engineering and
            manufacturing production supervisor. My technical support skills
            enable me to solve complex issues, while my data interpretation and
            analysis abilities help me drive successful business solutions. I
            also have a chance to work with many different people who are from
            different countries. */}
          </p>
        </div>
        <div className="mt-120 flex ">
          <VerticalTimeline>
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.id}
                date={<span style={{ margin: '20px' }}>{exp.date}</span>}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: exp.iconBg }}
                contentStyle={{
                  padding: "20px 30px 20px 50px",
                  borderBottom: "5px",
                  borderStyle: "solid",
                  borderColor: exp.iconBg,
                }}
                contentArrowStyle={{ borderRight: `7px solid ${exp.iconBg}` }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {exp.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {exp.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.responsible.map((res, i) => (
                    <li
                      key={`experience-res-${i}`}
                      className="text-black-500/50 font-normal pl- text-medium text-justify"
                    >
                      {res}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
      <section className="skill">
      <img className="skill-pic " src={me} alt="skill photo" style={{ paddingBottom: '20px' }}/>
    <h2>About Me</h2>
    <div className="skill-content">
        <img className="skill-pic" src={skill} alt="skill photo" />
        <div className="text">
            <h3>Who I Am</h3>
            <p>
                I am a passionate individual with a love for technology and continuous learning. 
            </p>
            <p>
            I enjoy exploring new places, trying diverse cuisines. 
            </p>
            <p>
            Outside of work, you can find me hiking, running, playing game and cooking with my family.
            </p>
        </div>
    </div>
    <div className="skill-content">
        <div className="text">
            <h3>My Interests</h3>
            <p>
                I have a keen interest in data science, software development, and innovative technologies. 
                
            </p>
        </div>
        <img className="busi-pic" src={business} alt="interest photo" />
    </div>
    <div className="contact-me">
        <h2>Get In Touch</h2>
        <p className="mes">
        I love connecting! Whether for work or just to chat, feel free to reach out!
        </p>
        <Link to="/contact" className="btn_2">
            Contact Me
        </Link>
    </div>
</section>

    </main>
  );
}

export default About
