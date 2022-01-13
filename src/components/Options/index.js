import React from 'react'
import './styles.css'

const Options = (props) => {
    return (
        <div className={'options-panel'}>
            {props.children}
        </div>
    )
}

export default Options
