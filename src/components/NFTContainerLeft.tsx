import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import AtomsGaze from "../images/Atoms' Gaze - Krankarta.png";
import Cuberick10 from "../images/Cuberick 10 - Alisscii.jpeg";
import DegenFox1968 from "../images/DegenFox1968.png";
import DegenFox3763 from "../images/DegenFox3763.png";
import Dragons from "../images/Dragons - williamapan.jpeg";
import Wild67 from "../images/WILD 67 - andre-doodleattack.png";
import Fragments from "../images/Fragments of a Wave - RyanBell.png";

const NFTContainerLeft = () => {
    return (
        <div className="grid">
                    {/* <p>
                      <i className="far fa-address-card"></i>&nbsp; {userAddress}
                    </p>
                    <p>
                      <i className="fas fa-piggy-bank"></i>&nbsp; {userBalance} ꜩ
                    </p> */}
                    <div className="card">
                      <img src={AtomsGaze} alt="Avatar1" />
                      <div className="container">
                        <h5><b>Atoms' Gaze</b></h5>
                        <p>Krankarta</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Cuberick10} alt="Avatar3" />
                      <div className="container">
                        <h5><b>Cuberick 10</b></h5>
                        <p>Alisscii</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={DegenFox1968} alt="Avatar4" />
                      <div className="container">
                        <h5><b>Degen Fox 1968</b></h5>
                        <p>Fursiq</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={DegenFox3763} alt="Avatar5" />
                      <div className="container">
                        <h5><b>Degen Fox 3763</b></h5>
                        <p>Fursiq</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Dragons} alt="Avatar6" />
                      <div className="container">
                        <h5><b>Dragons 373</b></h5>
                        <p>William A Pan</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Wild67} alt="Avatar7" />
                      <div className="container">
                        <h5><b>Wild 67</b></h5>
                        <p>Andre - DoodleAttack</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Fragments} alt="Avatar8" />
                      <div className="container">
                        <h5><b>Fragments of a Wave</b></h5>
                        <p>Ryan Bell</p>
                      </div>
                    </div>
                  </div>
    )
};

export default NFTContainerLeft