import { motion } from 'framer-motion'
import saintImage from '../assets/daduji.png'
import sidePortrait from '../assets/sant.jpeg'
import heroBackdrop from '../assets/bhairana.jpg'

const labelClass =
  'rounded-full border border-[#c79a36]/55 bg-[#f7efd7]/85 px-3 py-1 text-base font-semibold text-[#3c672f] shadow-sm backdrop-blur-sm sm:px-4 sm:text-xl'

function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e9f5d7] via-[#fdf7e1] to-[#e0efc6]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage: `url(${heroBackdrop})`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45),rgba(255,255,255,0.08),rgba(255,255,255,0.45))]" />

      <div className="floral-corner floral-top-left" />
      <div className="floral-corner floral-top-right" />
      <div className="floral-corner floral-bottom-left" />
      <div className="floral-corner floral-bottom-right" />

      <div className="absolute left-3 right-3 top-4 z-20 flex items-center justify-between sm:left-8 sm:right-8 sm:top-6">
        <span className={labelClass}>दादूराम</span>
        <span className={labelClass}>सत्यराम</span>
      </div>

      <motion.div
        className="absolute left-2 top-[42%] z-20 hidden w-40 -translate-y-1/2 md:block lg:left-8"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <div className="overflow-hidden rounded-full border-4 border-[#d6a33a] bg-white/70 p-1 shadow-[0_20px_40px_rgba(40,60,30,0.25)]">
          <img src={sidePortrait} alt="संत फोटो" className="h-full w-full rounded-full object-cover" loading="lazy" />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 mt-8 flex w-full max-w-[78vw] items-center justify-center sm:max-w-[31rem] lg:max-w-[35rem]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div
          className="pointer-events-none absolute h-72 w-72 rounded-full blur-2xl sm:h-[24rem] sm:w-[24rem]"
          style={{
            background:
              'radial-gradient(circle at center, rgba(247,220,138,0.85) 0%, rgba(245,201,90,0.35) 45%, rgba(255,255,255,0) 72%)',
          }}
        />
        <img
          src={saintImage}
          alt="संत शिरोमणि"
          className="relative z-10 max-h-[74vh] w-full rounded-[26px] object-cover sm:rounded-[34px]"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-8 z-20 block w-40 md:hidden"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <div className="overflow-hidden rounded-full border-4 border-[#d6a33a] bg-white/70 p-1 shadow-[0_20px_40px_rgba(40,60,30,0.25)]">
          <img src={sidePortrait} alt="à¤¸à¤‚à¤¤ à¤«à¥‹à¤Ÿà¥‹" className="h-full w-full rounded-full object-cover" loading="lazy" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
