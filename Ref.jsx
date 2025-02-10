// import React from 'react'

// const Ref = () => {
//     let demo = document.getElementById("demo")
//     console.log(demo);
//     demo.style.backgroundColor = "red"
//   return (
//     <div>
//         <h1 id ='demo'>Hello world!</h1>
//     </div>
//   )
// }

// export default Ref

// import React, {useRef} from 'react'
// const Ref = () => {
//     let demo = useRef()
//     console.log(demo);
//     console.log(demo.current);
//     demo.current.style.backgroundColor = "yellow"
//   return (
//     <div>
//         <h1 ref={demo}>hello</h1>
//     </div>
//   )
// }
// export default Ref

// import React from 'react'
// import video from "./video.mp4"
// const Ref = () => {
//   return (
//     <div>
//         <video src={video} style={{height:"200px"}}></video>
//     </div>
//   )
// }

import React, { useRef } from 'react'

const Ref = () => {
  let name = useRef('')
  let password = useRef('')
  let eventHandler =(e) => {
    e.preventDefault()
    console.log({name : name.current.value});
    console.log({password : password.current.value});
  }
  return (
    <>
     <form action="">
      name : <input ref={name} type="text" name="name" id="name"/>
    
      password: <input ef={password} type="password" name="password" id="password" />
      <br/>
      <button onClick={eventHandler}>subit</button>
     </form>
    </>
  )
}

export default Ref


