import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='bg-green-500 rounded-2xl px-3 text-white text-3xl font-bold'>Bae!</h1>
            <p className='bg-red-500 px-5 py-2 my-2 rounded-xl text-white '>You lost the way?</p>
            <Link to="/" className='px-2 bg-blue-500 rounded-lg font-bold text-white'>Go back to the homepage</Link>
        </div>
    )
}

export default ErrorPage