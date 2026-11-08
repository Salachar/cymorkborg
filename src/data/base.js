// CY_BORG Base Character Class
// Abilities: Agility, Knowledge, Presence, Strength, Toughness
// Ability scores range from -3 to +3
import { cyberEffects } from '@utils/cybertech';
import { searchAllItems } from './tables';

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

  _advancements = 0;
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
    loaded_apps: [],
    fumble_risk: 0,
  };
  _debt = {
    amount: 0,
    creditor: null,
    urgency: null,
  };

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

    if (typeof data.advancements === 'number') {
      this._advancements = data.advancements;
    }

    if (typeof data.current_health === "number") {
      this._current_health = data.current_health;
    } else {
      this._current_health = 1;
    }

    if (typeof data.max_health === "number") {
      this._max_health = data.max_health;
    } else {
      this._max_health = this._current_health || 1;
    }

    if (typeof data.stat_points === "number") {
      this._stat_points = data.stat_points;
    }

    if (typeof data.credits === "number") {
      this._credits = data.credits;
    }

    if (typeof data.glitches === "number") {
      this._glitches = data.glitches;
    } else {
      this._glitches = 0;
    }

    if (typeof data.max_glitches === "number") {
      this._max_glitches = data.max_glitches;
    } else {
      this._max_glitches = this._glitches || 0;
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
        loaded_apps: data.cyberdeck.loaded_apps || [],
        fumble_risk: data.cyberdeck.fumble_risk || 0,
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

    this.#migrateStartingIds();
    this.#cleanGear();
  }

  // One-time id migration for class tables: entries were renamed with a
  // "starting_" prefix (so they don't collide with Market items). An old
  // saved id that's missing from its table, but whose "starting_" version
  // exists, is renamed. Anything else is left as it is.
  #migrateStartingIds() {
    (this.constructor.components || []).forEach((component) => {
      if (component.type !== "rollable" || !Array.isArray(component.entries)) return;
      const selections = this._selected_tables[component.name];
      if (!selections) return;

      const ids = new Set(component.entries.map((e) => e.id || e.label || e.name));
      let changed = false;
      const next = {};

      Object.entries(selections).forEach(([id, selected]) => {
        if (!ids.has(id) && ids.has(`starting_${id}`)) {
          next[`starting_${id}`] = selected;
          changed = true;
        } else {
          next[id] = selected;
        }
      });

      if (changed) this._selected_tables[component.name] = next;
    });
  }

  // Table items in older saves carried copies of their table data (incl.
  // JSX descriptions): trim them to quantity. Fill in missing quantities.
  #cleanGear() {
    Object.values(this._gear).forEach((section) => {
      Object.entries(section).forEach(([itemId, stack]) => {
        const quantity = typeof stack.quantity === "number" ? stack.quantity : 1;
        section[itemId] = searchAllItems(itemId) ? { quantity } : { ...stack, quantity };
      });
    });
  }

  #checkStatPoints(stat, new_value) {
    // −3 to +6: creation reaches +3, advancement can go higher.
    if (new_value < -3 || new_value > 6) return false;
    return true;
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

  get advancements() {
    return this._advancements;
  }

  set advancements(n) {
    this._advancements = Math.max(0, Number(n) || 0);
  }

  // get max_health() {
  //   return this._max_health;
  // }

  // set max_health(new_max) {
  //   this._max_health = Math.max(1, new_max);
  //   if (this._current_health > this._max_health) {
  //     this._current_health = this._max_health;
  //   }
  // }

  // The character's own max, without cybertech. Editing and saving use this.
  get base_max_health() {
    return this._max_health;
  }

  // Effective max: base + installed cybertech (Skeleplating +10).
  get max_health() {
    return this._max_health + cyberEffects(this).maxHpBonus;
  }

  // Sets the BASE max.
  set max_health(new_max) {
    this._max_health = Math.max(1, new_max);
    if (this._current_health > this.max_health) {
      this._current_health = this.max_health;
    }
  }

  // Capped at the effective max; may go below 0.
  set current_health(new_health) {
    this._current_health = Math.min(new_health, this.max_health);
  }

  get current_health() {
    return this._current_health;
  }

  // Capped at max; may go below 0 (Battered / Dead*).
  // set current_health(new_health) {
  //   this._current_health = Math.min(new_health, this._max_health);
  // }

  // Credits
  get credits() {
    return this._credits;
  }

  set credits(new_credits) {
    this._credits = new_credits;
  }

  get max_glitches() {
    return this._max_glitches;
  }

  set max_glitches(new_max) {
    this._max_glitches = Math.max(0, new_max);
    if (this._glitches > this._max_glitches) {
      this._glitches = this._max_glitches;
    }
  }

  // Glitches
  get glitches() {
    return this._glitches;
  }

  set glitches(new_glitches) {
    this._glitches = Math.max(0, Math.min(new_glitches, this._max_glitches));
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
            // selected: true
          };
        }
      });
    });

    // Clear cart
    this._shop_cart = {};
    return true;
  }

  // addItemToGear(item) {
  //   const section = item.section || 'extracted';
  //   const itemId = item.id || item.label;
  //   if (!itemId) return;

  //   if (!this._gear[section]) this._gear[section] = {};

  //   if (this._gear[section][itemId]) {
  //     this._gear[section][itemId].quantity += item.quantity || 1;
  //   } else {
  //     // Store fallback data — used if item isn't found in any section table
  //     this._gear[section][itemId] = {
  //       quantity: item.quantity,
  //       label: item.label,
  //       description: item.description || null,
  //       die: item.die || null,
  //       cost: item.cost || null,
  //       value: item.value || null,
  //     };
  //   }
  // }

  addItemToGear(item) {
    const section = item.section || "extracted";
    const itemId = item.id || item.label;
    if (!itemId) return;

    if (!this._gear[section]) this._gear[section] = {};
    const quantity = item.quantity || 1;
    const stack = this._gear[section][itemId];

    if (stack) {
      stack.quantity = (stack.quantity || 0) + quantity;
      return;
    }

    // Table items resolve by id, so quantity is all they need.
    if (searchAllItems(itemId)) {
      this._gear[section][itemId] = { quantity };
      return;
    }

    // Custom loot isn't in any table: keep what its row shows.
    this._gear[section][itemId] = {
      quantity,
      label: item.label,
      description: item.description || null,
      die: item.die || null,
      cost: item.cost || null,
      value: item.value || null,
    };
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

  // Set a flavor category. Never toggles off, so a roll that lands on the
  // current pick keeps it.
  setStyle(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;
    this._style[section_name] = { [entry_id]: true };
  }

  clearStyle(section_name) {
    delete this._style[section_name];
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

  // Set a starting-items table's pick. Never toggles off, so a roll that
  // lands on the current pick keeps it.
  setStartingItem(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;
    this._starting_items[section_name] = { [entry_id]: true };
  }

  clearStartingItem(section_name) {
    delete this._starting_items[section_name];
  }

  // Debt
  get debt() {
    return this._debt;
  }

  setDebtAmount(amount) {
    this._debt.amount = Math.max(0, Math.round(Number(amount) || 0));
  }

  // Moves credits onto the debt, capped at both. Returns what was paid.
  payDebtFromCredits(amount) {
    const pay = Math.max(0, Math.min(Number(amount) || 0, this._credits, this._debt.amount));
    this._credits -= pay;
    this._debt.amount -= pay;
    return pay;
  }

  // Set, never toggle. null clears.
  setDebtCreditor(entry) {
    this._debt.creditor = entry ? (entry.id || entry.label) : null;
  }

  setDebtUrgency(entry) {
    this._debt.urgency = entry ? (entry.id || entry.label) : null;
  }

  clearDebt() {
    this._debt.amount = 0;
  }

  // Set a class table choice. Never toggles off, so a roll that lands on
  // the current pick keeps it.
  setTableChoice(table_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;
    this._selected_tables[table_name] = { [entry_id]: true };
  }

  clearTableChoice(table_name) {
    delete this._selected_tables[table_name];
  }

  // Serialize character to JSON
  toJSON() {
    return {
      id: this.id,
      class: this.class,
      name: this.name,
      advancements: this._advancements || 0,
      current_health: this.current_health,
      max_health: this._max_health,
      credits: this.credits,
      glitches: this.glitches,
      max_glitches: this.max_glitches,
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
        loaded_apps: [],
        fumble_risk: 0,
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
