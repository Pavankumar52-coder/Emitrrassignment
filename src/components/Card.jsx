import React, { useEffect, useState } from "react";
import Q from '../loogs/question-sign.png'
import '../Card.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var defusePoints=0;

const Card=({image,Images,setImages,setGameOver,setReset,handleClick,setWin})=>{
  useEffect(()=>{
    setRender(false);
    defusePoints=0;
  },[])
  const[render,setRender]=useState(false);

    const removeItem = (i) => {
    const updatedImages = Images.filter((item) => item.index !== i );
    setImages(updatedImages);
    if(Images.length===1){
      setWin(true);
    }
    console.log('images length:',Images.length);
    setRender(false);
    };

    const handleRender=()=>{
      setRender(true);
      if(image.value===1){
        toast("Kitten!");
        setTimeout(()=>{removeItem(image.index)},500);
      }
      else if(image.value===2){
        if(defusePoints>0){
          toast(`Bomb Defused.\uD83D\uDE00`);
          defusePoints--;
          setTimeout(()=>{removeItem(image.index)},1000);
        }
        else{
          toast(`Game Over.\uD83D\uDE1E`);
          setReset(false);
          setTimeout(()=>{setGameOver(true)},1000);
        }
      }
      else if(image.value===4){
        toast(`Wow! you got a defuse point.\uD83D\uDE00`);
        defusePoints++;
        setTimeout(()=>{removeItem(image.index)},1000);
      }
      else{
        toast(`uh-oh, Reshuffled.\uD83D\uDE1E`);
        setTimeout(()=>{handleClick()},1500);
      }
    }
    return(<>
       <div onClick={()=>{!render && handleRender()}} className="card-container">
        {
          <img src={!render?Q:image.pic} alt=""/>
        }
       </div>
    </>);
}

export default Card; 