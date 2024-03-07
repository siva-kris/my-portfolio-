import React from "react";
import H from "../banner/th(1).jpeg";
import C from "../banner/th(2).png";
import Javascript from "../banner/th(3).jpg";
import Boot from "../banner/th(4).jpg";
import Laibary from "../banner/th(8).jpg";
import Expre from "../banner/th(5).png";
import P from "../banner/th(6).png";
import M from "../banner/th(7).png";
import N from "../banner/th(9).jpg";
const skill = () => {
  return (
    <>
      <section className="bglook">
        <div className="container">
          <div className="reviews ">
            <div className="" data-aos="flip-right">
              <div className="review bg-white">
                <img src={H} alt="Customer 2" />
                <div className="text-center ">
                  <h3 className="display--1 fs-1 ">HTML</h3>
                  <p>
                    "Discover the magic of web creation with HTML – a language
                    so intuitive and easy to learn that it turns the art of
                    building websites into a joyous adventure"
                  </p>
                </div>
              </div>
            </div>
            <div className="" data-aos="flip-right">
              <div className="review ">
                <img src={C} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 ">CSS</h3>
                  <p>
                    "Unleash the visual allure of your web creations with CSS –
                    Cascading Style Sheets. It's the design maestro that adds
                    flair to HTML's structure. With CSS, you have the power to
                    customize layouts, colors, and styles, turning your digital
                    canvas into a captivating masterpiece."
                  </p>
                </div>
              </div>
            </div>

            <div className="" data-aos="flip-right">
              <div className="review">
                <img src={Javascript} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 ">JAVA SCRIPT</h3>
                  <p>
                    "Elevate your website's functionality with JavaScript, the
                    dynamic force behind interactive web experiences. From
                    responsive forms to animated elements, JavaScript adds life
                    to static pages, making your site engaging and
                    user-friendly"
                  </p>
                </div>
              </div>
            </div>

            <div className="" data-aos="flip-right">
              <div className="review">
                <img src={Boot} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 ">BOOTSTRAP</h3>
                  <p>
                    "Streamline your web development process with Bootstrap the
                    responsive front-end framework that simplifies building
                    sleek, mobile-friendly websites. With a collection of
                    pre-designed components and a responsive grid system"
                  </p>
                </div>
              </div>
            </div>

            <div className="" data-aos="flip-right">
              <div className="review">
                <img src={Laibary} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 ">REACT</h3>
                  <p>
                    "Elevate your web applications with React the library that
                    redefines user interfaces. React's component-based
                    architecture simplifies development, enabling you to build
                    interactive, seamless, and scalable experiences. Join the
                    React revolution and transform static pages into dynamic,
                    engaging user interfaces."
                  </p>
                </div>
              </div>
            </div>

            <div className="" data-aos="flip-right">
              <div className="review ">
                <img src={Expre} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 ">EXPRESS</h3>
                  <p>
                    "Empower your server-side development with Node.js and
                    Express. Node.js brings efficiency to server-side scripting,
                    while Express provides a minimal and flexible framework.
                    Together"
                  </p>
                </div>
              </div>
            </div>

            <div className="" data-aos="flip-right">
              <div className="review">
                <img src={P} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 text-center">PHOTO SHOP</h3>
                  <p>
                    "Embark on a visual journey with Photoshop, the design
                    virtuoso that brings imagination to life. From photo editing
                    to graphic creation, Photoshop is the ultimate toolkit for
                    digital artists. Dive into a world of creative possibilities
                    and craft visually stunning designs that captivate the eyes
                    and tell compelling stories."
                  </p>
                </div>
              </div>
            </div>

            <div className="" data-aos="flip-right">
              <div className="review">
                <img src={M} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 ">MONOGODB</h3>
                  <p>
                    "Revolutionize your database management with MongoDB, the
                    NoSQL database that thrives on flexibility and scalability.
                    MongoDB's document-oriented structure allows you to store,
                    retrieve, and manipulate data seamlessly. Embrace the power
                    of a schema-less database and simplify your data-driven
                    applications with MongoDB."
                  </p>
                </div>
              </div>
            </div>

            <div className="" data-aos="flip-right">
              <div className="review">
                <img src={N} alt="Customer 2" />
                <div className="text-center">
                  <h3 className="display--1 fs-1 ">NODE JS</h3>
                  <p>
                    "Empower your server-side development with Node.js and
                    Express. Node.js brings efficiency to server-side scripting,
                    while Express provides a minimal and flexible framework.
                    Together, they form a robust duo that simplifies building
                    scalable and high-performance web applications. Unleash the
                    full potential of server-side JavaScript with Node.js and
                    Express."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default skill;
