import { useState, useEffect } from "react";
import { ethers } from "ethers";
import assessmentAbi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [addOrganAmount, setaddOrgan] = useState(0);
  const [getOrganAmount, setgetOrgan] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferAddress, setTransferAddress] = useState("");
  const [transferStatus, setTransferStatus] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = assessmentAbi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // Once wallet is set, get a reference to the deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // Adjust port if necessary
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getRemainingOrgans = async () => {
    if (atm && account) {
      const userBalance = await atm.getRemainingOrgan(account);
      setBalance(userBalance.toNumber());
    }
  };

  const addOrgan = async () => {
    if (atm && account) {
      const tx = await atm.addOrgan(addOrganAmount, { value: addOrganAmount });
      await tx.wait();
      getRemainingOrgans();
    }
  };

  const getOrgan = async () => {
    if (atm && account) {
      const tx = await atm.getOrgan(getOrganAmount);
      await tx.wait();
      getRemainingOrgans();
    }
  };

  const transferOrgan = async () => {
    if (atm && account) {
      try {
        const tx = await atm.transferOrgan(transferAddress, transferAmount);
        await tx.wait();
        getRemainingOrgans();
        setTransferStatus(`${transferAmount} Organ/s has been transferred to ${transferAddress}.`);
      } catch (error) {
        console.error("Transfer error:", error);
        setTransferStatus("Transfer failed. Please try again.");
      }
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this Organ Bank.</p>;
    }

    if (!account) {
      return (
        <button onClick={connectAccount}>Connect MetaMask</button>
      );
    }

    if (balance === undefined) {
      getRemainingOrgans();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Number of Organs Donated: {balance} Organs Donated</p>
        <div>
          <input
            type="number"
            placeholder="Donate Organ to Bank"
            onChange={(e) => setaddOrgan(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={addOrgan}>Send</button>
        </div>
        <br></br>
        <div>
          <input
            type="number"
            placeholder="Get Organ from the Bank"
            onChange={(e) => setgetOrgan(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={getOrgan}>Send</button>
        </div>

        <br></br>
        <hr></hr>
        <div>
          <h2>Donate an Organ</h2>
      
          <input
            type="number"
            placeholder="Insert Amount"
            onChange={(e) => setTransferAmount(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder="Donor Receipient Address"
            onChange={(e) => setTransferAddress(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={transferOrgan}>Send Organ</button>
        </div>
        {transferStatus && <p>{transferStatus}</p>}
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to my Organ Bank!</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
        input {
          margin: 5px;
        }
      `}</style>
    </main>
  );
}
