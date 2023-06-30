function App() {
  return (
    <div className="parallax-container">
      <header className="text-center">
        <h1 className="text-gray-300 font-bold text-4xl">Welcome to Aisop</h1>
      </header>
      <section className="parallax relative -mt-[2px]">
        <div className="layer">
          <img src="/2.svg" alt="background" className="bg-image" />
        </div>
        <div className="layer">
          <img src="/1.svg" alt="moon" className="moon" />
        </div>
        <div className="layer">
          <img src="/3.svg" alt="cloud" className="cloud" />
        </div>
        <div className="layer">
          <img src="/4.svg" alt="cloud" className="cloud" />
        </div>
        <div className="layer">
          <img src="/8.svg" alt="forest" className="forest hidden" />
        </div>
        <div className="layer">
          <h2 className="font-mono font-bold tracking-wider text-blue-600" id="text">
            AISOP
          </h2>
        </div>
        <div className="layer">
          <img src="/9.svg" alt="forest" className="forest" />
        </div>
        <div className="layer">
          <img src="/10.svg" alt="range" className="range hidden" />
        </div>
        <div className="layer">
          <img src="/11.svg" alt="range" className="range hidden" />
        </div>
        <div className="layer">
          <img src="/12.svg" alt="range" className="range hidden" />
        </div>
        <div className="layer">
          <img src="/13.svg" alt="mountain-top" className="mountain-top hidden" />
        </div>
        <div className="layer">
          <img src="/14.svg" alt="forest" className="forest hidden" />
        </div>
        <div className="layer">
          <img src="/15.svg" alt="forest" className="forest hidden" />
        </div>
        <div className="layer">
          <img src="/6.svg" alt="tree" className="tree absolute right-0 bottom-0 w-1/2" />
        </div>
        <div className="layer">
          <img src="/7.svg" alt="tree" className="tree absolute right-0 bottom-0" />
        </div>
        <div className="layer">
          <img src="/5.svg" alt="wolf" className="wolf" />
        </div>
      </section>
    </div>
  );
}

export default App;
