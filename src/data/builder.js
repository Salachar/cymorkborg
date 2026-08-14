import {
  CYBORG_LAST_SELECTED_CHARACTER_KEY,
  CYBORG_SAVED_CHARACTERS_KEY,
  CYBORG_COLLAPSED_SECTIONS_KEY,
} from '@utils/localStorage';

import ShunnedNanomancer from "./ShunnedNanomancer";
import BurnedHacker from "./BurnedHacker";
import DischargedCorpKiller from "./DischargedCorpKiller";
import OrphanedGearhead from "./OrphanedGearhead";
import RenegadeCyberslasher from "./RenegadeCyberslasher";
import ForsakenGangGoon from "./ForsakenGangGoon";
import RevolutionistChemist from "./RevolutionistChemist";
import StrungOutApothecary from "./StrungOutApothecary";

export const CLASS_MAP = {
  [ShunnedNanomancer.class]: ShunnedNanomancer,
  [BurnedHacker.class]: BurnedHacker,
  [DischargedCorpKiller.class]: DischargedCorpKiller,
  [OrphanedGearhead.class]: OrphanedGearhead,
  [RenegadeCyberslasher.class]: RenegadeCyberslasher,
  [ForsakenGangGoon.class]: ForsakenGangGoon,
  [RevolutionistChemist.class]: RevolutionistChemist,
  [StrungOutApothecary.class]: StrungOutApothecary,
};

const NanoMancerInstance = new ShunnedNanomancer();
const BurnedHackerInstance  = new BurnedHacker();
const DischargedCorpKillerInstance  = new DischargedCorpKiller();
const OrphanedGearheadInstance  = new OrphanedGearhead();
const RenegadeCyberslasherInstance  = new RenegadeCyberslasher();
const ForsakenGangGoonInstance  = new ForsakenGangGoon();
const RevolutionistChemistInstance  = new RevolutionistChemist();
const StrungOutApothecaryInstance  = new StrungOutApothecary();

export const CLASSES = [
  {
    id: NanoMancerInstance.class_id,
    constructor: ShunnedNanomancer,
    instance: NanoMancerInstance,
  },
  {
    id: BurnedHackerInstance.class_id,
    constructor: BurnedHacker,
    instance: BurnedHackerInstance,
  },
  {
    id: DischargedCorpKillerInstance.class_id,
    constructor: DischargedCorpKiller,
    instance: DischargedCorpKillerInstance,
  },
  {
    id: OrphanedGearheadInstance.class_id,
    constructor: OrphanedGearhead,
    instance: OrphanedGearheadInstance,
  },
  {
    id: RenegadeCyberslasherInstance.class_id,
    constructor: RenegadeCyberslasher,
    instance: RenegadeCyberslasherInstance,
  },
  {
    id: ForsakenGangGoonInstance.class_id,
    constructor: ForsakenGangGoon,
    instance: ForsakenGangGoonInstance,
  },
  {
    id: RevolutionistChemistInstance.class_id,
    constructor: RevolutionistChemist,
    instance: RevolutionistChemistInstance,
  },
  {
    id: StrungOutApothecaryInstance.class_id,
    constructor: StrungOutApothecary,
    instance: StrungOutApothecaryInstance,
  },
];

class BuilderManager {
  _characters = {};
  _last_selected_id = null;

  constructor (opts = {}) {
    this.load();
  }

  get characters () {
    return this._characters;
  }

  get lastSelectedId() {
    return this._last_selected_id;
  }

  setLastSelected(id) {
    this._last_selected_id = id;
    try {
      localStorage.setItem(CYBORG_LAST_SELECTED_CHARACTER_KEY, id);
    } catch (e) {
      console.error("Failed to save last selected:", e);
    }
  }

  addCharacter (new_character) {
    if (!new_character) {
      console.log('No character passed to builder');
      return;
    }
    if (!new_character.id) {
      console.log('Character with no id, stop that');
      return;
    }
    this._characters[new_character.id] = new_character;
    this.save();
  }

  deleteCharacter (id) {
    delete this._characters[id];

    if (this._last_selected_id === id) {
      this._last_selected_id = null;
      localStorage.removeItem(CYBORG_LAST_SELECTED_CHARACTER_KEY);
    }

    try {
      const stored = localStorage.getItem(CYBORG_COLLAPSED_SECTIONS_KEY);
      if (stored) {
        const states = JSON.parse(stored);
        delete states[id];
        localStorage.setItem(CYBORG_COLLAPSED_SECTIONS_KEY, JSON.stringify(states));
      }
    } catch (e) {
      console.error("Error cleaning up collapse states:", e);
    }

    this.save();
  }

  save () {
    try {
      const chars = this.characters;
      const charJSON = {};
      Object.keys(chars).forEach((c_id) => {
        const c = chars[c_id];
        charJSON[c.id] = c.toJSON();
      })

      localStorage.setItem(CYBORG_SAVED_CHARACTERS_KEY, JSON.stringify(charJSON));
    } catch (e) {
      console.log("Failed to save characters", e);
    }
  }

  load () {
    // Load last selected
    try {
      const lastSelected = localStorage.getItem(CYBORG_LAST_SELECTED_CHARACTER_KEY);
      if (lastSelected) {
        this._last_selected_id = lastSelected;
      }
    } catch (e) {
      console.error("Failed to load last selected:", e);
    }

    try {
      const chars = localStorage.getItem(CYBORG_SAVED_CHARACTERS_KEY);
      if (!chars) return;
      const parsed = JSON.parse(chars);
      Object.keys(parsed).forEach((c_id) => {
        const c_json = parsed[c_id];
        const ClassConstructor = CLASS_MAP[c_json.class];
        if (!ClassConstructor) {
          console.log(`Unknown class: ${c_json.class}`);
          return;
        }
        const new_character = new ClassConstructor(c_json);
        this.addCharacter(new_character);
      });
    } catch (e) {
      console.log("Failed to load characters", e);
    }
  }
}

export default new BuilderManager();
