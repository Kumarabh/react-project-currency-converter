export interface IInputBox {
  label: string, 
  amount: number, 
  onAmountChange?: (e: any) => void, 
  onCurrencyChange: (e: any) => void,
  currencyOptions: any[],
  selectCurrency: string,
  amountDisable: boolean,
  currencyDisable: boolean 
}