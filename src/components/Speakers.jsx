import { speakers } from "./speaker/Data"
import SpeakerCard from "./speaker/SpeakerCard"
import './speaker/speaker.css'
import speakerImg from '../assets/Speakers.svg'
const Speakers = () => {
    return (
      <div className="speaker-section">
        <div className='speaker-heading'>
          <img src={speakerImg} alt='speaker' />
        </div>
        <div className='speaker-container'>
          {speakers.map((speaker) => (
            <SpeakerCard
              name={speaker.name}
              title={speaker.title}
              topic={speaker.topic}
              imgSrc={speaker.imgSrc}
            />
          ))}
        </div>
      </div>
    );
}

export default Speakers
