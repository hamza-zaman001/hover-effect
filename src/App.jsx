// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import { diamond, line, centered, popup, floating } from './assets';

const App = () => {
  const [isAnyPairHovered, setIsAnyPairHovered] = useState(false);

  return (
    <div className="App">
      {/* Pair 1: Diamond1 and Line1 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault1}
        hoverDiamondImage={diamond.diamondHover1}
        defaultLineImage={line.lineDefault1}
        hoverLineImage={line.lineHover1}
        popupImage={popup.diamondPopup1}
        floatingImage={floating.diamondFloating1}
        positionDiamond={{ bottom: '110px', left: '370px' }}
        positionLine={{ bottom: '-0px', left: '60px' }}
        lineImageSize={{ width: '370px', height: '140px' }} //line size
        positionPopup={{ top: '-380px', left: '310px' }}
        positionFloating={{ top: '-300px', left: '400px' }}
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.7s"
      />

      {/* Pair 2: Diamond2 and Line2 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault2}
        hoverDiamondImage={diamond.diamondHover2}
        defaultLineImage={line.lineDefault2}
        hoverLineImage={line.lineHover2}
        popupImage={popup.diamondPopup2}
        floatingImage={floating.diamondFloating2}
        positionDiamond={{ top: '-270px', left: '140px' }} //diamond position
        positionLine={{ top: '-150px', left: '60px' }} //Line position
        lineImageSize={{ width: '130px', height: '100px' }} //line size
        positionPopup={{ top: '-410px', left: '70px' }} //Card position
        positionFloating={{ top: '-310px', left: '100px' }} //Name Position
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="2s"
      />

      {/* Pair 3: Diamond3 and Line3 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault3}
        hoverDiamondImage={diamond.diamondHover3}
        defaultLineImage={line.lineDefault3}
        hoverLineImage={line.lineHover3}
        positionDiamond={{ top: '-310px', left: '-90px' }} //diamond position
        positionLine={{ top: '-240px', left: '10px' }} //Line position
        lineImageSize={{ width: '25px', height: '200px' }} //line size
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.4s"
      />

      {/* Pair 4: Diamond4 and Line4 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault4}
        hoverDiamondImage={diamond.diamondHover4}
        defaultLineImage={line.lineDefault4}
        hoverLineImage={line.lineHover4}
        popupImage={popup.diamondPopup4}
        floatingImage={floating.diamondFloating4}
        positionDiamond={{ top: '-355px', left: '-240px' }} //diamond position
        positionLine={{ top: '-270px', left: '-160px' }} //Line position
        lineImageSize={{ width: '160px', height: '250px' }} //line size
        positionPopup={{ top: '-450px', left: '-320px' }} //Card position
        positionFloating={{ top: '-350px', left: '-370px' }} //Name Position
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.2s"
      />

      {/* Pair 5: Diamond5 and Line5 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault5}
        hoverDiamondImage={diamond.diamondHover5}
        defaultLineImage={line.lineDefault5}
        hoverLineImage={line.lineHover5}
        positionDiamond={{ top: '-180px', left: '-250px' }} //diamond position
        positionLine={{ top: '-80px', left: '-170px' }} //Line position
        lineImageSize={{ width: '150px', height: '80px' }} //line size
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.5s"
      />

      {/* Pair 6: Diamond6 and Line6 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault6}
        hoverDiamondImage={diamond.diamondHover6}
        defaultLineImage={line.lineDefault6}
        hoverLineImage={line.lineHover6}
        popupImage={popup.diamondPopup6}
        floatingImage={floating.diamondFloating6}
        positionDiamond={{ top: '-155px', left: '-500px' }} //diamond position
        positionLine={{ top: '-70px', left: '-420px' }} //Line position
        lineImageSize={{ width: '380px', height: '100px' }} //line size
        positionPopup={{ top: '-290px', left: '-570px' }} //Card position
        positionFloating={{ top: '-170px', left: '-500px' }} //Name Position
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1s"
      />

      {/* Pair 7: Diamond7 and Line7 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault7}
        hoverDiamondImage={diamond.diamondHover7}
        defaultLineImage={line.lineDefault7}
        hoverLineImage={line.lineHover7}
        popupImage={popup.diamondPopup7}
        floatingImage={floating.diamondFloating7}
        positionDiamond={{ top: '40px', left: '-505px' }} //diamond position
        positionLine={{ top: '40px', left: '-435px' }} //Line position
        lineImageSize={{ width: '420px', height: '70px' }} //line size
        positionPopup={{ top: '160px', left: '-540px' }} //Card position
        positionFloating={{ top: '10px', left: '-500px' }} //Name Position
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="2s"
      />

      {/* Pair 8: Diamond8 and Line8 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault8}
        hoverDiamondImage={diamond.diamondHover8}
        defaultLineImage={line.lineDefault8}
        hoverLineImage={line.lineHover8}
        popupImage={popup.diamondPopup8}
        floatingImage={floating.diamondFloating8}
        positionDiamond={{ top: '140px', left: '-240px' }} //diamond position
        positionLine={{ top: '10px', left: '-160px' }} //Line position
        lineImageSize={{ width: '90px', height: '200px' }} //line size
        positionPopup={{ top: '250px', left: '-300px' }} //Card position
        positionFloating={{ top: '270px', left: '-250px' }} //Name Position
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.5s"
      />

      {/* Pair 9: Diamond9 and Line9 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault9}
        hoverDiamondImage={diamond.diamondHover9}
        defaultLineImage={line.lineDefault9}
        hoverLineImage={line.lineHover9}
        popupImage={popup.diamondPopup9}
        floatingImage={floating.diamondFloating9}
        positionDiamond={{ top: '180px', left: '-40px' }} //diamond position
        positionLine={{ top: '50px', left: '10px' }} //Line position
        lineImageSize={{ width: '30px', height: '160px' }} //line size
        positionPopup={{ top: '295px', left: '-80px' }} //Card position
        positionFloating={{ top: '320px', left: '30px' }} //Name Position
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.8s"
      />

      {/* Pair 10: Diamond10 and Line10 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault10}
        hoverDiamondImage={diamond.diamondHover10}
        defaultLineImage={line.lineDefault10}
        hoverLineImage={line.lineHover10}
        positionDiamond={{ top: '210px', left: '200px' }} //diamond position
        positionLine={{ top: '50px', left: '85px' }} //Line position
        lineImageSize={{ width: '140px', height: '200px' }} //line size
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.5s"
      />

      {/* Pair 11: Diamond11 and Line11 */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault11}
        hoverDiamondImage={diamond.diamondHover11}
        defaultLineImage={line.lineDefault11}
        hoverLineImage={line.lineHover11}
        popupImage={popup.diamondPopup11}
        floatingImage={floating.diamondFloating11}
        positionDiamond={{ top: '10px', left: '350px' }} //diamond position
        positionLine={{ top: '30px', left: '85px' }} //Line position
        lineImageSize={{ width: '300px', height: '40px' }} //line size
        positionPopup={{ top: '-130px', left: '320px' }} //Card position
        positionFloating={{ top: '-20px', left: '370px' }} //Name Position
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
        breathingSpeed="1.8s"
      />

      {/* Center image */}
      <CenterImage isAnyPairHovered={isAnyPairHovered} />
    </div>
  );
};

const ImagePair = ({
  defaultDiamondImage,
  hoverDiamondImage,
  defaultLineImage,
  hoverLineImage,
  popupImage,
  floatingImage,
  positionDiamond,
  positionLine,
  positionPopup,
  positionFloating,
  lineImageSize,
  onHover,
  onLeave,
  breathingSpeed,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showFloating, setShowFloating] = useState(true);

  const diamondStyle = {
    ...positionDiamond,
    animation: `breathingAnimation ${breathingSpeed} infinite alternate`,
  };

  const lineStyle = {
    ...positionLine,
    animation: `breathingAnimation ${breathingSpeed} infinite alternate`,
    width: lineImageSize?.width, // Apply width from lineImageSize
    height: lineImageSize?.height, // Apply height from lineImageSize
  };

  const handleMouseEnterDiamond = () => {
    onHover();
    setShowPopup(true);
    setShowFloating(false);  // Hide the floating image
  };

  const handleMouseLeaveDiamond = () => {
    onLeave();
    setShowPopup(false);
    setShowFloating(true);  // Show the floating image
  };

  return (
    <div className="image-pair">
      {/* Diamond image with hover functionality */}
      <div className="image-container diamond-image-container" style={diamondStyle}>
        <ImageWithHover
          defaultImage={defaultDiamondImage}
          hoveredImage={hoverDiamondImage}
          onHover={handleMouseEnterDiamond}
          onLeave={handleMouseLeaveDiamond}
        />
      </div>

      {/* Floating image (conditionally rendered) */}
      {showFloating && floatingImage && (
        <div className="floating-container" style={positionFloating}>
          <img src={floatingImage} alt={floatingImage ? 'Floating' : ''} className="floating-image" />
        </div>
      )}

      {/* Line image */}
      <div className="image-container line-image-container" style={lineStyle}>
        <img src={defaultLineImage} alt="Default Line" className="default-image" />
        <img src={hoverLineImage} alt="Hovered Line" className="hover-image" />
      </div>

      {/* Popup image (conditionally rendered) */}
      {showPopup && popupImage && (
        <div className="popup-container" style={positionPopup}>
          <img src={popupImage} alt={popupImage ? 'Popup' : ''} className="popup-image" />
        </div>
      )}
    </div>
  );
};

const ImageWithHover = ({ defaultImage, hoveredImage, position, onHover, onLeave }) => {
  return (
    <div className="image-container" style={position} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <img src={defaultImage} alt="Default" className="default-image" />
      <img src={hoveredImage} alt="Hovered" className="hover-image" />
    </div>
  );
};

const CenterImage = ({ isAnyPairHovered }) => {
  return (
    <div className="center-image-container">
      <img
        src={isAnyPairHovered ? centered.centeredHovered : centered.centeredDefault}
        alt="Center"
        className="center-image"
      />
    </div>
  );
};

export default App;
