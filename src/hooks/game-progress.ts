
import { useState, useEffect } from "react";

const _gameProgress = {"start": false, "layer": 0, "contribution": 0,
 "progress":"-","boss":false
}
const _walker = {
    "STR": getAttribute(3,6),
    "DEX": getAttribute(3,6),
    "CON": getAttribute(3,6),
    "INT": getAttribute(3,6),
    "CHA": getAttribute(3,6),
    "LUK": getAttribute(3,6),
}
function getAttribute(diceTime: number,addNum: number){
    // const rNum = addNum + diceTime * (Math.floor((Math.random()*15)+3))
    const rNum = addNum +  (Math.floor((Math.random()*15)))
     if((rNum)>3 && (rNum <=18)){
        return rNum;
     }else{
      if(rNum<=20){
        return rNum+3;
      }else{
        return 20
      }
        // getAttribute(diceTime,addNum)
     }
}

function useGameControl() {
  const [gameProgress, setGameProgress] = useState(_gameProgress)
  const [walker, setWalker] = useState(_walker)
  localStorage.setItem("myWalker", JSON.stringify(_walker))
  localStorage.setItem("gameProgress", JSON.stringify(_gameProgress))

useEffect(() => {
  localStorage.setItem("myWalker", JSON.stringify(_walker))
  localStorage.setItem("gameProgress", JSON.stringify(_gameProgress))
  }, [walker,gameProgress])

// const saveGamePoint 

// 1.检查是否有game cookie，具体cookie内容（localStorage?)
// 包括是否访问过、链接过的钱包地址、是否创建过walker、历史walker name等
// 2.检查是否有localStorage存储的游戏进度
// walker属性、功勋值、今日可玩次数（体力值）、获得材料
// const initialUser = () => {
//     const nowWalker = localStorage.getItem("nowWalker")
//     if(nowWalker){
//         console.log(nowWalker)
//       //   return nowWalker
//     }else{
//         console.log("no walker")
//     }
//     const nowUser = localStorage.getItem("nowUser")
//     if(nowUser){
//       let objUser = JSON.parse(nowUser) 
//       console.log(objUser)
//       // return objUser
//   }else{
//       console.log("no user")
//   }
//   const progressRecord = localStorage.getItem("progressRecord")
//   if(progressRecord){
//     let objUser = JSON.parse(progressRecord) 
//     console.log(progressRecord)
//     return [objUser, progressRecord]
//   }else{
//       console.log("no progress")
//   }    
// }

// 加载本地缓存并显示Walker信息
// 同时加载最新walker信息，做对比（hash值）是否改变，未改变则不动
// 改变了则刷新Walker信息
//需要wasm的游戏引擎开发完成，输出hash验证，和本地hash对比 TODO
//每次存储，都要向引擎请求一个hash值，存储到本地，因此所有的obj，都要有一个_hash字段 TODO
// const loadWalker = (walkerID:string) => {
//   try {
//       localStorage.getItem("walkerName",)
//         console.log("walkerID: ", walkerID)
//         return walkerID
//       } catch (err) {
//         console.log("Error: ", err)
//         throw err
//       }
// }

//存储进度、用户对象
//   attributes = {'STR':2,'DEX':4,'CON':5,'INT':4,'CHA':3,'LUK':7}
//   user =[{"walkerID":123, "walkerName":'player1',"walkerID":223, "attributes": attributes},
// {"walkerID":123, "walkerName":'player1',"walkerID":223, "attributes": attributes}
// ]
// progress = [{"layer":1,"events":events}, {"layer":2,"events":events}]
// events = [{"id":1,"selected":2}]
// const saveWalker = (walker:object) => {
//   try {
//       localStorage.setItem("myWalker", JSON.stringify(walker))
//         console.log("data: ", walker)
//       } catch (err) {
//         console.log("Error: ", err)
//         throw err
//       }
// }
const saveGame = (gp: typeof _gameProgress) => {
  try {
      localStorage.setItem("gameProgress", JSON.stringify(_gameProgress))
        console.log("gameProgress to save: ", _gameProgress)
      } catch (err) {
        console.log("Error: ", err)
        throw err
      }
}

const loadGame = () => {
  try {
      const gp = localStorage.getItem("gameProgress")
        console.log("gameProgress to load: ", gp)
        return JSON.parse(gp!)
      } catch (err) {
        console.log("Error: ", err)
        throw err
      }
  }

const getWalker = () => {
  try {
      const walker = localStorage.getItem("myWalker")
        // console.log("data: ", walker)
        return JSON.parse(walker!)
      } catch (err) {
        console.log("Error: ", err)
        throw err
      }
  }
return [setWalker, getWalker, saveGame, loadGame] as const
}

export default useGameControl
