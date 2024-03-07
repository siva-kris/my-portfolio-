import React from "react";
import Banner from "../banner/myyy.webp";

const About = () => {
  return (
    <>
      <div
        className="card mb-3 container object-fit-cover"
        style={{ maxwidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4 object-fit-contain">
            <div className="object-fit-contain loc ">
              <div className="loc">
                <img
                  src={Banner}
                  className="img-fluid rounded-start object-fit-cover banner-1"
                  alt="Your "
                ></img>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="page-1">
              <div className="card-body ">
                <h5 className="card-title">MY INTRO.......... </h5>
                <p className="card-text ">
                  <span className="tit">introduction:"</span>
                  <span className="tit-1">
                    Start with a brief introduction about myself.hi,
                    <mark>I'm Siva,B.E-Computer science and Engineering</mark>
                    and any relevant experiences that led you to pursue frontend
                    development. <span className="tit-2">"</span>
                  </span>
                  <br></br>
                  <br></br>
                  <p>
                    <span className="tit">
                      Passion for Frontend Development:"
                    </span>
                    <span className="tit-1">
                      Frontend development is not just a career path for me;
                      it's a journey fueled by an unbridled passion for crafting
                      digital experiences that resonate and captivate. The
                      ability to bring ideas to life, shaping the visual and
                      interactive aspects of a website or application, is what
                      ignites my enthusiasm for frontend development. The
                      ever-evolving landscape of web technologies, from the
                      elegance of HTML and CSS to the dynamism of JavaScript,And
                      my future career on Full stack developer.
                      <span className="tit-2">"</span>
                    </span>
                  </p>
                  <p>
                    <span className="tit">Skills and Technologies:"</span>
                    <span className="tit-1">
                      I bring a holistic approach to web development, proficient
                      in both frontend and backend technologies. From crafting
                      immersive user interfaces with HTML, CSS, and
                      JavaScript.with . My skills extend to database management,
                      API design, and the seamless integration of diverse
                      technologies, ensuring end-to-end functionality and
                      optimal user experiences. With expertise in frameworks
                      like React and Express, coupled with a knack for database
                      systems like MongoDB. I navigate the complexities of
                      full-stack development to deliver comprehensive and
                      scalable solutions. Whether it's shaping the user
                      interface or optimizing server performance, I thrive in
                      creating cohesive and dynamic web applications.
                      <span className="tit-2">"</span>
                    </span>
                  </p>
                  <p>
                    <span className="tit">Personal Touch:"</span>
                    <span className="tit-1">
                      For me, web development is more than just writing lines of
                      code; it's about infusing a piece of myself into every
                      project. Each design element, animation, or interactive
                      feature is a reflection of my creative spirit and
                      dedication to making the digital experience memorable. I
                      take pride in bringing a personal touch to my work, It's
                      about understanding that behind every click is a person,
                      and my goal is to create websites and applications that
                      not only function seamlessly but also resonate on a
                      personal level.
                      <span className="tit-2">"</span>
                    </span>
                  </p>
                  <p>
                    <span className="tit"> Future Goals:"</span>
                    <span className="tit-1">
                      Currently focused on frontend development, I aspire to
                      evolve into a versatile full-stack developer, seamlessly
                      blending technical expertise with a keen eye for UI/UX
                      design to create holistic and engaging digital
                      experiences. My journey aims to bridge the gap between
                      functionality and aesthetics, contributing to innovative
                      and user-centric solutions.
                      <span className="tit-2">"</span>
                    </span>
                  </p>
                  <p>
                    <span className="tit"> Contact Information:"</span>
                    <span className="tit-1">
                      Include a way for visitors to reach out to you, whether
                      it's through[sivakps00@gmail.com],instagram[__siva.er__],
                      or a contact form.
                      <span className="tit-2">"</span>
                    </span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
