import React from 'react'
import './contect.css'

const Contect = () => {
  return (
    <>
      
      <div className='contect-container'>

        <div className='left_div'>

          <p><h1>Fill The Details</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam
            incidunt distinctio animi fugiat, aspernatur, ea id vero debitis veniam neque
            soluta impedit dolor! Fugiat, dolores tenetur asperiores accusamus nisi beatae provident
            vitae quaerat expedita quia eius quas quis aliquam.
          </p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Enter your E-mail</span>
            <input type="text" class="form-control" placeholder="E-Mail" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Enter your Name</span>
            <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div class="input-group">
            <span class="input-group-text">Description</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          <br />
          <br />
          <br />
          <button className='btn btn-outline-success' type="Submit">Submit</button>
        </div>
        <div className='right_div'>
          <p><h1>How Can We Help You</h1>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae suscipit officiis nam aliquid exercitationem praesentium fuga corporis ipsa quis! Quibusdam animi sed accusamus? Eos amet, cupiditate voluptatum numquam natus nemo. Asperiores assumenda deserunt ipsam aut pariatur itaque minus eveniet voluptatem iste provident! Tempore libero at dolore enim magni nostrum recusandae, aspernatur natus rerum fugit, earum consectetur numquam corrupti repellat tempora molestias sint. Magni quisquam hic obcaecati sunt nesciunt omnis reiciendis animi eius nostrum consectetur laudantium fuga tenetur sint iusto aut ex, aspernatur odio consequuntur quod voluptate commodi dolorum autem dolorem pariatur. Corporis eveniet est illum voluptates ipsam facilis cupiditate.</h5>
           
          </p>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <br />
          <p><h4>Email: <a href="#">cabapp5@gmail.com</a></h4></p>
          <p><h4>Phone no: <a href="#">+916202384284</a></h4></p>
          
        </div>
      </div>
    </>
  )
}

export default Contect
