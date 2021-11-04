import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import useGameControl from "../hooks/game-progress"
import useGameData from "../hooks/game-data"

// import packageD from '../game-data/package-base.json';


// interface property {str: string[]}
// const props
const str = [
    '`当你结束了一天疲惫的工作回到独居的家中，`<br/>`打开家门却意外地发现自己的爱犬 *DogName `<br/>`没有像往常一样晃着尾巴出现在门口迎接你。`<br/>`只见地上留了一张质地很古怪的便签：`<br/>很抱歉没办法提前告知，<br/>但哈迪斯大人要求我尽快将*DogName带回冥界。<br/>如您对此有任何意见，欢迎您拜访以下地址与哈迪斯大人当面沟通…… <br/>——塔纳托斯 <br/><font color="gray">按空格继续游戏 按q退出游戏</font>^2000',
  ]
const TypedReactHooks = () => {

  const [getCraft, getStart, getEvents, getBoss] = useGameData()
  const [saveGame,loadGame] = useGameControl()

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
    const [currentStr, setCurrentStr] = useState(str)
    const handleFetch = async () => {
        // fetchWalkerName(walkerID).then(setWalker).catch(showAppMsg)
      }
  React.useEffect(() => {
    const options = {
    // strings : getCurrentStr(),
    strings : str,
    typeSpeed: 30,
    backSpeed: 0,
    cursorChar: '_',
    fadeOut: true,
    shuffle: true,
    };
    
    typed.current = new Typed(el.current, options);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      typed.current.destroy();
    }
  }, [])

  const HandleCurrentStr = ()=>{
    setCurrentStr()
  }

  function freshStr(newStr){
    const options = {
        // strings : getCurrentStr(),
        strings : newStr,
        typeSpeed: 30,
        backSpeed: 0,
        cursorChar: '_',
        fadeOut: true,
        shuffle: true,
        };
        
        typed.current = new Typed(el.current, options);
        return typed.current
  }

  function makeStr(ele){
    // console.log("makeStr",ele)
    // freshStr([packageD[i].list[0],packageD[i].list[1],packageD[i].list[2]])
    const astr = []
    astr.push(ele.start_text)
    astr.push(ele.pre_text)
    // ele.list.forEach(function (item){astr.push(item)})
    console.log(astr)
    return astr
  }

  const handleKeyPress = (event) => {
    setLastPressedKey(event.key);
    if((event.key).toString()==='q'){
        typed.current.destroy()
        typed.current = freshStr(["你按下了Q","退出游戏^1500"])
        typed.current.reset()
        return null
    }else{
        console.log("continue game")
        if(event.keyCode==32){
          typed.current.destroy() 
        }else{
          typed.current.destroy() 
          loopData(event) 
        }
    } 
  };
  
  function loopData(event){
    console.log(event.key)
    switch ((event.key).toString()) {
      case "a":
          console.log('sssss',event.key)
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
      // const gameProgress = loadGame()
      const gameProgress = JSON.parse(localStorage.getItem("gameProgress"))
      console.log('progress:',gameProgress)
      if(gameProgress.start==='no'){
        const [showStr, listStr, aFunc,bFunc,cFunc] = getStart()
        // typed.current.destroy()
        // typed.current = showStr
        freshStr([showStr])
        console.log("get here")
        // typed.current.reset()
        // typed.current.destroy()
        // let listStra = ""
        // listStr.array.forEach(element => {
          // listStra = listStra + '<br/>'+element.content
        // });
        // typed.current = listStra
        // typed.current.reset()
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