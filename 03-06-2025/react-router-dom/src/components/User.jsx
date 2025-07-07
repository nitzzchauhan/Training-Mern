import { useParams } from "react-router-dom"



export default function User() {
    const parameter =  useParams()
    console.log(parameter)
  return (
      <h2>Welcome User </h2>
  )
}
