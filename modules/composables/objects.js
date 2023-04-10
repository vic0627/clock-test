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
export { btn, month, menuOptions, date };