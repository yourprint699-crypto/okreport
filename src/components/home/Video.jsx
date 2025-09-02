import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full relative'>
        {/* Fallback image for when video fails to load */}
        <img 
          className='h-full w-full object-cover absolute inset-0' 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Creative workspace background"
        />
        
        {/* Main video with proper loop handling */}
        <video 
          className='h-full w-full object-cover relative z-10' 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="metadata"
          onLoadedData={(e) => {
            // Ensure smooth looping by setting currentTime slightly before end
            e.target.addEventListener('timeupdate', () => {
              if (e.target.currentTime >= e.target.duration - 0.1) {
                e.target.currentTime = 0;
              }
            });
          }}
          onError={(e) => {
            // Hide video on error, fallback image will show
            e.target.style.display = 'none';
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Video