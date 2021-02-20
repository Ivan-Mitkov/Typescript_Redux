import React from 'react'
import {useActions} from '../hooks/useActions'
import {useTypedSelector} from '../hooks/useTypedSelector'

const RepositoryList: React.FC = () => {
  const [term,setTerm]=React.useState('')
  const {searchRepositories}=useActions()
 const {data,error,loading} = useTypedSelector((state) => state.repositories)


  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTerm(e.target.value)
  }

  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    searchRepositories(term)
    setTerm('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={term}></input>
      <button>Search</button>
      {error&&<h3>{error}</h3>}
      {loading&&<h3>Loading...</h3>}
      {!error&&!loading&&data.map((p)=><div key={p}>{p}</div>)}
    </form>
  )
}

export default RepositoryList
