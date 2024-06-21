import React, { useState } from 'react';
import { ethers } from 'ethers';

const CUSDTransfer: React.FC = () => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleTransfer = async () => {
    const cUSDAddress = '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1'; // cUSD contract address on Alfajores
    const cUSDDecimals = 18;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      setStatus('Sending transaction...');
      const contract = new ethers.Contract(
        cUSDAddress,
        [
          'function transfer(address to, uint256 value) public returns (bool)',
        ],
        signer
      );
      const tx = await contract.transfer(receiverAddress, ethers.utils.parseUnits(transferAmount, cUSDDecimals));
      setStatus(`Transaction sent: ${tx.hash}`);
      await tx.wait();
      setStatus('Transaction successful!');
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <div>
      <h2>Transfer cUSD</h2>
      <input
        type="text"
        placeholder="Receiver Address"
        value={receiverAddress}
        onChange={(e) => setReceiverAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount to Transfer"
        value={transferAmount}
        onChange={(e) => setTransferAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer cUSD</button>
      <p>{status}</p>
    </div>
  );
};

export default CUSDTransfer;
