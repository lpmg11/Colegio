import {useState, useEffect} from 'react'
import axios from "axios"

function Profesor (props) {
  const [profesor, setProfesor] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3000/api/maestros/${props.id}`)
        .then(res => {
            setProfesor(res.data)
            console.log(res.data)
        })
  }, [])

  return (
    <div>
        <h1>{profesor.name}</h1>
        <p>{profesor.phone}</p>
        <p>{profesor.email}</p>
    </div>
  )
}

export const  getServerSideProps = async (context) => {
    const { id } = context.query
    return {
        props: {
        id,
        description:'hola'
        }
    }
}

export default Profesor