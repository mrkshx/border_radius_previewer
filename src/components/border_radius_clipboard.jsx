import React, { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import '../style/border_radius_clipboard.css';


const BorderRadiusClipboard = (props) => {
  const [clipboardText, copyToClipboard] = useState("");

  return <div id="border-radius-clipboard" >
    <input id="border-radius-data" value={`border-radius: ${props.value.topLeft}% ${props.value.topRight}% ${props.value.bottomRight}% ${props.value.bottomLeft}%`} onChange={({target: {value}}) => copyToClipboard(value)} />
    <CopyToClipboard text={clipboardText}>
      <button >Copy to clipboard</button>
    </CopyToClipboard>
  </div>
}

export default BorderRadiusClipboard;
