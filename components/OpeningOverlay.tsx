"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const STAGGER = 0.25;

const textVariants = (order: number): Variants => ({
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: order * STAGGER, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, delay: order * STAGGER, ease: "easeIn" },
  },
});

export function OpeningOverlay({
  onComplete,
  onSkip,
}: {
  onComplete: () => void;
  onSkip: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const [contentIn, setContentIn] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setContentIn(true), 80);
      return () => clearTimeout(t);
    }
  }, [visible]);

  useEffect(() => {
    if (contentIn) {
      const t = setTimeout(() => setVisible(false), 1500);
      return () => clearTimeout(t);
    }
  }, [contentIn]);

  const handleSkip = useCallback(() => {
    setVisible(false);
    onSkip();
  }, [onSkip]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSkip();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleSkip]);

  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="overlay"
          initial={false}
          exit={{
            y: "-100%",
            transition: { duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 bg-background z-60 flex items-center justify-center"
          role="dialog"
          aria-label="Introduction"
        >
          <button
            onClick={handleSkip}
            className="absolute inset-0 cursor-pointer bg-transparent"
            aria-label="Skip introduction"
          />
          <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
            {contentIn && (
              <>
                <motion.p
                  {...anim(textVariants(0))}
                  className="font-mono text-xs tracking-[0.18em] uppercase"
                >
                  ZAPHENATH BASSEY
                </motion.p>
                <motion.p
                  {...anim(textVariants(1))}
                  className="font-sans text-xl md:text-2xl font-medium tracking-tight"
                >
                  Frontend Engineer
                </motion.p>
              </>
            )}
          </div>
          {/* Skip hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 text-xs text-muted-foreground/60 hover:text-muted-foreground/80 transition-colors pointer-events-none"
          >
            Click to skip • Press ESC
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
