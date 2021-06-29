import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow.js'
import './global.css';
const fixedDecimals = 2;

function App() {
  const data = {
    AED: 4.37328,
    AFN: 94.783024,
    ALL: 122.698575,
    AMD: 591.559577,
    ANG: 2.138362,
    AOA: 770.587424,
    ARS: 113.742323,
    AUD: 1.578946,
    AWG: 2.143202,
    AZN: 2.025209,
    BAM: 1.951581,
    BBD: 2.405283,
    BDT: 101.079368,
    BGN: 1.956311,
    BHD: 0.448965,
    BIF: 2364.66575,
    BMD: 1.190668,
    BND: 1.599531,
    BOB: 8.231646,
    BRL: 5.866303,
    BSD: 1.191316,
    BTC: 0.00003422496,
    BTN: 88.388793,
    BWP: 12.976854,
    BYN: 3.011069,
    BYR: 23337.083936,
    BZD: 2.401292,
    CAD: 1.472231,
    CDF: 2377.762311,
    CHF: 1.096271,
    CLF: 0.031716,
    CLP: 875.140952,
    CNY: 7.690534,
    COP: 4409.041929,
    CRC: 738.238826,
    CUC: 1.190668,
    CUP: 31.55269,
    CVE: 114.12594,
    CZK: 25.483143,
    DJF: 211.605162,
    DKK: 7.436457,
    DOP: 67.927599,
    DZD: 159.686379,
    EGP: 18.681456,
    ERN: 17.862393,
    ETB: 51.949024,
    EUR: 1,
    FJD: 2.454025,
    FKP: 0.843996,
    GBP: 0.859406,
    GEL: 3.744687,
    GGP: 0.843996,
    GHS: 6.965071,
    GIP: 0.843996,
    GMD: 60.867006,
    GNF: 11698.308689,
    GTQ: 9.232376,
    GYD: 249.179552,
    HKD: 9.242616,
    HNL: 28.564367,
    HRK: 7.495485,
    HTG: 111.383419,
    HUF: 351.629163,
    IDR: 17288.552327,
    ILS: 3.884148,
    IMP: 0.843996,
    INR: 88.430762,
    IQD: 1740.160621,
    IRR: 50133.057391,
    ISK: 147.309088,
    JEP: 0.843996,
    JMD: 179.13148,
    JOD: 0.8442,
    JPY: 131.833686,
    KES: 128.349665,
    KGS: 100.787515,
    KHR: 4863.877335,
    KMF: 491.640003,
    KPW: 1071.60121,
    KRW: 1344.960145,
    KWD: 0.358569,
    KYD: 0.992747,
    KZT: 508.337461,
    LAK: 11293.481602,
    LBP: 1818.499507,
    LKR: 237.063031,
    LRD: 204.14009,
    LSL: 16.883497,
    LTL: 3.515731,
    LVL: 0.720222,
    LYD: 5.363973,
    MAD: 10.593965,
    MDL: 21.425031,
    MGA: 4554.303694,
    MKD: 61.548449,
    MMK: 1960.832528,
    MNT: 3388.637786,
    MOP: 9.524841,
    MRO: 425.06811,
    MUR: 50.953321,
    MVR: 18.347928,
    MWK: 961.464613,
    MXN: 23.626821,
    MYR: 4.941648,
    MZN: 75.375213,
    NAD: 16.883932,
    NGN: 488.777353,
    NIO: 41.958557,
    NOK: 10.196285,
    NPR: 141.422268,
    NZD: 1.698743,
    OMR: 0.458481,
    PAB: 1.191316,
    PEN: 4.625699,
    PGK: 4.179314,
    PHP: 57.868229,
    PKR: 188.304028,
    PLN: 4.508522,
    PYG: 8051.836282,
    QAR: 4.335238,
    RON: 4.928054,
    RSD: 117.349494,
    RUB: 86.212068,
    RWF: 1171.021533,
    SAR: 4.465547,
    SBD: 9.544468,
    SCR: 17.451706,
    SDG: 535.207157,
    SEK: 10.168253,
    SGD: 1.600114,
    SHP: 0.843996,
    SLL: 12216.249689,
    SOS: 696.540497,
    SRD: 24.829591,
    STD: 24299.734037,
    SVC: 10.42439,
    SYP: 1497.671288,
    SZL: 16.883991,
    THB: 38.101365,
    TJS: 13.586432,
    TMT: 4.167336,
    TND: 3.301132,
    TOP: 2.672394,
    TRY: 10.392212,
    TTD: 8.085962,
    TWD: 33.237008,
    TZS: 2761.157701,
    UAH: 32.557213,
    UGX: 4234.979138,
    USD: 1.190668,
    UYU: 51.742775,
    UZS: 12616.313255,
    VEF: 254600706468.3882,
    VND: 27412.143618,
    VUV: 129.116946,
    WST: 3.002831,
    XAF: 654.537367,
    XAG: 0.045914,
    XAU: 0.000673,
    XCD: 3.217838,
    XDR: 0.833692,
    XOF: 654.276973,
    XPF: 119.542882,
    YER: 297.905653,
    ZAR: 17.027665,
    ZMK: 10717.438295,
    ZMW: 26.985271,
    ZWL: 383.395345
  }

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
    if (!fromCurrency) {
      setFromCurrency('CAD');
    }
    if (!toCurrency) {
      setToCurrency('USD');
    }

    if (fromCurrency != null && toCurrency != null) {
      setExchangeRate(data[toCurrency] / data[fromCurrency])
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
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={e => handleAmountChange(e, true)}
                amount={fromAmount}
              />
            </td>
            <td class="center">=</td>
            <td>
              <CurrencyRow
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