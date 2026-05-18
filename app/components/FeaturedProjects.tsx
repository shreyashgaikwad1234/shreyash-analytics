"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Franchise Forecasting Dashboard",

    description:
      "Forecasting and KPI analytics dashboard for franchise growth and business insights.",

    image: "/projects/project1.png",

    category: "Analytics • Dashboard",

    tech: ["Power BI", "Python", "Pandas"],

    live:
      "https://app.powerbi.com/groups/me/reports/3f3be115-15d4-4da8-b3db-c92fae1546f0?ctid=4eba1b96-aab5-4691-8cfb-249ff15d7851&pbi_source=linkShare&bookmarkGuid=de90258e-566a-4256-ad0c-8bf6565d7fd4",

    github: "https://github.com/shreyashgaikwad1234/franchise-recruitment-forecasting-Dashboard",
  },

  {
    title: "Dubai RTA Mobility Analytics",

    description:
      "Transportation and mobility analytics dashboard using advanced Power BI visualizations.",

    image: "/projects/project2.png",

    category: "Business Intelligence",

    tech: ["Power BI", "SQL", "Analytics"],

    live:
      "https://app.powerbi.com/groups/me/reports/40e39ffa-a433-4c0d-8132-225ecf1fe7a7?ctid=4eba1b96-aab5-4691-8cfb-249ff15d7851&pbi_source=linkShare",

    github: "https://github.com/shreyashgaikwad1234/Mobility-Shift-Dubai-RTA-Bus-Network-Analytics-DecodeX-Hackathon-2026-",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-20 bg-[#020617] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}

        <div className="mb-12">

          <p className="uppercase tracking-[0.35em] text-zinc-500 mb-3 text-xs">
            Featured Work
          </p>

          <h2 className="text-3xl md:text-4xl font-black">
            Featured Projects
          </h2>

        </div>

        {/* PROJECTS */}

        <div className="space-y-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                grid
                lg:grid-cols-2
                gap-8
                items-center
                border
                border-white/10
                rounded-[28px]
                p-6
                bg-zinc-950
              "
            >

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-3 text-xs">
                  {project.category}
                </p>

                <h3 className="text-2xl md:text-3xl font-black leading-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mt-4 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                {/* TECH */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, i) => (

                    <div
                      key={i}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-xs
                      "
                    >
                      {tech}
                    </div>

                  ))}

                </div>

                {/* BUTTONS */}

                <div className="flex gap-4 mt-7 flex-wrap">

                  <a
                    href={project.live}
                    target="_blank"
                    className="
                      px-5
                      py-3
                      rounded-full
                      bg-white
                      text-black
                      text-sm
                      font-semibold
                      hover:scale-105
                      transition-all
                    "
                  >
                    Live Dashboard ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      px-5
                      py-3
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-sm
                      font-semibold
                      hover:bg-white/10
                      transition-all
                    "
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

              {/* IMAGE */}

              <div
                className="
                  rounded-[22px]
                  overflow-hidden
                  border
                  border-white/10
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

        {/* EXPLORE BUTTON */}

        <div className="flex justify-center mt-12">

          <Link
            href="/projects"
            className="
              px-7
              py-3
              rounded-full
              bg-white
              text-black
              text-sm
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Explore More →
          </Link>

        </div>

      </div>
    </section>
  );
}