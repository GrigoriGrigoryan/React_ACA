import {useState} from "react"
function Dashboard() {
    const [textStyle, setTextStyle] = useState({
        fontWeight: 'normal',
        fontStyle: 'none',
        textDecoration: 'none',
        color: 'none',
        textTransform: 'none'
    
      })
      const [text, setText] = useState('')
      console.log(textStyle);
    
      return (
        <>
        <div className="root-2">
          <textarea style={textStyle} className='textArea' value={text} />
          <div className='btn-container'>
          <button className="makeChange" 
            onClick={() => setTextStyle({...textStyle, fontWeight: textStyle.fontWeight === 'normal' ? 'bold' : 'normal'})}
          >
          <b>B</b></button>
          <button className="makeChange" onClick={() => setTextStyle({...textStyle, fontStyle:  'italic'})}> <i>i</i> </button>
          <button className="makeChange" onClick={() => setTextStyle({...textStyle, textDecoration: 'line-through'})}> <del>abc</del></button>
          <button className="makeChange" onClick={() => setTextStyle({...textStyle, textDecoration: 'underline'})}><u>abc</u></button>
          <button className="makeChange" onClick={() => setTextStyle({...textStyle, textTransform: 'capitalize'})}>Abc</button>
          <button className="changeColor" style={{background: 'rgb(177, 35, 35)'}} onClick={() => setTextStyle({...textStyle, color: 'red'})}>Make it Red</button>
          <button className="changeColor" style={{background: 'green'}} onClick={() => setTextStyle({...textStyle, color: 'green'})}>Make it Green</button>
          </div>
          <input className="editingInput" onChange={(event) => setText(event.target.value)}/>
        </div>
      </>
      );
}
export default Dashboard;