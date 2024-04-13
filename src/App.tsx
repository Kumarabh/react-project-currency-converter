import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo: Object = useCurrencyInfo(from);
  const currencyOptions: string[] = Object.keys(currencyInfo);

  const swap = () => {
    const [_to, _from] = [from, to];
    setFrom(_from);
    setTo(_to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    convert();
    console.log('==> form submitted', convertedAmount);
  } 

  return (
    <>
      <h1>Currency converter</h1>
    <form action="" onSubmit={onSubmit}>
    <InputBox
        label='From'
        amount={amount}
        amountDisable={false}
        currencyOptions={currencyOptions}
        onCurrencyChange={(currency: any) => setAmount(amount)}
        selectCurrency={from}
        currencyDisable={false}
      onAmountChange={(amount: any) => setAmount(amount)}
      />

      <div className='swap-btn'>
      <button onClick={() => swap}>Swap</button>
      </div>
      {/* <InputBox
        currencyOptions={currencyOptions}
      /> */}

      <InputBox
        label='To'
        amount={convertedAmount}
        amountDisable={true}
        currencyOptions={currencyOptions}
        onCurrencyChange={(currency: any) => setTo(currency)}
        selectCurrency={to}
        currencyDisable={false}
      // onAmountChange={(amount: any) => setAmount(amount)}
      />

      <button type='submit'>Convert</button>
    </form>

    </>
  )
}

export default App
