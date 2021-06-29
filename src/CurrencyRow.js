import React from 'react'
import './global.css'

export default function CurrencyRow(props) {
    const { currencies, selectedCurrency, onChangeCurrency, onChangeAmount, amount } = props;
    return (
        <>
            <table>
                <tr>
                    <td><input type="number" value={amount} onChange={onChangeAmount} /></td>
                </tr>
                <tr>
                    <td>
                        <select value={selectedCurrency} onChange={onChangeCurrency}>
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </td>
                </tr>
            </table>
        </>
    )
}
