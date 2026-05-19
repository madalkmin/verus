import { useId } from 'react'

const brandPaths = {
  facebook:
    'M18 2h-3.1c-3.5 0-5.8 2.3-5.8 5.9v2.7H6v4.2h3.1V22h4.5v-7.2h3.5l.7-4.2h-4.2V8.3c0-1.2.6-1.9 2-1.9H18V2Z',
  instagram:
    'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.1-1.7a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z',
  linkedin:
    'M6.5 8.8H2.9V22h3.6V8.8ZM4.7 2A2.1 2.1 0 1 0 4.7 6.2 2.1 2.1 0 0 0 4.7 2Zm7.5 6.8H8.8V22h3.6v-6.9c0-1.8.3-3.6 2.6-3.6 2.2 0 2.3 2.1 2.3 3.7V22h3.6v-7.7c0-3.8-.8-6.7-5.2-6.7-2.1 0-3.5 1.2-4.1 2.3h-.1l-.1-2.1Z',
  whatsapp:
    'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.27-1.38a9.86 9.86 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.44 9.91-9.9A9.9 9.9 0 0 0 12.04 2Zm.01 18.16h-.01a8.22 8.22 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.24 8.24 0 0 1-1.26-4.39 8.25 8.25 0 1 1 8.24 8.25Zm4.52-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.12-.17.25-.64.81-.78.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z',
}

function BrandIcon({ name, className = 'h-5 w-5', colored = false }) {
  const reactId = useId()
  const gradientId = `instagram-gradient-${reactId.replace(/:/g, '')}`
  const fill = colored && name === 'instagram' ? `url(#${gradientId})` : 'currentColor'

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {colored && name === 'instagram' && (
        <defs>
          <linearGradient id={gradientId} x1="3" x2="21" y1="21" y2="3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f58529" />
            <stop offset="0.42" stopColor="#dd2a7b" />
            <stop offset="0.72" stopColor="#8134af" />
            <stop offset="1" stopColor="#515bd4" />
          </linearGradient>
        </defs>
      )}
      <path d={brandPaths[name]} fill={fill} />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return <BrandIcon name="whatsapp" className={className} />
}

export default BrandIcon
