import React from 'react'
import { Link } from 'react-router-dom'
//import { AiFillCar } from 'react-icons/ai';
import '../component/login/Login'
import '../component/App.css'
import '../component/login/adminlogin.js'
import { VscAccount } from 'react-icons/vsc';

const First = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light heading fixed-top ">
          <div className="container-fluid">
            {/* <button className="btn btn-primary"><a className="navbar-brand" href="#"><AiFillCar /></a></button> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn btn-outline-primary"><a className="nav-link active" aria-current="page" ><Link to={'/'}><h6>HOME</h6></Link></a></button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-primary"><a className="nav-link" ><Link to={'/Resturent'}><h6>MENU</h6></Link></a></button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-primary"><a className="nav-link"><Link to={'/contect'}><h6>Contect us</h6></Link></a></button>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-success" >
                <Link to={'/profile'}><h6><VscAccount/></h6></Link>
                  {/* <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                     
                    </button>
                    {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" ><Link to={'/login'}>Costomer</Link></a></li>
                      <li><a class="dropdown-item" ><Link to={'/Adminlogin'}>Admin</Link></a></li>
                    </ul> *}
                  </div> */}
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default First
