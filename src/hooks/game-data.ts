
import { useState, useEffect } from "react";

const _gameProgress = {
  "start": false, 
  "layer": 0, 
  "contribution": 0,
 "progress":"-",
 "boss":false
}
const _events = {
  getRandomEvents
}
function getRandomEvents(diceTime: number,addNum: number){
    // const rNum = addNum + diceTime * (Math.floor((Math.random()*15)+3))
    const rNum = addNum +  (Math.floor((Math.random()*15)))
     if((rNum)>3 && (rNum <=18)){
        return rNum;
     }else{
      if(rNum<=20){
        return rNum-3;
      }else{
        return 20
      }
        // getAttribute(diceTime,addNum)
     }
}

function useGameData() {
  const [gameProgress, setGameProgress] = useState(_gameProgress)
  const [walker, setWalker] = useState(_walker)
  localStorage.setItem("myWalker", JSON.stringify(_walker))
  localStorage.setItem("gameProgress", JSON.stringify(_gameProgress))

useEffect(() => {
  localStorage.setItem("myWalker", JSON.stringify(_walker))
  localStorage.setItem("gameProgress", JSON.stringify(_gameProgress))
  }, [walker,gameProgress])

const getBoss = (walkerID:string) => {
  try {
      localStorage.getItem("walkerName",)
        console.log("walkerID: ", walkerID)
        return walkerID
      } catch (err) {
        console.log("Error: ", err)
        throw err
      }
}
const getEvents = (gp: typeof _gameProgress) => {
  if(!gp){
    gp = JSON.parse(localStorage.getItem("gameProgress")!)
  }
  try {
      localStorage.setItem("gameProgress", JSON.stringify(_gameProgress))
      setGameProgress(gp)
        console.log("gameProgress to save: ", _gameProgress)
      } catch (err) {
        console.log("Error: ", err)
        throw err
      }
}

const getStart = () => {
  try {
      const gp = localStorage.getItem("gameProgress")
        console.log("gameProgress to load: ", gp)
        return JSON.parse(gp!)
      } catch (err) {
        console.log("Error: ", err)
        throw err
      }
  }

const getCraft = () => {
  try {
      const walker = localStorage.getItem("myWalker")
        // console.log("data: ", walker)
        return JSON.parse(walker!)
      } catch (err) {
        console.log("Error: ", err)
        throw err
      }
  }
return [getCraft, getStart, getEvents, getBoss] as const
}

export default useGameData
