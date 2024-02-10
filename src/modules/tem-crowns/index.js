import { addStyles, doRequest, makeElement, onPageChange } from '@utils';

import styles from './styles.css';

/**
 * Get the crown type.
 *
 * @param {number} catches The number of catches.
 *
 * @return {string} The crown type.
 */
const getCrownType = (catches) => {
  if (catches < 10) {
    return 'none';
  }

  if (catches < 100) {
    return 'bronze';
  }

  if (catches < 500) {
    return 'silver';
  }

  if (catches < 1000) {
    return 'gold';
  }

  if (catches < 2500) {
    return 'platinum';
  }

  return 'diamond';
};

/**
 * Add crowns to the TEM.
 *
 * @param {Array}  huntingStats The hunting stats.
 * @param {number} attempts     The number of attempts to retry.
 */
const addCrownsToTEM = async (huntingStats = [], attempts = 0) => {
  if (huntingStats.length === 0) {
    const crowns = await doRequest('managers/ajax/mice/getstat.php', {
      action: 'get_hunting_stats',
    });
    if (! (crowns.hunting_stats && crowns.hunting_stats.length > 0)) {
      return;
    }
    huntingStats = crowns.hunting_stats;
  }

  const temMice = document.querySelectorAll('.campPage-trap-trapEffectiveness-mouse');
  if (! temMice || temMice.length === 0) {
    if (attempts > 10) {
      return;
    }
    attempts++;

    setTimeout(() => addCrownsToTEM(huntingStats, attempts), 250 * attempts);
    return;
  }

  temMice.forEach(async (mouse) => {
    const hasCrown = mouse.getAttribute('data-mh-ui-tem-crown');
    if (hasCrown) {
      return;
    }

    const type = mouse.getAttribute('data-mouse');
    if (! type) {
      return;
    }

    mouse.setAttribute('data-mh-ui-tem-crown', true);

    const mouseStats = huntingStats.find((m) => m.type === type);
    if (! mouseStats) {
      return;
    }

    const name = mouse.querySelector('.campPage-trap-trapEffectiveness-mouse-name');
    if (! name) {
      return;
    }

    const catches = mouseStats.num_catches;
    const crownType = getCrownType(catches);

    const crownWrapper = makeElement('div', 'mh-ui-tem-crown-wrapper');

    const crown = document.createElement('span');
    crown.classList.add('mh-ui-tem-crown', 'mousebox');

    const crownIcon = document.createElement('img');
    crownIcon.classList.add('mh-ui-tem-crown-icon');
    crownIcon.src = `https://www.mousehuntgame.com/images/ui/crowns/crown_${crownType}.png`;
    crown.append(crownIcon);

    makeElement('span', 'mh-ui-tem-crown-text', catches, crown);

    crownWrapper.append(crown);

    // append the crown to the name
    name.append(crownWrapper);
  });
};

/**
 * Initialize the module.
 */
const init = async () => {
  addStyles(styles, 'tem-crowns');

  onPageChange({ tem: { show: addCrownsToTEM } });
};

export default {
  id: 'tem-crowns',
  name: 'TEM Crowns',
  type: 'feature',
  default: true,
  description: 'Adds crowns and catches to the the Trap Effectiveness Meter.',
  load: init,
};
