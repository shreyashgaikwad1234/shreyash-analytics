const skills = [
  "Power BI",
  "SQL",
  "Python",
  "Machine Learning",
  "Data Analytics",
  "Snowflake",
  "Xlookup",
  "Data  Visualization",
  "Data Modelling",
  "Data Storytelling",
  "Statistics",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 border-y border-white/10"
    >
      <div className="flex flex-wrap justify-center gap-5 px-6">

        {skills.map((skill) => (
          <div
            key={skill}
            className="px-8 py-4 rounded-full bg-zinc-900 border border-white/10 text-zinc-300"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}