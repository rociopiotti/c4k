import React from "react"
import "./SuscribeBox.scss"

class SuscribeBox extends React.Component {
  handleSuscribe (Suscribe) {
    console.log("Click en el boton que abre:", Suscribe)
  }
  render() {
    
    return (
      <div className="suscribeBox">
        <div className="suscribeInnerBox">
          <h4 className="suscribeTitle">
            SIGN UP TO BE THE FIRST TO SHOP NEW COLLECTIONS & EXCLUSIVE COLLABS!
          </h4>
          <p className="suscribeinfoText">
            BY CLICKING SUBSCRIBE, I AGREE THAT<br></br>C-4K MAY USE MY PERSONAL
            INFORMATION TO SEND ME EMAILS AND ACKNOWLEDGE THE PRIVACY POLICY.
          </p>
          <input
            type="text"
            id="emailSuscribe"
            placeholder="ENTER EMAIL"
            className="suscribeInput"
          />
          <button
            onClick={() => {
              this.handleSuscribe("Suscribe")
            }}
            className="btnSuscribe">
            SUSCRIBE ME
          </button>
          <p className="suscribeinfoText">
            TERMS AND CONDITIONS FOR MORE INFORMATION ON HOW C-4K COMMUNICATES
            WITH YOU AND PROCESSES YOUR INFORMATION, PLEASE VISIT PRIVACY
            POLICY. YOU MAY OPT OUT FROM RECEIVING C-4KS’ MARKETING EMAILS AT A
            NY TIME BY FOLLOWING THE INSTRUCTIONS IN THE EMAIL SENT TO YOU.
          </p>
        </div>
      </div>
    )
  }
}

export default SuscribeBox
