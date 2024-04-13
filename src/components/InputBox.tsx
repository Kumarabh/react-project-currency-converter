import { useId } from "react";
import { IInputBox } from "../types/model";

function InputBox({
  label = "From", 
  amount, 
  onAmountChange, 
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false 
}: IInputBox) {

  const inputIdAmount = useId();

  return (
    <>
      <div className="container">
        <div className="container-l">
          <label htmlFor = {inputIdAmount}>{label}</label> <br />
          <input 
          type="number"
          id = {inputIdAmount} 
          value={amount}
          disabled = {amountDisable} 
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

          />
        </div>
        <div className="container-r">
          <label htmlFor="select1">Currency Type</label> <br /> 
          <select 
          name="select1" 
          id="select1"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}
          disabled = {currencyDisable}
          > 
          {
            currencyOptions.map((currency: any, index: number) => <option key={index} value={currency}>{currency}</option>)
          }
            <option value="usd">USD</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox;