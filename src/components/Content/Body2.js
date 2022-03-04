import React from "react";
import pic7 from "../../img/pic7.PNG"
import pic8 from "../../img/pic8.PNG"
import pic9 from "../../img/pic9.PNG"
import pic3 from "../../img/pic3.PNG"


class Body2 extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="container-fluid mt-5">
                    <div className="text-center">
                        <h1>Testimonials</h1>
                    </div>
                    <div className="row mt-5 mx-4">
                        <div className="col-sm-4 text-center">
                            <img src={pic7} alt="John's testament"/>
                            <h5>Jhon Smith</h5>
                            <p>Amet minim mollit non desert ullacon <br /> est sit aliqua
                            dolor do amet sint. Velit officia consequat </p>
                        </div>
                        <div className="col-sm-4 text-center">
                            <img src={pic8} alt='Nkuzi description' />
                            <h5>Jhon Smith</h5>
                            <p>Amet minim mollit non desert ullacon <br /> est sit aliqua
                            dolor do amet sint. Velit officia consequat </p>
                        </div>
                        <div className="col-sm-4 text-center">
                            <img src={pic9} alt='Nkuzi description' />
                            <h5>Jhon Smith</h5>
                            <p>Amet minim mollit non desert ullacon <br /> est sit aliqua
                            dolor do amet sint. Velit officia consequat </p>
                        </div>
                    </div>
                    <div className="text-center row">
                        <img className="img-fluid col-sm-12" alt='Nkuzi description' src= {pic3}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body2