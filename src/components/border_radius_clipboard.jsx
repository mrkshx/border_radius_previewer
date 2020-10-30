import React, { useState, useEffect } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import '../style/border_radius_clipboard.css';


const BorderRadiusClipboard = (props) => {
  const [clipboardText, copyToClipboard] = useState("");

  useEffect(() => {
    const value=`border-radius: ${props.value.topLeft}% ${props.value.topRight}% ${props.value.bottomRight}% ${props.value.bottomLeft}%;`
       copyToClipboard(value);
   }, [props])

  return <div id="border-radius-clipboard" >
    <input id="border-radius-data" value={clipboardText} onChange={({target: {value}}) => copyToClipboard(value)} />
    <CopyToClipboard text={clipboardText}>
      <button >Copy to clipboard</button>
    </CopyToClipboard>
  </div>
}

export default BorderRadiusClipboard;
