
import { useState } from 'react';

export default function Converter() {
    const [HEX, setHEX] = useState("");
    const Color = { backgroundColor: HEX }

    function valid() {
        if (!(HEX.match('#([0-9A-Fa-f]{2})')))
            return (<div className='result' style={{ backgroundColor: 'red' }}>'Ошибка!'</div>)
        else return (
            <div className='result' >{hexToRGB()}</div>)
    }
    function hexToDec(hex: any) {
        return parseInt(hex, 16);
    }
    function hexToRGB() {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEX);
        const r = hexToDec(result?.[1]);
        const g = hexToDec(result?.[2]);
        const b = hexToDec(result?.[3]);
        const bb = `rgb(${r*0.6}, ${g*0.6} ,${b*0.6})`
        const vv = {backgroundColor: bb}
        return <div style={vv}> rgb {r}, {g}, {b}</div>;
    }

    return (
        <div className='form' style={Color} >
            <form>
                <input type="text" value={HEX} onChange={e => setHEX(e.target.value)} />
            </form>
            {HEX.length === 7 ? valid() : null}

        </div>
    )
}
