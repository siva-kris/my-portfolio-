import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { LuLinkedin } from "react-icons/lu";
import { GrSnapchat } from "react-icons/gr";
const Foter = () => {
  return (
    <>
      <div className="foot-loc">
        <div class=" my-5">
          <footer class=" text-center text-white">
            <div class="container p-4 pb-0">
              <section class="mb-4">
                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#4267B2" }}
                  href="#!"
                  role="button"
                >
                  <LiaFacebookSquare />
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#25D366" }}
                  href="#!"
                  role="button"
                >
                  <FaWhatsapp />
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#C13584" }}
                  href="https://www.instagram.com/__siva.er__?igsh=YzVkODRmOTdmMw=="
                  role="button"
                >
                  <FaInstagram />
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#1DA1F2" }}
                  href="#!"
                  role="button"
                >
                  <BsTwitterX />
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#00B2FF" }}
                  href="#!"
                  role="button"
                >
                  <TfiEmail />
                </a>
                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "blue" }}
                  href="https://www.linkedin.com/in/siva-k-574984271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  role="button"
                >
                  <LuLinkedin />
                </a>
                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "yellow" }}
                  href="https://www.snapchat.com/add/er-siva?share_id=e0kyqIqMeWc&locale=en-IN"
                  role="button"
                >
                  <GrSnapchat />
                </a>
              </section>
            </div>

            <div
              class="text-center p-3 text-black"
              style={{ backgroundColor: "white" }}
            >
              © 2024 Copyright:
              <a class="text-black" href="/">
                Siva.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Foter;
