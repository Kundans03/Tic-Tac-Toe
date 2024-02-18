import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Main() {
  const [one, setone] = useState({});
  const [two, settwo] = useState({});
  const [three, setthree] = useState({});
  const [four, setfour] = useState({});
  const [five, setfive] = useState({});
  const [six, setsix] = useState({});
  const [seven, setseven] = useState({});
  const [eight, seteight] = useState({});
  const [nine, setnine] = useState({});
  const [a, seta] = useState(1)
  const [winner, setwinner] = useState({})
  const [draw, setdraw] = useState(0)
  const playerone= localStorage.getItem("playerone");
  const playertwo= localStorage.getItem("playertwo");
  const mystyle={backgroundColor: "#FF7F7F"};
  const [playeronescore, setplayeronescore] = useState(0);
  const [playertwoscore, setplayertwoscore] = useState(0);
  const navigate = useNavigate();
const onClickone = ()=>{
if(a===1){
  setone({value:"X",mark:true,playerone:playerone});
  seta(0);
}else if(a===0){
  setone({value:"0",mark:true,player:playertwo});
  seta(1);
} 
 }
const onClicktwo = ()=>{
  if(a===1){
    settwo({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    settwo({value:"0",mark:true});
    seta(1);
  }
  }
const onClickthree = ()=>{
  if(a===1){
    setthree({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    setthree({value:"0",mark:true,player:playertwo});
    seta(1);
  }
  }
const onClickfour = ()=>{
  if(a===1){
    setfour({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    setfour({value:"0",mark:true,player:playertwo});
    seta(1);
  }
  }
const onClickfive = ()=>{
  if(a===1){
    setfive({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    setfive({value:"0",mark:true,player:playertwo});
    seta(1);
  }
  }
const onClicksix = ()=>{
  if(a===1){
    setsix({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    setsix({value:"0",mark:true,player:playertwo});
    seta(1);
  }
  }
const onClickseven = ()=>{
  if(a===1){
    setseven({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    setseven({value:"0",mark:true,player:playertwo});
    seta(1);
  }
  }
const onClickeight = ()=>{
  if(a===1){
    seteight({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    seteight({value:"0",mark:true,player:playertwo});
    seta(1);
  }
  }
const onClicknine = ()=>{
  if(a===1){
    setnine({value:"X",mark:true,playerone:playerone});
    seta(0);
  }else if(a===0){
    setnine({value:"0",mark:true,player:playertwo});
    seta(1);
  }
  }
  //desible button
  const desible = ()=>{
    setone({mark:true})
    settwo({mark:true})
    setthree({mark:true})
    setfour({mark:true})
    setfive({mark:true})
    setsix({mark:true})
    setseven({mark:true})
    seteight({mark:true})
    setnine({mark:true})
  }

  const isdesible = ()=>{
    setone({mark:false})
    settwo({mark:false})
    setthree({mark:false})
    setfour({mark:false})
    setfive({mark:false})
    setsix({mark:false})
    setseven({mark:false})
    seteight({mark:false})
    setnine({mark:false})
  }


// Winning announcement

const undo = ()=>{
  setTimeout(() => {
    setwinner({ name: "", message: "" });
    isdesible()
  }, 4000);
}

const settingwinner = (wonplayer)=>{   
if(wonplayer){
setwinner({ name:wonplayer, message:"Won the match" });
}else{
  setwinner({name:"" ,message:"Match Draw"})
}
  if(wonplayer===playerone){
    setplayeronescore(playeronescore+1)
  }else if(wonplayer===playertwo){
    setplayertwoscore(playertwoscore+1)
  }else{
    setdraw(draw+1)
  }
  desible();  
  undo();
}

const checkwinner = ()=>{
  if(one.value === "X" && two.value === "X" && three.value === "X") {
    settingwinner(playerone);  
  } 
  else if (four.value === "X" && five.value === "X" && six.value === "X") {
    settingwinner(playerone);
  } 
  else if (seven.value === "X" && eight.value === "X" && nine.value === "X") {
    settingwinner(playerone);
  } 
  else if (one.value === "X" && four.value === "X" && seven.value === "X") {
    settingwinner(playerone);
  } 
  else if (two.value === "X" && five.value === "X" && eight.value === "X") {
    settingwinner(playerone);
  }
  else if (three.value === "X" && six.value === "X" && nine.value === "X") {
    settingwinner(playerone);
  } 
  else if (one.value === "X" && five.value === "X" && nine.value === "X") {
    settingwinner(playerone);
  } 
  else if (three.value === "X" && five.value === "X" && seven.value === "X") {
    settingwinner(playerone);
  }

  else if (one.value === "0" && two.value === "0" && three.value === "0") {
    settingwinner(playertwo);  
  } 
  else if (four.value === "0" && five.value === "0" && six.value === "0") {
    settingwinner(playertwo);
  } 
  else if (seven.value === "0" && eight.value === "0" && nine.value === "0") {
    settingwinner(playertwo);
  } 
  else if (one.value === "0" && four.value === "0" && seven.value === "0") {
    settingwinner(playertwo);
  } 
  else if (two.value === "0" && five.value === "0" && eight.value === "0") {
    settingwinner(playertwo);
  }
  else if (three.value === "0" && six.value === "0" && nine.value === "0") {
    settingwinner(playertwo);
  } 
  else if (one.value === "0" && five.value === "0" && nine.value === "0") {
    settingwinner(playertwo);
  } 
  else if (three.value === "0" && five.value === "0" && seven.value === "0") {
    settingwinner(playertwo);
  }else if(one.value && two.value && three.value && four.value && five.value && six.value && seven.value && eight.value && nine.value ){
    settingwinner();
  }
}
  //reset on click
  const reset = ()=>{
    setone({});
    settwo({});
    setthree({});
    setfour({});
    setfive({});
    setsix({});
    setseven({});
    seteight({});
    setnine({});
    setwinner({});
  }

   checkwinner();

const Leave= ()=>{
  localStorage.removeItem("playerone");
  localStorage.removeItem("playertwo");
  navigate("/");
}

  
  return (
    <div className='h-screen w-screen flex  justify-evenly items-center bg-black '>
      <p onClick={Leave} className='text-white absolute top-0 right-0 p-3  font-semibold text-xl border rounded-lg mt-2 px-10 mr-2 hover:bg-white hover:text-black'>Exit</p>
      <div className='text-white text-xl font-bold text-center  flex-col gap-10  mb-36'>
          <h1 className='text-2xl italic text-red-100'>Scores</h1>
          <div className='flex gap-10'>        
            <h1 style={a===1? mystyle:[]} className='p-2 rounded-lg'> X <br/> {playerone}<br/>{playeronescore}</h1>
          <h1><br/>Draw <br/>{draw}</h1>
          <h1 style={a===0? mystyle:[]} className='p-2 rounded-lg'>0 <br/>{playertwo}<br/>{playertwoscore}</h1></div>
      </div>

          <div className='h-auto w-auto flex flex-col justify-center items-center gap-5'>
      <h1 className='text-4xl text-center text-white mb-5 font-bold italic font-serif'>Tic Tak Toe</h1>
        <div className='h-auto w-auto flex gap-5'>
        <div className=''>
          <button disabled={one.mark} onClick={onClickone} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{one.value}</button>
          <button disabled={two.mark} onClick={onClicktwo} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{two.value}</button>
          <button disabled={three.mark} onClick={onClickthree} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center'>{three.value}</button>
        </div>
        <div className=''>
          <button disabled={four.mark} onClick={onClickfour} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{four.value}</button>
          <button disabled={five.mark} onClick={onClickfive} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{five.value}</button>
          <button disabled={six.mark} onClick={onClicksix} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{six.value}</button>
        </div>
        <div className=''>
          <button disabled={seven.mark} onClick={onClickseven} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{seven.value}</button>
          <button disabled={eight.mark} onClick={onClickeight} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{eight.value}</button>
          <button disabled={nine.mark} onClick={onClicknine} className='h-24 w-24 bg-white rounded-full mb-5 text-black  justify-center text-center text-6xl font-bold flex items-center '>{nine.value}</button>
        </div>
        </div>
            <h1 onClick={reset} className='text-white text-xl font-bold p-3 rounded-lg border-2 hover:border-gray-500 hover:text-gray-500'>Reset</h1>

      </div>
      <div className=' absolute  h-full w-1/ flex flex-col text-center  justify-center'>
            <h1 className=' ease-in-out duration-300 text-9xl font-bold text-white  origin-bottom -rotate-12 bg-red-600   italic'>{winner.name}</h1>
            <h2 className='ease-in-out duration-300 text-8xl font-semibold text-white mt-5 origin-bottom -rotate-12 italic bg-yellow-500'>{winner.message}</h2>
        </div>
    </div>

  )
}

export default Main