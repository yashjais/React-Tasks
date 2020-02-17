import React from "react"

function ColorsDropDown(porps){
    function handleChange(e){
        console.log(e.target)
        alert(e.target.value)
        document.body.style = `background: ${e.target.value}`
    }
    
    const colors = ['red', 'green', 'yellow', 'orange']

    return(
        <div>
            <h2> Colors: {colors.length} </h2>
            <select onChange={ handleChange }>
                <option value="">select</option>
                    {
                        colors.map(function (color, index){
                            return (
                                <option key ={index} value = {color}> { color } </option>
                            )
                        })
                    }
            </select>
        </div>
    )
}

export default ColorsDropDown