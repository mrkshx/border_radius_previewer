import React, { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const BorderRadiusClipboard = () => {
  const [clipboardText, copyToClipboard] = useState("");

  return <div>
    <input value={clipboardText} onChange={({target: {value}}) => copyToClipboard(value)} />
    <CopyToClipboard text={clipboardText}>
      <button>Copy to clipboard with button</button>
    </CopyToClipboard>
  </div>
}

export default BorderRadiusClipboard;
