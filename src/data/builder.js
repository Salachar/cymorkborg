import ShunnedNanomancer from "./ShunnedNanomancer";
import BurnedHacker from "./BurnedHacker";
import DischargedCorpKiller from "./DischargedCorpKiller";
import OrphanedGearhead from "./OrphanedGearhead";
import RenegadeCyberslasher from "./RenegadeCyberslasher";
import ForsakenGangGoon from "./ForsakenGangGoon";
// import StrungOutApothecary from "./StrungOutApothecary";
import RevolutionistChemist from "./RevolutionistChemist";

export const CLASS_MAP = {
  [ShunnedNanomancer.class]: ShunnedNanomancer,
  [BurnedHacker.class]: BurnedHacker,
  [DischargedCorpKiller.class]: DischargedCorpKiller,
  [OrphanedGearhead.class]: OrphanedGearhead,
  [RenegadeCyberslasher.class]: RenegadeCyberslasher,
  [ForsakenGangGoon.class]: ForsakenGangGoon,
  // [StrungOutApothecary.class]: StrungOutApothecary,
  [RevolutionistChemist.class]: RevolutionistChemist,
};

const NanoMancerInstance = new ShunnedNanomancer();
const BurnedHackerInstance  = new BurnedHacker();
const DischargedCorpKillerInstance  = new DischargedCorpKiller();
const OrphanedGearheadInstance  = new OrphanedGearhead();
const RenegadeCyberslasherInstance  = new RenegadeCyberslasher();
const ForsakenGangGoonInstance  = new ForsakenGangGoon();
// const StrungOutApothecaryInstance  = new StrungOutApothecary();
const RevolutionistChemistInstance  = new RevolutionistChemist();

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
  // {
  //   id: StrungOutApothecaryInstance.class_id,
  //   constructor: StrungOutApothecary,
  //   instance: StrungOutApothecaryInstance,
  // },
  {
    id: RevolutionistChemistInstance.class_id,
    constructor: RevolutionistChemist,
    instance: RevolutionistChemistInstance,
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
      localStorage.setItem('cyborg_last_selected', id);
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
      localStorage.removeItem('cyborg_last_selected');
    }

    try {
      const COLLAPSE_STORAGE_KEY = "cyborg_collapse_states";
      const stored = localStorage.getItem(COLLAPSE_STORAGE_KEY);
      if (stored) {
        const states = JSON.parse(stored);
        delete states[id];
        localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(states));
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

      localStorage.setItem('cyborg_saved_characters', JSON.stringify(charJSON));
    } catch (e) {
      console.log("Failed to save characters", e);
    }
  }

  load () {
    // Load last selected
    try {
      const lastSelected = localStorage.getItem('cyborg_last_selected');
      if (lastSelected) {
        this._last_selected_id = lastSelected;
      }
    } catch (e) {
      console.error("Failed to load last selected:", e);
    }

    try {
      const chars = localStorage.getItem('cyborg_saved_characters');
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
