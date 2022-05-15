import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import Dragons from "../images/Dragons - williamapan.jpeg";
import DegenFox1968 from "../images/DegenFox1968.png";
import GardenMonoliths151 from "../images/Garden Monoliths 151 - zancan.png";


const NFTContainerCenter = () => {
    return (
          <div className="tradeContainer">
            <div className="trade_offer1">
              <div className="card">
                <img src={Dragons} alt="Avatar1" />
                <div className="container">
                  <h5><b>Dragons 373</b></h5>
                  <p>William A Pen</p>
                </div>
              </div>
              <div className="card">
                <img src={DegenFox1968} alt="Avatar2" />
                <div className="container">
                  <h5><b>Degen Fox 1968</b></h5>
                  <p>Fursiq</p>
                </div>
              </div>
            </div>
            <div className="vl"></div>   
            <div className="trade_offer2">
              <div className="card">
                <img src={GardenMonoliths151} alt="Avatar3" />
                <div className="container">
                  <h5><b>Garden, Monoliths 151</b></h5>
                  <p>zancan</p>
                </div>
              </div>
            </div> 
        </div>
    )
};

export default NFTContainerCenter