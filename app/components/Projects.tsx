"use client";

import { projects } from "../data/portfolio";

export default function Projects() {

  return (

    <section
      className="
      py-24
      bg-[#020617]
      text-white
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}

        <div className="text-center mb-16">

          <h1
            className="
            text-5xl
            md:text-6xl
            font-black
            mb-5
            "
          >
            Projects Catalogue
          </h1>

          <p className="text-zinc-400 text-lg">
            Real-world analytics, AI, and business intelligence projects.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          "
        >

          {projects.map((project, index) => (

            <div
              key={index}
              className="
              bg-[#0f172a]
              border
              border-cyan-500/10
              rounded-[28px]
              overflow-hidden
              hover:scale-[1.02]
              transition-all
              duration-300
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

              <div className="p-7">

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400
                  text-[11px]
                  mb-4
                  "
                >
                  {project.category}
                </p>

                <h3
                  className="
                  text-2xl
                  font-black
                  mb-4
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  text-zinc-400
                  leading-relaxed
                  mb-6
                  text-sm
                  "
                >
                  {project.description}
                </p>

                {/* TECH */}

                <div className="flex flex-wrap gap-2 mb-7">

                  {project.tech.map((tech, i) => (

                    <div
                      key={i}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-white
                      text-xs
                      "
                    >
                      {tech}
                    </div>

                  ))}

                </div>

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
                    bg-white
                    hover:bg-cyan-400
                    transition-all
                    text-sm
                    font-semibold
                    text-black
                    "
                  >
                    Live Demo ↗
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