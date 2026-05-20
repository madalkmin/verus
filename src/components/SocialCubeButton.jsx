import { useEffect, useState } from 'react'
import { contact, socialLinks } from '../data/siteData'
import BrandIcon from './BrandIcon'

const flipDuration = 720
const cycleDuration = 2800

const socialItems = [
  {
    label: 'WhatsApp',
    href: contact.whatsappUrl,
    icon: 'whatsapp',
    tone: 'whatsapp',
  },
  ...socialLinks.map((social) => ({
    ...social,
    tone: social.icon,
  })),
]

function SocialCubeButton() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isFlipping, setIsFlipping] = useState(false)

  const activeItem = socialItems[activeIndex]
  const nextItem = socialItems[nextIndex]

  useEffect(() => {
    if (isFlipping) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setNextIndex((activeIndex + 1) % socialItems.length)
      setIsFlipping(true)
    }, cycleDuration)

    return () => window.clearInterval(interval)
  }, [activeIndex, isFlipping])

  useEffect(() => {
    if (!isFlipping) {
      return undefined
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex(nextIndex)
      setIsFlipping(false)
    }, flipDuration)

    return () => window.clearTimeout(timeout)
  }, [isFlipping, nextIndex])

  return (
    <a
      href={activeItem.href}
      target="_blank"
      rel="noreferrer"
      className={`social-cube-button social-cube-button--${activeItem.tone}`}
      aria-label={`Acessar ${activeItem.label} da Verus Transportes`}
      title={activeItem.label}
    >
      <span className={`social-cube-button__inner ${isFlipping ? 'is-flipping' : ''}`} aria-hidden="true">
        <SocialCubeFace item={activeItem} position="front" />
        <SocialCubeFace item={nextItem} position="top" />
      </span>
    </a>
  )
}

function SocialCubeFace({ item, position }) {
  return (
    <span className={`social-cube-button__face social-cube-button__face--${position} social-cube-button__face--${item.tone}`}>
      <BrandIcon name={item.icon} colored={item.icon === 'instagram'} className="h-5 w-5" />
    </span>
  )
}

export default SocialCubeButton
