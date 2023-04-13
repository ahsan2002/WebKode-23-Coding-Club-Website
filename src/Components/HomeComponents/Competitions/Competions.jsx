import React from 'react'
import "./Competions.css"

const Competions = () => {

  const data=[
    {
      id:1,
      heading:'Speed Programming',
      description:'speed programming is a good competion',
      img:'/Images/speed_prog.jpg'
    },
    {
      id:1,
      heading:'Speed Debugging',
      description:'speed debugging is a good competion',
      img:'/Images/speed_debug.jpg'
    },
    {
      id:1,
      heading:'UI/UX Design ',
      description:'UI/Ux is a good competion',
      img:'/Images/uiux.jpeg'
    },
  ]

return (
   <>
     <main>
   {
    data.map((h=>{
      return (

  <div class = "card">
    <img src={h.img} alt=""/>
    <div class="card-content">
      <h2>
        {h.heading}
      </h2>
      <p>
        {h.description}
      </p>
      <a href="#" class="button">
        Find out more 
      </a>
    </div>
  </div>
      )
    }))
  }
  </main>
   </>
)
}

export default Competions