function List({lists}) {
  return (
    <>
      <ul>
        {lists.map((list,index)=><li key={index}>{list.fullname} - {list.phone}</li>)}
        
      </ul>
    </>
  )
}

export default List