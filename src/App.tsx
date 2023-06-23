import './App.css'

function App() {

  return (
    <div className='parallax-container'>
      <header className='text-center'>
        <h1 className='text-gray-300 font-bold text-4xl'>Welcome to Aisop</h1>
      </header>
      <section className='parallax relative -mt-[2px]'>
        <img src="/2.svg" alt="background" className='h-screen'/>
        <img src="/1.svg" alt="moon" />
        <img src="/3.svg" alt="cloud" />
        <img src="/4.svg" alt="cloud" />
        <img src="/8.svg" alt="forest" className='hidden'/>
        <h2 className='font-mono font-bold tracking-wider text-blue-600' id='text'>AISOP</h2>
        <img src="/9.svg" alt="forest" />
        <img src="/10.svg" alt="range" className='hidden'/>
        <img src="/11.svg" alt="range" className='hidden'/>
        <img src="/12.svg" alt="range" className='hidden'/>
        <img src="/13.svg" alt="mountain-top" className='hidden'/>
        <img src="/14.svg" alt="forest" className='hidden'/>
        <img src="/15.svg" alt="forest" className='hidden'/>
        <img src="/6.svg" alt="tree" className='absolute right-0 bottom-0 w-1/2'/>
        <img src="/7.svg" alt="tree" className='absolute right-0 bottom-0'/>
        <img src="/5.svg" alt="wolf" />
      </section>
    </div>
  )
}

export default App
