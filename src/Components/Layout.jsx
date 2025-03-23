import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout() {
    return (
        <div className='w-full m-auto'>
            <NavBar />
            <div className='mx-auto w-5/6 px-2'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout