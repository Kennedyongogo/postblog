import { Link } from 'react-router-dom';
import React from 'react';
const Home = () => {
    return ( 
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
     );
}
 
export default Home;