"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  fadeUp,
  staggerContainer,
  viewport,
} from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type ProjectSlug =
  | "starrik"
  | "churchera"
  | "traytic"
  | "quizmaniac"
  | "hustleloop";

const projectChips: { slug: ProjectSlug; label: string }[] = [
  { slug: "starrik", label: "Starrik" },
  { slug: "churchera", label: "Churchera" },
  { slug: "traytic", label: "Traytic" },
  { slug: "quizmaniac", label: "QuizManiac" },
  { slug: "hustleloop", label: "HustleLoop" },
];

type Skill = {
  name: string;
  /**
   * Projects where this skill is stated in the project's own description.
   * Leave empty when it isn't stated there: the skill still shows, it just never lights up.
   */
  projects?: ProjectSlug[];
};

const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        projects: [
          "starrik",
          "churchera",
          "traytic",
          "quizmaniac",
          "hustleloop",
        ],
      },
      { name: "Next.js", projects: ["churchera", "traytic"] },
      { name: "TypeScript", projects: ["traytic", "quizmaniac"] },
      { name: "Vite", projects: ["quizmaniac", "hustleloop"] },
      { name: "Redux" },
      { name: "Zustand", projects: ["churchera"] },
      { name: "Context API" },
      { name: "TanStack Query" },
    ],
  },
  {
    category: "Styling",
    skills: [
      { name: "TailwindCSS", projects: ["churchera", "traytic", "hustleloop"] },
      { name: "CSS3" },
      { name: "HeadlessUI" },
      { name: "ShadCN", projects: ["traytic"] },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js" },
      { name: "Firebase", projects: ["starrik", "quizmaniac"] },
      { name: "REST APIs" },
      { name: "Firestore", projects: ["starrik"] },
      { name: "Supabase", projects: ["churchera"] },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git/GitHub", projects: ["traytic"] },
      { name: "pnpm" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "VS Code" },
    ],
  },
  {
    category: "Inclusive Design",
    skills: [
      {
        name: "Responsive Web Design",
        projects: ["churchera", "traytic", "quizmaniac"],
      },
      { name: "Accessibility-Focused Development", projects: ["traytic"] },
    ],
  },
];

type Filter = ProjectSlug | "all";

// Hover styles only on devices that really hover
const hoverOnly = "[@media(hover:hover)_and_(pointer:fine)]:hover:";

export function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Filter>("all");

  const activeLabel = projectChips.find((p) => p.slug === active)?.label;
  const used = (skill: Skill) =>
    active === "all" || !!skill.projects?.includes(active);

  const chips: { slug: Filter; label: string }[] = [
    { slug: "all", label: "All" },
    ...projectChips,
  ];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative overflow-x-clip py-32 md:py-44"
    >
      <div className="container-center">
        <SectionHeading title="Stack" containerRef={containerRef} />

        <div
          role="group"
          aria-label="Filter skills by project"
          className="mt-12 flex flex-wrap gap-2"
        >
          {chips.map((chip) => {
            const pressed = active === chip.slug;
            return (
              <button
                key={chip.slug}
                type="button"
                aria-pressed={pressed}
                // Clicking the active project again goes back to "All"
                onClick={() =>
                  setActive(
                    chip.slug === "all" || active === chip.slug
                      ? "all"
                      : chip.slug,
                  )
                }
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  pressed
                    ? "border-transparent bg-primary text-primary-foreground font-semibold"
                    : `border-border text-muted-foreground ${hoverOnly}border-foreground/40 ${hoverOnly}text-foreground`,
                )}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        <p
          aria-live="polite"
          className="mt-4 min-h-5 text-sm text-muted-foreground"
        >
          {active === "all"
            ? "Pick a project to see which of these I used on it."
            : `Highlighting what I used on ${activeLabel}.`}
        </p>

        <ul className="mt-10 border-t border-border">
          {" "}
          {/* plain ul, no motion props */}
          {skillCategories.map((cat) => {
            const rowUsed = cat.skills.some(used);
            return (
              <motion.li
                key={cat.category}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                className="group relative isolate grid gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <span
                  aria-hidden="true"
                  className={
                    "pointer-events-none absolute -inset-x-4 inset-y-0 -z-10 origin-left scale-x-0 rounded-sm bg-card " +
                    "transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] motion-reduce:transition-none " +
                    "[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100 md:-inset-x-6"
                  }
                />
                <h3
                  className={cn(
                    "font-display text-2xl font-light tracking-[-0.02em] text-foreground md:col-span-4 md:text-4xl",
                    "transition-[opacity,transform,translate] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] motion-reduce:transition-none",
                    "[@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-3",
                    rowUsed ? "opacity-100" : "opacity-30",
                  )}
                >
                  {cat.category}
                </h3>

                <ul className="flex flex-wrap md:col-span-8">
                  {cat.skills.map((skill, i) => (
                    <li
                      key={skill.name}
                      className={cn(
                        "text-base text-foreground transition-opacity duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] motion-reduce:transition-none md:text-xl",
                        used(skill) ? "opacity-100" : "opacity-25",
                      )}
                    >
                      {skill.name}
                      {i < cat.skills.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="mx-3 text-muted-foreground"
                        >
                          /
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
