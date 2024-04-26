import "./index.css";

function Button({buttonName=null, buttonType, buttonColor, buttonImage=null, buttonSize=null}) {
  return(
    <button className={`${buttonType} ${buttonColor} ${buttonSize}`}>
      {buttonName ? <span>{buttonName}</span> : null}
      {buttonImage ? <img src={buttonImage} /> : null}
    </button>
  )
}

export default Button;