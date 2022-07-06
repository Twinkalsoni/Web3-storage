import React, { useState } from 'react';
import './App.css';

import { Web3Storage } from 'web3.storage';
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEI2OTZhN0FkYzc2OTM4RGYwQWE2ZDNhQjAwOTFjRWFGMkREM0Q1ZTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTcwOTc2ODE2OTksIm5hbWUiOiJBUEkifQ.qb2AziYFbLOEDH3_l4TqiC2aC739psoyRKL44csPsOw"
const client = new Web3Storage({ token: apiToken });

const App = () => {

  const [File, setFile] = useState("");
  async function storeFiles() {
    const fileInput = document.querySelector("input")
    const rootCid = await client.put(fileInput.files)
    const res = await client.get(rootCid)
    const files = await res.files()
    const url = URL.createObjectURL(files[0]);
    setFile(url);
  }
  storeFiles()
  return (
    <div className="App">
      <h1>Web3 storage</h1>
      <input type="file" onChange={storeFiles} />
      {
        File && (
          <img src={File} width="600px" />
        )
      }
    </div>
  );
}

export default App;
