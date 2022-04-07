import "./styles.css";
import { useState, useEffect } from "react";

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  console.log(amount);
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    // setTimeout simulates fetch()
    setTimeout(() => {
      const firstCurrency = "Argentine_Peso";
      setCurrencyOptions([
        "Euro",
        "Argentine_Peso",
        "Australian_Dollar",
        "Bangladeshi_Taka",
        "Bahraini_Dinar",
        "Botswana_Pula",
        "Brazilian_Real",
        "British_Pound",
        "Bruneian_Dollar",
        "Bulgarian_Lev",
        "Canadian_Dollar",
        "Chilean_Peso",
        "Chinese_Yuan_Renminbi",
        "Colombian_Peso",
        "Croatian_Kuna",
        "Czech_Koruna",
        "Danish_Krone",
        "Emirati_Dirham",
        "Hong_Kong_Dollar",
        "Hungarian_Forint",
        "Icelandic_Krona",
        "Indian_Rupee",
        "Indonesian_Rupiah",
        "Iranian_Rial",
        "Israeli_Shekel",
        "Japanese_Yen",
        "Kazakhstani_Tenge",
        "Kuwaiti_Dinar",
        "Libyan_Dinar",
        "Malaysian_Ringgit",
        "Mauritian_Rupee",
        "Mexican_Peso",
        "Nepalese_Rupee",
        "New_Zealand_Dollar",
        "Norwegian_Krone",
        "Omani_Rial",
        "Pakistani_Rupee",
        "Philippine_Peso",
        "Polish_Zloty",
        "Qatari_Riyal",
        "Romanian_New_Leu",
        "Russian_Ruble",
        "Saudi_Arabian_Riyal",
        "Singapore_Dollar",
        "South_African_Rand",
        "South_Korean_Won",
        "Sri_Lankan_Rupee",
        "Swedish_Krona",
        "Swiss_Franc",
        "Taiwan_New_Dollar",
        "Thai_Baht",
        "Trinidadian_Dollar",
        "Turkish_Lira",
        "US_Dollar",
        "Venezuelan_Bolivar",
      ]);
      setFromCurrency("EUR");
      setToCurrency(firstCurrency);
      setExchangeRate(121.850236);
    }, 250);
  }, []);

  useEffect(() => {
    if (fromCurrency !== undefined && toCurrency !== undefined) {
      // setTimeout simulates fetch()
      setTimeout(() => {
        const data = {
          success: true,
          timestamp: 1519296206,
          base: "EUR",
          date: "2022-04-08",
          rates: {
            Argentine_Peso: 121.850236,
            Australian_Dollar: 1.454567,
            Bangladeshi_Taka: 93.82868,
            Bahraini_Dinar: 0.409116,
            Botswana_Pula: 12.556458,
            Brazilian_Real: 5.17151,
            British_Pound: 0.832087,
            Bruneian_Dollar: 1.481305,
            Bulgarian_Lev: 1.95583,
            Canadian_Dollar: 1.369959,
            Chilean_Peso: 877.103285,
            Chinese_Yuan_Renminbi: 6.920928,
            Colombian_Peso: 4103.181359,
            Croatian_Kuna: 7.555533,
            Czech_Koruna: 24.503478,
            Danish_Krone: 7.437056,
            Emirati_Dirham: 3.995952,
            Hong_Kong_Dollar: 8.528089,
            Hungarian_Forint: 378.572727,
            Icelandic_Krona: 140.611691,
            Indian_Rupee: 82.592132,
            Indonesian_Rupiah: 15643.157153,
            Iranian_Rial: 46057.768252,
            Israeli_Shekel: 3.511429,
            Japanese_Yen: 134.879944,
            Kazakhstani_Tenge: 494.63991,
            Kuwaiti_Dinar: 0.331541,
            Libyan_Dinar: 5.101623,
            Malaysian_Ringgit: 4.589816,
            Mauritian_Rupee: 48.781638,
            Mexican_Peso: 21.900435,
            Nepalese_Rupee: 132.209355,
            New_Zealand_Dollar: 1.577863,
            Norwegian_Krone: 9.58015,
            Omani_Rial: 0.418364,
            Pakistani_Rupee: 202.938618,
            Philippine_Peso: 55.932307,
            Polish_Zloty: 4.635635,
            Qatari_Riyal: 3.96059,
            Romanian_New_Leu: 4.940613,
            Russian_Ruble: 85.913585,
            Saudi_Arabian_Riyal: 4.080278,
            Singapore_Dollar: 1.481305,
            South_African_Rand: 16.046491,
            South_Korean_Won: 1330.463093,
            Sri_Lankan_Rupee: 342.713616,
            Swedish_Krona: 10.296442,
            Swiss_Franc: 1.01603,
            Taiwan_New_Dollar: 31.388402,
            Thai_Baht: 36.445149,
            Trinidadian_Dollar: 7.383552,
            Turkish_Lira: 16.043715,
            US_Dollar: 1.088074,
            Venezuelan_Bolivar: 479494.187705,
          },
        };
        setExchangeRate(data.rates[toCurrency]);
      }, 250);
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals"> = </div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  );
};

export default App;
