import {useState, useEffect} from "react"

const useCurrency = (currency) => {
  const [data, setData] = useState({});
  useEffect(()=>{
   fetch(`https://api.frankfurter.app/latest?from=${currency}`)
  .then(res => res.json())
  .then(res => setData(res.rates))
  .catch(err => console.error(err));
  }, [currency])
  console.log(data);
  return data;
};

export default useCurrency;



