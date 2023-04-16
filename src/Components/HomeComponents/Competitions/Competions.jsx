import React from 'react'
import "./Competions.css"

const Competions = () => {

  const data=[
    {
      id:1,
      heading:'Speed Programming',
      description:'In this competition, participants are given a programming task that they must complete as quickly as possible. The faster they can write the code and get it to run successfully, the higher their score. This competition is perfect for those who are skilled at programming and can work quickly under pressure.',
      img:'/Images/speed_prog.jpg'
    },
    {
      id:1,
      heading:'Speed Debugging',
      description:'In this competition, participants are given a piece of code that contains errors, and they have to find and fix them as quickly as possible. The faster they can identify and correct the errors, the higher their score. This competition is perfect for those who have a knack for finding bugs and enjoy the challenge of solving problems quickly. ',
      img:'/Images/speed_debug.jpg'
    },
    {
      id:1,
      heading:'UI/UX Design ',
      description:'In this competition, participants are given a design challenge where they have to create a user interface that is both visually appealing and easy to use. This competition is perfect for those who have an eye for design and understand the importance of creating a user-friendly experience. ',
      img:'/Images/uiux.jpeg'
    },
  ]

return (
   <>
   <div className='comp_main'>
      <h2 className="mainheading">Competitions Disciplines</h2>

     <main>
   {
     data.map((h=>{
       return (
         
         <div class = "card">
    <img src={h.img} alt=""  />
    
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
  </div>
   </>
)
}

export default Competions