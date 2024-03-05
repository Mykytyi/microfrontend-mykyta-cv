import MainBoat from '../pics/Lendiron/MainBoat.jpg';
import Graphs from '../pics/Lendiron/Graphs.jpg';
import BoatAndSensors from '../pics/Lendiron/Boat&Sensors.jpg';

import A1Site from '../pics/A1/A1Site.png';
import Portal from '../pics/A1/Portal.png';
import Storybook from '../pics/A1/Storybook.png';

import GoodLikeLanding from '../pics/Goodlike/GoodLikeLanding.png';
import AdminPanelOne from '../pics/Goodlike/AdminPanelOne.png';
import PanelOne from '../pics/Goodlike/PanelOne.png';

import { ISlides } from '../type-definitions';

export const imageParser = (slides: ISlides, priority: 1 | 2 | 3) => {
  switch (slides) {
    case 'Yacht':
      if (priority === 1) {
        return MainBoat;
      }
      if (priority === 2) {
        return Graphs;
      }
      if (priority === 3) {
        return BoatAndSensors;
      }
      break;
    case 'A1':
      if (priority === 1) {
        return A1Site;
      }
      if (priority === 2) {
        return Portal;
      }
      if (priority === 3) {
        return Storybook;
      }
      break;
    case 'Godlike':
      if (priority === 1) {
        return GoodLikeLanding;
      }
      if (priority === 2) {
        return AdminPanelOne;
      }
      if (priority === 3) {
        return PanelOne;
      }
      break;
  }
};
