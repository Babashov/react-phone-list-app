import { useState, useEffect } from "react"
import styles from "./style.module.css"

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
      <div className={styles.title}>
        <input value={filteredValue} name="filteredValue" placeholder="Filter" onChange={onChangeFilter}/>
      </div>
    </>
  )
}

export default Filter