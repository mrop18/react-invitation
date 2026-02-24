import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: 'easeOut' },
  },
}

function EventDetails() {
  return (
    <section className="relative px-4 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
      <motion.div
        className="mx-auto max-w-4xl rounded-[30px] border border-[#c99e49]/45 bg-[#fff9e8]/85 p-5 text-center shadow-[0_20px_40px_rgba(65,95,51,0.18)] backdrop-blur-sm sm:rounded-[34px] sm:p-10"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mt-4 mb-4 text-lg leading-relaxed text-[#3e5f2b] sm:mt-5 sm:text-2xl">
          संत शिरोमणि परम पूज्य श्री रामवल्लभ दास जी महाराज की
        </p>
        <p className="text-3xl font-semibold tracking-wide text-[#2f6d2d] sm:text-5xl md:text-6xl">पुण्यतिथि</p>
        <p className="mt-4 text-base leading-relaxed text-[#425f34] sm:mt-6 sm:text-xl">
          के अवसर पर आयोजित प्रसादी पर आप सादर आमंत्रित हैं
        </p>

        <div className="mt-7 grid gap-3 text-[#385f2b] sm:mt-10 sm:gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#d2aa59]/60 bg-[#fff4d6] px-4 py-4 text-base shadow-sm sm:px-5 sm:text-lg">
            <p className="text-xs uppercase tracking-[0.22em] text-[#9b7a35] sm:text-sm">Date</p>
            <p className="mt-2 font-medium">सोमवार 02 मार्च 2026</p>
          </div>
          <div className="rounded-2xl border border-[#d2aa59]/60 bg-[#fff4d6] px-4 py-4 text-base shadow-sm sm:px-5 sm:text-lg">
            <p className="text-xs uppercase tracking-[0.22em] text-[#9b7a35] sm:text-sm">Time</p>
            <p className="mt-2 font-medium">प्रात: 11:00 बजे से 02:00 बजे तक</p>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-[#d2aa59]/60 bg-[#fff4d6] px-4 py-4 text-base text-[#385f2b] shadow-sm sm:mt-5 sm:px-5 sm:text-lg">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9b7a35] sm:text-sm">Location</p>
          <p className="mt-2 font-medium">दादू पालका भैराणा धाम बिचून</p>
        </div>
      </motion.div>
    </section>
  )
}

export default EventDetails
