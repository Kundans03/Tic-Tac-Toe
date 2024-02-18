import React, { useEffect, useState } from 'react'
import tictaktoe from "./tictaktoe.png"
import { useNavigate } from "react-router-dom";

function Home() {
    const [player, setplayer] = useState("");
    const [playerone, setplayerone] = useState("");
    const [playertwo, setplayertwo] = useState("");
    const [style1, setstyle1] = useState({display:"none",transition:"all 3s ease linear"});
    const [style2, setstyle2] = useState({display:"none",transition:"all 3s ease linear"});
    const [style, setstyle] = useState({backgroundColor:"none"});
    const [style3, setstyle3] = useState({backgroundColor:"none"});
    const [isdisabled, setisdisabled] = useState(true);
    const navigate = useNavigate();

 
localStorage.removeItem("player");
localStorage.removeItem("playerone");
localStorage.removeItem("playertwo");


const checknames = ()=>{
if(player.length<2){
        setisdisabled(false)
}
if(playerone.length<2 && playertwo.length>2){
    setisdisabled(false)
}else {
    setisdisabled(true);
}}


const onClick= (e)=>{
    e.preventDefault();
    if(player){
    localStorage.setItem("playerone",player);
    }
    if(playerone){
    localStorage.setItem("playerone",playerone);
    localStorage.setItem("playertwo",playertwo);
    }
    if((player.length>2) || (playerone.length>2 && playertwo.length>2)){
    navigate("/match") 
}}

const handleonclick1= (e)=>{
    e.preventDefault();
    setstyle2({display:"none",transition:"all 3s ease linear"});
    setstyle3({backgroundColor:"none"})
    setstyle1({display:"flex",transition:"all 3s ease linear"});
    setstyle({backgroundColor:"red"});
    setisdisabled(true)
}

const handleonclick2= (e)=>{
    e.preventDefault();
    setstyle1({display:"none",transition:"all 3s ease linear"});
    setstyle({backgroundColor:"none"});
    setstyle2({display:"flex",transition:"all 3s ease linear"});
    setstyle3({backgroundColor:"red"})
    setisdisabled(true)    
}

useEffect(() => {
    setisdisabled(true)
}, [])

useEffect(() => {
    checknames()
// eslint-disable-next-line
}, [])

  return (
    <div  className='h-screen w-screen bg-black flex justify-between items-center'>
        <img  className='h-2/3 w-1/2 object-cover' src={tictaktoe} alt='loading'/>
        <div className='h-full w-full text-white flex justify-center items-center flex-col gap-3'>
        <h1 className='text-3xl font-bold'>Tic Tak Toe</h1>
        <button style={style} onClick={handleonclick1} className=' outline-none text-lg font-semibold text-center border-white rounded-lg h-10 w-1/3  flex- items-center bg-red-500 hover:bg-red-600'>1 Player</button>
        <div style={style1}>
            <input onChange={(e)=>{setplayer(e.target.value)}} className='h-10 px-1 rounded-lg text-black outline-none' placeholder='Your Name:'/>
        </div>
        <button style={style3} onClick={handleonclick2} className=' outline-none text-lg font-semibold text-center border-white rounded-lg h-10 w-1/3  flex- items-center bg-red-500 hover:bg-red-600'>2 Player</button>
        <div style={style2}>
        <input onChange={(e)=>{setplayerone(e.target.value)}} className='h-10 px-1 rounded-lg text-black outline-none' placeholder='1st Player Name:'/>
        <input onChange={(e)=>{setplayertwo(e.target.value)}} className='h-10 px-1 rounded-lg text-black outline-none ml-3' placeholder='2nd Player Name:'/>
        </div>
            <button disabled={!isdisabled} onClick={onClick} className= 'outline-none bg-red-500 p-3 rounded-lg font-bold hover:bg-red-600'>Start Match</button>
        </div>
    </div>
  )
}

export default Home