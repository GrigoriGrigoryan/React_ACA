import { useState } from 'react';
import './App.css';

const colors = ['yellow', 'green', 'black', 'grey', 'red', 'blue', 'yellowgreen', 'purple', 'brown', 'white'];

function Colors() {
    const [bColor, setBack] = useState("white");

    let changeColor = () => {
        let num = Math.round(Math.random() * colors.length);
        setBack(colors[num])
    }
    return (
        <>
            <div className='root-2' style={
                {
                    backgroundColor: bColor
                }
            }>
                <button className='changeBack' onClick={changeColor}>Change Background</button>
            </div>
        </>
    )
}

export default Colors;
