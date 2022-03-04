import React from "react";
import "./Footer.css"
import pic10 from "../../img/pic10.PNG"
import pic11 from "../../img/pic11.PNG"
import{
    Link
  } from "react-router-dom"
   


function Footer() {
    return(
        <div className="footer text-white mt-3">
            <div className="container mt-5">
                <div className="container-fluid">
                    <img src={pic10} alt='Nkuzi description'/>
                    <p>By submitting this form you agree to our terms and
                        condition and our Privacy Policy <br />
                        use and disclose your personal information including to third parties.
                    </p>
                    <ol className="text-white">
                        <li>
                            <Link to="/Privacy">Privacy & Policy</Link>
                        </li>
                        <li>
                            <Link to="/Privacy">Terms & condition</Link>
                        </li>
                    </ol>
                    <img src= {pic11} alt='Nkuzi description'/>

                </div>

            </div>
        </div>
    )
}

export default Footer