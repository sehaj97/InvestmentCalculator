import { useState } from "react"
import logo from "./assets/investment-calculator-logo.png"
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
  }
  return (
    <>
      <header id="header" >
        <img src={logo} alt="Investment Calculator logo" />
        <h1>Investment Calculator</h1>
      </header>
      <main>
        <div id="user-input">
          <form onSubmit={handleSubmit}>
            <div className="input-group" >
              <div>
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input type="number" id="initialInvestment" name="initialInvestment" value={formdata.initialInvestment} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="annualInvestment">annualInvestment</label>
                <input type="number" id="annualInvestment" name="annualInvestment" value={formdata.annualInvestment} onChange={handleChange} />
              </div>
            </div>
            <div className="input-group" >
              <div>
                <label htmlFor="expectedReturn">expectedReturn</label>
                <input type="number" id="expectedReturn" name="expectedReturn" value={formdata.expectedReturn} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="duration">duration</label>
                <input type="number" id="duration" name="duration" value={formdata.duration} onChange={handleChange} />
              </div>
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
