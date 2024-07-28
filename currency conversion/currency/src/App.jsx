import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/c5b5aa97a81d34e7320ffa78/latest/${baseCurrency}`);
        setRates(response.data.conversion_rates);
      } catch (error) {
        console.error('Error fetching the exchange rates:', error);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  useEffect(() => {
    if (rates[targetCurrency]) {
      setConvertedAmount((amount * rates[targetCurrency]).toFixed(2));
    }
  }, [amount, targetCurrency, rates]);

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          From:
          <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <h2>
          {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
        </h2>
      </div>
    </div>
  );
};

export default CurrencyConverter;
