import React from 'react'

const WHATSAPP_NUMBER = '6364268140' //
const PRE_FILLED_MESSAGE = '' // optional: add a URL-encoded message here

const WhatsAppButton: React.FC = () => {
  const href = PRE_FILLED_MESSAGE
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_MESSAGE)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 bg-white rounded-full p-2 shadow-lg z-50"
      aria-label="WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <img
        src="assests/Primary Icons/R.png"
        alt="WhatsApp Chat"
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
      />
    </a>
  )
}

export default WhatsAppButton
