import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import Logo from '../img/classW.png'
const Footer = () => {
  return ( <div >
       <footer className="main-footer mt-auto py-3 sticky-footer mt-5">
           <div className="container-fluid text-center">
              <img src={Logo} id='footerHeight' />
           </div>
       </footer>
      
  </div> );
}
 
export default Footer;