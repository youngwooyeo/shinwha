import logo from './logo.svg';
import './App.css';

const xlogo1 = require('./images/social01.png'); // with require
const xlogo2 = require('./images/social02.png'); // with require
const xlogo3 = require('./images/social03.png'); // with require
const xlogo4 = require('./images/social04.png'); // with require


function App() {
  function greetUser() {
    console.log("Hi there, user!");
  }

  const sayHello = () => {
    alert("Hello!")
  };

  return (
    <div className="App">
      
      <div className='Main'>
        <div className='MainLogo'>
            Shinwha Entertainment
        </div>
      </div>

      <div className='Bottom'>
        <div className='Bottom1'>
          <div className='BottomLogo2'>
            <a href = "https://www.youtube.com/THEBLACKLABEL" target='blank'>
              
      </a>
           
          </div>
          <div className='BottomLogo2'>
          <a href = "https://www.instagram.com/theblacklabel/" target='blank'>
            <img src={xlogo2} />
           </a>

          </div>
          <div className='BottomLogo2'>
          <a href = "https://www.facebook.com/OfficialTHEBLACKLABEL/" target='blank'>
            <img src={xlogo3} />
              </a>
          </div>
          <div className='BottomLogo2'>
          <a href = "https://x.com/THEBLACKLABEL" target='blank'>
            <img src={xlogo4} />
            </a>
          </div>
        </div>

      </div>
      
        <div className='Bottom2'>
          <a href = 'info@shinwhaenter.co.kr' > Contact info@shinwhaenter.co.kr</a><br/>
          ⓒYEntertainment All Right Reserved.
        </div>
       
     
    </div>
  );
}

export default App;
