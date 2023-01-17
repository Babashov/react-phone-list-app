import { useState } from "react"
function Form({lists,addLists}) {

  const [form,setForm] = useState({fullname:'',phone:''})

  const onChangeInput = (e)=>setForm({...form,[e.target.name]:e.target.value})

  const onSubmitForm = (e)=>{
    e.preventDefault()
    addLists([...lists,form])
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>

        <div>
          <input name="fullname" value={form.fullname} placeholder="Full Name" onChange={onChangeInput}/>
        </div>
        <div>
          <input name="phone" value={form.phone} placeholder="Phone Number" onChange={onChangeInput} />
        </div>
        <button>Add Contact</button>

      </form>
    </>
  )
}

export default Form