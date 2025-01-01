import Image from "next/image";
import { projects } from "../projectsData";
import Link from "next/link";
import arrowTopRight from "../../../public/arrowTopRight.svg";

export async function generateStaticParams() {
  const paths = projects.map((project) => ({
    projectId: project.id,
  }));

  return paths.map((path) => ({
    params: path,
  }));
}

export default function page({ params }) {
  const { projectId } = params;
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="max-xl:max-w-[80%] mx-auto container-nav mt-48">
      <div className="fixed top-[130px] z-40">
        <Link
          href="/projects"
          className="flex hover:bg-accent-900 duration-300 transition-all items-center gap-6 py-3 lg:py-4 px-7 border border-white/5 bg-[#12131a] text-white text-lg lg:text-xl font-medium rounded-full"
        >
          <Image
            src={arrowTopRight}
            className="w-[13px] h-[13px] rotate-[-135deg]"
            alt="arrowTop-svg"
          />
          Back To Projects
        </Link>
      </div>
      <h1 className="text-[27px] max-lg:text-center md:text-[32px] lg:text-[42px] font-bold mt-[250px]">
        {project.detailedtitle}
      </h1>
      <p className="text-base max-lg:text-center md:text-[17px] lg:text-[19px] text-white/60 mt-4 mb-12 leading-7 lg:leading-8">
        {project.Detaileddescription}
      </p>
      <div className="flex items-center flex-col lg:flex-row mb-[55px] gap-5 ">
        <Link
          href={`${project.link}`}
          target="_blank"
          className="flex   bg-primary-800 py-3 px-6 border border-white/5 hover:bg-accent-600 transition-all duration-300 max-sm:mt-[40px] text-[17px] lg:text-lg items-center gap-5 text-lg font-regular max-lg:mt-4  rounded-full mr-1"
        >
          Visit Website
          <Image
            src={arrowTopRight}
            className=" w-[13px] h-[13px]"
            alt="arrowTop-svg"
          />
        </Link>
        <Link
          href={`${project.github}`}
          target="_blank"
          className="flex  max-sm:mt-[5px] text-[17px] lg:text-lg items-center gap-5 text-lg font-regular rounded-full"
        >
          Explore Code on GitHub
          <Image
            src={arrowTopRight}
            className="w-[13px] h-[13px]"
            alt="arrowTop-svg"
          />
        </Link>
      </div>
      {project.image && project.image !== "" ? (
        <Image
          className="rounded-3xl "
          src={project.imageDetailed}
          quality={100}
          width={1070}
          height={200}
          alt={project.title}
        />
      ) : (
        <p>Image not available</p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-2 mt-4 gap-4">
        <div className="desc border border-white/10 bg-primary-800 rounded-3xl p-6 ">
          <h5 className="font-bold text-white text-[21px] lg:text-[24px]">
            {project.industry1}
          </h5>
          <p className="text-white/70 text-base lg:text-[17px] mt-1">
            {project.industryDesc1}
          </p>
        </div>
        <div className="desc border border-white/10 bg-[#11121a] rounded-3xl p-6">
          <h5 className="font-bold text-white text-[24px]">
            {project.service1}
          </h5>
          <p className="text-white/70 text-base lg:text-[17px] mt-1">
            {project.serviceDesc1}
          </p>
        </div>
        <div className="desc border border-white/10 rounded-3xl p-6 bg-[#11121a]">
          <h5 className="font-bold text-white text-[21px] lg:text-[24px]">
            {project.tools1}
          </h5>
          <p className="text-white/70 mt-1">{project.tools1Desc}</p>
        </div>
        <div className="desc border border-white/10 p-6 rounded-3xl  bg-primary-800 ">
          <h5 className="font-bold text-white text-[21px] lg:text-[24px]">
            {project.complete1}
          </h5>
          <p className="text-white/70 mt-1">{project.complete1Desc}</p>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="mb-[30px] bg-[#11121a] border border-white/10 p-8 md:p-10 lg:p-12 rounded-3xl">
          <span className="max-sm:text-[26px] sm:text-[27px] lg:text-[36px] font-bold">
            💡 {project.started}
          </span>
          <p className="mt-4 text-base lg:text-[17px] leading-7 text-white/70">
            {project.startedDesc}
          </p>
        </div>
        <div className="bg-[#11121a] border border-white/10  p-8 md:p-10 lg:p-12 rounded-3xl">
          <span className="max-sm:text-[26px] sm:text-[27px]  lg:text-[36px] font-bold">
            {" "}
            🌟 {project.process}
          </span>
          <p className="mt-4 text-base lg:text-[17px] leading-7 text-white/70">
            {project.processDesc}
          </p>
        </div>
        <div className="mb-[150px]"></div>
      </div>
    </section>
  );
}
