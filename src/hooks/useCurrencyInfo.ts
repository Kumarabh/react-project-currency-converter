import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url: string = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url).then((res: any) => res.json()).then((res: any) => {
      setData(res[currency]);
      console.log(res[currency]);
    })
  }, [currency])
  return data;
}

export default useCurrencyInfo;