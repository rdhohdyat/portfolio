import Image from "next/image";

const ProjectCard = ({ index, title, description, link, image }) => {
  return (
    <div
      key={index}
      className="p-6 transition-all duration-300 shadow-lg bg-white/5 rounded-xl hover:shadow-xl"
    >
      <Image
        alt={title}
        width={100}
        height={100}
        src={image}
        className="w-full mb-3 rounded-lg"
      />
      <h2 className="mb-4 text-2xl font-semibold text-white">{title}</h2>
      <p className="mb-4 text-white/80">{description}</p>
      <a
        href={link}
        className="text-accent hover:text-accent-hover"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
