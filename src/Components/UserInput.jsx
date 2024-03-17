
export default function UserInput({ inputTitle, inputValue, inputName, handleChange }) {
    return (
        <div>
            <label htmlFor={inputName}>{inputTitle}</label>
            <input type="number" id={inputName} name={inputName} value={inputValue} onChange={handleChange} required />
        </div>
    )
}