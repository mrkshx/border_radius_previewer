import React, { useState } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import BorderRadiusClipboard from './border_radius_clipboard';

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

  return <div style={{borderTopLeftRadius: `${borderRadius.topLeft}%`, borderTopRightRadius: `${borderRadius.topRight}%`, borderBottomLeftRadius: `${borderRadius.bottomLeft}%`, borderBottomRightRadius: `${borderRadius.bottomRight}%`}} id="border_square">
    <SliderWithTooltip
      marks={{
        0: `0%`,
        100: `100%`
      }}
      tipFormatter={value => `${value}%`}
      tipProps={{
        placement: 'top',
        visible: true,
      }}
      value={borderRadius.topLeft}
      max={100}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, topLeft: value }
        });
      }}
      className="sliderTopLeft" />
    <SliderWithTooltip
      marks={{
        0: `0%`,
        100: `100%`
      }}
      tipFormatter={value => `${value}%`}
      tipProps={{
        placement: 'top',
        visible: true,
      }}
      value={borderRadius.topRight}
      max={100}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, topRight: value }
        });
      }}
      className="sliderTopRight" />
    <SliderWithTooltip
      marks={{
        0: `0%`,
        100: `100%`
      }}
      tipFormatter={value => `${value}%`}
      tipProps={{
        placement: 'bottom',
        visible: true,
      }}
      value={borderRadius.bottomLeft}
      max={100}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, bottomLeft: value }
        });
      }}
      className="sliderBottomLeft" />
    <SliderWithTooltip
      marks={{
        0: `0%`,
        100: `100%`
      }}
      tipFormatter={value => `${value}%`}
      tipProps={{
        placement: 'bottom',
        visible: true,
      }}
      value={borderRadius.bottomRight}
      max={100}
      onChange={value => {
        setBorderRadius(prevState => {
        return { ...prevState, bottomRight: value }
        });
      }}
      className="sliderBottomRight" />
      <BorderRadiusClipboard/>
  </div>
};


export default BorderSquare;
