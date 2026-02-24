import { useEffect, useRef, useState } from 'react'
import { FiMusic, FiVolume2, FiVolumeX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import daduramMusic from '../assets/daduram.mp3'

const musicSrc = daduramMusic

function MusicPlayer() {
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.volume = 0.3
    const startPlayback = async () => {
      try {
        await audioRef.current.play()
      } catch {
        // Browsers may block autoplay until user interaction.
      }
    }

    startPlayback()
  }, [])

  const handleToggleMute = () => {
    if (!audioRef.current) return
    const nextMuted = !isMuted
    audioRef.current.muted = nextMuted
    setIsMuted(nextMuted)
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src={musicSrc} autoPlay loop muted={isMuted} preload="auto" />
      <motion.button
        type="button"
        onClick={handleToggleMute}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#cb9a41] bg-[#fae7a5] text-[#3c662f] shadow-[0_10px_24px_rgba(73,86,43,0.35)] transition hover:-translate-y-0.5 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        <span className="absolute -top-2 -right-2 rounded-full bg-[#f2cc65] p-1 text-[10px] sm:text-xs">
          <FiMusic />
        </span>
        {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
      </motion.button>
    </>
  )
}

export default MusicPlayer
