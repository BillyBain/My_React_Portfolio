import pic from '../img/pro_pic.jpg'

export default function About() {
    return (
      <div className="row align-items-start">
        <img className='col image-responsive m-1' src={pic} alt="Billy Bain"></img>
        <p className='col m-2'>
          Hello! I'm William(Billy) Bain and I am currently learning to become a Full Stack Developer. Before this task I have had an enjoyable journey.
          I worked in the IT field managing and repairing many laptops and computers, a couple of customer service jobs one being a great convenience store called Clerks, and most recently for a commercial dishwasher company doing various services and learning the sales game.
          I have recently picked up the travel bug and have been making plans to explore the world. My most recent was Punta Cana in the Dominican Republic. Some of my other interests are learning to cook new things, True crime, and video games.
        </p>
      </div>
    );
  }