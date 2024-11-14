import {
  faArrowRightFromBracket,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedPages from "../components/AnimatedPages";
import Title from "../components/Title";
import { portfolioData } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LazyImg from "../components/LazyImg";

function Portfolio() {
  return (
    <div className="py-24">
      <AnimatedPages>
        <Title main="portfolio" title="creative portfolio" />
        <h1 className="px-6 text-l mb-5 font-semibold capitalize text-blackColor">
          <span className="text-red-600">Note:</span> These are not all my
          projects, go to Github to check
        </h1>
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.map((project) => {
            return (
              <div
                key={project.id}
                className="relative border-[10px] border-grayColor"
              >
                <Link to={`${project.id}`}>
                  {/* <img
                    src={project.img}
                    className="min-w-full max-w-full"
                    alt={project.name}
                    loading="lazy"
                  /> */}

                  <LazyImg
                    src={project.img}
                    style="min-w-full max-w-full"
                    alt={project.name}
                  />
                </Link>
                <div className="absolute border-t-2 border-grayColor text-blackColor text-sm md:text-md flex items-center justify-between bottom-0 left-0 w-full p-3 bg-lightColor">
                  <a
                    href={project.link}
                    className="hover:tracking-widest transition-[0.3s]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                  <Link
                    to={`${project.id}`}
                    className="hover:tracking-widest transition-[0.3s]"
                  >
                    Details <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedPages>
    </div>
  );
}

export default Portfolio;
