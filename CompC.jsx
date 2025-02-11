// import React from 'react'
// import {user ,id} from './CompA.jsx'



// const CompC = () => {
//   return (
//     <div>
    //   <user.Consumer>
    //       {
    //         (name) => {
    //             return(
    //                 <>
    //                 <id.Consumer>
    //                      {
    //                         (num) => {
    //                             return(
    //                                 <h1>my name is {name} and id is {num}
    //                                 </h1>

    //                             )
    //                         }
    //                      }
    //                 </id.Consumer>
    //                 </>
    //             )
    //         }
    //       } 
    //   </user.Consumer>

//     </div>
//   )
// }
// export default CompC
import React, { useContext } from 'react'
import {userName, id} from './CompA'

const Compc = () => {
  return (
    <div>
              <user.Consumer>
          {
            (name) => {
                return(
                    <>
                    <id.Consumer>
                         {
                            (num) => {
                                return(
                                    <h1>my name is {name} and id is {num}
                                    </h1>

                                )
                            }
                         }
                    </id.Consumer>
                    </>
                )
            }
          } 
      </user.Consumer>

    </div>
  )
}

export default Compc