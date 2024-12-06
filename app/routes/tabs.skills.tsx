const skills = [
  { name: "MERN stack", experience: "Intermediate" },
  { name: "ML", experience: "Beginner" },
  { name: "DSA", experience: "Intermediate" },
];

const SkillsPage: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-4xl text-pink-500 font-serif font-semibold">Skills</h1>
      <div className="mt-4 text-lg">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <strong>{skill.name}</strong>: {skill.experience}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
