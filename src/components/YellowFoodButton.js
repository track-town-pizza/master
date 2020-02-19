import React from "react"

const YellowFoodButton  = (props) => {
    return (
        <button name={props.buttonWord} category={props.category} className="options-button-yellow" type="button" onClick={props.handleClick}>{props.buttonWord}
            <style jsx>{`
                .options-button-yellow {
                    display:inline;
                    background: #FFEC65;
                    white-space: nowrap;
                    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
                    border-radius: 5px;
                    border: 0;
                    margin: .75rem;
                    width: 10%;
                    min-width: 75px;
                    height: 5%;
                }
            `}</style>
        </button> 
    )
}
export default YellowFoodButton