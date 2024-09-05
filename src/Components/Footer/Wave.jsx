// Wave.js
const Wave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 180"  // Reduced height
    className="relative"
    style={{ width: '100%', height: 'auto' }}  // Make the SVG responsive
  >
    <path
      fill="#00274D"  // Adjust to the correct color (use hex or rgba if necessary)
      d="M0,96L30,101.3C60,107,120,117,180,130.7C240,144,300,160,360,160C420,160,480,144,540,128C600,112,660,96,720,96C780,96,840,112,900,128C960,144,1020,160,1080,160C1140,160,1200,144,1260,128C1320,112,1380,96,1410,88L1440,80L1440,320L0,320Z"
    />
  </svg>
);

export default Wave;
