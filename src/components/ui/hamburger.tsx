const ToggleSwitch = ({setOpen , open}:{setOpen:React.Dispatch<boolean>; open:boolean}) => {
    return (
    
<>

<label className="switch">
  <input type="checkbox" onClick={()=>setOpen(!open)}/>
  <span className="wrapper">
    <span className="row">
      <span className="dot"></span>
      <span className="dot"></span>
    </span>
    <span className="row row-bottom">
      <span className="dot"></span>
      <span className="dot"></span>
    </span>
    <span className="row-vertical">
      <span className="dot"></span>
      <span className="dot middle-dot"></span>
      <span className="dot"></span>
    </span>
    <span className="row-horizontal">
      <span className="dot"></span>
      <span className="dot middle-dot-horizontal"></span>
      <span className="dot"></span>
    </span>
  </span>
</label>

</>
    );
  };
  
  export default ToggleSwitch;
  