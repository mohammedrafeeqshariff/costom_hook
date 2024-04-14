import useStorage from './Hooklogic';

function MyCustomhook() {
    const [inputValue, setInputValue] = useStorage('myInput', '');

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <p>Value stored in local storage: {localStorage.getItem('myInput')}</p>
            <p>Value stored in session storage: {sessionStorage.getItem('myInput')}</p>
        </div>
    );
}

export default MyCustomhook