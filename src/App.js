import Hero from "./components/hero/hero";
import './App.css';
import{useEffect, useState} from 'react';
import {fetchTopAlbums, fetchNewAlbums} from "./api/api";
import Navbar from "./components/navbar/navbar";
import Section from "./components/section/section";
function App() {
  const [topAlbumData, setTopAlbumData]=useState([]);
  const [newAlbumData, setNewAlbumData]=useState([]);

  const generateTopAlbumData=async()=>{
    const data=await fetchTopAlbums();
 setTopAlbumData(data);
 console.log(topAlbumData);
  }

  const generateNewAlbumData= async()=>{
    const data=await fetchNewAlbums();
    setNewAlbumData(data);
  }
  useEffect(()=>{
    generateTopAlbumData();
    generateNewAlbumData();
  }, [])
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div>
      <Section data={topAlbumData} type="album" title="Top Album"/>
      <Section data={newAlbumData} type="album" title="New Album"/>    
     </div>
    </div>
  );
}

export default App;
