import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from './Components/DataDisplay'

const App = () => {
  const [data, setData] = useState([]);
  const [ isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(){
    setIsLoading(true);
    try {
      let resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);

      let finalData = await resp.json();
      setData(finalData)
    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p className="error-message">{error}</p>}
      <DataDisplay data={data} />
    </div>
  );
}

export default App;
