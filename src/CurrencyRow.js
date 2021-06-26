import React from 'react'

export default function CurrencyRow(props) {
    const { currencies, selectedCurrency, onChangeCurrency, onChangeAmount, amount } = props;
    return (
        <div>
            <>
                <input type="number" value={amount} onChange={onChangeAmount} />
                <select value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencies.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </>
        </div>
    )
}
