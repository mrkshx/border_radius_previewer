import React, { useState } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import 'rc-slider/assets/index.css';

import '../style/border_square.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const BorderSquare = () => {
  const [borderRadius, setBorderRadius] = useState(
  {
    topLeft: 30,
    topRight: 10,
    bottomLeft: 90,
    bottomRight: 40,
  });

  return <div style={{borderTopLeftRadius: `${borderRadius.topLeft}px`, borderTopRightRadius: `${borderRadius.topRight}px`, borderBottomLeftRadius: `${borderRadius.bottomLeft}px`, borderBottomRightRadius: `${borderRadius.bottomRight}px`}} id="border_square">
    <SliderWithTooltip
      marks={{
        0: `0px`,
        350: `350px`
      }}
      tipFormatter={value => `${value}px`}
      tipProps={{
        placement: 'top',
        visible: true,
      }}
      value={borderRadius.topLeft}
      max={350}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, topLeft: value }
        });
      }}
      className="sliderTopLeft" />
    <SliderWithTooltip
      marks={{
        0: `0px`,
        350: `350px`
      }}
      tipFormatter={value => `${value}px`}
      tipProps={{
        placement: 'top',
        visible: true,
      }}
      value={borderRadius.topRight}
      max={350}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, topRight: value }
        });
      }}
      className="sliderTopRight" />
    <SliderWithTooltip
      marks={{
        0: `0px`,
        350: `350px`
      }}
      tipFormatter={value => `${value}px`}
      tipProps={{
        placement: 'bottom',
        visible: true,
      }}
      value={borderRadius.bottomLeft}
      max={350}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, bottomLeft: value }
        });
      }}
      className="sliderBottomLeft" />
    <SliderWithTooltip
      marks={{
        0: `0px`,
        350: `350px`
      }}
      tipFormatter={value => `${value}px`}
      tipProps={{
        placement: 'bottom',
        visible: true,
      }}
      value={borderRadius.bottomRight}
      max={350}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, bottomRight: value }
        });
      }}
      className="sliderBottomRight" />
  </div>
};


export default BorderSquare;
