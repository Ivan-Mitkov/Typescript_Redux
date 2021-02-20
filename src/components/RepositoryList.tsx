import React from 'react'
import {useSelector} from 'react-redux'
import {useActions} from '../hooks/useActions'

const RepositoryList: React.FC = () => {
  const [term,setTerm]=React.useState('')
  const {searchRepositories}=useActions()
 const {data,error,loading} = useSelector((state:any) => state.repositories)

  
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
      {}
    </form>
  )
}

export default RepositoryList
