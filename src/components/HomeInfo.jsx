import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-l sm:leading-snug text-center neo-brutalism-blue py-4 px-3 text-white mx-2'>
        Hi, I'm
        <span className='sm:text-xl font-semibold mx-1 text-white'>Vincent Nguyen</span>
        👋
        <br />
        Configurator Analyst <br/> @ Mitsubishi Logisnext Americas Inc. |


      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-l text-center'>
        Let’s explore the little things about me,
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-l'>
        Enjoying adventures with my family  and diving <br/> into  my favorite hobbies
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          More details
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-l text-center'>
      Let's connecting! Whether for work <br/> or just to chat, feel free to reach out ! 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's discuss
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;