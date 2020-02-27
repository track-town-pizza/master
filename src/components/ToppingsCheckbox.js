import React from "react"

const ToppingsCheckbox = (props) => {
    return (
        <label>
            <input 
                type="checkbox"
                name={props.name}
                className="checkbox"
                onChange={props.onChange}
                checked={props.checked}
            />{props.shownWords}
            <style jsx>{`
                label {
                    white-space: nowrap;
                    min-width: 150px;
                    margin-top: .5rem;
                }
                input {
                    float: left;
                }
                .checkbox {
                    width: 23px;
                    height: 17px;
                }
                input[type="checkbox"] {
                    vertical-align: middle;
                    position: relative;
                    bottom: -5px; 
                } 
            `}
            </style>
        </label>
    )
}
export default ToppingsCheckbox