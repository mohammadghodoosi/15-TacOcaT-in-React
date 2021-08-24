import '../prism.css'
import '../Style.css'
import Highlight, { defaultProps } from "prism-react-renderer";
import demo from 'prism-react-renderer/themes/okaidia'
import styled from "styled-components";



const Code = () => {
  // insert your code here
  const exampleCode = `
  import { useState } from 'react';
  import '../Style.css'
  const Application = () => {

    /////// STEP 1
      const[change,setChange]=useState('')
      const[msg,setMsg]=useState('')
  
  
      const hChange=(e)=>{
        setChange(e.target.value)
      }
  

      const hClick=()=>{

        ///////STEP2
        let phrase=change
        phrase=phrase.toLowerCase()
        let regex=/[^a-z0-9]/gi;
        phrase.replace(regex,'')
        let arrMsg=[]
        let objectMsg={}


        ///////STEP3
        for(let index=phrase.length-1;index>=0;index--){
            arrMsg+=phrase[index]
        }
        objectMsg.Rev=arrMsg
        if(arrMsg==phrase){
          objectMsg.alert=Well done! You entered a palindrom...
        }else{
          objectMsg.alert=Oops! Your phrase was not a palindrom...
        }
        setMsg(objectMsg)
      }
    return ( 
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-2
         mt-5 border border-2 border-dark mx-5 p-4 d-flex
          justify-content-between py-4 mb-5">
            <h5 className="col-12 border-bottom border-2 text-center pb-2">enter your phrase</h5>
            <input onChange={hChange} placeholder='insert your phrase here' className="col-md-9 mt-5 mb-5"/>
            <button  onClick={hClick} className="col-md-2 btn btn-outlined mt-5 mb-5 ">TacOcaT it...</button>
        </div>
        <div className="mt-5">


        ///////STEP 4
         { msg&&<GenerateMsg msg={msg}/>}
        </div>
      </div>
    );
  }
  

  ///////STEP 5
  const GenerateMsg=(props)=>{
    
    return(
     <>
        <div className="row mt-3 border border-2 
        border-dark p-4 mx-5 d-flex justify-content-center 
        align-items-center alertCol mb-5">
          <h5 className="col-12 pb-2 border-bottom border-2 text-center">
            {props.msg.alert}
          </h5>
          <div className="col-md-4 mt-3 mb-3">Reversed of your input is
          <br/>(specials characters had been omitted)</div>
          <div className='col-md-8 display-5 text-center '>{props.msg.Rev}</div>
        </div>
     </>
    )
  }
   
  export default Application;
     `.trim();

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  color:white
`;

const LineContent = styled.span`
  display: table-cell;
`;
  return ( <>
   <div className="container py-5 px-5">
     <h3 className="border-1 border-bottom border-dark pb-3 text-end">code of T<span>ac</span>O<span>ca</span>T</h3>
     <div className="row  row-cols-1 row-cols-sm-2">
       <div className="col-sm-8">
          
        <Highlight 
        {...defaultProps}  
        code={exampleCode} 
        theme={demo}
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
          
       </div>
       <div className="col-sm-4 order-sm-last order-first">
          <div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 1
            </h5>
            <p className="lead  mb-sm-5">
              using react useState to create changable variables
            </p>
          </div><div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 2
            </h5>
            <p className="lead mb-sm-5">
              using RegEx to remove special characters like 'space','?','!' and etc
            </p>
          </div><div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 3
            </h5>
            <p className="lead  mb-sm-5">
              reversing the phrase and using if statement to see if it is a palindrom or not . data were passed to an object and it was moved to the state
            </p>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <div className="col-12 mt-sm-5 mb-sm-5">
              
          </div>
          <div className="col-12 mt-sm-5 mb-sm-5">
              
          </div><div className="col-12 mt-sm-5 mb-sm-5">
              
              </div>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 4
            </h5>
            <p className="lead  mb-sm-5">
              using ternary operator to make the massage invisible at first and passing the state into a functional component
            </p>
          </div><div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 5
            </h5>
            <p className="lead">
             building the massage and displaying it in the UI
            </p>
          </div>
       </div>
     </div>
   </div>
  </> );
}
 
export default Code;



 