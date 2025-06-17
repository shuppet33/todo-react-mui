



export function Todo({ props, onClick }) {

    return (
        <ul>
            <li>
                <input type="checkbox" checked={props.checked}/>
                <span>{props.text}</span>
                <button onClick={onClick}>Х</button>
            </li>
        </ul>
    )
}