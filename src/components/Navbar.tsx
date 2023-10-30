import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className='py-2 px-4 mb-4 flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}