import Hero from "./components/hero/hero";
import './App.css';
import{useEffect, useState} from 'react';
import {fetchTopAlbums} from "./api/api";
import Navbar from "./components/navbar/navbar";
import Card from "./components/Card/card";
import Section from "./components/section/section";
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
     <div>
      <Section data={topAlbumData} type="album" title="Top Album"/>
     </div>
    </div>
  );
}

export default App;
