import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TARGET_DATE = new Date('2026-03-02T11:00:00+05:30').getTime()

const getTimeLeft = () => {
  const difference = TARGET_DATE - Date.now()
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: true }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isEnded: false,
  }
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const values = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="px-4 py-8 sm:px-8 sm:py-10">
      <motion.div
        className="mx-auto max-w-4xl rounded-[28px] border border-[#d0a14a]/55 bg-[#fff9eb]/90 p-5 text-center shadow-[0_18px_38px_rgba(62,89,45,0.2)] sm:rounded-[30px] sm:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold text-[#2e6d2d] sm:text-4xl">कार्यक्रम प्रारंभ होने में</h2>
        {timeLeft.isEnded && <p className="mt-3 text-sm text-[#8a6f35] sm:text-base">यह आयोजन तिथि पूर्ण हो चुकी है।</p>}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.label}
              className="countdown-pulse rounded-2xl border border-[#cb9d43] bg-[#fff2cf] px-3 py-4 shadow-[0_10px_20px_rgba(76,95,43,0.17)] sm:px-4 sm:py-5"
            >
              <p className="text-2xl font-bold text-[#356a2d] sm:text-4xl">{String(item.value).padStart(2, '0')}</p>
              <p className="mt-1 text-[11px] tracking-[0.18em] text-[#946f2f] sm:mt-2 sm:text-sm sm:tracking-[0.2em]">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CountdownTimer
