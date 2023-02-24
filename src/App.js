import React from "react";
import AudioPlayer from "./AudioPlayer";
import { tracks } from  './tracks';

function App() {
  return (
      <div className="d-flex row m-0 p-4 pe-lg-0 pt-lg-5 justify-items-center align-items-center">
          <div className="d-flex flex-column align-items-center p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 opaque">Blackberry Wine by Joanne Harris</h1>
            <br></br>
            <p className="lead opaque">Welcome to the magical world of Pog Hill and Lansquenet-sous-Tannes!</p>
            <br></br>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
              <a href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=blackberry+wine+joanne+harris" target="_blank" rel="noreferrer" className="nav-link px-3 text-dark" >
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Buy on eBay</button>
              </a>
              <a href="https://www.amazon.com/Blackberry-Wine-Novel-Joanne-Harris/dp/0380815923" target="_blank" rel="noreferrer" className="nav-link px-3 text-dark" >
                <button type="button" className="btn btn-outline-warning btn-lg px-4">Buy on Amazon</button>
              </a>
            </div>
          </div>
          <div className="row-lg-4 p-4 overflow-hidden rounded-3" >
            <img src="/34229055.jpg" className="img-fluid rounded-3 mb-4" alt="book cover" width={350} loading="lazy" />
            <AudioPlayer tracks={tracks} />
          </div>
      </div>
  );
}

export default App;
