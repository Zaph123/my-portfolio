"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  fadeUp,
  staggerContainer,
  viewport,
} from "@/hooks/use-scroll-animation";

const STATEMENT =
  "I take websites from rough idea 💡 to polished product ✨, on my own or alongside your team 🤝.";

/** One word of the statement. Fades from dim to full as scroll progress passes its slice. */
const EMOJI = /^(\p{Extended_Pictographic}\uFE0F?)(.*)$/u;

function ScrubWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, range, reduce ? [1, 1] : [0.15, 1]);
  const match = word.match(EMOJI);

  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {match ? (
        <>
          <span className="inline-block text-[0.75em] align-[0.08em]">
            {match[1]}
          </span>
          {match[2]}
        </>
      ) : (
        word
      )}
    </motion.span>
  );
}

function ScrubStatement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  // 0 when the statement's top reaches 85% of the viewport, 1 when its bottom reaches 50%.
  // That finishes while the line is still comfortably on screen.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  const reduce = useReducedMotion();
  const tilt = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [3, 0])

  const words = text.split(" ");
  const style =
    "block max-w-5xl font-display font-light leading-[1.05] tracking-[-0.03em] " +
    "text-[clamp(2rem,5vw,4.5rem)] text-foreground";

  return (
    <>
      {/* Unsplit text for assistive tech; the animated copy below is decorative */}
      <p className="sr-only">{text}</p>
      <motion.p ref={ref} aria-hidden="true" className={style} style={{ rotateZ: tilt, transformOrigin: '0% 50%' }}>
        {words.map((word, i) => {
          // Each word gets an overlapping slice of 0..1 so the reveal reads as one sweep.
          const start = (i / words.length) * 0.8;
          return (
            <ScrubWord
              key={`${word}-${i}`}
              word={word}
              progress={scrollYProgress}
              range={[start, start + 0.2]}
            />
          );
        })}
      </motion.p>
    </>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden py-32 md:py-42"
    >
      <div className="container-center">
        <SectionHeading title="About" containerRef={containerRef} />

        <div className="mt-16 md:mt-20">
          <ScrubStatement text={STATEMENT} />
        </div>

        <motion.p
          className="mt-12 max-w-[65ch] text-base leading-relaxed text-muted-foreground md:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          For the past two years I&apos;ve worked on delivery, giving, and
          business tools. I like owning a feature from first sketch to launch,
          and working closely with the people who will actually use it.
        </motion.p>
      </div>
    </section>
  );
}
