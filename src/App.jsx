import { useState } from "react"
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
import Results from "./Components/Results";
function App() {
  const [formdata, setFormdata] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })
  const [data, setData] = useState([])
  function handleChange(e) {
    setFormdata((prevFormdata) => {
      const newFormData = {
        ...prevFormdata,
        [e.target.name]: parseFloat(e.target.value),
      }
      return newFormData;
    })
    setData([])
  }
  function handleSubmit(e) {
    e.preventDefault();
    setData(calculateInvestmentResults(formdata))
    console.log("After submit formdata is", formdata)
    console.log("After submit formdata is", data)
  }
  return (
    <>
      <Header />
      <main>
        <div id="user-input">
          <form onSubmit={handleSubmit}>
            <div className="input-group" >
              <UserInput inputTitle={"Initial Investment"} inputName={"initialInvestment"} inputValue={formdata.initialInvestment} handleChange={handleChange} />
              <UserInput inputTitle={"Annual Investment"} inputName={"annualInvestment"} inputValue={formdata.annualInvestment} handleChange={handleChange} />
            </div>
            <div className="input-group" >
              <UserInput inputTitle={"Expected Return"} inputName={"expectedReturn"} inputValue={formdata.expectedReturn} handleChange={handleChange} />
              <UserInput inputTitle={"Duration"} inputName={"duration"} inputValue={formdata.duration} handleChange={handleChange} />
            </div>
            <div className="input-group" >
              <button type="submit">Invest</button>
            </div>
          </form>
        </div>
        {
          data && <Results inputData={formdata} resultData={data} />
        }
      </main>
    </>
  )
}

export default App
