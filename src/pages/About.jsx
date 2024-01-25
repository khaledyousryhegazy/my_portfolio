import AnimatedPages from "../components/AnimatedPages";
import khaled from "../assets/khaledBlack.jpeg";
import { interests, knowledge, langSkills, programmingSkills } from "../data";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../components/Title";
import LazyImg from "../components/LazyImg";

function About() {
  return (
    <div className="py-24">
      <AnimatedPages>
        <Title main="About" title="About me" />

        {/* name & job */}
        <div className="capitalize pb-10 border-b border-grayColor px-6 ">
          {/* <img src={khaled} alt="khaled yousry" /> */}

          <LazyImg
            src={khaled}
            style="min-w-full max-w-full"
            alt="khaled yousry"
          />

          <h1 className="text-2xl font-bold mt-5 text-blackColor">
            Khaled Yousry
          </h1>
          <h2 className="opacity-75 font-semibold text-blackColor">
            Web Developer
          </h2>
        </div>

        {/* about */}
        <p className="py-10  px-6  border-b border-grayColor text-balance leading-loose text-[15px] font-semibold text-blackColor opacity-75">
          Hi, My Name Is Khaled Yousry . <br></br> As a Junior Front-End
          Developer, I possess an impressive arsenal of skills in HTML, CSS,
          JavaScript, React, Redux, Tailwind and Bootstrap. I excel at designing
          and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>

        {/* About me */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 py-10  px-6  border-b border-grayColor">
          {/* List 1 */}
          <ul className="flex flex-col gap-3 md:pr-10">
            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Birthday :
              </span>
              <span className="font-normal text-textLightColor">1/10/2002</span>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Age :
              </span>
              <span className="font-normal text-textLightColor">21</span>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Address :
              </span>
              <span className="font-normal text-textLightColor">
                Beheira , Egypt
              </span>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Email :
              </span>
              <a
                href="mailto:yousryk49@gmail.com"
                className="font-normal text-textLightColor"
              >
                yousryk49@gmail.com
              </a>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Phone :
              </span>
              <a
                href="tel:+201280710181"
                className="font-normal text-textLightColor"
              >
                +201280710181
              </a>
            </li>
          </ul>
          {/* List 2 */}
          <ul className="flex flex-col gap-3 md:pl-10">
            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Nationality :
              </span>
              <span className="font-normal text-textLightColor">Egyption</span>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Study :
              </span>
              <span className="font-normal text-textLightColor">
                Univercity of Tanta
              </span>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Degree :
              </span>
              <span className="font-normal text-textLightColor">Junior</span>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Interest :
              </span>
              <span className="font-normal text-textLightColor">
                Gym , Boxing , Coding
              </span>
            </li>

            <li className="flex">
              <span className="block font-semibold text-blackColor min-w-20 mr-2">
                Freelance :
              </span>
              <span className="font-normal text-textLightColor">Available</span>
            </li>
          </ul>
        </div>
        {/* Download button */}
        <div className="py-10  px-6 ">
          <a
            className="text-lightColor bg-blackColor py-3 px-5 block w-fit my-7 hover:tracking-[1.5px] transition-[.3s] duration-300"
            href="/KHALED YOUSRY CV.pdf"
            download
          >
            Download CV
          </a>
        </div>

        {/* Skills */}
        <div className="bg-lightColor py-10 px-6 flex flex-col md:flex-row md:gap-10">
          <div className="w-full">
            <h1 className="text-blackColor font-semibold mb-7 text-xl">
              Programming Skills
            </h1>
            {programmingSkills.map((skill) => {
              return (
                <div key={skill.id} className="mb-7">
                  <div className="flex justify-between items-center">
                    <span className="text-blackColor italic">
                      {skill.title}
                    </span>
                    <span className="text-blackColor italic">{skill.rate}</span>
                  </div>
                  <div className=" w-full h-1 bg-grayColor">
                    <div
                      className={`h-full bg-blackColor`}
                      style={{ width: `${skill.rate}` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full">
            <h1 className="text-blackColor font-semibold mb-7 text-xl">
              Language Skills
            </h1>
            {langSkills.map((skill) => {
              return (
                <div key={skill.id} className="mb-7">
                  <div className="flex justify-between items-center">
                    <span className="text-blackColor italic">
                      {skill.title}
                    </span>
                    <span className="text-blackColor italic">{skill.rate}</span>
                  </div>
                  <div className=" w-full h-1 bg-grayColor">
                    <div
                      className={`h-full bg-blackColor`}
                      style={{ width: `${skill.rate}` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Knowledge and interests */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 py-10  px-6 ">
          {/* knowledge */}
          <div className="w-full">
            <h1 className="text-blackColor font-semibold mb-7 text-xl">
              Knowledge
            </h1>
            <ul className="flex flex-col gap-3">
              {knowledge.map((tech) => {
                return (
                  <li className="capitalize" key={tech.id}>
                    <FontAwesomeIcon
                      className="text-lg text-blackColor"
                      icon={faCaretRight}
                    />
                    <span className="ms-3 text-textLightColor font-medium text-[15px]">
                      {tech.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* interests */}
          <div className="w-full">
            <h1 className="text-blackColor font-semibold mb-7 text-xl">
              Interests
            </h1>
            <ul className="flex flex-col gap-3">
              {interests.map((tech) => {
                return (
                  <li className="capitalize" key={tech.id}>
                    <FontAwesomeIcon
                      className="text-lg text-blackColor"
                      icon={faCaretRight}
                    />
                    <span className="ms-3 text-textLightColor font-medium text-[15px]">
                      {tech.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Education and Experience */}
        <div className="py-10 bg-lightColor px-6 flex flex-col md:flex-row gap-5">
          {/* Education */}
          <div className="text-blackColor w-full">
            <h1 className="text-blackColor font-semibold mb-7 text-xl">
              Education
            </h1>
            <ul className="about-education relative p-6">
              <li className="flex gap-5 items-center">
                <span className=" py-2 px-4 text-sm bg-blackOpacity rounded-full">
                  2020 - 2024
                </span>
                <div>
                  <h1 className="font-semibold capitalize">tanta university</h1>
                  <p className="text-sm text-textLightColor">
                    Bachelor's degree
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Experience */}
          <div className="text-blackColor w-full">
            <h1 className="text-blackColor font-semibold mb-7 text-xl">
              Experience
            </h1>
            <ul className="about-education relative p-6">
              <li className="flex gap-5 items-center">
                <span className=" py-2 px-4 text-sm bg-blackOpacity rounded-full">
                  2020 - 2024
                </span>
                <div>
                  <h1 className="font-semibold">Projects</h1>
                  <p className="text-sm text-textLightColor">
                    Build A Lot Of websites
                  </p>
                </div>
              </li>

              <li className="flex gap-5 items-center mt-5">
                <span className=" py-2 px-4 text-sm bg-blackOpacity rounded-full">
                  2023 - 2024
                </span>
                <div>
                  <h1 className="font-semibold">Companies</h1>
                  <p className="text-sm text-textLightColor">Not Yet</p>
                </div>
              </li>

              <li className="flex gap-5 items-center mt-5">
                <span className=" py-2 px-4 text-sm bg-blackOpacity rounded-full">
                  2023 - 2024
                </span>
                <div>
                  <h1 className="font-semibold">Freelancer</h1>
                  <p className="text-sm text-textLightColor">Build websites</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedPages>
    </div>
  );
}

export default About;
