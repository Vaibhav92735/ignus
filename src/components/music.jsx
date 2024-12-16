import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Music = ({ initialMute = false }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(initialMute);

  useEffect(() => {
    const audioElement = audioRef.current;
    
    if (audioElement) {
      if (isMuted) {
        audioElement.pause();
      } else {
        audioElement.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
      <audio 
        ref={audioRef} 
        loop 
        src="/usic.mp3"
      />
      <button 
        onClick={toggleMute} 
        className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
      >
        {isMuted ? <VolumeX color="white" /> : <Volume2 color="white" />}
      </button>
    </div>
  );
};

export default Music;