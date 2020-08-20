import React from 'react';
import Video from "./Video";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/c7f94a505eec99ef4912f8d61151de85/5f3eb081/video/tos/useast2a/tos-useast2a-pve-0068/dd8eefe697fe40d5be76868ee7cc1220/?a=1233&br=2952&bt=1476&cr=0&cs=0&dr=0&ds=3&er=&l=20200818171857010189074046092E1232&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzVod3l1dzo2dTMzZjczM0ApOmllOGY1Zjs6N2kzODlnZGdnLTBlay1ga25fLS0wMTZzczVhNDYuYS1iLS4yNV4wMjQ6Yw%3D%3D&vl=&vr="
          channel="guerrimau"
          description="Ayyy mi cadenitaaaaa"
          song="Carmen - Cadenita"
          likes={ 666 }
          messages={ 45 }
          shares={ 260 }
        />
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
