import { motion } from 'framer-motion'

const openMapUrl = 'https://maps.app.goo.gl/1gWsVXjXTpjcbJeK9'
const mapEmbed = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7121.175196387345!2d75.33805331640082!3d26.82125700628319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c6a81a6b7fa81%3A0x23b930f0ff43c32e!2sDadu%20Palka%20Dham%20Bichoon!5e0!3m2!1sen!2sin!4v1771694192698!5m2!1sen!2sin`

function LocationMap() {
  return (
    <section className="px-4 pb-24 pt-8 sm:px-8 sm:pt-10">
      <motion.div
        className="mx-auto max-w-5xl rounded-[28px] border border-[#d3a34b]/50 bg-[#fff9e8]/85 p-4 shadow-[0_20px_36px_rgba(62,92,47,0.19)] sm:rounded-[30px] sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <h2 className="text-center text-2xl font-semibold text-[#316f2f] sm:text-4xl">स्थान</h2>
        <div className="mt-4 overflow-hidden rounded-2xl shadow-[0_16px_28px_rgba(47,67,33,0.22)] sm:mt-6 sm:rounded-3xl">
          <iframe
            title="Event Location"
            src={mapEmbed}
            loading="lazy"
            className="h-[280px] w-full border-0 sm:h-[430px]"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="mt-5 text-center sm:mt-6">
          <a
            href={openMapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-[#c99f47] bg-[#f8d985] px-6 py-3 text-base font-medium text-[#395c2e] shadow-[0_10px_18px_rgba(128,98,34,0.28)] transition hover:-translate-y-0.5 hover:bg-[#f6cf66] sm:w-auto sm:px-7"
          >
            Open in Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default LocationMap
