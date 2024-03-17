import { useState } from "react"
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [formdata, setFormdata] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })
  function handleChange(e) {
    setFormdata((prevFormdata) => {
      const newFormData = {
        ...prevFormdata,
        [e.target.name]: parseFloat(e.target.value),
      }
      return newFormData;
    })
    console.log("before submit formdata is", formdata)
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("after submit formdata is", formdata)
    calculateInvestmentResults(formdata)
    console.log(calculateInvestmentResults(formdata))
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
      </main>
    </>
  )
}

export default App
