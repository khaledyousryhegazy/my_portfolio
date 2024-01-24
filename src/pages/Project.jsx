import { Link, useParams } from "react-router-dom";
import { portfolioData } from "../data";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCaretRight,
  faSquareArrowUpRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  const param = useParams();
  const id = param.id;
  const data = portfolioData[id];

  return (
    <div className="py-24">
      <Title main="Details" title="Project Information" />
      <div className="px-6">
        <img src={data.img} className="min-w-full max-w-full" alt={data.name} />
      </div>

      <div className="px-6 my-5">
        <h1 className="font-bold text-2xl capitalize text-blackColor mb-7">
          {data.name}
        </h1>
        <span className="my-5 block italic text-blackColor">Details</span>
        <p className="capitalize text-textLightColor text-balance">
          {data.description}
        </p>
        <p className="italic capitalize text-textLightColor mt-3">
          {data.title}
        </p>
      </div>

      <div className="px-6 my-14">
        <h1 className="font-bold text-xl mb-5 text-blackColor">
          Technology Used
        </h1>
        <div className="flex flex-wrap gap-5">
          {data.technology.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 text-textLightColor font-medium text-[15px]"
              >
                <FontAwesomeIcon icon={faCaretRight} />
                <span>{tech}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 flex justify-between md:pr-72 items-center w-full">
        <div className="text-blackColor font-bold">
          Date
          <span className="text-textLightColor block mt-2 font-normal">
            {data.date}
          </span>
        </div>

        <div className="text-blackColor font-bold">
          More
          <div className="flex items-center gap-5 text-blackColor mt-2">
            <a
              className="text-[22px] flex font-normal text-blackColor"
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
            <a
              className="text-[22px] flex font-normal text-blackColor"
              href={data.source}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
