import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import useGameData from "../hooks/game-data"

// import packageD from '../game-data/package-base.json';

let SELETED = false
let Allow_key_press = false
let Key_filter = ["a","b","c"]
// interface property {str: string[]}
// const props
const strBegin = [
    '`当你结束了一天疲惫的工作回到独居的家中，`<br/>`打开家门却意外地发现自己的爱犬 *DogName `<br/>`没有像往常一样晃着尾巴出现在门口迎接你。`<br/>`只见地上留了一张质地很古怪的便签：`<br/>很抱歉没办法提前告知，<br/>但哈迪斯大人要求我尽快将*DogName带回冥界。<br/>如您对此有任何意见，欢迎您拜访以下地址与哈迪斯大人当面沟通…… <br/>——塔纳托斯 <br/><font color="gray">按 q退出游戏 空格键继续游戏 </font>^1000',
  ]
const TypedReactHooks = () => {

  const [getCraft, getStart, getLayers, getEvents, getBoss] = useGameData()
	const el = React.useRef(null);
	const typed = React.useRef(null);
  
    // const [fetchWalkerName] = useWalker({ web3 })
    const [lastPressedKey, setLastPressedKey] = useState()
    const [ele, setEle] = useState()
    // "1.STR力量：3D6 （3-18）
    // 2.DEX敏捷：3D6 （3-18）
    // 3.CON体质：3D6 （3-18）
    // 4.INT智力：3D6 （3-18）
    // 5.CHA魅力：3D6 （3-18）
    // 6.LUK运气：3D6 （3-18）"
    const _walker = {
        "STR": getAttribute(3,6),
        "DEX": getAttribute(3,6),
        "CON": getAttribute(3,6),
        "INT": getAttribute(3,6),
        "CHA": getAttribute(3,6),
        "LUK": getAttribute(3,6),
    }

    function getAttribute(diceTime,addNum){
        const rNum = addNum + diceTime * (Math.floor((Math.random()*3)))
         if((rNum)>3 && (rNum <=18)){
            return rNum;
         }else{
            getAttribute(diceTime,addNum)
         }
    }
    const [walker, setWalker] = useState(_walker)
    const [currentStr, setCurrentStr] = useState(strBegin)
    const handleFetch = async () => {
        // fetchWalkerName(walkerID).then(setWalker).catch(showAppMsg)
      }
  React.useEffect(() => {
    // const options = {
    // // strings : getCurrentStr(),
    // strings : strBegin,
    // typeSpeed: 30,
    // backSpeed: 0,
    // cursorChar: '_',
    // fadeOut: true,
    // shuffle: true,
    // };
    freshStr(strBegin)
    
    // typed.current = new Typed(el.current, options);
    window.addEventListener("keydown", handleKeyPressCheck);

    return () => {
      typed.current.destroy();
    }
  }, [])

  const HandleCurrentStr = ()=>{
    setCurrentStr()
  }

  function freshStr(newStr){
    console.log("now fresh this",newStr)
    const options = {
        // strings : getCurrentStr(),
        strings : newStr,
        typeSpeed: 30,
        backSpeed: 0,
        cursorChar: '_',
        fadeOut: true,
        shuffle: true,
        onComplete: function(self) {Allow_key_press= true},
        };
        
        typed.current = new Typed(el.current, options);
        return typed.current

  }

  
  const handleKeyPressCheck = (event) => {
    if(Allow_key_press){
      handleKeyPress(event)
    }else{
      console.log("Not allow key press now")
    }
  };

  const handleKeyPress = (event) => {
    const keyStr = (event.key).toString()
    setLastPressedKey(event.key);
    if(keyStr==='q'){
        typed.current.destroy()
        typed.current = freshStr(["你按下了Q","退出游戏^1500"])
        typed.current.reset()
        return null
    }else{
        console.log("continue game")
        const keyIn = Key_filter.indexOf(keyStr)
        if((keyIn>=0)||(event.keyCode===32)){
          // console.log("enter",keyIn)
          typed.current.destroy() 
          loopData(event)         
        }else{
          // loopData(event) 
        }
    } 
  };
  
  function loopData(event){
    console.log("loop in")
    const gameProgress = JSON.parse(localStorage.getItem("gameProgress"))
    console.log('progress:',gameProgress)
    console.log("selected",SELETED)

  //   localStorage.setItem("gameProgress",JSON.stringify({  "start": "yes", 
  //   "layer": 1, 
  //   "contribution": 0,
  //  "progress":"-",
  //  "boss":false}))
  //   console.log('after select',localStorage.getItem("gameProgress"))

    const listMap = getLayers()
    // console.log(listMap)
    
    if((gameProgress.start==='no')&& (SELETED===false)){
      if(event.keyCode===32){
        const [listStr] = getStart()
        freshStr(listStr)
      }  
      switch ((event.key).toString()) {
        case "a":
            console.log('you pressed ',event.key)
            SELETED = true
            freshStr(["你选择了a，不准备开启一段为小狗的冒险，游戏结束"])
            break;
            return null
        case "b":
            console.log("i am b touched")
            SELETED = true
            freshStr(["你选择了b，你装备了你的帽子和风衣，冒险开始了"])
            localStorage.setItem("gameProgress",JSON.stringify({  "start": "yes", 
            "layer": 1, 
            "contribution": 0,
           "progress":"-",
           "boss":false}))
            console.log('after select',localStorage.getItem("gameProgress"))          
            break;
        case "c":
            console.log("i am c touched")
            SELETED = true
            freshStr(["你选择了c，你无暇顾及背包，直接上路开始冒险了"])
            localStorage.setItem("gameProgress",JSON.stringify({  "start": "yes", 
            "layer": 1, 
            "contribution": 0,
           "progress":"-",
           "boss":false}))
            console.log('after select',localStorage.getItem("gameProgress"))          
            break;
        default :
            console.log("")   
        }    
    }

      if((gameProgress.start==='yes')&& (SELETED===false)&&(gameProgress.layer===1)){
        console.log(listMap[0])
        // freshStr([listMap[0]["start_text"]])
        // let listStra = ""
        // listStr.array.forEach(element => {
          // listStra = listStra + '<br/>'+element.content
        // });
      }      
      
    // packageD.forEach(function(ele){
    //   setEle(ele)
    //     // console.log(ele)
    //     console.log(ele.id)
    //     typed.current.destroy()
    //     // typed.current = makeStr(i)
    //     // typed.current = freshStr(["sdfadf","sdfsdf"])
    //     typed.current = freshStr(makeStr(ele))
    //     typed.current.reset()
                                       
    //         }) 
  }

  function nextStr(){
    //   console.log(packageD.event_count)
      // console.log(craft[0])
  }

  return (
    <div className="wrap">
      <h1>What the hell?</h1>
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  );
}
export default TypedReactHooks;