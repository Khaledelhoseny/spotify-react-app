import React from 'react';

const BottomBar = () => {
    function randomPic(){
        return Math.floor((Math.random() * 2) + 1);
      }
    return (
        <div class="music_play" > 
        <div class="left-side" >
          <img src= {`./images/song_${randomPic()}.jpg`} alt=""/>
          <h5 class="title" >
            
            <div class="subtitle" ></div>
          </h5>
        </div>
        <div class="middle-side text-center" >
          <span><i class="fa-solid fa-backward-step"></i></span>
          <span><i class="fa-regular fa-circle-pause"></i></span>
          <span><i class="fa-solid fa-forward-step"></i></span>
          <input class="d-block" type="range"/>
        </div>
        <div class="right-side" >
          <input type="range"/>
        </div>
      </div>
    );
};

export default BottomBar;