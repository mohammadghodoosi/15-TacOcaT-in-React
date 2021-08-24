import Logo from '../img/tacocat.png'
import LogoGa from '../img/gatsby.svg'
import LogoRe from '../img/redux.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import '../Style.css';
import {useHistory} from 'react-router-dom'




const Home = () => {
  const history=useHistory()

  const clickH=()=>{
    history.push('/App')
  }
  return ( <>
   <div className="container mb-5 mt-0">
     <div className="row row-cols-1 row-cols-sm-2  mb-5  gx-5">
          {/* room for explanation about the app */}


          {/* column 1 */}
         <div className="col-sm-12 mt-0">
          <div className="row">
           {/* project name */}
            <div className="col-sm-6  order-2 order-sm-1  mt-0">
            <h2 className="lh-1 mb-3 mt-5 mt-sm-0">project name: t<span>ac</span>o<span>ca</span>t</h2>
            <p className="lead">taco cat is a palindrome. a palindrome is a word, phrase or sequence that reads the same backward as forward. this app checks if your input is a palindrome.</p>
            <p className="lead">special characters like "space" , "!" , "?" , etc will be ignored while checking.</p></div>
          {/* project logo */}
           <div className="col-sm-6 order-1 order-sm-2 mt-0 h-50"> <img src={Logo}  height='150' width='300' className='d-flex justify-content-right img-fluid mx-auto ml-5'/></div>
           </div>
         </div>
    

     

        {/* column 2 */}
             <div className="col-sm-12">
              <div className="row gx-5 d-flex justify-content-between">
              {/* project skills */}
              <div className="col-sm-6 order-4 mb-5 mb-sm-5 d-flex flex-column">
                <h5 className='border-bottom border-3 text-center'>skills required for this project</h5>
                 <ul className="fa-ul pt-2 checklist">
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>CSS and Bootstrap Responsive Layout</li>
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>javascript RegEx</li>
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React hooks</li>
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React iterators</li>
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React Event Handlers</li>
                   </ul>
                      <button className="text-center mt-4 btn-outline-dark btn  px-5 me-md-2 py-3 " onClick={clickH}>Try the APP</button>
              </div>
             {/* project tech */}
               <div className="col-sm-4 order-3 mt-5">
               <h5 className='border-bottom border-3 text-center'>technologies used for this project</h5>
                 <h5 className="fw-bold mt-5">
                   <div className="d-flex justify-content-sm-center">
                    <div className="row gx-3">
                    <div className="col">
                     <li style={{color:' #61dbfb'}}className="fab fa-react fa-4x"></li></div>
                      <div className="col"><li style={{color:'#264de4'}}className="fab fa-css3-alt fa-4x"></li></div>
                       <div className="col"><li style={{color:'#e34c26'}}className="fab fa-html5 fa-4x"></li></div>
                       <div className="col"><li style={{color:'#563d7c'}}className="fab fa-bootstrap fa-4x"></li></div>
                       </div>
                    </div>
                 </h5>
               </div>
             </div>
    
       </div>
 

     </div>
     </div>

</>);
}
 
export default Home;