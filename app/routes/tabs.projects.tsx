const projects = [
  { 
    name: "DSA Practice Site", 
    link: "https://dsa-practice-site-client.vercel.app/", 
    description: "A platform for practicing data structures and algorithms with various challenges." 
  },
  { 
    name: "ML Hackathon Team Project", 
    link: "https://ml-hackathon-client.vercel.app/", 
    description: "A machine learning project developed for a hackathon to predict stock trends." 
  },
  { 
    name: "AI Chatbot for Stocks and Investing", 
    link: "https://ai-chatbot-client.vercel.app/", 
    description: "An AI-driven chatbot to help users with stock market queries and investment advice." 
  },
];

// Example usage in JSX
const ProjectsList = () => (
  <div  className="text-center flex flex-col justify-center items-center p-4 ">
    <h1 className="text-4xl text-pink-500 font-serif font-semibold">Projects</h1>
    <div className="mt-4 space-y-6">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group relative p-6 w-80 border rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300"
        >
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 font-semibold group-hover:text-blue-700"
          >
            {project.name}
          </a>
          
          <div 
            className="mt-2 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          >
            {project.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsList;
