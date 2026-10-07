"use client";

import { useRef, useState, useEffect, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/ease";
import { TextScramble } from "@/components/motion/text-scramble";

const socials = [
  { href: "https://github.com/Zaph123", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/zaphenath-bassey",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:bassey2108@gmail.com", label: "Email", icon: Mail },
];

// Soft fades for non-headline content.
const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  }),
};

type Props = {
  /** Overlay is lifting: play the entrance. */
  revealed?: boolean;
  /** Optional portrait that overlaps the headline (desktop only). */
  portrait?: { src: string; alt: string };
};

export function HeroSection({ revealed = false, portrait }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const reduce = !!useReducedMotion();

  useEffect(() => {
    const hide = () => setHovered(false);
    window.addEventListener("scroll", hide, { passive: true });
    return () => window.removeEventListener("scroll", hide);
  }, []);

  // ---- Entrance (reduced motion = final state immediately) ----
  const instant = reduce;
  const play = instant || revealed;

  const fade = (delay: number) => ({
    variants: fadeVariants,
    custom: delay,
    initial: instant ? (false as const) : ("hidden" as const),
    animate: play ? ("visible" as const) : ("hidden" as const),
  });

  // ---- Scroll parallax ----
  // progress: 0 when the hero is at the top, 1 when it has scrolled fully out.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const k = reduce ? 0 : 1; // zero out all travel under reduced motion
  // Different distances per line = depth. Alternating directions = the "weave".
  const x1 = useTransform(progress, [0, 1], ["0vw", `${-14 * k}vw`]);
  const x2 = useTransform(progress, [0, 1], ["0vw", `${12 * k}vw`]);
  const x3 = useTransform(progress, [0, 1], ["0vw", `${-8 * k}vw`]);

  const spring = { stiffness: 180, damping: 22, mass: 0.5 };
  const cursorX = useSpring(0, spring);
  const cursorY = useSpring(0, spring);

  // ---- Hover on the headline text scales the portrait (mouse only) ----
  const hoverProps = {
    onPointerEnter: (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      // jump() snaps to the pointer so the image doesn't fly in from its last spot
      cursorX.jump(e.clientX);
      cursorY.jump(e.clientY);
      setHovered(true);
    },
    onPointerMove: (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    onPointerLeave: () => setHovered(false),
  };

  const headline =
    "font-display font-light text-foreground tracking-[-0.03em] " +
    "text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[1.2] w-fit md:leading-none";
  // Mask padding is for descenders; keep it tight on mobile so stacked lines don't look loose.
  const lineMask = "pb-[0.04em] md:pb-[0.12em]";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-24 md:pt-40 md:pb-32"
    >
      <div className="container-center">
        {/* Full sentence for assistive tech; the visual lines below are decorative splits */}
        <h1 className="sr-only">
          Hi, I&apos;m Zaphenath. I build websites people enjoy using.
        </h1>

        <div className="relative grid gap-y-0 md:grid-cols-12 md:gap-y-1">
          {/* Parallax (x) on the mask; slide-up reveal on the text inside */}
          <Reveal
            as="div"
            innerAs="p"
            active={play}
            delay={0}
            y="110%"
            style={{ x: x1 }}
            className={`${lineMask} md:col-span-12 md:row-start-1`}
            innerClassName={headline}
            innerProps={{ ...hoverProps, "aria-hidden": true }}
          >
            Hi, I&apos;m{' '}
            <TextScramble
              text="Zaphenath."
              nickname="Einstein."
              className="font-bold"
              active={play}
            />
          </Reveal>

          <Reveal
            as="div"
            innerAs="p"
            active={play}
            delay={0.1}
            y="110%"
            style={{ x: x2 }}
            className={`${lineMask} md:col-span-8 md:col-start-5 md:row-start-2 md:content-center`}
            innerClassName={headline}
            innerProps={{ ...hoverProps, "aria-hidden": true }}
          >
            I build <span className="font-semibold italic">websites</span>
          </Reveal>

          <Reveal
            as="div"
            innerAs="p"
            active={play}
            delay={0.2}
            y="110%"
            style={{ x: x3 }}
            className={`${lineMask} md:col-span-11 md:col-start-2 md:row-start-3`}
            innerClassName={headline}
            innerProps={{ ...hoverProps, "aria-hidden": true }}
          >
            people enjoy using.
          </Reveal>

          {/* Short plain-language intro, tucked left of line 2 on desktop, last on mobile */}
          <motion.p
            {...fade(0.5)}
            className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground md:col-span-3 md:col-start-1 md:row-start-2 md:mt-0 md:self-end md:text-base"
          >
            One person for design and code, from first sketch to launch. 2+
            years working with delivery, finance, and business software teams.
          </motion.p>
        </div>

        <motion.div
          {...fade(0.6)}
          className="mt-10 flex flex-wrap items-center gap-3 md:mt-14"
        >
          <Button
            asChild
            size="lg"
          >
            <Link href="#projects">See my work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </motion.div>

        <motion.div
          {...fade(0.7)}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
          <div className="ml-auto flex items-center gap-1">
            {socials.map(({ href, label, icon: Icon }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="p-2 text-muted-foreground transition-colors hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {portrait && !reduce && (
        <motion.div
          aria-hidden="true"
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
        >
          {/* plain div centers the image on the pointer; framer owns the transform below it */}
          <div className="-translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={false}
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="relative aspect-3/4 w-[clamp(9rem,14vw,14rem)] overflow-hidden rounded-sm will-change-transform"
            >
              <Image
                src={portrait.src}
                alt=""
                fill
                sizes="14vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
