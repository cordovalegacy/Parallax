import layerBaseImage from './img/layer-base.png'
import layerMiddleImage from './img/layer-middle.png'
import layerFrontImage from './img/layer-front.png'
import dungeonImage from './img/dungeon.jpg'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`)
    })
  }, [])

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
        <article className='article-main' style={{ backgroundImage: `url(${dungeonImage})` }}>
          <div className='m-article-content'>
            <h2 className='m-header'>Write your own story</h2>
            <p className='m-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Autem expedita omnis minima officia ipsum totam dolore
              optio blanditiis velit, laudantium deserunt voluptate ab
              fugiat illo officiis. Illum quos nostrum inventore!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
