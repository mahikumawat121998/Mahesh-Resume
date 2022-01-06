import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import DownloadIcon from '@mui/icons-material/Download';
import Mahilex from "./Mahilex.png"


 

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          Mahilex
          </a>
          
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9828681407</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mahikumawat121998@gmail.com</span>
          </div >
          <div className="itemContainer">
                <DownloadIcon  className="icon1"/>
                <span><a href="./maheshResume.pdf" download> Mahesh's Resume</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
