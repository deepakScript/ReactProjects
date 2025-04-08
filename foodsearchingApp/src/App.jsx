import React,{useState} from 'react'

import Navbar from './Components/Navbar'
import Searchbar from './Components/Searchbar'
import ProductCard from './Components/ProductCard'

function App() {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFood = async() => {
    const appID = '5859bc55';
    const appkey = '9df790de5e5e2d671b6f29604181960f';
    try{
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=user&q=${search}&app_id=${appID}&app_key=${appkey}`);
      const data = await res.json();
      setAllFood(data.hits)
      console.log(data.hits);
    }catch{

    }
  }

  return (
    <div>
      <Navbar />
      <Searchbar />
      <ProductCard />

      <button onClick={fetchFood}>Search food</button>
    </div>
  )
}

export default App
