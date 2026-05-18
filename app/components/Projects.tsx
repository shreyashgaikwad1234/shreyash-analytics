const projects = [
  {
    title: "Franchise Forecasting Dashboard",

    category: "Analytics Dashboard",

    description:
      "Forecasting and KPI analytics dashboard for franchise growth and business insights.",

    image: "/projects/project1.png",

    live:
      "https://app.powerbi.com/groups/me/reports/3f3be115-15d4-4da8-b3db-c92fae1546f0?ctid=4eba1b96-aab5-4691-8cfb-249ff15d7851&pbi_source=linkShare&bookmarkGuid=de90258e-566a-4256-ad0c-8bf6565d7fd4",

    github: "https://github.com/",
  },

  {
    title: "Dubai RTA Mobility Analytics",

    category: "Business Intelligence",

    description:
      "Transportation and mobility analytics dashboard using Power BI visualizations.",

    image: "/projects/project2.png",

    live:
      "https://app.powerbi.com/groups/me/reports/40e39ffa-a433-4c0d-8132-225ecf1fe7a7?ctid=4eba1b96-aab5-4691-8cfb-249ff15d7851&pbi_source=linkShare",

    github: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-black text-white min-h-screen">

      <div className="max-w-5xl mx-auto px-6">

        {/* TOP */}

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Projects Catalogue
          </h1>

          <p className="text-zinc-500 text-sm">
            A collection of my proof of work
          </p>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-7">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                bg-zinc-950
                border
                border-white/10
                rounded-[24px]
                overflow-hidden
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[200px]
                  object-cover
                "
              />

              <div className="p-6">

                <p className="uppercase tracking-[0.3em] text-zinc-500 text-[11px] mb-3">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                {/* BUTTONS */}

                <div className="flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    className="
                      flex-1
                      flex
                      justify-center
                      py-3
                      rounded-2xl
                      bg-[#182338]
                      hover:bg-[#22304d]
                      transition-all
                      text-sm
                      font-semibold
                    "
                  >
                    Live Dashboard ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      flex-1
                      flex
                      justify-center
                      py-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      hover:bg-white/10
                      transition-all
                      text-sm
                      font-semibold
                    "
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}