import React from "react";
import Banner from "../banner/my.webp";
const Home = () => {
  return (
    <>
      <div className=" ">
        <div className="head-1 d-flex flex-column flex-sm-row flex-md-row grid mt-5">
          <div className="  col-md-12 col-lg-6 col-sm-12 col-12">
            <div className="first">
              <p className="fs-3">Welcome To My Portfolio</p>
              <h1
                className="display-1"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                HI,I'M SIVA
              </h1>
              <p
                className="display-5"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                I'm Frontend Developer...........
              </p>
            </div>
          </div>
          <div className=" col-12 col-md-12 col-lg-6 col-sm-12">
            <div
              className=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={Banner} alt="images" className="photo"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="head-2" data-aos="zoom-in-up" data-aos-duration="1000">
        <h1 className="display-5 text-center fw-bold fs-1">TOUCHING ON</h1>

        <div className="para">
          <h1 className="text-center">school life</h1>
          <div className="container">
            <p className="fst-italic ">
              Absolutely! Here's a simple paragraph highlighting the positive
              aspects of My school: "Being a student at [Seventh-day Adventist
              (SDA)] has been an incredible journey of learning, growth, and
              enjoyment. The welcoming atmosphere, dedicated teachers, and
              vibrant community make every day at [Seventh-day Adventist (SDA)]
              a rewarding experience. The commitment to academic excellence,
              coupled with a focus on character development, has provided me
              with a solid foundation for success. I genuinely enjoy my time
              here, and
              <mark>
                {" "}
                my main love life start on the school life,and good friendships
                zone also.
              </mark>
              the support from both peers and faculty has been instrumental in
              my academic achievements and personal growth. [Seventh-day
              Adventist (SDA)] is more than just a school; it's a place where
              learning is enjoyable, friendships are formed, and success is
              nurtured."
            </p>
          </div>
        </div>
        <div className="para-1">
          <h1 className="text-center">college life</h1>
          <div className="container">
            <p className="fst-italic">
              "Embraced by the picturesque landscapes of Theni, Bharath Niketan
              Engineering College transforms into more than just an educational
              institution; it becomes a sanctuary where my academic journey and
              student life harmoniously unfold amidst the scenic beauty of this
              tranquil region. Life at Bharath Niketan is a vibrant blend of
              intellectual exploration, the camaraderie of student interactions,
              and the gentle rhythms of Theni's natural splendor, creating an
              atmosphere where each lesson is not just learned but experienced.
              <mark>
                And my college life one of most beautyfull memorable create by
                my friendships,I really like good vibes"
              </mark>
              As the chapters of my college life intertwine with the beauty of
              Theni, I find inspiration in both the hallowed halls of learning
              and the breathtaking surroundings, making my academic adventure
              and student experiences at Bharath Niketan truly unique and
              enriching.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="head-3" data-aos="zoom-in-up" data-aos-duration="1000">
          <h5 className="text-uppercase text-center">
            interested in full stack developedment
          </h5>
          <p className="para-4">
            Absolutely! Crafting a captivating and stylish statement for your
            website can make a strong impression. Here's a Bond-inspired phrase
            for your interest in full-stack development: "License to Code: I'm
            not just interested; I'm on a mission to master the art of Full
            Stack Development. Shaken by challenges, stirred by innovation, I
            embark on a journey where front-end elegance meets back-end prowess.
            Welcome to my realm, where every line of code is a secret agent for
            seamless digital experiences. In the world of development, I have a
            license to thrill."
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
