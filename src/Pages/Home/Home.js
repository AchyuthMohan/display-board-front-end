import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card';

function Home() {
  const[error,setError]=useState(null);
  const[isLoaded,setIsLoaded]=useState(false);
  const[items,setItems]=useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <div key={item.id}>
            <Card name={item.name}image={item.img}price={item.price}/>
          </div>
          
        ))}
      </ul>
    );
  }
}
export default Home