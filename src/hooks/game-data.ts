
import start from '../game-data/start.json';
import layers from '../game-data/layers.json';
import events from '../game-data/events.json';
import boss from '../game-data/boss.json';
import craft from '../game-data/craft.json';

const _gameProgress = {
  "start": "no", 
  "layer": 0, 
  "contribution": 0,
 "progress":"-",
 "boss":"no"
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
  // localStorage.setItem("myWalker", JSON.stringify(_events))
  // localStorage.setItem("gameProgress", JSON.stringify(_gameProgress))
  const getStart = () => {
    try {
          // const showStr = start.start_text
          const listStr= start.list
          // console.log('gd',listStr)
          
          const aFunc = function(){}
          const bFunc = function(){}
          const cFunc = function(){}
          return [listStr, aFunc,bFunc,cFunc]
        }catch (err) {
          console.log("Error: ", err)
          throw err
        }
    }

    // start.forEach( function(ele){
    //   // console.log(start.
    // })

    const pressStart=(event :KeyboardEvent, opFunc: Function)=>{
      switch ((event.key).toString()) {
        case "a":
            // console.log(ele.pre_text)
            // console.log(ele.start_text)
            // console.log(ele.id)
            break;
        case "b":
            console.log("i am b touched")
            break;
        case "c":
            console.log("i am c touched")
            break;
        default :
            console.log("")   
        }                                       
    
    }
  
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
const getLayers = () => {
  try {
      // const showStr = start.start_text
      const listMap= layers.map(l=>({layer:l.layer,start_text:l.start_text}))
      // console.log('gd',listStr)
      
      // const aFunc = function(){}
      // const bFunc = function(){}
      // const cFunc = function(){}
      return [listMap]
    }catch (err) {
      console.log("Error: ", err)
      throw err
    }
}
const getEvents = (gp: typeof _gameProgress) => {
  try {
      // const showStr = start.start_text
      const listStr= start.list
      // console.log('gd',listStr)
      
      const aFunc = function(){}
      const bFunc = function(){}
      const cFunc = function(){}
      return [listStr, aFunc,bFunc,cFunc]
    }catch (err) {
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
return [getCraft, getStart, getLayers, getEvents, getBoss] as const
}

export default useGameData
