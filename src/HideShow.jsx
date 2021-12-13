import React, {useState} from 'react'

function HideShow() {

    const [show, setShow] = useState(false)

    return (
        <div className="hideshow">
            {
                show? <h1>HELLLOOO</h1> : null
            }
            <button onClick={() => setShow(true)}>Show</button>
            <button onClick={() => setShow(false)}>Hide</button>

            </div>
    );
}

export default HideShow;
