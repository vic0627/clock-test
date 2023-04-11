const btn = `<svg width="86" height="82" viewBox="0 0 86 82" fill="none">
<g filter="url(#filter0_d_401_304)">
<path d="M42.134 30.5C42.5189 29.8333 43.4811 29.8333 43.866 30.5L55.1244 50C55.5093 50.6667 55.0281 51.5 54.2583 51.5H31.7417C30.9719 51.5 30.4907 50.6667 30.8756 50L42.134 30.5Z" fill="#79BBFF"/>
<path d="M43.433 30.75L54.6913 50.25C54.8838 50.5833 54.6432 51 54.2583 51H31.7417C31.3568 51 31.1162 50.5833 31.3087 50.25L42.567 30.75C42.7594 30.4167 43.2406 30.4167 43.433 30.75Z" stroke="#C6E2FF"/>
</g>
<defs>
<filter id="filter0_d_401_304" x="0.740234" y="0" width="84.5195" height="81.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.886275 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_401_304"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_401_304" result="shape"/>
</filter>
</defs>
</svg>
`;
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
const menuOptions = ["YEAR", "MONTH", "DATE"];
const dayOptions = ["st", "nd", "rd", "th"];
const testRes = {
  article:
    "On June 27, 1995, the NBA held its annual draft in Toronto. This year's draft was especially noteworthy because Kevin Garnett, a high school basketball star from Chicago, was selected as the fifth overall pick by the Minnesota Timberwolves. Garnett's selection was significant because he was the first high school player to be drafted in 20 years. He paved the way for other high school players to follow in his footsteps, such as Kobe Bryant, LeBron James, and Dwight Howard.\n\nGarnett's selection raised eyebrows, as many thought it was too big of a risk to draft a player who had not played at the college level. However, Garnett was a phenom on the court, standing at 6'11'' with a unique set of skills that made him a top prospect. He would go on to have a 21-year career in the NBA, win an MVP award, and lead the Boston Celtics to an NBA championship in 2008.\n\nGarnett's selection in the 1995 NBA Draft marked a turning point in the league's history, as it opened the door for high school players to be considered as draft prospects. Although the NBA has since implemented policies to require players to be at least one year removed from high school before entering the draft, Garnett's selection will forever be remembered as a game-changer in the world of basketball.",
  description:
    "The most important object in the article is Kevin Garnett's draft number, 5th overall, as it signified the end of a 20-year drought of high school players being drafted, and opened the door for future players like Kobe Bryant and LeBron James to enter the league straight from high school.",
  title:
    "1995 NBA Draft: Kevin Garnett becomes first high school player in 20 years to be drafted",
};
export { btn, month, menuOptions, date, dayOptions, testRes };
