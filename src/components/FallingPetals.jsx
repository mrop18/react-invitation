import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PETAL_COUNT = 26

function FallingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        duration: 14 + Math.random() * 10,
        delay: Math.random() * -18,
        drift: Math.random() * 160 - 80,
        size: 8 + Math.random() * 10,
        rotate: Math.random() * 180,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-[-10vh] rounded-full bg-gradient-to-b from-[#ffe6a7] to-[#f5b96a] opacity-70 shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.4}px`,
            borderRadius: '65% 35% 60% 40%',
          }}
          animate={{
            y: ['0vh', '112vh'],
            x: [0, petal.drift, 0],
            rotate: [0, petal.rotate, petal.rotate * 2],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default FallingPetals
