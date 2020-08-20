import React, { useState, useEffect } from 'react';
import Video from "./Video";
import db from './firebase';
import './App.css';
 
function App() {
  
  const [ videos, setVideos ] = useState( [ ] );

  // Este hook remplaza cualquier metodo del ciclo de vida
  useEffect(() => {
    
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
    
  }, []);
  //? // Cuando no se ponen dependencias el codigo se ejecuta una vez pero despues no

  return (
    <div className="App">
      <div className="app__videos">
        { 

          videos.map( ({ url, channel, description, song, likes, messages, shares, id }) => (
            <Video
              key={ id }
              url={ url }
              channel={ channel }
              description={ description }
              song= { song }
              likes={ likes }
              messages={ messages }
              shares={ shares }
            />
          ))

        }
      </div>
    </div>
  );
}

export default App;
