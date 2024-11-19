import React, { useState, useEffect } from 'react';

const Auction = ({ product }) => {
  const [bid, setBid] = useState(0);
  const [highestBid, setHighestBid] = useState(product.startingBid);
  const [timeLeft, setTimeLeft] = useState(60); // Vreme licitacije u sekundama

  // Tajmer koji smanjuje vreme svaki sekund
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Čišćenje intervala
    }
  }, [timeLeft]);

  const handleBid = () => {
    if (bid > highestBid) {
      setHighestBid(bid);
      setBid(0);
    } else {
      alert('Ponuda mora biti viša od trenutne najveće ponude.');
    }
  };

  return (
    <div className="auction-card">
      <div className="auction-header">
        <h2>{product.name}</h2>
        <p className="timer">Preostalo vreme: {timeLeft}s</p>
      </div>
      <div className="auction-details">
        <p>Najviša ponuda: <span className="highest-bid">${highestBid}</span></p>
        <div className="bid-controls">
          <input
            type="number"
            value={bid}
            onChange={(e) => setBid(Number(e.target.value))}
            placeholder="Unesite vašu ponudu"
          />
          <button onClick={handleBid}>Postavi ponudu</button>
        </div>
      </div>
      {timeLeft <= 0 && <p className="auction-ended">Licitacija je završena!</p>}
    </div>
  );
};

export default Auction;
