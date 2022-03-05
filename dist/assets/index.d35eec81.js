import{W as M,j as g,s as i,L as C,r as d,N as j,u as L,F as A,R as T,a as h,b as E,c as D,B as I}from"./vendor.edfa319a.js";const W=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};W();const O=M`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
}

p {
  color: ${e=>e.theme.clrLight};
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  font-family: "Barlow", sans-serif;
  font-size: 0.9375rem;
  color: hsl(0 0% 100%);
  background-color: hsl(230 35% 7%);
  min-height: 100vh;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: min-content 1fr;

  @media (min-width: 35em) {font-size: 1rem};
  @media (min-width: 45em) {font-size: 1.125rem};
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`,t=g.exports.jsx,r=g.exports.jsxs,l=g.exports.Fragment,N=i(C)`
  display: inline-grid;
  position: relative;
  place-items: center;
  padding: 0 2em;
  aspect-ratio: 1;
  border-radius: 50%;
  text-decoration: none;
  z-index: 1;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: ${e=>e.theme.ffSerif};
  color: ${e=>e.theme.clrDark};
  background-color: ${e=>e.theme.clrWhite};

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: hsl(0 0% 100% / 0.1);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  @media (min-width: ${e=>e.theme.brMedium}) {
    font-size: 2rem;
  }
`,z=({to:e,text:s})=>t(l,{children:t(N,{to:e,children:s})}),B=i.main`
  display: grid;
  place-items: center;
  text-align: center;
  padding-inline: 1rem;
  min-height: 80vh;

  & * {
    @media (min-width: ${e=>e.theme.brSmall}) {
      max-width: 45ch;
    }
  }

  @media (min-width: ${e=>e.theme.brMedium}) {
    text-align: left;
    column-gap: 2rem;
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(
        1rem,
        1fr
      );

    padding-bottom: max(6rem, 20vh);
    align-items: end;

    & > *:first-child {
      grid-column: 2;
    }
    & > *:last-child {
      grid-column: 3;
    }
  }
`,H=i.h1`
  color: ${e=>e.theme.clrLight};
  font-size: 1rem;
  font-family: ${e=>e.theme.ffSansCondens};
  letter-spacing: 2.7px;
  text-transform: uppercase;

  @media (min-width: ${e=>e.theme.brSmall}) {
    font-size: 1.125rem;
    letter-spacing: 3.38px;
    margin: 0 auto;
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    font-size: ${e=>e.theme.fs500};
    letter-spacing: 4.75px;
    margin: 0;
  }
`,P=i.span`
  display: block;
  font-size: ${e=>e.theme.fs900};
  font-family: ${e=>e.theme.ffSerif};
  color: ${e=>e.theme.clrWhite};
`,R=()=>t(l,{children:r(B,{children:[r("div",{children:[r(H,{children:["So, you want to travel to ",t(P,{children:"Space"})]}),t("p",{children:"Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"})]}),t("div",{children:t(z,{to:"/destination",text:"Explore"})})]})}),u=i.h1`
  font-family: ${e=>e.theme.ffSansCondens};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  grid-area: title;

  & span {
    margin-right: 0.5rem;
    font-weight: 700;
    color: hsl(0 0% 100% / 0.25);
  }

  @media (min-width: ${e=>e.theme.brSmall}) {
    font-size: 1.25rem;
    margin-top: 2rem;
    justify-self: start;
    letter-spacing: 3.38px;
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    font-size: 1.75rem;
    letter-spacing: 4.72px;
  }
`;var F="/space-tourism-react/assets/image-moon.65df7a68.png",_="/space-tourism-react/assets/image-mars.aa6f283f.png",G="/space-tourism-react/assets/image-europa.c9182c76.png",U="/space-tourism-react/assets/image-titan.c9e71a76.png";const b=[{name:"Moon",image:F,description:"See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 km",travel:"3 days"},{name:"Mars",image:_,description:"Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!",distance:"225 mil. km",travel:"9 months"},{name:"Europa",image:G,description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 mil. km",travel:"3 years"},{name:"Titan",image:U,description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",distance:"1.6 bil. km",travel:"7 years"}],X=i.main`
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 2rem;
  text-align: center;

  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

  @media (min-width: ${e=>e.theme.brMedium}) {
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(
        1rem,
        1fr
      );
    text-align: left;
    columm-gap: 2rem;
    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
    justify-items: start;
    align-content: start;
  }
  & > * {
    max-width: 50ch;
  }

  & > *:where(:not(:first-child)) {
    margin-top: 2rem;
  }

  & > img {
    grid-area: image;
    max-width: 60%;
    @media (min-width: ${e=>e.theme.brMedium}) {
      max-width: 90%;
    }
  }
  & > article {
    grid-area: content;
  }
`,q=i.div`
  display: flex;
  gap: 2rem;
  grid-area: tabs;
`,V=i.button`
  cursor: pointer;
  padding: 1rem 0;
  border: 0;
  border-bottom: 0.2rem solid hsl(0 0% 100% / 0);
  color: ${e=>e.theme.clrLight};
  background: transparent;
  font-family: ${e=>e.theme.ffSansCondense};
  text-transform: uppercase;
  letter-spacing: 2.36px;

  @media (min-width: ${e=>e.theme.brMedium}) {
    letter-spacing: 2.7px;
  }

  & ${e=>e.active} {
    color: ${e=>e.theme.clrWhite};
    border-bottom: 0.2rem solid hsl(0 0% 100% / 1);
  }
  &:hover {
    border-color: hsl(0 0% 100% / 0.5);
  }
`,Y=i.h2`
  font-family: ${e=>e.theme.ffSerif};
  font-size: 3.5rem;
  line-height: 1.1;
  text-transform: uppercase;
  @media (min-width: ${e=>e.theme.brSmall}) {
    font-size: 5rem;
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    font-size: 6.25rem;
  }
`,J=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid hsl(0 0% 100% / 0.3);
  padding-top: 2.5rem;
  margin-top: 2.5rem;
  @media (min-width: ${e=>e.theme.brSmall}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    justify-content: flex-start;
    gap: min(10vw, 8rem);
  }
`,w=i.h3`
  color: ${e=>e.theme.clrLight};
  text-transform: uppercase;
  font-size: ${e=>e.theme.fs200};
  letter-spacing: 2.36px;

  & > p {
    font-family: ${e=>e.theme.ffSerif};
    font-size: 1rem;
    text-transform: uppercase;
    @media (min-width: ${e=>e.theme.brSmall}) {
      font-size: 1.25rem;
    }
    @media (min-width: ${e=>e.theme.brMedium}) {
      font-size: 1.75rem;
    }
  }
`,y=i.p`
  color: ${e=>e.theme.clrWhite};
  font-family: ${e=>e.theme.ffSerif};
  font-size: 1.75rem;
  text-transform: uppercase;
`,K=()=>{const[e,s]=d.exports.useState(0),n=b[e],m=a=>e!==a;return t(l,{children:r(X,{children:[r(u,{children:[t("span",{"aria-hidden":"true",children:"01"})," Pick your destiantion"]}),t("img",{src:n.image,alt:n.name}),t(q,{children:b.map((a,o)=>t(V,{active:m(o),onClick:()=>s(o),children:a.name},o))}),r("article",{children:[t(Y,{children:n.name}),t("p",{children:n.description}),r(J,{children:[r("div",{children:[t(w,{children:"Avg. distance"}),t(y,{children:n.distance})]}),r("div",{children:[t(w,{children:"Est. travel time"}),t(y,{children:n.travel})]})]})]})]})})},f=i.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;var Q="/space-tourism-react/assets/image-launch-vehicle-portrait.7165cee7.jpg",Z="/space-tourism-react/assets/image-launch-vehicle-landscape.37b2246f.jpg",ee="/space-tourism-react/assets/image-spaceport-portrait.8f5c81cf.jpg",te="/space-tourism-react/assets/image-spaceport-landscape.c4258e76.jpg",re="/space-tourism-react/assets/image-space-capsule-portrait.c67ebf87.jpg",ie="/space-tourism-react/assets/image-space-capsule-landscape.2e8d59ba.jpg";const v=[{title:"LAUNCH VEHICLE",content:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operations. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch",image_portrait:Q,image_landscape:Z},{title:"SPACEPORT",content:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\u2019s rotation for launch.",image_portrait:ee,image_landscape:te},{title:"SPACE CAPSULE",content:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",image_portrait:re,image_landscape:ie}],ae=i(u)`
  @media (min-width: ${e=>e.theme.brSmall}) {
    margin-left: 2rem;
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    margin: 0;
  }
`,ne=i.main`
  display: grid;
  place-items: center;
  padding-bottom: 2rem;
  text-align: center;

  grid-template-areas:
    "title"
    "image"
    "tabs"
    "details";

  & > img {
    grid-area: image;
    margin-top: 2rem;
    @media (min-width: ${e=>e.theme.brSmall}) {
      margin-top: 3rem;
    }
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    text-align: left;
    grid-template-areas:
      ". title title ."
      ". tabs details image"
      ". tabs details image";
    column-gap: 4rem;
    justify-items: start;
    padding-left: 5rem;
  }
`,oe=i.div`
  grid-area: tabs;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 1.5rem;
  gap: max(1rem, 3vw);
  @media (min-width: ${e=>e.theme.brSmall}) {
    margin-block: 3rem;
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    flex-direction: column;
  }
`,se=i.button`
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  color: ${e=>e.theme.clrWhite};
  border: 1px solid hsl(0 0% 100% / 0.25);
  background: hsl(0 0% 100% / 0);
  cursor: pointer;
  font-family: ${e=>e.theme.ffSerif};
  font-size: 1.125rem;

  & ${e=>e.active} {
    background: hsl(0 0% 100% / 1);
    color: #222222;
  }

  &:hover,
  &:focus {
    border: 2px solid hsl(0 0% 100% / 0.75);
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    width: 4rem;
  }
`,me=i.article`
  grid-area: details;

  & header {
    margin-bottom: 0.5rem;

    & h2 {
      font-family: ${e=>e.theme.ffSansCondens};
      font-size: 1rem;
      color: ${e=>e.theme.clrLight};
      letter-spacing: 2.36px;
      text-transform: uppercase;
      margin-bottom: 0.2rem;
    }
    & p {
      font-family: ${e=>e.theme.ffSerif};
      font-size: 1.5rem;
      color: ${e=>e.theme.clrWhite};
      @media (min-width: ${e=>e.theme.brSmall}) {
        font-size: 2.5rem;
      }
    }
  }

  & p {
    padding-inline: 1rem;
    line-height: 1.85;
    @media (min-width: ${e=>e.theme.brSmall}) {
      padding-inline: 8rem;
    }
    @media (min-width: ${e=>e.theme.brMedium}) {
      padding: 0;
    }
  }
`,ce=()=>{const[e,s]=d.exports.useState(0),n=v[e],m=o=>e!==o,a=le();return t(l,{children:r(ne,{children:[r(ae,{children:[t("span",{children:"03"})," space launch 101"]}),t("img",{src:a?n.image_portrait:n.image_landscape,alt:n.title}),t(oe,{children:v.map((o,c)=>r(se,{active:m(c),onClick:()=>s(c),children:[c+1," ",t(f,{children:o.title})]},c))}),r(me,{children:[r("header",{children:[t("h2",{children:"the terminology..."}),t("p",{children:n.title})]}),t("p",{children:n.content})]})]})})};function le(){const[e,s]=d.exports.useState({width:void 0});return d.exports.useEffect(()=>{const m=()=>{s({width:window.innerWidth})};return window.addEventListener("resize",m),m(),()=>window.removeEventListener("resize",m)},[]),e.width>=800}var de="/space-tourism-react/assets/image-douglas-hurley.eefed9f8.png",he="/space-tourism-react/assets/image-mark-shuttleworth.b3fe36f7.png",pe="/space-tourism-react/assets/image-victor-glover.dfbb7281.png",ue="/space-tourism-react/assets/image-anousheh-ansari.1c67226f.png";const x=[{name:"Douglas Hurley",image:de,description:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",role:"Commander"},{name:"Mark Shuttleworth",image:he,description:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",role:"Mission Specialist"},{name:"Victor Glover",image:pe,description:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",role:"Pilot"},{name:"Anousheh Ansari",image:ue,description:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",role:"Flight Engineer"}],ge=i.main`
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 2rem;
  text-align: center;

  grid-template-areas:
    "title"
    "image"
    "dots"
    "content";
  @media (min-width: ${e=>e.theme.brSmall}) {
    padding-bottom: 0;
    grid-template-areas:
      "title"
      "content"
      "dots"
      "image";
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(
        1rem,
        1fr
      );
    text-align: left;
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". dots image .";
    column-gap: 2rem;
    justify-items: start;
  }

  & > * {
    max-width: 50ch;
  }

  & > *:where(:not(:first-child)) {
    margin-top: 2rem;
  }

  & > img {
    grid-area: image;
    max-width: 60%;
    border-bottom: 1px solid hsl(0 0% 100% / 0.1);
    @media (min-width: ${e=>e.theme.brMedium}) {
      max-width: 90%;
      align-self: end;
      grid-column: span 2;
    }
  }
`,fe=i.div`
  display: flex;
  gap: 2rem;
  grid-area: dots;
  @media (min-width: ${e=>e.theme.brMedium}) {
    place-self: start;
  }
`,be=i.button`
  cursor: pointer;
  padding: 1rem 0;
  border: 0;
  border-radius: 50%;
  padding: 0.5em;
  background-color: hsl(0 0% 100% / 0.25);

  & ${e=>e.active} {
    background-color: hsl(0 0% 100% / 1);
  }
  &:hover {
    background-color: hsl(0 0% 100% / 0.5);
  }
`,we=i.article`
  grid-area: content;

  & > p {
    line-height: 1.8;
  }

  & *:where(:not(:first-child)) {
    margin-top: 1rem;
  }
  & header {
    & > p {
      font-family: ${e=>e.theme.ffSerif};
      font-size: 1.5rem;
      color: ${e=>e.theme.clrWhite};
      text-transform: uppercase;
      @media (min-width: ${e=>e.theme.brSmall}) {
        font-size: 2.5rem;
      }
      @media (min-width: ${e=>e.theme.brMedium}) {
        font-size: 3.5rem;
        width: 125%;
      }
    }
    & *:where(:not(:first-child)) {
      margin-top: 0.75rem;
    }
  }
  & h2 {
    margin-bottom: -10px;
    font-family: ${e=>e.theme.ffSerif};
    font-size: 1rem;
    text-transform: uppercase;
    color: hsl(0 0% 100% / 0.5);
    @media (min-width: ${e=>e.theme.brSmall}) {
      font-size: 1.5rem;
    }
    @media (min-width: ${e=>e.theme.brMedium}) {
      font-size: 2rem;
    }
  }
`,ye=()=>{const[e,s]=d.exports.useState(0),n=x[e],m=a=>e!==a;return t(l,{children:r(ge,{id:"main",children:[r(u,{children:[t("span",{"aria-hidden":"true",children:"02"})," Meet the crew"]}),t("img",{src:n.image,alt:n.name}),t(fe,{children:x.map((a,o)=>t(be,{active:m(o),onClick:()=>s(o),children:t(f,{"aria-hidden":"true",children:a.name})},o))}),r(we,{children:[r("header",{children:[t("h2",{children:n.role}),t("p",{children:n.name})]}),t("p",{children:n.description})]})]})})},ve=i.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 1rem;

  & p {
    text-align: center;
    font-size: 1.5rem;
    color: ${e=>e.theme.crlWhite};
    padding: 0.5rem;
    background: ${e=>e.theme.clrDark};
    @media (min-width: ${e=>e.theme.brMedium}) {
      font-size: 2.125rem;
    }
  }
`,xe=i(u)`
  font-size: 4rem;
`,$e=()=>t(l,{children:r(ve,{children:[r(xe,{children:[t("span",{children:"404"}),"Error"]}),t("p",{children:"Ops! It seems that you get lost, try to find your way back"}),t(z,{to:"/",text:"home"})]})}),ke={clrDark:"hsl(230 35% 7%)",clrLight:"hsl(231 77% 90%)",clrWhite:"hsl(0 0% 100%)",fs900:"clamp(5rem, 8vw + 1rem, 9.375rem)",fs800:"6.25rem",fs700:"3.5rem",fs600:"2rem",fs500:"1.75rem",fs400:"1.125rem",fs300:"1rem",fs200:"0.875rem",ffSerif:"Bellefair, serif",ffSansCondens:"Barlow Condensed, sans-serif",ffSansNormal:"Barlow, sans-serif",brSmall:"35rem",brMedium:"50rem"};var Se="/space-tourism-react/assets/logo.43040818.svg",ze="/space-tourism-react/assets/icon-hamburger.a9c92f26.svg",Me="/space-tourism-react/assets/icon-close.829c583a.svg";const Ce=i.a`
  position: absolute;
  z-index: 9999;
  background: ${e=>e.theme.clrWhite};
  color: ${e=>e.theme.clrDark};
  padding: 0.5em 1em;
  border-radius: 15px;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-in;

  &:focus {
    transform: translateY(0);
  }
`,je=i.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  & img {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  @media (min-width: ${e=>e.theme.brMedium}) {
    &::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -2.5rem;
      margin-left: 2rem;
      background: hsl(0 0% 100% / 0.25);
      order: 1;
    }
    & nav {
      order: 2;
    }
  }
`,Le=i.button`
  display: none;

  @media (max-width: ${e=>e.theme.brSmall}) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    background-image: ${e=>e.isOpen?`url(${Me})`:`url(${ze})`};
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
    cursor: pointer;

    &:focus-visible {
      outline: 5px solid white;
      outline-offset: 5px;
    }
  }
`,Ae=i.ul`
  width: 100%;
  display: flex;
  gap: clamp(1.5rem, 5vw, 3.5rem);
  padding: 2.125rem;
  margin: 0;
  list-style: none;
  background: hsl(230 35% 7% / 0.95);
  opacity: 1;

  @media (max-width: ${e=>e.theme.brSmall}) {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    padding: min(20rem, 15vh) 2rem;
    margin: 0;
    gap: 2.5rem;
    flex-direction: column;
    transform: ${e=>e.isOpen?"translateX(0)":"translateX(100%)"};
    opacity: ${e=>e.isOpen?1:0};
    transition: transform 600ms ease, opacity 500ms ease-in-out;
  }

  @supports (backdrop-filter: blur(1rem)) {
    background: hsl(230 35% 7% / 0.5);
    backdrop-filter: blur(1.5rem);
  }

  @media (min-width: ${e=>e.theme.brSmall}) {
    padding-inline: clamp(3rem, 7vw, 7rem);
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    margin-block: 2rem;
    & > li:last-child {
      margin-right: 5rem;
    }
  }
  @media (min-width: 35em) and (max-width: 44.999em) {
    & a > span {
      display: none;
    }
  }
`,p=i(j)`
  padding: 2.125rem 0;
  font-family: ${e=>e.theme.ffSansCondens};
  font-size: ${e=>e.theme.fs300};
  letter-spacing: 2.7px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${e=>e.theme.clrWhite};
  border: 0;
  border-bottom: 0.2rem solid hsl(0 0% 100% / 0);

  @media (min-width: ${e=>e.theme.brSmall}) {
    &:hover {
      border-color: hsl(0 0% 100% / 0.5);
    }
    &.active {
      border-color: hsl(0 0% 100% / 1);
    }
  }

  @media (max-width: ${e=>e.theme.brMedium}) {
    padding: 1rem 0;
  }

  & > span {
    font-weight: 700;
    margin-right: 0.5em;
  }
`,Te=()=>{const[e,s]=d.exports.useState(!1),n=()=>{s(!e)},m=()=>{e===!0&&s(!1)};return r(l,{children:[t(Ce,{href:"#main",children:"Skip to content"}),r(je,{children:[t("div",{children:t("img",{src:Se,alt:"space tourism logo"})}),t(Le,{"aria-controls":"navigation",isOpen:e,onClick:n,children:t(f,{"aria-expanded":"false",children:"Menu"})}),t("nav",{children:r(Ae,{isOpen:e,children:[t("li",{children:r(p,{to:"/",onClick:m,end:!0,children:[t("span",{"aria-hidden":"true",children:"00"}),"Home"]})}),t("li",{children:r(p,{to:"/destination",onClick:m,children:[t("span",{"aria-hidden":"true",children:"01"}),"Destination"]})}),t("li",{children:r(p,{to:"/crew",onClick:m,children:[t("span",{"aria-hidden":"true",children:"02"}),"Crew"]})}),t("li",{children:r(p,{to:"/technology",onClick:m,children:[t("span",{"aria-hidden":"true",children:"03"}),"Technology"]})})]})})]})]})};var $="/space-tourism-react/assets/background-home-desktop.c0071b13.jpg",Ee="/space-tourism-react/assets/background-destination-desktop.47c4fc03.jpg",De="/space-tourism-react/assets/background-crew-desktop.b41ac858.jpg",Ie="/space-tourism-react/assets/background-technology-desktop.457659c3.jpg",k="/space-tourism-react/assets/background-home-tablet.5de14385.jpg",We="/space-tourism-react/assets/background-destination-tablet.346382a8.jpg",Oe="/space-tourism-react/assets/background-crew-tablet.335a7465.jpg",Ne="/space-tourism-react/assets/background-technology-tablet.cbc2b315.jpg",S="/space-tourism-react/assets/background-home-mobile.ffd09c17.jpg",Be="/space-tourism-react/assets/background-destination-mobile.59a7e1d7.jpg",He="/space-tourism-react/assets/background-crew-mobile.a393984a.jpg",Pe="/space-tourism-react/assets/background-technology-mobile.b1fdb61f.jpg";const Re=i.div`
  height: 100vh;
  width: 100vw;
  background-image: ${e=>{switch(e.current){case"/":return`url(${S})`;case"/destination":return`url(${Be})`;case"/crew":return`url(${He})`;case"/technology":return`url(${Pe})`;default:return`url(${S})`}}};
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media (min-width: ${e=>e.theme.brSmall}) {
    background-image: ${e=>{switch(e.current){case"/":return`url(${k})`;case"/destination":return`url(${We})`;case"/crew":return`url(${Oe})`;case"/technology":return`url(${Ne})`;default:return`url(${k})`}}};
    background-position: center center;
  }
  @media (min-width: ${e=>e.theme.brMedium}) {
    background-image: ${e=>{switch(e.current){case"/":return`url(${$})`;case"/destination":return`url(${Ee})`;case"/crew":return`url(${De})`;case"/technology":return`url(${Ie})`;default:return`url(${$})`}}};
  }
`,Fe=({children:e})=>{const s=L().pathname;return t(Re,{current:s,children:e})};function _e(){return t(l,{children:r(A,{theme:ke,children:[t(O,{}),r(Fe,{children:[t(Te,{}),r(T,{children:[t(h,{path:"/",element:t(R,{})}),t(h,{path:"/destination",element:t(K,{})}),t(h,{path:"/technology",element:t(ce,{})}),t(h,{path:"/crew",element:t(ye,{})}),t(h,{path:"*",element:t($e,{})})]})]})]})})}E.render(t(D.StrictMode,{children:t(I,{children:t(_e,{})})}),document.getElementById("root"));
