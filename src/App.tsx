import { useEffect, useState } from 'react';
import layerBaseImage from './img/layer-base.png';
import layerMiddleImage from './img/layer-middle.png';
import layerFrontImage from './img/layer-front.png';
import dungeonImage from './img/dungeon.jpg';
import ReactCardFlip from 'react-card-flip'
import { BsArrowRepeat as Flippy } from 'react-icons/bs'

const App = () => {

  const [cardFlipped, setCardFlipped] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <header className="header-main">
          <div className="layers">
            <div className="layer-head">
              <div className="caption">Welcome to AISOP</div>
              <div className="title">Adventures</div>
            </div>
            <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
            <div className="img-layer layer-mid" style={{ backgroundImage: `url(${layerMiddleImage})` }}></div>
            <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }}></div>
          </div>
        </header>
        <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }}>
          <div className="m-article-content">
            <h2 className="m-header font-bold">Write your own story</h2>
            <ReactCardFlip flipDirection='horizontal' isFlipped={cardFlipped}>
              <form className='m-5 logAndReg outline outline-1 p-5 outline-amber-300 !rounded-lg'>
                <div className='relative z-0 w-full mb-1 group'>
                  <input
                    type="text"
                    name="gamertag"
                    className='input-form'
                    placeholder=" "
                    autoComplete='off'
                  />
                  <br />
                  <label htmlFor='gamertag' className="label-form">Gamer Tag</label>
                </div>
                <div className='relative z-0 w-full mb-1 group' >
                  <input
                    type="email"
                    name="email"
                    className='input-form'
                    placeholder=" "
                    autoComplete='off'
                  />
                  <br />
                  <label htmlFor='email' className="label-form">Email</label>
                </div>
                <div className='relative z-0 w-full mb-1 group'>
                  <input
                    type='password'
                    name="password"
                    className='input-form'
                    placeholder=" "
                    autoComplete='off'
                  />
                  <br />
                  <label htmlFor='password' className="label-form">Password</label>
                </div>
                <div className='relative z-0 w-full mb-1 group'>
                  <input
                    type='password'
                    name="confirm_password"
                    className='input-form'
                    placeholder=" "
                    autoComplete='off'
                  />
                  <br />
                  <label htmlFor='confirm_password' className="label-form">Confirm Password</label>
                </div>
                <div className='flex mt-6 justify-center gap-6'>
                  <button type='submit' className='button'>Register</button>
                  <button type='button' className='text-6xl hover:rotate-180 transition duration-500 hover:text-amber-400' onClick={() => setCardFlipped(!cardFlipped)}><Flippy /></button>
                </div>
              </form>
              <form className='m-5 logAndReg outline outline-1 p-5 outline-amber-300 !rounded-lg'>
                <div className='relative z-0 w-full group'>
                  <input
                    id='email'
                    className='input-form'
                    placeholder=" "
                    type="email"
                    name="email"
                    autoComplete='off' />
                  <br />
                  <label htmlFor='email' className="label-form"> Email</label>
                </div>
                <div className='relative z-0 w-full group'>
                  <input
                    type="password"
                    id='password'
                    name="password"
                    className='input-form'
                    placeholder=" "
                    autoComplete='off' />
                  <br />
                  <label htmlFor='password' className='label-form'> Password</label>
                </div>
                <div className='flex items-center gap-4 mt-6 justify-center'>
                  <button className='button' type='submit'>Login</button>
                  <button type='button' className='text-6xl hover:rotate-180 transition duration-500 hover:text-amber-400' onClick={() => setCardFlipped(!cardFlipped)}><Flippy /></button>

                </div>
              </form>
            </ReactCardFlip>
          </div>
        </article>
      </div>
    </div>
  );
};

export default App;
