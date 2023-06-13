import React from 'react'
import './From.css'

const From = () => {
    return (
        <>

            <form action="">
                <div className="boxes">
                    <h1>Fill Booking Details</h1>
                    <div className="design">
                        <lable htmlFor="cos-name">Costomer Name</lable>
                        <input type="text" name="name" id="name" />

                    </div>
                    <div className="design">
                        <lable htmlFor="cab-type">
                        <select name="chapter" id="chapter">
                            <option value="" selected="selected">15 Seater Bus</option>
                            <option value="" selected="selected">30 Seater Bus</option>
                            <option value="" selected="selected">Above of 30 Seater Bus</option>
                            <option value="" selected="selected">4 Seater Car</option>
                            <option value="" selected="selected">7 Seater Car</option>
                            <option value="" selected="selected">Auto Trally</option>
                            <option value="" selected="selected">Auto</option>
                            <option value="" selected="selected">Thar</option>
                            <option value="" selected="selected">Fortuner</option>
                            <option value="" selected="selected">Cab type</option>
                        </select>
                        </lable>
                        {/* //<input type="text" name="type-of-cab" id="cab" > </input> */}

                </div>
                <div className="design">
                    <lable htmlFor="city">City</lable>
                    <input type="text" name="city" id="city" />

                </div>
                <div className="design">
                    <lable htmlFor="pickup">Pickup point</lable>
                    <input type="text" name="pickup" id="picup" />

                </div>
                <div className="design">
                    <lable htmlFor="drop">Drop-point</lable>
                    <input type="text" name="drop" id="drop" />
                </div>
                <div className="design">
                    <lable htmlFor="phone-no">phone no</lable>
                    <input type="text" name="phone" id="phone-no" />

                </div>
                <div className="design">

                    <input type="submit" name="phone" id="phone-no" />
                </div>
            </div>
        </form>

        </>
    )
}

export default From
