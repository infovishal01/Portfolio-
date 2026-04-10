import "./About.scss";


const About = () => {
  return (
    <div className="details__section">
      
      {/* ABOUT SECTION */}
      <div className="about">
        <h1>About Me</h1>

        <div className="about__container">
          <div className="about__info">

            <p>
              I am Vishal Kumar, a passionate Full Stack Developer, Competitive Programmer, 
              and AI/ML enthusiast currently pursuing B.Tech in Computer Science & Engineering 
              from Maharishi Markandeshwar Deemed To Be University, Ambala (2021 – 2025).
            </p>

            <p>
              I specialize in building scalable web applications and intelligent systems using 
              technologies like MERN Stack, AI/ML models, and cloud platforms such as AWS and GCP. 
              I enjoy solving real-world problems through clean and efficient code.
            </p>

            <p>
              I have hands-on experience working as an AI/ML Intern at <strong>IIOT Infotech</strong> 
              and currently working as an Analyst in AI/LLM Practice at <strong>Innodata India</strong>, 
              where I worked on machine learning models, data annotation, and real-world AI solutions 
              including computer vision and anomaly detection.
            </p>

            <p>
              My goal is to become a skilled software engineer and contribute to innovative products 
              that create real impact in the tech industry.
            </p>


          </div>

          {/* IMAGE */}
          {/* <div className="about__image">
            <img src="https://via.placeholder.com/150" alt="" />
          </div> */}
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="skills">
        <div className="skills__container">
          <h1>Skills</h1>

          <div className="skill__cards">

            <div className="skill__card" style={{ backgroundColor: "#cf92fb" }}>
              <h2>Languages</h2>
              <p>C++</p>
              <p>JavaScript</p>
              <p>SQL</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>

            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Frameworks</h2>
              <p>React JS</p>
              <p>Express JS</p>
              <p>Node JS</p>
              <p>REST API</p>
            </div>

            <div className="skill__card" style={{ backgroundColor: "#911ae5" }}>
              <h2>Developer Tools</h2>
              <p>Docker</p>
              <p>Git</p>
              <p>GitHub</p>
              <p>Postman</p>
              <p>Firebase</p>
              <p>AWS</p>
              <p>Tailwind CSS</p>
            </div>

            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Coursework</h2>
              <p>Computer Networks</p>
              <p>OOP</p>
              <p>DBMS</p>
              <p>Operating Systems</p>
              <p>Algorithms</p>
            </div>

            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Database</h2>
              <p>MySQL</p>
              <p>MongoDB</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;