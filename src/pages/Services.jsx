import AnimatedPages from "../components/AnimatedPages";
import Title from "../components/Title";

function Services() {
  return (
    <div className="py-24">
      <AnimatedPages>
        <Title main="services" title="what i do" />
        <div className="flex flex-col md:flex-row gap-7 mb-20 px-6">
          <div className="bg-lightColor text-blackColor p-5 md:p-10 w-full shadow-md">
            <span className="w-12 h-12 font-semibold mb-7 text-xl tracking-wider rounded-full bg-grayColor flex justify-center items-center">
              01
            </span>
            <h1 className="font-bold text-2xl mb-5">Build Web Site</h1>
            <p className="text-textLightColor capitalize">
              I build front-end websites from scratch, whatever you want with
              the latest tools, and it is easy, fast, and smooth. I can make any
              changes you want, any sites you want, whether it is private sites,
              for a company, or for your stores.
            </p>
          </div>

          <div className="bg-lightColor text-blackColor p-5 md:p-10 w-full shadow-md">
            <span className="w-12 h-12 font-semibold mb-7 text-xl tracking-wider rounded-full bg-grayColor flex justify-center items-center">
              02
            </span>
            <h1 className="font-bold text-2xl mb-5">Web developer</h1>
            <p className="text-textLightColor capitalize">
              I am the developer of the site, and if did any problems occur in
              it I am repairing it by doing maintenance, according to what you
              want.
            </p>
          </div>
        </div>

        {/* fun facts */}
        <div className="px-6">
          <h1 className="capitalize text-blackColor text-2xl mt-5 mb-10 font-semibold">
            fun facts
          </h1>

          <div className="flex flex-col md:flex-row gap-7">
            <div className="text-center p-5 shadow-sm border w-full">
              <span className="block text-xl text-blackColor font-semibold mb-5">
                48+
              </span>
              <h1 className="text-textLightColor font-medium">
                Projects Complete
              </h1>
            </div>

            <div className="text-center p-5 shadow-sm border w-full">
              <span className="block text-xl text-blackColor font-semibold mb-5">
                20k+
              </span>
              <h1 className="text-textLightColor font-medium">Lines Of Code</h1>
            </div>
          </div>
        </div>
      </AnimatedPages>
    </div>
  );
}

export default Services;
