import React from 'react'

const AnimatedLogo: React.FC<{ src?: string; size?: number }> = ({ src = '/assests/Primary Icons/1.png', size = 140 }) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 8,
  }

  const isVideo = typeof src === 'string' && /\.(mp4|webm|ogv)$/i.test(src)

  return (
    <div style={style} className="logo-anim">
      <style>{`
        .logo-anim { display:inline-block; position:relative }
        .logo-anim img, .logo-anim video { width:100%; height:100%; display:block; object-fit:cover; border-radius:8px; }
        .logo-anim::after { content:''; position:absolute; inset:0; box-shadow: 0 10px 30px rgba(0,0,0,0.45) inset; pointer-events:none; }
        @keyframes subtlePulse { 0% { transform: scale(0.995);} 50% { transform: scale(1.01);} 100% { transform: scale(0.995);} }
        .logo-anim video, .logo-anim img { animation: subtlePulse 3s ease-in-out infinite; transform-origin:center; }
      `}</style>

      {isVideo ? (
        <video
          src={encodeURI(String(src))}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
      ) : (
        <img src={src} alt="logo" />
      )}
    </div>
  )
}

export default AnimatedLogo
