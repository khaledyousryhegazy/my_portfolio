import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedPages from "../components/AnimatedPages";
import { Typewriter } from "react-simple-typewriter";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6 ">
      <AnimatedPages>
        <div className="flex items-center gap-16  max-[992px]:flex-col">
          <div className="main-image-animation"></div>

          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold  text-blackColor">
              Khaled Yousry
            </h1>
            <h2 className="text-2xl font-bold  text-blackColor">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1500}
                deleteSpeed={15}
                loop={0}
                typeSpeed={35}
                words={[
                  "Front end Developer .",
                  "Programmer .",
                  "Web Developer",
                ]}
              />
            </h2>
            <p className="text-textLightColor text-balance capitalize font-medium">
              a programmer based in Egypt <br />
              who loves building and developing websites.
            </p>
            <div className="text-[21px]  text-blackColor flex gap-4 cursor-pointer">
              <a
                href="https://www.facebook.com/khalid.usry"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className=" hover:-translate-y-[7px] hover:text-textLightColor transition-[1] duration-[.4s]"
                  icon={faFacebook}
                />
              </a>

              <a
                href="https://www.instagram.com/kha._.ledd/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className=" hover:-translate-y-[7px] hover:text-textLightColor transition-[1] duration-[.4s]"
                  icon={faInstagram}
                />
              </a>

              <a
                href="https://github.com/khaledyousryhegazy"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className=" hover:-translate-y-[7px] hover:text-textLightColor transition-[1] duration-[.4s]"
                  icon={faGithub}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/khaled-yousry-a35b15234/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className=" hover:-translate-y-[7px] hover:text-textLightColor transition-[1] duration-[.4s]"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
      </AnimatedPages>
    </div>
  );
}

export default Home;
