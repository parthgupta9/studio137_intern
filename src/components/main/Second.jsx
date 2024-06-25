import React,{useState} from 'react'
import './main.css'
import ProgressBar from '../progressabr/Progressbar'
import Header from '../header/Header';
import { Link,useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Main = () => {
    const [progress, setProgress] = useState(25);
    const navigate = useNavigate();

    const incrementProgress = () => {
        setProgress((prevProgress) => Math.min(prevProgress + 25, 100));
        navigate('/third')
    };

  return (
<>
<Header/>
<div className='outer-container'>
        <div >
         <div className='inner-container'>
         <div className="progress-bar" data-capacity="5">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                    <div className='name'>IDEALISTIC</div>
                </div>
                <div className="progress-bar" data-capacity="0">
                    <div className="progres" ></div>
                    <div className='name'>DISILLUSIONED</div>
                </div>
                <div className="progress-bar" data-capacity="0">
                    <div className="progres" ></div>
                    <div className='name'>CYNICAL</div>
                </div>
                <div className="progress-bar" data-capacity="0">
                    <div className="progres" ></div>
                    <div className='name'>HOPEFUL</div>
                </div>
            </div>
            <div className='middle'>
              <p className='page'>2/20</p>
              <p className='line'>My leadership journey has progressed as I anticipated.</p>
            </div>
            <p onClick={incrementProgress}> <ProgressBar/></p>
            <div className='arrow'>
           <div className='inside'>
           <Link to ="/"> <ArrowBackIcon style={{color:'black'}}/></Link>
           <p className='para'>Prev</p>
           </div>
           <div className='inside'> <p className='next'>Next</p>
          <Link to ="/third"> <ArrowForwardIcon style={{color:'black'}}/></Link>
           </div>
        </div>
        </div>
         </div>
</>
  )
}

export default Main