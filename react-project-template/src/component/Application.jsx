import { useState } from 'react';
import '../Style.css'
const Application = () => {
    const[change,setChange]=useState('')
    const[msg,setMsg]=useState('')


    const hChange=(e)=>{
      setChange(e.target.value)
    }

    const hClick=()=>{
      let phrase=change
      phrase=phrase.toLowerCase()
      let regex=/[^a-z0-9]/gi;
      phrase.replace(regex,'')
      let arrMsg=[]
      let objectMsg={}
      for(let index=phrase.length-1;index>=0;index--){
          arrMsg+=phrase[index]
      }
      objectMsg.Rev=arrMsg
      if(arrMsg==phrase){
        objectMsg.alert=`Well done! You entered a palindrom...`
      }else{
        objectMsg.alert=`Oops! Your phrase was not a palindrom...`
      }
      setMsg(objectMsg)
    }
  return ( 
    <div className="container mb-5">
      <div className="row row-cols-1 row-cols-md-2 mt-5 border border-2 border-dark mx-5 p-4 d-flex justify-content-between py-4 mb-5">
          <h5 className="col-12 border-bottom border-2 text-center pb-2">enter your phrase</h5>
          <input onChange={hChange} placeholder='insert your phrase here' className="col-md-9 mt-5 mb-5"/>
          <button  onClick={hClick} className="col-md-2 btn btn-outlined mt-5 mb-5 ">TacOcaT it...</button>
      </div>
      <div className="mt-5">
       { msg&&<GenerateMsg msg={msg}/>}
      </div>
    </div>
  );
}

const GenerateMsg=(props)=>{
  
  return(
   <>
      <div className="row mt-3 border border-2 border-dark p-4 mx-5 d-flex justify-content-center align-items-center alertCol mb-5">
        <h5 className="col-12 pb-2 border-bottom border-2 text-center">
          {props.msg.alert}
        </h5>
        <div className="col-md-4 mt-3 mb-3">Reversed of your input is<br/>(specials characters had been omitted)</div><div className='col-md-8 display-5 text-center '>{props.msg.Rev}</div>
      </div>
   </>
  )
}
 
export default Application;