import { Outlet } from 'react-router-dom'
import { Header, Footer } from './index' 

function App() {
  
  return (
    <>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
