import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow.js'
const API_KEY = 'http://api.exchangeratesapi.io/v1/latest?access_key=6b0b0cf0d45d7ac2ae81d1571a3e7091';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);

  let toAmount = 0, fromAmount = 0;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(API_KEY)
      .then(res => res.json())
      .then(data => {
        setCurrencies([data.base, Object.keys(data.rates)][1]);
        setFromCurrency('CAD');
        setToCurrency('USD');
        setExchangeRate(data.rates['USD']);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${API_KEY}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency]);


  const handleAmountChange = (e, set) => {
    setAmount(e.target.value);
    setAmountFromCurrency(set);
  }

  const handleFromAmountChange = e => {
    handleAmountChange(e, true);
  }

  const handleToAmountChange = e => {
    handleAmountChange(e, false);
  }

  return (
    <>
      <p>Convert</p>
      <CurrencyRow
        currencies={currencies}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div>=</div>
      <CurrencyRow
        currencies={currencies}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  );
}

export default App;
