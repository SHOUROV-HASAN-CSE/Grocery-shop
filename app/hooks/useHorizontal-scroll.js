import { useEffect, useRef } from 'react';

export function useHorizontalScrolling() {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      const onWheel = (event) => {
        if (event.deltaY == 0) return;
        event.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + event.deltaY,
          behavior: 'smooth',
        });
      };
      element.addEventListener('wheel', onWheel);
      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return ref;
}
