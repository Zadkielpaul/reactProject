import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Rejister = () => {
    return (
        <div>
            


                <div className="mainBox">
                    <div className="boxx">

                        {/* <form autoComplete='off' onSubmit={handleSubmit}> */}
                        <form autoComplete='off' className='myform'>

                            <span className="logo"><u>FILL YOUR</u></span>
                            <h2>DETAILS</h2>
                            <div className="inputBoxxx">
                                <input type="text" required placeholder='UserName'/>
                                <span>UserName</span>
                                <i></i>
                            </div>
                            <div className="inputBoxxx">
                                <input type="text" required placeholder='E-mail'/>
                                <span>Email</span>
                                <i></i>
                            </div>
                            <div className="inputBoxxx">
                                <input type="text" required placeholder='Enter your Password'/>
                                <span>Password</span>
                                <i></i>
                            </div>
                            <div className="links">
                                <a href='#'>Password should be <br/>8 charector<br/>1 Capital(ABC)<br/>1 Special(@,$)<br/>1 Number</a>
                                <a><Link to={'/login'}>Login As</Link></a>
                            </div>
                            <button type='submit' className='logbtn'>Login</button>
                            {/* {err && <span>Something Worng</span>} */}
                        </form>
                    </div>
                </div>
            </div>
            )
}

            export default Rejister
