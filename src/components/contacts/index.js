import { useState } from "react"
import Filter from "./filter"
import List from "./list"
import Form from "./form"

function Contact() {

  const [lists,setLists] = useState(
      [
        {
          fullname:'Mehemmed Babashov',
          phone:'0557406293'
        },
        {
          fullname:'Rehman Eliyev',
          phone:'055 600 00 07'
        }
      ]
    )

    const [filteredLists,setFilteredLists] = useState([])


  

  return (
    <>
        <Filter lists={lists} setFilteredLists={setFilteredLists} />
        <List lists={filteredLists}/>
        <Form lists={lists} addLists={setLists}/>
    </>
  )
}

export default Contact