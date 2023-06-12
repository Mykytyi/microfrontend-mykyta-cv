
export const animationHandler = (setClassArray: (prop: any) => void) => {
  return () => {
    setClassArray(['Char', 'animated', 'rubberBand']);
    setTimeout(() => {
      setClassArray(['Char']);
    }, 1000);
  }
}

export const animationListener = (setAnimated: any, element: string) => {
  return () => {
    window.addEventListener("scroll", () => {
      let componentHeight = document.getElementById(element)?.offsetTop;
      let scrolled = window.pageYOffset + window.innerHeight;

      if (componentHeight && componentHeight + 100 <= scrolled) {
        setAnimated(true);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        let componentHeight = document.getElementById(element)?.offsetTop;
        let scrolled = window.pageYOffset + window.innerHeight;

        if (componentHeight && componentHeight + 100 <= scrolled) {
          setAnimated(true);
        }
      });
    };
  }
}
