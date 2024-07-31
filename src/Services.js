

const servicesData = [
    { id: 1, name: 'Car Painting', price: 12000, description: 'Restoring a damaged vehicle...', imgSrc: '/images/istockphoto-155161419-612x612.jpg' },
    { id: 2, name: 'Panel Beating', price: 15000, description: 'Removing, repairing...', imgSrc: '/images/istockphoto-1487963137-612x612.jpg' },
    { id: 3, name: 'Engine Overhaul', price: 50000, description: 'A comprehensive process...', imgSrc: '/images/istockphoto-598674466-612x612.jpg' },
    { id: 4, name: 'Car Shipping', price: 10000, description: 'Moving a car from...', imgSrc: '/images/car-carrier-trailer-6839728_1280.jpg' },
    { id: 5, name: 'Car Tracking', price: 50000, description: 'Tracking and controlling...', imgSrc: '/images/icon-8794676_1280.jpg' },
    { id: 6, name: 'Car Collection', price: 0, description: 'Collection of various cars', imgSrc: '/images/istockphoto-1413498884-612x612.jpg' },
];

const Services = ({ addToBasket }) => {
    return (
        <div className="service-container">
            <h1>Services</h1>
            <div className="service-row">
                {servicesData.map(service => (
                    <div key={service.id} className="service">
                        <img src={service.imgSrc} alt={service.name} />
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p>ksh{service.price}</p>
                        <button onClick={() => addToBasket(service)}>Add to Basket</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;