# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Space tourism website solution](#frontend-mentor---space-tourism-website-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [react-router-dom](https://v5.reactrouter.com/) - For routing
- [Styled Components](https://styled-components.com/) - For styles
- [Vite JS](https://vitejs.dev/) - Dev tooling and bundler
- Semantic HTML5 markup
- CSS Grid & Flexbox
- CSS logical properties
- Mobile-first workflow
- Accessibility best practices

### What I learned

This was my first time using styled components, and for this reason there's a huge refactor potential to this code. I find it's a really convenient way to handle CSS in React especially with conditional styling.
I'm still learning Vite JS migrating from CRA, and it's so good!

I wanted to use a custom hook to check if a user device has less than 800px of viewport width at any time:

```jsx
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowSize.width >= 800;
  return isDesktop;
}
};
```

### Continued development

There's always room to emprovements, but I think I'll work for the next weeks on styled components and Vite as a bundler.

### Useful resources

- [Kevin Powell course on Scrimba](https://scrimba.com/learn/spacetravel) - This is an awesome resource, it helped me with accessibility features and modern CSS

## Author

- Frontend Mentor - [@marazza-dev](https://www.frontendmentor.io/profile/marazza-dev)
- Twitter - [@marazza_dev](https://www.twitter.com/marazza_dev)
