import React, { useState } from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

import '../style/border_square.css';

const BorderSquare = () => {
  const [borderRadius, setBorderRadius] = useState(
  {
    topLeft: 30,
    topRight: 10,
    bottomLeft: 90,
    bottomRight: 40,
  });

  return <div style={{borderTopLeftRadius: `${borderRadius.topLeft}px`, borderTopRightRadius: `${borderRadius.topRight}px`, borderBottomLeftRadius: `${borderRadius.bottomLeft}px`, borderBottomRightRadius: `${borderRadius.bottomRight}px`}} id="border_square">
    <Slider className="sliderTopLeft" />
    <Slider className="sliderTopRight" />
    <Slider className="sliderBottomLeft" />
    <Slider className="sliderBottomRíght" />
  </div>
};


export default BorderSquare;
