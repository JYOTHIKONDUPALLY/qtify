import Hero from "./components/hero/hero";
import './App.css';
import{useEffect, useState} from 'react';
import {fetchTopAlbums} from "./api/api";
import Navbar from "./components/navbar/navbar";
import Card from "./components/Card/card";
function App() {
  const [topAlbumData, setTopAlbumData]=useState([]);

  const generateTopAlbumData=async()=>{
    const data=await fetchTopAlbums();
 setTopAlbumData(data);
 console.log(topAlbumData);
  }
  useEffect(()=>{
    generateTopAlbumData();
  }, [])
  return (
    <div>
     <Navbar/>
     <Hero/>
     {
      topAlbumData.map((item)=>{
        return(
          <Card data={item} type="album"/>
        )
      })
     }
    </div>
  );
}

export default App;
