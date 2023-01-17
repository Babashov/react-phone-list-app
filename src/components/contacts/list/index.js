import styles from "./style.module.css"
function List({lists}) {
  return (
    <>
      <ul className={styles.title}>
        {lists.map((list,index)=><li key={index}>{list.fullname} - {list.phone}</li>)}
        
      </ul>
    </>
  )
}

export default List