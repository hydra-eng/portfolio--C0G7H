import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    const onMouseMove = (e: MouseEvent) => {
      if (dot && outline) {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`
          },
          { duration: 400, fill: "forwards" }
        );
      }
    };

    const addHoverEffect = () => {
      if (outline) {
        outline.style.width = '60px';
        outline.style.height = '60px';
        outline.style.borderColor = '#fff';
        outline.style.backgroundColor = 'rgba(0, 255, 65, 0.1)';
      }
    };

    const removeHoverEffect = () => {
      if (outline) {
        outline.style.width = '40px';
        outline.style.height = '40px';
        outline.style.borderColor = 'var(--primary)';
        outline.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Attach listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .terminal-card, input');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    // Observer to attach listeners to dynamic elements
    const observer = new MutationObserver(() => {
        const newElements = document.querySelectorAll('a, button, .terminal-card, input');
        newElements.forEach(el => {
            el.removeEventListener('mouseenter', addHoverEffect);
            el.removeEventListener('mouseleave', removeHoverEffect);
            el.addEventListener('mouseenter', addHoverEffect);
            el.addEventListener('mouseleave', removeHoverEffect);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" id="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline" id="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;