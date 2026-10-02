'use client'

import { OpeningSequence } from '@/components/OpeningSequence'
import { HeroSection } from '@/components/sections/hero'
import { useState } from 'react';

/**
 * Client boundary for the intro overlay + hero hand-off.
 * Intro runs on every load; hero stays in final state so it does not
 * animate a second entrance under/after the overlay.
 */

const portrait = {
  src: '/portrait.png',
  alt: 'Zaphenath Bassey',
}

export function HomeIntro() {
  const [hasFinished, setHasFinished] = useState(false);

  return (
    <>
      <OpeningSequence onOpeningComplete={() => setHasFinished(true)} />
      <HeroSection revealed={hasFinished} portrait={portrait} />
    </>
  )
}
