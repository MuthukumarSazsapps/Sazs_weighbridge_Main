// import React from 'react'

// const Customer = () => {

//   const input="  Kumar  "
//   const output="   muthu  "


//   const ofk="ok"
//   let ok='ld'
//   console.log(output)
//    function trim(str) {
//     console.log(str.trim()) 
//   } 
  
//   // trim(str)str.trim()
//   const op=trim
  
//     op(output)
//   return (
//     <div>
//       {input}
//     </div>
//   )
// }

// export default Customer

import React from 'react'
import { useForm } from 'react-hook-form';


const Customer = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>alert(JSON.stringify(data) )

  console.log(watch("example")); // watch 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}

export default Customer