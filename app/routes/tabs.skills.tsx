const skills = [
  { name: "MERN stack", experience: "Intermediate" },
  { name: "ML", experience: "Beginner" },
  { name: "DSA", experience: "Intermediate" },
];

const SkillsPage: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Skills</h1>
      <div>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{skill.name}</strong>: {skill.experience}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
