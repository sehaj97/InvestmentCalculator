import { formatter } from "../util/investment"
export default function Results({ inputData, resultData }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData && resultData.map((resultItem) => (
                    <tr key={resultItem.year} >
                        <th>{resultItem.year}</th>
                        <th>{formatter.format(Math.round(resultItem.valueEndOfYear))}</th>
                        <th>{Math.round(resultItem.interest)}</th>
                        <th>{Math.round(resultItem.valueEndOfYear) - (Math.round(inputData.initialInvestment + (resultItem.annualInvestment * resultItem.year)))}</th>
                        <th>{Math.round(inputData.initialInvestment + (resultItem.annualInvestment * resultItem.year))}</th>
                    </tr>
                ))}
            </tbody>
        </table >
    )

}

