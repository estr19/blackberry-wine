import React from "react";
import AudioPlayer from "./AudioPlayer";
import { tracks } from  './tracks';

function App() {
  return (
      <div className="container my-5 rounded-3">
        <div className="row p-4 pe-lg-0 pt-lg-5 align-items-center">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Welcome to the magical Pog Hill and Lansquenet-sous-Tannes!</h1>
            <br></br>
            <p>As a boy, writer Jay Mackintosh spent three golden summers in the ramshackle home of "Jackapple Joe" Cox. A lonely child, he found solace in Old Joe's simple wisdom and folk charms. The magic was lost, however, when Joe disappeared without warning one fall. Years later, Jay's life is stalled with regret and ennui. His bestselling novel, Jackapple Joe, was published ten years earlier and he has written nothing since. Impulsively, he decides to leave his urban life in London and, sight unseen, purchases a farmhouse in the remote French village of Lansquenet. There, in that strange and yet strangely familiar place, Jay hopes to re-create the magic of those golden childhood summers. And while the spirit of Joe is calling to him, it is actually a similarly haunted, reclusive woman who will ultimately help Jay find himself again.</p>
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
          <div className="col-lg-4 offset-lg-1 p-4 overflow-hidden rounded-3" >
            <img src="/34229055.jpg" className="img-fluid rounded-3 mb-4" alt="book cover" width={700} height={500} loading="lazy" />
            <AudioPlayer tracks={tracks} />
          </div>
        </div>
      </div>
  );
}

export default App;
