import './App.css';
import Card from './components/Card'
import kitty from './loogs/kitty.png'
import bomb from './loogs/bomb.png'
import defuse from './loogs/issue.png'
import shuffle from './loogs/shuffle.png'
import { useEffect, useState } from 'react';
import GameOver from "./components/GameOveer";
import { ToastContainer } from 'react-toastify';

const logoArray=[
  {index:1,pic:kitty,value:1},
  {index:2,pic:bomb,value:2},
  {index:3,pic:shuffle,value:3},
  {index:4,pic:defuse,value:4},
  {index:5,pic:kitty,value:1},
  {index:6,pic:defuse,value:4},
  {index:7,pic:kitty,value:1},
  {index:8,pic:bomb,value:2},
  {index:9,pic:kitty,value:1},
  {index:10,pic:defuse,value:4},
]

function App() {
  const [Images,setImages]=useState(logoArray);
  const[random, setRandom]=useState(1);
  const[set,setReset]=useState(false);
  const [gameover,setGameOver]=useState(false);
  const [win,setWin]=useState(true);



  useEffect(() => {
    function shuffleArray(array) {
      const newArray = [...array]; 
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      setReset(true);
      setGameOver(false);
      setWin(false);
      return newArray;
    }
    const shuffledImages = shuffleArray(Images).slice(1,6);
    setImages(shuffledImages);
    setReset(true)
  }, [random]);

    const handleClick=()=>{
      setReset(false);
      setImages(logoArray);
      setRandom(Math.random());
    }
  return (
    <div className="App">
      <div className='animated animate__fadeIn container'>
        <h3> &#128049; Exploding kitten &#128165; </h3>
    {
      Images.map((image,i)=>{
          return(<>
          {set? <Card key={i} setWin={setWin} handleClick={handleClick} setGameOver={setGameOver} setReset={setReset} Images={Images} setImages={setImages} image={image}/>:null}
          </>);
      })}
      {gameover? <GameOver handleClick={handleClick} />:null}
      {win? ( <div><h1>Congrats, you won! &#129395;</h1>
      <button className='styledButton' onClick={handleClick}>Replay!</button>
      </div>):null}
      <ToastContainer />
      {!win?<button className='styledButton' onClick={handleClick}>Restart</button>:null}
    </div>
    </div>
  );
}

export default App;
