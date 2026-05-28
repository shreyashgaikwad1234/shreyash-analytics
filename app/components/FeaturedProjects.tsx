"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function FeaturedProjects() {

  const featuredProjects = projects.slice(0, 2);

  return (

    <section
      id="projects"
      className="py-20 bg-[#020617] text-white"
    >

      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">

          <p className="uppercase tracking-[0.35em] text-zinc-500 mb-3 text-xs">
            Featured Work
          </p>

          <h2 className="text-3xl md:text-5xl font-black">
            Featured Projects
          </h2>

        </div>

        <div className="space-y-8">

          {featuredProjects.map((project, index) => (

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
              border-cyan-500/10
              rounded-[30px]
              p-6
              bg-[#0f172a]
              "
            >

              <div>

                <p className="uppercase tracking-[0.3em] text-cyan-400 mb-3 text-xs">
                  {project.category}
                </p>

                <h3 className="text-3xl font-black leading-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mt-4 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, i) => (

                    <div
                      key={i}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-xs
                      text-white
                      "
                    >
                      {tech}
                    </div>

                  ))}

                </div>

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
                    hover:bg-zinc-200
                    transition-all
                    "
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="
                    px-5
                    py-3
                    rounded-full
                    bg-white
                    text-black
                    text-sm
                    font-semibold
                    hover:bg-zinc-200
                    transition-all
                    "
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

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
                  h-[260px]
                  object-cover
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

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