import logo from "./assets/investment-calculator-logo.png"
function App() {
  const [formdata, setFormdata] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  })
  return (
    <>
      <header id="header" >
        <img src={logo} alt="Investment Calculator logo" />
        <h1>Investment Calculator</h1>
      </header>
      <main>
        <div id="user-input">
          <form className="input-group">
            <div>
              <label for="initialInvestment">Initial Investment</label>
              <input type="number" id="initialInvestment" name="initialInvestment" value={formdata.initialInvestment} />
            </div>
            <div>
              <label for="annualInvestment">annualInvestment</label>
              <input type="number" id="annualInvestment" name="annualInvestment" value={formdata.annualInvestment} />
            </div>
            <div className="input-group">
              <div>
                <label for="expectedReturn">expectedReturn</label>
                <input type="number" id="expectedReturn" name="expectedReturn" value={formdata.expectedReturn} />
              </div>
              <div>
                <label for="duration">duration</label>
                <input type="number" id="duration" name="duration" value={formdata.duration} />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
