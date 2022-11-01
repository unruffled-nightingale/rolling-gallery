import PictureBanner from './PictureBanner.js'
import IntroBanner from './IntroBanner.js'
import MobileControls from './MobileControls.js';
import DesktopControls from './DesktopControls.js';
import { isMobile } from 'react-device-detect';


const Hud = ({ picture, invisible, setMovement }) => {

  return (
    <>
      <PictureBanner picture={picture} />
      <IntroBanner invisible={invisible} />
      {
        isMobile ?
          <MobileControls setMovement={setMovement} /> :
          <DesktopControls setMovement={setMovement} />
      }
    </>
  );
}

export default Hud;