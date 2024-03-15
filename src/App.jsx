import logo from "./assets/investment-calculator-logo.png"
function App() {
  return (
    <>
      <header id="header" >
        <img src={logo} alt="Investment Calculator logo" />
        <h1>Investment Calculator</h1>
      </header>
      <main>
        <div id="user-input">
          <div className="input-group">
            <div>
              <label for="initialInvestment">Initial Investment</label>
              <input type="number" id="initialInvestment" name="in" value="0" />
            </div>
            <div>
              <label for="initialInvestment2">Initial Investment</label>
              <input type="number" id="initialInvestment2" name="in2" value="0" />
            </div>
          </div>
          <div className="input-group">
            <div>
              <label for="initialInvestment3">Initial Investment</label>
              <input type="number" id="initialInvestment3" name="in3" value="0" />
            </div>
            <div>
              <label for="initialInvestment4">Initial Investment</label>
              <input type="number" id="initialInvestment4" name="in4" value="0" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
