import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";
import qrcode from "qrcode-generator";
import UpdateContract from "./components/UpdateContract";
import Transfers from "./components/Transfers";

enum BeaconConnection {
  NONE = "",
  LISTENING = "Listening to P2P channel",
  CONNECTED = "Channel connected",
  PERMISSION_REQUEST_SENT = "Permission request sent, waiting for response",
  PERMISSION_REQUEST_SUCCESS = "Wallet is connected"
}

const App = () => {
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://hangzhounet.api.tez.ie")
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
  // Hangzhounet Increment/Decrement contract
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
      <div className="main-box">
        <h1>Taquito Boilerplate</h1>
        <div id="tabs">
          <div
            id="transfer"
            className={activeTab === "transfer" ? "active" : ""}
            onClick={() => setActiveTab("transfer")}
          >
            Make a transfer
          </div>
          <div
            id="contract"
            className={activeTab === "contract" ? "active" : ""}
            onClick={() => setActiveTab("contract")}
          >
            Interact with a contract
          </div>
        </div>
        <div id="dialog">
          <div id="content">
            {activeTab === "transfer" ? (
              <div id="transfers">
                <h3 className="text-align-center">Make a transfer</h3>
                <Transfers
                  Tezos={Tezos}
                  setUserBalance={setUserBalance}
                  userAddress={userAddress}
                />
              </div>
            ) : (
              <div id="increment-decrement">
                <h3 className="text-align-center">
                  Current counter: <span>{storage}</span>
                </h3>
                <UpdateContract
                  contract={contract}
                  setUserBalance={setUserBalance}
                  Tezos={Tezos}
                  userAddress={userAddress}
                  setStorage={setStorage}
                />
              </div>
            )}
            <p>
              <i className="far fa-file-code"></i>&nbsp;
              <a
                href={`https://better-call.dev/hangzhounet/${contractAddress}/operations`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contractAddress}
              </a>
            </p>
            <p>
              <i className="far fa-address-card"></i>&nbsp; {userAddress}
            </p>
            <p>
              <i className="fas fa-piggy-bank"></i>&nbsp;
              {(userBalance / 1000000).toLocaleString("en-US")} ꜩ
            </p>
          </div>
          <DisconnectButton
            wallet={wallet}
            setPublicToken={setPublicToken}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setWallet={setWallet}
            setTezos={setTezos}
            setBeaconConnection={setBeaconConnection}
          />
        </div>
        <div id="footer">
          <img src="built-with-taquito.png" alt="Built with Taquito" />
        </div>
      </div>
    );
  } else if (!publicToken && !userAddress && !userBalance) {
    return (
      <div className="main-box">
        <div className="title">
          <h1>Tezcrow</h1>
          <a href="https://app.netlify.com/start/deploy?repository=https://github.com/ecadlabs/taquito-boilerplate">
            <img
              src="https://www.netlify.com/img/deploy/button.svg"
              alt="netlify-button"
            />
          </a>
        </div>
        <div id="dialog">
          <header>Welcome to Tezcrow!</header>
          <div id="content">
                <b>The main focus on Tezcrow is to make the overall trading process as simple and user friendly as possible, you need a quick trade. Tezcrow it...</b> 
                <p>1. Initiator connects their own wallet and selects NFT's they would like to offer</p>
                <p>2. Initiator searches wallet address and selects NFT's they would like to receive</p>
                <p>3. Initiator confirms offer resulting in offered NFT's going to escrow wallet</p>
                <p>4. Receiver connects wallet and views offer</p>
                <p>5. Receiver confirms offer which automatically sends NFT's to the Initiators wallets and releases Initiator wallets offer from escrow to the receiver</p>  
            <b>Offers prior to confirmation from both parties can be withdrawn from the escrow wallet by the initiator at any time.</b> 
          </div>
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
        </div>
        <div id="footer">
          <img src="built-with-taquito.png" alt="Built with Taquito" />
        </div>
      </div>
    );
  } else {
    return <div>An error has occurred</div>;
  }
};

export default App;
