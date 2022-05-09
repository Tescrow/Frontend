import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";
import qrcode from "qrcode-generator";
import UpdateContract from "./components/UpdateContract";
import Transfers from "./components/Transfers";
import twitterLogo from "./images/twitter.png";
import discordLogo from "./images/discord.png";


enum BeaconConnection {
  NONE = "",
  LISTENING = "Listening to P2P channel",
  CONNECTED = "Channel connected",
  PERMISSION_REQUEST_SENT = "Permission request sent, waiting for response",
  PERMISSION_REQUEST_SUCCESS = "Wallet is connected"
}

const App = () => {
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://ithaca.api.tez.ie")
  );
  const [contract, setContract] = useState<any>(undefined);
  const [publicToken, setPublicToken] = useState<string | null>("");
  const [wallet, setWallet] = useState<any>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);
  const [storage, setStorage] = useState<number>(0);
  const [copiedPublicToken, setCopiedPublicToken] = useState<boolean>(false);
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("transfer");

  // Granadanet Increment/Decrement contract
  // const contractAddress: string = "KT1K3XVNzsmur7VRgY8CAHPUENaErzzEpe4e";
  // ithaca Increment/Decrement contract
  const contractAddress: string = "KT1WiPWNcBMcXJButkkvroRGkzs45n3iZ13c";

  const generateQrCode = (): { __html: string } => {
    const qr = qrcode(0, "L");
    qr.addData(publicToken || "");
    qr.make();

    return { __html: qr.createImgTag(4) };
  };

  if (publicToken && (!userAddress || isNaN(userBalance))) {
    return (
      <div className="main-box">
        <h1>Tezcrow</h1>
        <div id="dialog">
          <header>The P2P Trading Marketplace</header>
          <div id="content">
            <p className="text-align-center">
              <i className="fas fa-broadcast-tower"></i>&nbsp; Connecting to
              your wallet
            </p>
            <div
              dangerouslySetInnerHTML={generateQrCode()}
              className="text-align-center"
            ></div>
            <p id="public-token">
              {copiedPublicToken ? (
                <span id="public-token-copy__copied">
                  <i className="far fa-thumbs-up"></i>
                </span>
              ) : (
                <span
                  id="public-token-copy"
                  onClick={() => {
                    if (publicToken) {
                      navigator.clipboard.writeText(publicToken);
                      setCopiedPublicToken(true);
                      setTimeout(() => setCopiedPublicToken(false), 2000);
                    }
                  }}
                >
                  <i className="far fa-copy"></i>
                </span>
              )}

              <span>
                Public token: <span>{publicToken}</span>
              </span>
            </p>
            <p className="text-align-center">
              Status: {beaconConnection ? "Connected" : "Disconnected"}
            </p>
          </div>
        </div>
        <div id="footer">
          <img src="built-with-taquito.png" alt="Built with Taquito" />
        </div>
      </div>
    );
  } else if (userAddress && !isNaN(userBalance)) {
    return (
      <body>
        <header>
          <div className="top_header">
            <div className="circle"></div>
            <div className="socials">
                <img src={discordLogo} alt="discord" />
                <img src={twitterLogo} alt="twitter" />
            </div>
          </div>
        <h1 className="logo">tezcrow</h1>
        </header>
        
        <div className="tops">
            <DisconnectButton
            wallet={wallet}
            setPublicToken={setPublicToken}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setWallet={setWallet}
            setTezos={setTezos}
            setBeaconConnection={setBeaconConnection}
            />
            <Transfers
                  Tezos={Tezos}
                  setUserBalance={setUserBalance}
                  userAddress={userAddress}
            />
        </div>
        
        <div className="bottom">
            <div className="left">
                {/* <h3>Your NFTs</h3> */}
                <div className="nfts">
                  <h3>Your NFTs</h3>
                  <p>
                    <i className="far fa-address-card"></i>&nbsp; {userAddress}
                  </p>
                  <p>
                  <i className="fas fa-piggy-bank"></i>&nbsp; {userBalance} ꜩ
                  </p>
                </div>
            </div>
            <div className="center">
                <div className="trade_offer">
                  <h4>Make Trade Offer</h4>
                </div>
                <div className="send_offer">Send Offer</div>
            </div>
            <div className="right">
                {/* <h3>Their NFTs</h3> */}
                <div className="nfts">
                  <h3>Their NFTs</h3>
                </div>
            </div>
        {/* </div>
          <div id="dialog">
            <div id="content">
                  <b>Tezcrow is the easiest and cheapest way to trade Tezos NFTs.</b> 
                  <p>Want an expensive NFT, but don't want to pay huge marketplace fees? Tezcrow it!</p>   
                  <p>Want to trade a lot of your cheap (undervalued) NFTs for a blue chip NFT? Tezcrow it!</p>
                  <p>Want to trade NFTs with a friend? Tezcrow it!</p>
                  <p>1. Initiator connects their wallet.</p>
                  <p>2. Initiator pastes Counterparty's wallet address or searches connected wallets for desired NFTs.</p>
                  <p>3. Initiator selects NFTs they want from Counterparty's wallet and selects NFTs they want to offer to Counterparty.</p>
                  <p>4. Initiator confirms offer! Selected NFTs automatically sent to escrow wallet.</p>
                  <p>5. Counterparty connects wallet and views offer.</p>
                  <p>6. Counterparty confirms offer! NFTs automatically sent to the Initiator's wallet and Counterparty recieves NFTs from escrow.</p>  
              <b>Prior to confirmation, Initiator can withdraw any offer. NFTs in the escrow wallet will be automatically sent back to Initiator.</b> 
            </div> */}
            
          </div>
          <div id="footer">
            <img src="built-with-taquito.png" alt="Built with Taquito" />
          </div>
        </body>
    );
  } else if (!publicToken && !userAddress && !userBalance) {
    return (
      <body>
        <header>
          <div className="top_header">
            <div className="circle"></div>
            <div className="socials">
                <img src={discordLogo} alt="discord" />
                <img src={twitterLogo} alt="twitter" />
            </div>
          </div>
        <h1 className="logo">tezcrow</h1>
        </header>
        
        <div className="tops">
          <ConnectButton
              Tezos={Tezos}
              setContract={setContract}
              setPublicToken={setPublicToken}
              setWallet={setWallet}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              setStorage={setStorage}
              contractAddress={contractAddress}
              setBeaconConnection={setBeaconConnection}
              wallet={wallet}
            />
            <Transfers
                  Tezos={Tezos}
                  setUserBalance={setUserBalance}
                  userAddress={userAddress}
            />
        </div>
        
        <div className="bottom">
            <div className="left">
                {/* <h3>Your NFTs</h3> */}
                <div className="nfts">
                  <h3>Your NFTs</h3>
                </div>
            </div>
            <div className="center">
                <div className="trade_offer">
                  <h4>Make Trade Offer</h4>
                </div>
                <div className="send_offer">Send Offer</div>
            </div>
            <div className="right">
                {/* <h3>Their NFTs</h3> */}
                <div className="nfts">
                  <h3>Their NFTs</h3>
                </div>
            </div>
        {/* </div>
          <div id="dialog">
            <div id="content">
                  <b>Tezcrow is the easiest and cheapest way to trade Tezos NFTs.</b> 
                  <p>Want an expensive NFT, but don't want to pay huge marketplace fees? Tezcrow it!</p>   
                  <p>Want to trade a lot of your cheap (undervalued) NFTs for a blue chip NFT? Tezcrow it!</p>
                  <p>Want to trade NFTs with a friend? Tezcrow it!</p>
                  <p>1. Initiator connects their wallet.</p>
                  <p>2. Initiator pastes Counterparty's wallet address or searches connected wallets for desired NFTs.</p>
                  <p>3. Initiator selects NFTs they want from Counterparty's wallet and selects NFTs they want to offer to Counterparty.</p>
                  <p>4. Initiator confirms offer! Selected NFTs automatically sent to escrow wallet.</p>
                  <p>5. Counterparty connects wallet and views offer.</p>
                  <p>6. Counterparty confirms offer! NFTs automatically sent to the Initiator's wallet and Counterparty recieves NFTs from escrow.</p>  
              <b>Prior to confirmation, Initiator can withdraw any offer. NFTs in the escrow wallet will be automatically sent back to Initiator.</b> 
            </div> */}
            
          </div>
          <div id="footer">
            <img src="built-with-taquito.png" alt="Built with Taquito" />
          </div>
        </body>
    );
  } else {
    return <div>An error has occurred</div>;
  }
};

export default App;
