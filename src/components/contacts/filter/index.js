import { useState, useEffect } from "react"

function Filter({lists,setFilteredLists}) {

  const [filteredValue,setFilteredValue] = useState('')

  const onChangeFilter = (e)=> {
    setFilteredValue(e.target.value)

  }


useEffect(()=>{

  const filtredData = lists.filter(
        
    (list)=> list.fullname
    .toString()
    .toLowerCase()
    .includes(
          filteredValue
          .toString()
          .toLowerCase()
        ) ||
  
  list.phone
    .toString()
    .toLowerCase()
    .includes(
          filteredValue
          .toString()
          .toLowerCase()
    )

    )

  setFilteredLists(filtredData)

},[filteredValue,lists])

  return (
    <>
      <input value={filteredValue} name="filteredValue" placeholder="Filter" onChange={onChangeFilter}/>
    </>
  )
}

export default Filter