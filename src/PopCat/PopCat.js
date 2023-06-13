import React from 'react';
import './PopCat.css'
import img1 from '../Gift/ava-4.jpg';
import img2 from '../Gift/ava-4.jpg';
import img3 from '../Gift/ava-4.jpg';
import img4 from '../Gift/ava-4.jpg';


const PopCat = () => {
    return (
        <div className=' ocation-container-box oce-cont-styl'>
            <div clasName=' ocation-container oce-cont'>
                <div className=' slidup-catogiri'>
                    <h1>Popular Catogiry    </h1>
                    <div className='slidupdown'>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img1} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Birthdays</span> */}
                        </spam>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img2} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Anvarsary</span> */}
                        </spam>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img3} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Mariage</span> */}
                        </spam>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img4} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Marriage</span> */}
                        </spam>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img4} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Marriage</span> */}
                        </spam>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img4} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Marriage</span> */}
                        </spam>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img4} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Marriage</span> */}
                        </spam>
                        <spam className='fadein'>
                            <span className='fad'>
                                <img src={img4} alt='0' className='slidupimg'></img>
                            </span>
                            {/* <span>Marriage</span> */}
                        </spam>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopCat
