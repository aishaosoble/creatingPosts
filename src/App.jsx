import { useEffect, useState } from "react";
import "./App.css"
import axios from "axios"

function App(){
  const[post,setPost]=useState([])
// axios.get("http://localhost:3000/getallpost").then((result)=>{
//    console.log(result)
//   }).catch((error)=>{
//      console.log(error)
//   })
//   console.log(Ourdata)

useEffect(()=>{
async function getData(){

  try {
   const alldata = await axios.get("http://localhost:3000/getallpost")
  //  console.log(alldata.data._data_has_been_found)
   setPost(alldata.data._data_has_been_found)
  } catch (error) {
    console.log(error)
  }
}
getData()
},[])



console.log(post)

  return(
    post.map((ourPost,index)=>{
      return(
         <div className="app" key={index}>
          
         <h1>{ourPost.title}</h1>
         <p>{ourPost.description}</p>
         <h3>{ourPost.author}</h3>
         </div>
      )
    })
//   <div className="app">
//       <div className="main">
//         <h1 className="title">Title</h1>
//       <p className="desc">Description</p>
//       <h4 className="author">Author</h4>
//       </div>
// <div className="main">
//         <h1 className="title">Title</h1>
//       <p className="desc">Description</p>
//       <h4 className="author">Author</h4>
//       </div>
// <div className="main">
//         <h1 className="title">Title</h1>
//       <p className="desc">Description</p>
//       <h4 className="author">Author</h4>
//       </div>
//     </div>
  )
}
export default App;



