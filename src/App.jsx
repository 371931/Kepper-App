import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from 'react';
import Heading from './components/Heading';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateNote from './components/CreateNote';

function App() {

  const [notes,upNotes] = useState([]);

  function addItem(newNote){
    upNotes((prev)=>{
      return[...prev,newNote];
    });
  }
  
  function del(id){
    upNotes(notes.filter((val,index)=>{
      return index !== id;
    }));
  }
  return (
    <>
    <Heading />
    <CreateNote onAdd={addItem}/>
    {notes.map((val,index)=> <Note key={index} id={index} title={val.title} content={val.content} onDel={del}/>)}
    <Footer />
     </>
  );
}

export default App;
