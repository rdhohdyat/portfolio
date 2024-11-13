
const ProjectCard = ({index, title, description, link}) => {
  return (
    <div
      key={index}
      className="bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h2 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h2>
      <p className="text-white/80 mb-4">{description}</p>
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
}

export default ProjectCard