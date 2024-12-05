const projects = [
    { name: "DSA Practice Site", link: "https://dsa-practice-site-client.vercel.app/" },
    { name: "ML Hackathon Team Project", link: "https://ml-hackathon-client.vercel.app/" },
    { name: "AI Chatbot for Stocks and Investing", link: "https://ai-chatbot-client.vercel.app/" },
  ];
  
  // Example usage in JSX
  const ProjectsList = () => (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default ProjectsList;
  