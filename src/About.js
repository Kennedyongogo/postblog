const About = () => {
    return (
    <div className="about-us">
   <h1>About Us</h1>
<div className="data">
    <h2>Business Information</h2>
    <p>Address : Kadongo along kisii - kisumu highway </p>
    <p>Email Adress : ongogokennedy89@gmail.com</p>
</div>
<div className="time">
    <h2>Business Hours</h2>
    <ul>
        <li>Monday - Friday : 8.00 am - 7.00 pm</li>
        <li>Saturday : 8.00 am - 7.00 pm</li>
        <li>Closing on Sunday and public holidays</li>
    </ul>
</div>
<div className="location">
    <h2>Map and Direction</h2>
    <div className="coordinates">
    <iframe
 src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.697389016283!2d34.892306173495825!3d-0.44609933528189155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjYnNDYuMCJTIDM0wrA1Myc0MS42IkU!5e0!3m2!1sen!2ske!4v1722343333043!5m2!1sen!2ske"
 title="A1, Kadongo"
  width="600"
  height="450"
  style={{ border: '0' }}  // This is the correct way in JSX
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
</div>

    </div> 
    );
}
 
export default About ;