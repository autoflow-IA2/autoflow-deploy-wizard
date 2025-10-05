import { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle fixed pointer-events-none rounded-full bg-primary/10 animate-float';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = Math.random() * 10 + 15 + 's';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 25000);
    };

    const interval = setInterval(createParticle, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
    </div>
  );
};

export default AnimatedBackground;