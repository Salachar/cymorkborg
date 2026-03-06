// CY_BORG Base Character Class
// Abilities: Agility, Knowledge, Presence, Strength, Toughness
// Ability scores range from -3 to +3

class BaseClass {
  _name = "";
  _max_health = 0;
  _current_health = 0;
  _stat_points = 0;
  _credits = 0;
  _max_glitches = 0;
  _glitches = 0;

  _stats = {
    AGI: 0,
    KNO: 0,
    PRE: 0,
    STR: 0,
    TOU: 0,
  };

  _selected_tables = {};
  _gear = {}; // Actual inventory: { section_name: { item_id: { quantity: 1, selected: true } } }
  _shop_cart = {}; // Shopping cart: { section_name: { item_id: { quantity: 1 } } }
  _style = {};
  _starting_items = {};
  _custom_items = [];

  // New properties for live play tracking
  _nano_powers = {}; // { power_id: { infestation: "infestation_id" } }
  _infestations = {}; // { infestation_id: true } - standalone infestations
  _apps = {}; // { app_id: true } - owned apps
  _cyberware = {}; // { cyberware_id: true } - installed cyberware
  _cyberdeck = {
    unlocked: false,
    jacked_in: false,
    slots: 4,
    loaded_apps: [] // Array of app_ids currently loaded
  };
  _debt = {
    amount: 0,
    creditor: null,
    urgency: null,
  };

  _locked = false;

  constructor(data = {}) {
    this.id = data.id || crypto.randomUUID();
    this._name = data.name || "";

    this._stats = data.stats || {
      AGI: 0,
      KNO: 0,
      PRE: 0,
      STR: 0,
      TOU: 0,
    };

    if (typeof data.current_health === "number") {
      this._current_health = data.current_health;
    } else {
      this._current_health = 1;
    }

    if (typeof data.stat_points === "number") {
      this._stat_points = data.stat_points;
    }

    if (typeof data.credits === "number") {
      this._credits = data.credits;
    }

    if (typeof data.glitches === "number") {
      this._glitches = data.glitches;
    }

    if (data.selected_tables && Object.keys(data.selected_tables).length) {
      this._selected_tables = data.selected_tables;
    }

    if (data.gear && Object.keys(data.gear).length) {
      this._gear = data.gear;
    }

    if (data.shop_cart && Object.keys(data.shop_cart).length) {
      this._shop_cart = data.shop_cart;
    }

    if (data.style && Object.keys(data.style).length) {
      this._style = data.style;
    }

    if (data.starting_items && Object.keys(data.starting_items).length) {
      this._starting_items = data.starting_items;
    }

    // New properties
    if (data.nano_powers && Object.keys(data.nano_powers).length) {
      this._nano_powers = data.nano_powers;
    }

    if (data.infestations && Object.keys(data.infestations).length) {
      this._infestations = data.infestations;
    }

    if (data.apps && Object.keys(data.apps).length) {
      this._apps = data.apps;
    }

    if (data.cyberware && Object.keys(data.cyberware).length) {
      this._cyberware = data.cyberware;
    }

    if (data.cyberdeck) {
      this._cyberdeck = {
        unlocked: data.cyberdeck.unlocked || false,
        jacked_in: data.cyberdeck.jacked_in || false,
        slots: data.cyberdeck.slots || 4,
        loaded_apps: data.cyberdeck.loaded_apps || []
      };
    }

    if (data.custom_items && Array.isArray(data.custom_items)) {
      this._custom_items = data.custom_items;
    } else {
      this._custom_items = [];
    }

    if (data.debt) {
      this._debt = {
        amount: data.debt.amount || 0,
        creditor: data.debt.creditor || null,
        urgency: data.debt.urgency || null
      };
    }

    if (data.locked) {
      this._locked = true;
    }
  }

  #checkStatPoints(stat, new_value) {
    if (new_value < -3 || new_value > 3) return false;
    return true;
  }

  // Lock/unlock character sheet
  get locked() {
    return this._locked;
  }

  toggleLock() {
    this._locked = !this._locked;
    if (this._locked) {
      this._max_health = this._current_health;
      this._max_glitches = this._glitches;
    }
  }

  // Class information
  get class_id() {
    return this.constructor.id;
  }

  get color() {
    return this.constructor.color;
  }

  get class() {
    return this.constructor.class;
  }

  get class_uniques() {
    return this.constructor.class_uniques;
  }

  get description() {
    return this.constructor.description;
  }

  // Character name
  get name() {
    return this._name;
  }

  set name(new_name) {
    this._name = new_name;
  }

  // Health
  get max_health() {
    if (!this._locked) return this._current_health;
    return this._max_health;
  }

  set max_health(new_max) {
    this._max_health = new_max;
  }

  get current_health() {
    return this._current_health;
  }

  set current_health(new_health) {
    if (!this._locked && new_health < 0) new_health = 0;
    if (this._locked && new_health > this._max_health) new_health = this._max_health;
    this._current_health = new_health;
  }

  // Credits
  get credits() {
    return this._credits;
  }

  set credits(new_credits) {
    this._credits = new_credits;
  }

  get max_glitches() {
    if (!this._locked) return this._glitches;
    return this._max_glitches;
  }

  // Glitches
  get glitches() {
    return this._glitches;
  }

  set glitches(new_glitches) {
    if (!this._locked && new_glitches < 0) new_glitches = 0;
    if (this._locked && new_glitches > this._max_glitches) new_glitches = this._max_glitches;
    this._glitches = new_glitches;
  }

  // Stats
  get stats() {
    return this._stats;
  }

  get agi() {
    return this._stats.AGI;
  }

  set agi(new_value) {
    const check = this.#checkStatPoints("AGI", new_value);
    if (!check) return;
    this._stats.AGI = new_value;
  }

  get kno() {
    return this._stats.KNO;
  }

  set kno(new_value) {
    const check = this.#checkStatPoints("KNO", new_value);
    if (!check) return;
    this._stats.KNO = new_value;
  }

  get pre() {
    return this._stats.PRE;
  }

  set pre(new_value) {
    const check = this.#checkStatPoints("PRE", new_value);
    if (!check) return;
    this._stats.PRE = new_value;
  }

  get str() {
    return this._stats.STR;
  }

  set str(new_value) {
    const check = this.#checkStatPoints("STR", new_value);
    if (!check) return;
    this._stats.STR = new_value;
  }

  get tou() {
    return this._stats.TOU;
  }

  set tou(new_value) {
    const check = this.#checkStatPoints("TOU", new_value);
    if (!check) return;
    this._stats.TOU = new_value;
  }

  get stat_points() {
    return this._stat_points;
  }

  // Generic tables system
  get selected_tables() {
    return this._selected_tables;
  }

  getTableSelections(table_name) {
    return this._selected_tables[table_name] || {};
  }

  getTableSelectionsAmount(table_name) {
    const selections = this.getTableSelections(table_name);
    return Object.keys(selections).length;
  }

  setTableSelection(table_name, entry, select_mode = "single") {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    if (!this._selected_tables[table_name]) {
      this._selected_tables[table_name] = {};
    }

    const current = this._selected_tables[table_name];

    if (current[entry_id]) {
      delete current[entry_id];
      return;
    }

    if (select_mode === "single") {
      this._selected_tables[table_name] = { [entry_id]: true };
    } else if (select_mode === "multiple") {
      current[entry_id] = true;
    }
  }

  // Gear system (actual inventory)
  get gear() {
    return this._gear;
  }

  getGearSelections(section_name) {
    const section = this._gear[section_name] || {};
    const selections = {};
    Object.keys(section).forEach((id) => {
      if (section[id].selected) {
        selections[id] = true;
      }
    });
    return selections;
  }

  setGearSelection(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    if (!this._gear[section_name]) {
      this._gear[section_name] = {};
    }

    const current = this._gear[section_name][entry_id];

    if (current && current.selected) {
      delete this._gear[section_name][entry_id];
    } else {
      this._gear[section_name][entry_id] = {
        quantity: 1,
        selected: true,
      };
    }
  }

  // Shopping cart system
  get shop_cart() {
    return this._shop_cart;
  }

  addToCart(section_name, entry, quantity = 1) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    if (!this._shop_cart[section_name]) {
      this._shop_cart[section_name] = {};
    }

    this._shop_cart[section_name][entry_id] = { quantity };
  }

  removeFromCart(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id || !this._shop_cart[section_name]) return;

    delete this._shop_cart[section_name][entry_id];

    // Clean up empty sections
    if (Object.keys(this._shop_cart[section_name]).length === 0) {
      delete this._shop_cart[section_name];
    }
  }

  updateCartQuantity(section_name, entry, quantity) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id || !this._shop_cart[section_name]) return;

    if (quantity <= 0) {
      this.removeFromCart(section_name, entry);
    } else {
      this._shop_cart[section_name][entry_id].quantity = quantity;
    }
  }

  getCartItems() {
    // Returns flat array of cart items with section info
    const items = [];
    Object.keys(this._shop_cart).forEach(section => {
      Object.keys(this._shop_cart[section]).forEach(itemId => {
        items.push({
          section,
          itemId,
          quantity: this._shop_cart[section][itemId].quantity
        });
      });
    });
    return items;
  }

  getCartTotal(allEntries) {
    // allEntries is an object: { section_name: [entries] }
    let total = 0;

    Object.keys(this._shop_cart).forEach(section => {
      const sectionEntries = allEntries[section] || [];

      Object.keys(this._shop_cart[section]).forEach(itemId => {
        const entry = sectionEntries.find(e => (e.id || e.label) === itemId);
        if (!entry) return;

        const quantity = this._shop_cart[section][itemId].quantity;
        const costStr = entry.cost || "0¤";
        const match = costStr.match(/^(\d+(?:\.\d+)?[kM]?)¤/);

        if (match) {
          let value = match[1];
          if (value.includes('k')) {
            value = parseFloat(value) * 1000;
          } else if (value.includes('M')) {
            value = parseFloat(value) * 1000000;
          } else {
            value = parseFloat(value);
          }
          total += value * quantity;
        }
      });
    });

    return total;
  }

  checkout(allEntries) {
    const total = this.getCartTotal(allEntries);

    if (this._credits < total) {
      return false; // Not enough credits
    }

    // Deduct credits
    this._credits -= total;

    // Move cart items to gear
    Object.keys(this._shop_cart).forEach(section => {
      if (!this._gear[section]) {
        this._gear[section] = {};
      }

      Object.keys(this._shop_cart[section]).forEach(itemId => {
        const cartItem = this._shop_cart[section][itemId];

        if (this._gear[section][itemId]) {
          // Add to existing quantity
          this._gear[section][itemId].quantity += cartItem.quantity;
        } else {
          // Add new item
          this._gear[section][itemId] = {
            quantity: cartItem.quantity,
            selected: true
          };
        }
      });
    });

    // Clear cart
    this._shop_cart = {};
    return true;
  }

  addFreeToInventory() {
    // Move cart items to gear without deducting credits
    Object.keys(this._shop_cart).forEach(section => {
      if (!this._gear[section]) {
        this._gear[section] = {};
      }

      Object.keys(this._shop_cart[section]).forEach(itemId => {
        const cartItem = this._shop_cart[section][itemId];

        if (this._gear[section][itemId]) {
          this._gear[section][itemId].quantity += cartItem.quantity;
        } else {
          this._gear[section][itemId] = {
            quantity: cartItem.quantity,
            selected: true
          };
        }
      });
    });

    // Clear cart
    this._shop_cart = {};
  }

  clearCart() {
    this._shop_cart = {};
  }

  // Style/flavor system
  get style() {
    return this._style;
  }

  getStyleSelections(section_name) {
    return this._style[section_name] || {};
  }

  setStyleSelection(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    if (!this._style[section_name]) {
      this._style[section_name] = {};
    }

    const current = this._style[section_name];

    if (current[entry_id]) {
      delete this._style[section_name][entry_id];
    } else {
      this._style[section_name] = { [entry_id]: true };
    }
  }

  // Starting items system
  get starting_items() {
    return this._starting_items;
  }

  getStartingItemsSelections(section_name) {
    return this._starting_items[section_name] || {};
  }

  setStartingItemsSelection(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    if (!this._starting_items[section_name]) {
      this._starting_items[section_name] = {};
    }

    const current = this._starting_items[section_name];

    if (current[entry_id]) {
      delete this._starting_items[section_name][entry_id];
    } else {
      this._starting_items[section_name] = { [entry_id]: true };
    }
  }

  // Serialize character to JSON
  toJSON() {
    return {
      id: this.id,
      locked: this.locked,
      class: this.class,
      name: this.name,
      current_health: this.current_health,
      credits: this.credits,
      glitches: this.glitches,
      selected_tables: this.selected_tables,
      gear: this.gear,
      shop_cart: this.shop_cart,
      style: this.style,
      starting_items: this.starting_items,
      stats: this.stats,
      stat_points: this.stat_points,
      // New properties
      nano_powers: this._nano_powers || {},
      infestations: this._infestations || {},
      apps: this._apps || {},
      custom_items: this._custom_items || [],
      cyberware: this._cyberware || {},
      cyberdeck: this._cyberdeck || {
        unlocked: false,
        jacked_in: false,
        slots: 4,
        loaded_apps: []
      },
      debt: this._debt || {
        amount: 0,
        creditor: null,
        urgency: null,
      },
    };
  }
}

export default BaseClass;
