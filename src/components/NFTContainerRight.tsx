import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import GardenMonoliths151 from "../images/Garden Monoliths 151 - zancan.png";
import HotHamon3 from "../images/Hot Hamon 3 - ClurbSauce.png";
import Moonlines46 from "../images/Moonlines 46.png";
import NekoBicycleRide from "../images/Neko Bicycle Ride - Jeremiah Ketner.png";
import Smolskull537 from "../images/SMOLSKULL 537.png";
import Smolskull798 from "../images/SMOLSKULL 798.png";
import TheSnail from "../images/The Snail - Terry Bain.jpeg";
import LadyBug2 from "../images/Lady Bug 2 - dddanillOOn.jpeg";
import Osaka from "../images/Osaka Northingman.jpeg";

const NFTContainerRight = () => {
    return (
        <div className="grid">
                    {/* <p>
                      <i className="far fa-address-card"></i>&nbsp; {userAddress}
                    </p>
                    <p>
                      <i className="fas fa-piggy-bank"></i>&nbsp; {userBalance} ꜩ
                    </p> */}
                    <div className="card">
                      <img src={GardenMonoliths151} alt="Avatar1" />
                      <div className="container">
                        <h5><b>Garden, Monoliths 151</b></h5>
                        <p>zancan</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={HotHamon3} alt="Avatar2" />
                      <div className="container">
                        <h5><b>Hot Hamon3</b></h5>
                        <p>ClurbSauce</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Moonlines46} alt="Avatar3" />
                      <div className="container">
                        <h5><b>Moonlines 46</b></h5>
                        <p>Estienne</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={NekoBicycleRide} alt="Avatar4" />
                      <div className="container">
                        <h5><b>Neko Bicycle Ride</b></h5>
                        <p>Jeremiah Ketner</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Smolskull537} alt="Avatar5" />
                      <div className="container">
                        <h5><b>SMOLSKULL 537</b></h5>
                        <p>Mark Knol</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Smolskull798} alt="Avatar6" />
                      <div className="container">
                        <h5><b>SMOLSKULL 798</b></h5>
                        <p>Mark Know</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={TheSnail} alt="Avatar7" />
                      <div className="container">
                        <h5><b>The Snail</b></h5>
                        <p>Terry Bain</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={LadyBug2} alt="Avatar8" />
                      <div className="container">
                        <h5><b>Lady Bug 2</b></h5>
                        <p>dddanillOOn</p>
                      </div>
                    </div>
                    <div className="card">
                      <img src={Osaka} alt="Avatar9" />
                      <div className="container">
                        <h5><b>Osaka</b></h5>
                        <p>Northingman</p>
                      </div>
                    </div>
                  </div>
    )
};

export default NFTContainerRight