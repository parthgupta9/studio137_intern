import React,{useState} from 'react'
import './main.css'
import ProgressBar from '../progressabr/Progressbar'
import Header from '../header/Header';

const Main = () => {
    const [progress, setProgress] = useState(50);

    const incrementProgress = () => {
        setProgress((prevProgress) => Math.min(prevProgress + 25, 100));
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
              <p className='page'>3/20</p>
              <p className='line'>I have spent fewer than 4 years in full time service or ministry.</p>
            </div>
            <p onClick={incrementProgress}> <ProgressBar/></p>
        </div>
         </div>
</>
  )
}

export default Main