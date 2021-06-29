import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow.js'
import './global.css';
const API_KEY = 'http://api.exchangeratesapi.io/v1/latest?access_key=5bfaa8e2fad431cd583e5971c3b0b7df';
const fixedDecimals = 2;

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
    toAmount = (amount * exchangeRate).toFixed(fixedDecimals);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate);
  }

  useEffect(() => {
    fetch(API_KEY)
      .then(res => res.json())
      .then(data => {
        setCurrencies([data.base, Object.keys(data.rates)][1]);

        if (!fromCurrency) {
          setFromCurrency('CAD');
        }
        if (!toCurrency) {
          setToCurrency('USD');
        }
        setExchangeRate(data.rates[toCurrency] / data.rates[fromCurrency]);
      });
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(API_KEY)
        .then(res => res.json())
        .then(data =>
          setExchangeRate(data.rates[toCurrency] / data.rates[fromCurrency])
        )
    }
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e, set) => {
    if (isNaN(e.target.value) || e.target.value === '') {
      setAmount();
      setAmountFromCurrency(set);
    } else {
      setAmount(parseFloat(e.target.value));
      setAmountFromCurrency(set);
    }
  }

  return (
    <>
      <div id="v-center">
        <p>Convert</p>
        <table>
          <tr>
            <td class="right">
              <CurrencyRow
                currencies={currencies}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={e => handleAmountChange(e, true)}
                amount={fromAmount}
              />
            </td>
            <td class="center">=</td>
            <td>
              <CurrencyRow
                currencies={currencies}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={e => handleAmountChange(e, false)}
                amount={toAmount}
              />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;