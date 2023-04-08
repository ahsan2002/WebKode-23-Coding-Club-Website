import React from 'react'
import "./Competions.css"

const Competions = () => {
//   return (
//     <>
//         <div className='main'>
//                 <div className="heading">
//                     <h2>Competitions</h2>
//                 </div>

//                 <div className="cards">
//                         <div className="card">
//                            <div className="img">
//                               <img src="https://template66520.motopreview.com/mt-demo/66500/66520/mt-content/uploads/2018/03/mt-1245-icon05.png" alt=""  height='100px' width='100px' />
//                            </div>
//                            <h4>Speed Programming</h4>
//                            <p>
//                            When it comes to developing a really  <br/> working software solution, frontend <br/> comes first.
//                            </p>
//                         </div>
//                         <div className="card">
//                            <div className="img">
//                               <img src="https://template66520.motopreview.com/mt-demo/66500/66520/mt-content/uploads/2018/03/mt-1245-icon05.png" alt=""  height='100px' width='100px' />
//                            </div>
//                         <h4>Speed Debugging</h4>
//                         <p>
//                            When it comes to developing a really <br/> working software solution, frontend <br/> comes first.
//                            </p>
                            
//                         </div>
//                         <div className="card">
//                            <div className="img">
//                               <img src="https://template66520.motopreview.com/mt-demo/66500/66520/mt-content/uploads/2018/03/mt-1245-icon05.png" alt=""  height='100px' width='100px' />
//                            </div>
//                         <h4>Speed Debugging</h4>
//                         <p>
//                            When it comes to developing a really <br/> working software solution, frontend <br/> comes first.
//                            </p>
//                         </div>
//                 </div>

//         </div>
//     </>
//   )
const workData=[
   {
      title:'hello',
      info:'lorem10'
   },
   {
      title:'hello',
      info:'lorem10'
   },
]
return (
   <>
       <section className='work-section'>
           <div className='work-container container'>
               <h1 className='main-heading text-center'>How does it Works</h1>
               <div className="row">
                   {
                       workData.map((curElem) => {
                           const { id, logo, title, info } = curElem;
                           return (
                               <>
                                   <div className='col-12 col-lg-4 text-center work-container-subdiv' key={id}>
                                       {/* <i class={`fontawesome-style ${logo}`}></i> */}
                                       <h2 className='sub-heading'>{title}</h2>
                                       <p className='main-work-para w-100'>
                                           {info}
                                       </p>
                                   </div>
                               </>
                           )
                       })
                   }
               </div>
           </div>
       </section>
   </>
)
}

export default Competions