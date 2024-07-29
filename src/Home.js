import { Link } from 'react-router-dom';
import React from 'react';
const Home = () => {
    return ( 
        <div className='cars'>
        <div className="image-container">
            <h1>Vintage Cars</h1>
            < div className="images-wrapper">

            <div className="image">
            <img src="/images/car-4445171_1280.jpg" alt="old car" />
                <h2>Ford Mustang</h2>
                <Link to='/car/1'>
                <button>View More Details</button>
                </Link>
            </div>

            <div className="image">
            <img src="/images/vw-beetle-405876_1280.jpg" alt="old car" />
                <h2>Beetle</h2>
                <Link to='/car/2'>
                <button>View More Details</button>
                </Link>
            </div>

            <div className="image">
            <img src="/images/opel-5190050_1280.jpg" alt="old car" />
                <h2>Nissan GTR</h2>
                <Link to='/car/3'>
                <button>View More Details</button>
                </Link>
            </div>

            <div className="image">
            <img src="/images/oldtimer-1197800_1280.jpg" alt="old car" />
                <h2>Convertible</h2>
                <Link to='/car/4'>
                <button>View More Details</button>
                </Link>
            </div>
            </div>
            </div>
            <div className='image-container'>

            <h1>Sport Cars</h1>
            < div className="images-wrapper">

            <div className="image">
            <img src="/images/ferrari-721858_1280.jpg" alt="sport car" />
                <h2>Ferrari</h2>
                <Link to='/car/5'>
                <button>View More Details</button>
                </Link>
            </div>

            <div className="image">
            <img src="/images/lamborghini-4815249_1280.jpg" alt="sport car" />
                <h2>Lamborghini</h2>
                <Link to='/car/6'>
                <button>View More Details</button>
                </Link>
            </div>

            <div className="image">
            <img src="/images/bmw-4565066_1280.jpg" alt="sport car" />
                <h2>BMW</h2>
                <Link to='/car/7'>
                <button>View More Details</button>
                </Link>
            </div>

            <div className="image">
            <img src="/images/porsche-4795517_1280.jpg" alt=" car" />
                <h2>Porsche</h2>
                <Link to='/car/8'>
                <button>View More Details</button>
                </Link>
            </div>
            </div>
            

        </div>
        </div>
     );
}
 
export default Home;