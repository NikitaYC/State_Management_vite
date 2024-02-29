import { useState, useEffect } from 'react'
import './App.css'
import PostItem from '../Components/PostItem';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading , setloading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData(){
    
    try {
      setloading(true)
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      let finalresponse = await response.json();
      setData(finalresponse);
      console.log(finalresponse)
    } catch (error) {
      setError(true)
      console.log(error)
    }finally{
      setloading(false)
    }
  }

  useEffect(function(){
    fetchAndUpdateData()
  }, [page]);

  function NextPage(){
    setPage((prevPage) => prevPage + 1)
  }
  function PreviousPage(){
    if(page > 1){
      setPage((prevPage) => prevPage -1)
    }
    
  };
  return (
    <>
    <button onClick={fetchAndUpdateData}>Get Data</button>

    <button onClick={PreviousPage}>Previous </button>

    <button onClick={NextPage}>Next</button>

      {data.map((post)=> <PostItem
         key={post.id} post={post} />)}
        
    </>
  )
}

export default App;
