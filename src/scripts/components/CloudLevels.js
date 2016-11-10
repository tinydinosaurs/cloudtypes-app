import React from 'react';
import '../../css/Home.css';
import Cirrus from '../../images/cirrus.png';
import Altostratus from '../../images/altrostratus.png';
import Cumulus from '../../images/cumulus.png';
import Lenticular from '../../images/lenticular.png';

class CloudLevels extends React.Component {
  render() {
    return (
      <section className="cloud-levels">
        <article className="cloud-level">
          <img src={Cirrus} />
          <h1>high level clouds</h1>
          <p>The type of clouds most often found in the high level etage are cirrus, cirrocumulus and cirrostratus. These clouds are composed primarily of ice crystals and usually present a bright white, or mostly white appearance except near sunrise or sunset. At these time, the reflection by the cloud bases of the red, orange and yellow wavelengths of sunlight that has not been scattered by the atmosphere produces some of the most beautiful cloud patterns.</p>
        </article>
        <article className="cloud-level">
          <img src={Altostratus} />
          <h1>mid level clouds</h1>
          <p>Clouds of the middle level etage are usually of the altocumulus or altostratus type with bases normally in the range from 6,500 feet to 23,000 feet (2,000 to 6,000 meters). Near polar regions and in winter months, the height of their bases are lower and near the tropics and during summer months the height of their bases are higher. These clouds may be composed of water droplets, ice crystals or both.</p>
        </article>
        <article className="cloud-level">
          <img src={Cumulus} />
          <h1>low level clouds</h1>
          <p>Clouds whose bases are in the low level etage, ground level to 6,500 feet (2,000 meters), are usually of the nimbostratus, stratocumulus, stratus, cumulus and cumulonimbus type. Sometimes, the last two are separately grouped as convective clouds of great vertical extent. Low clouds are of mostly composed of water droplets; however, when temperatures are cold enough, these clouds may also contain ice particles and snow.</p>
        </article>
        <article className="cloud-level">
          <img src={Lenticular} />
          <h1>other clouds</h1>
          <p>Not all cloud types fit neatly into one of the above categories. Some cloud types only form in specific geographic regions such as near mountains or close to the North Pole, while others result from unusual air movement or convection. And one type of unusual cloud, Aperitas, remains a mystery to scientists.</p>
        </article>
      </section>
    )
  }
}

export default CloudLevels;
