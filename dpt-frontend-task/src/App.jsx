
import { useEffect } from 'react'

function App() {

  useEffect(()=> {

  }, [])

  return (
    <div>
      <h1 className='max-w-5xl mx-auto mt-1 font-bold text-xl'>Master Price</h1>
      
      <hr />
      {/*! Trip Type Section  */}
      <div className='flex justify-center mt-3 mb-4 max-w-5xl mx-auto border-b py-5 border-blue-400 font-bold text-xl'>
        <button className='border px-2 font-bold border-black text-xs'>Round Trip</button>
        <button className='border px-2 font-bold border-black bg-blue-900 text-white text-xs '>One Way</button>
        <button className='border px-2 font-bold border-black text-xs '>Multi City</button>
      </div>

      <div>

      </div>
      
    </div>
  )
}

export default App
