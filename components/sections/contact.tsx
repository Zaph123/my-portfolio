"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  fadeUp,
  staggerContainer,
  viewport,
} from "@/hooks/use-scroll-animation";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { sendContactMessage } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const EMAIL = "bassey2108@gmail.com";

// Hover styles only on devices that really hover
const hoverOnly = "[@media(hover:hover)_and_(pointer:fine)]:";

const contactLinks = [
  {
    label: "Phone",
    href: "tel:+2349022761407",
    handle: "+234 902 276 1407",
    icon: Phone,
  },
  {
    label: "GitHub",
    href: "https://github.com/Zaph123",
    handle: "Zaph123",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaphenath-bassey",
    handle: "Zaphenath Bassey",
    icon: Linkedin,
  },
];

const fieldClass =
  "w-full bg-background border border-border px-3 text-sm transition-colors duration-200 " +
  "focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none " +
  "aria-[invalid=true]:border-destructive";

const labelClass =
  "font-mono text-[11px] uppercase tracking-widest text-muted-foreground";

/** Big headline that drifts sideways as the section scrolls into view. Static under reduced motion. */
function Marquee({ progress }: { progress: MotionValue<number> }) {
  const reduce = !!useReducedMotion();
  const x = useTransform(
    progress,
    [0, 1],
    reduce ? ["0vw", "0vw"] : ["8vw", "-55vw"],
  );
  const type =
    "font-display font-semibold leading-none tracking-[-0.04em] text-foreground";

  if (reduce) {
    return (
      <div className="container-center">
        <p
          aria-hidden="true"
          className={cn(type, "text-[clamp(3rem,11vw,9rem)]")}
        >
          Let&apos;s work together
        </p>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="overflow-x-clip">
      <motion.p
        style={{ x }}
        className={cn(type, "whitespace-nowrap text-[clamp(4rem,16vw,15rem)]")}
      >
        Let&apos;s work together — Let&apos;s work together — Let&apos;s work
        together
      </motion.p>
    </div>
  );
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  // 0 as the section's top enters the viewport, 1 when its bottom reaches the viewport bottom
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactValues) => {
    setSent(false);
    try {
      const result = await sendContactMessage(values);
      if (result.ok) {
        setSent(true);
        toast.success("Message sent. I will reply by email.");
        reset();
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not send your message. Please email me directly.");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. The address is right there to select.");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-x-clip pb-24 pt-8 md:pb-32 md:pt-12"
    >
      <h2 className="sr-only">Let&apos;s work together</h2>
      <Marquee progress={progress} />

      <div className="container-center mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="space-y-8 lg:col-span-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
        >
          <motion.p
            variants={fadeUp}
            className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            New work, a role, or a question about how something was built. I
            read every message.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-2xl font-light tracking-tight text-foreground underline-offset-4 hover:underline md:text-3xl"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border px-4 text-sm font-medium text-muted-foreground transition-colors duration-200 motion-reduce:transition-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                `${hoverOnly}hover:border-foreground/40 ${hoverOnly}hover:text-foreground`,
              )}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
            <span role="status" className="sr-only">
              {copied ? "Email address copied" : ""}
            </span>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="divide-y divide-border border-y border-border"
          >
            {contactLinks.map(({ label, href, handle, icon: Icon }) => {
              const external = href.startsWith("http");
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-14 items-center gap-3 py-4"
                    aria-label={`Contact via ${label}`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{label}</span>
                    <span
                      className={cn(
                        "ml-auto font-mono text-xs text-muted-foreground transition-colors",
                        `${hoverOnly}group-hover:text-foreground`,
                      )}
                    >
                      {handle}
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "h-3.5 w-3.5 text-muted-foreground transition-colors",
                        `${hoverOnly}group-hover:text-primary`,
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 lg:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          noValidate
        >
          {/* Honeypot: off-screen, skipped by keyboard and screen readers. Bots tend to fill it. */}
          <div
            aria-hidden="true"
            className="absolute -left-2499.75 h-0 w-0 overflow-hidden"
          >
            <label>
              Website
              <input
                {...register("website")}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-1.5">
              <span className={labelClass}>Name</span>
              <input
                {...register("name")}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={cn(fieldClass, "h-12")}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </label>
            <label className="block space-y-1.5">
              <span className={labelClass}>Email</span>
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={cn(fieldClass, "h-12")}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </label>
          </motion.div>

          <motion.label variants={fadeUp} className="block space-y-1.5">
            <span className={labelClass}>Message</span>
            <textarea
              {...register("message")}
              rows={6}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(fieldClass, "min-h-36 resize-y py-3")}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </motion.label>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
            <p role="status" className="text-sm text-muted-foreground">
              {sent ? "Message sent. I will reply by email." : ""}
            </p>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
