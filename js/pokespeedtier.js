'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pokeDex = [{ dex: 1, name: 'Bulbasaur', base: 45 }, { dex: 2, name: 'Ivysaur', base: 60 }, { dex: 3, name: 'Venusaur', base: 80 }, { dex: 4, name: 'Squirtle', base: 65 }, { dex: 5, name: 'Wartortle', base: 80 }, { dex: 6, name: 'Blastoise', base: 100 }, { dex: 7, name: 'Charmander', base: 43 }, { dex: 8, name: 'Charmeleon', base: 58 }, { dex: 9, name: 'Charizard', base: 78 }, { dex: 10, name: 'Caterpee', base: 45 }, { dex: 11, name: 'Metapod', base: 30 }, { dex: 12, name: 'Butterfree', base: 70 }, { dex: 13, name: 'Weedle', base: 50 }, { dex: 14, name: 'Cacoona', base: 45 }, { dex: 15, name: 'Beedrill', base: 35 }, { dex: 16, name: 'Pidgey', base: 75 }, { dex: 17, name: 'Pidgeotto', base: 56 }, { dex: 18, name: 'Pidgeott', base: 71 }, { dex: 19, name: 'Rattata', base: 101 }, { dex: 20, name: 'Raticate', base: 72 }, { dex: 21, name: 'Spearow', base: 97 }, { dex: 22, name: 'Fearow', base: 70 }, { dex: 23, name: 'Ekans', base: 100 }, { dex: 24, name: 'Arbok', base: 55 }, { dex: 25, name: 'Pikachu', base: 80 }, { dex: 26, name: 'Raichu', base: 90 }, { dex: 27, name: 'Sandshrew', base: 110 }, { dex: 28, name: 'Sandslash', base: 40 }, { dex: 29, name: 'NidoranF', base: 65 }, { dex: 30, name: 'Nidorina', base: 41 }, { dex: 31, name: 'Nidoqueen', base: 56 }, { dex: 32, name: 'NidoranM', base: 76 }, { dex: 33, name: 'Nidorino', base: 50 }, { dex: 34, name: 'Nidoking', base: 65 }, { dex: 35, name: 'Clefairy', base: 85 }, { dex: 36, name: 'Clefable', base: 35 }];

"use strict";

var Pokepanel = (function () {
    function Pokepanel(no) {
        _classCallCheck(this, Pokepanel);

        // Set DOM elements based on panel number.
        this.selectBox = document.getElementById('pkmnSelect_' + no);
        this.iv = document.getElementById('iv_' + no);
        this.ev = document.getElementById('ev_' + no);
        this.level = document.getElementById('level_' + no);
        this.base = document.getElementById('base_' + no);
        this.speed = document.getElementById('speed_' + no);
        this.nature = document.getElementById('nature_' + no);
        this.modifier = document.getElementById('modifier_' + no);
        this.item = document.getElementById('item_' + no);
        this.ability = document.getElementById('ability_' + no);
        this.para = document.getElementById('para_' + no);
        this.tailw = document.getElementById('tailw_' + no);
        this.mon = new Pokemon(25, pokeDex);

        // Set parent-child relationships.
        this.mon.parent = this;
        this.selectBox.parent = this;
        this.iv.parent = this;
        this.ev.parent = this;
        this.level.parent = this;
        this.base.parent = this;
        this.speed.parent = this;
        this.nature.parent = this;
        this.modifier.parent = this;
        this.item.parent = this;
        this.ability.parent = this;
        this.para.parent = this;
        this.tailw.parent = this;

        this.setup();
    }

    _createClass(Pokepanel, [{
        key: 'setup',
        value: function setup() {
            for (var i = 0; i < pokeDex.length; i++) {
                var poke = pokeDex[i];
                this.selectBox.options.add(new Option(poke.name, poke.dex));
            }

            this.selectBox.value = this.mon.dex;
            this.mon.updateFields();

            this.selectBox.onchange = function () {
                this.parent.mon.changeDex(this.parent.selectBox.value);
            };

            this.para.onchange = function () {
                this.parent.mon.changePara(this.parent.para.checked);
            };

            this.tailw.onchange = function () {
                this.parent.mon.changeTailwind(this.parent.tailw.checked);
            };

            this.modifier.onchange = function () {
                this.parent.mon.changeMod(this.parent.modifier.value);
            };

            this.nature.onchange = function () {
                this.parent.mon.changeNature(this.parent.nature.value);
            };

            this.item.onchange = function () {
                this.parent.mon.changeItem(this.parent.item.value);
            };

            this.ability.onchange = function () {
                this.parent.mon.changeAbility(this.parent.ability.value);
            };

            this.iv.onchange = function () {
                this.parent.mon.changeIV(this.parent.iv.value);
            };

            this.ev.onchange = function () {
                this.parent.mon.changeEV(this.parent.ev.value);
            };

            this.level.onchange = function () {
                this.parent.mon.changeLevel(this.parent.level.value);
            };
        }
    }]);

    return Pokepanel;
})();

var Pokemon = (function () {
    function Pokemon(no, dexList) {
        _classCallCheck(this, Pokemon);

        this.dex = no;
        this.name = dexList[no - 1].name;
        this.base = dexList[no - 1].base;
        this.iv = 31;
        this.ev = 252;
        this.level = 50;
        this.ability = "N/A";
        this.nature = "N/A";
        this.modifier = "N/A";
        this.item = "N/A";
        this.para = false;
        this.tailwind = false;

        this.updateSpeed();
    }

    _createClass(Pokemon, [{
        key: 'updateFields',
        value: function updateFields() {
            this.updateSpeed();
            this.parent.iv.value = this.iv;
            this.parent.ev.value = this.ev;
            this.parent.level.value = this.level;
            this.parent.speed.value = this.speed;
            this.parent.base.value = this.base;
            this.parent.nature.value = this.nature;
            this.parent.modifier.value = this.modifier;
            this.parent.item.value = this.item;
            this.parent.ability.value = this.ability;
            this.parent.para.value = this.para;
            this.parent.tailw.value = this.tailw;
            this.parent.selectBox.value = this.dex;
        }
    }, {
        key: 'updateSpeed',
        value: function updateSpeed() {
            this.calcMods();
            this.speed = this.calcSpeed();
        }
    }, {
        key: 'printDebug',
        value: function printDebug(string) {
            console.log('dex:      ' + this.dex);
            console.log('name:     ' + this.name);
            console.log('base:     ' + this.base);
            console.log('speed:    ' + this.speed);
            console.log('iv:       ' + this.iv);
            console.log('ev:       ' + this.ev);
            console.log('level:    ' + this.level);
            console.log('ability:  ' + this.ability);
            console.log('nature:   ' + this.nature);
            console.log('modifier: ' + this.modifier);
            console.log('item:     ' + this.item);
            console.log('para:     ' + this.para);
            console.log('tailwind: ' + this.tailwind);
            if (string == 'full') {
                console.log('natureMod:  ' + this.natureMod);
                console.log('abilityMod: ' + this.natureMod);
                console.log('itemMod:    ' + this.natureMod);
                console.log('paraMod:    ' + this.natureMod);
                console.log('tailwMod:   ' + this.natureMod);
                console.log('modMod:     ' + this.natureMod);
            }
        }
    }, {
        key: 'calcMods',
        value: function calcMods() {
            // Nature
            if (this.nature == "+") this.natureMod = parseFloat(1.1);else if (this.nature == "-") this.natureMod = parseFloat(0.9);else if (this.nature == "N/A") this.natureMod = parseFloat(1);
            // Modifier
            if (this.modifier == "N/A") this.modMod = parseFloat(1);else if (this.modifier == "+1") this.modMod = parseFloat(1.5);else if (this.modifier == "+2") this.modMod = parseFloat(2);else if (this.modifier == "+3") this.modMod = parseFloat(2.5);else if (this.modifier == "+4") this.modMod = parseFloat(3);else if (this.modifier == "+5") this.modMod = parseFloat(3.5);else if (this.modifier == "+6") this.modMod = parseFloat(4);else if (this.modifier == "-1") this.modMod = parseFloat(0.66);else if (this.modifier == "-2") this.modMod = parseFloat(0.5);else if (this.modifier == "-3") this.modMod = parseFloat(0.4);else if (this.modifier == "-4") this.modMod = parseFloat(0.33);else if (this.modifier == "-5") this.modMod = parseFloat(0.285);else if (this.modifier == "-6") this.modMod = parseFloat(0.25);
            // Item
            if (this.item == "N/A") this.itemMod = parseFloat(1);else if (this.item == "Scarf") this.itemMod = parseFloat(1.5);else if (this.item == "Macho") this.itemMod = parseFloat(0.5);else if (this.item == "Power") this.itemMod = parseFloat(0.66);else if (this.item == "Iron") this.itemMod = parseFloat(0.66);
            // Ability
            if (this.ability == "N/A") this.abilityMod = parseFloat(1);else if (this.ability == "quickFeet") this.abilityMod = parseFloat(1.5);else this.abilityMod = parseFloat(2);
            // Paralysis
            if (this.para == true) this.paraMod = parseFloat(0.25);else this.paraMod = parseFloat(1);
            // Tailwind
            if (this.tailw == true) this.tailwindMod = parseFloat(2);else this.tailwindMod = parseFloat(1);
        }
    }, {
        key: 'calcSpeed',
        value: function calcSpeed() {
            return Math.floor((Math.round(this.iv + 2 * this.base + this.ev / 4) * (this.level / 100) + 5) * this.natureMod * this.modMod * this.itemMod * this.abilityMod * this.paraMod * this.tailwindMod);
        }
    }, {
        key: 'changeIV',
        value: function changeIV(value) {
            this.iv = value;
            this.updateFields();
            console.log('iv changed to ' + this.iv);
        }
    }, {
        key: 'changeEV',
        value: function changeEV(value) {
            this.ev = value;
            this.updateFields();
            console.log('ev changed to ' + this.ev);
        }
    }, {
        key: 'changeLevel',
        value: function changeLevel(value) {
            this.level = value;
            this.updateFields();
            console.log('level changed to ' + this.level);
        }
    }, {
        key: 'changeAbility',
        value: function changeAbility(value) {
            this.ability = value;
            this.updateFields();
            console.log('ability changed to ' + this.ability);
        }
    }, {
        key: 'changeNature',
        value: function changeNature(value) {
            this.nature = value;
            this.updateFields();
            console.log('nature changed to ' + this.nature);
        }
    }, {
        key: 'changeMod',
        value: function changeMod(value) {
            this.modifier = value;
            this.updateFields();
            console.log('modifier changed to ' + this.modifier);
        }
    }, {
        key: 'changeItem',
        value: function changeItem(value) {
            this.item = value;
            this.updateFields();
            console.log('item changed to ' + this.item);
        }
    }, {
        key: 'changePara',
        value: function changePara(boolean) {
            this.para = boolean;
            this.updateFields();
            console.log('paralysis changed to ' + this.para);
        }
    }, {
        key: 'changeTailwind',
        value: function changeTailwind(boolean) {
            this.tailwind = boolean;
            this.updateFields();
            console.log('tailwind changed to ' + this.tailwind);
        }
    }, {
        key: 'changeDex',
        value: function changeDex(value) {
            this.dex = value;
            this.name = pokeDex[this.dex - 1].name;
            this.base = pokeDex[this.dex - 1].base;
            this.updateFields();
            console.log('monster changed to ' + this.name + ' , #' + this.dex);
        }
    }]);

    return Pokemon;
})();

"use strict";

var counter = 0;

var PokePanel = (function (_HTMLElement) {
    _inherits(PokePanel, _HTMLElement);

    function PokePanel() {
        _classCallCheck(this, PokePanel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PokePanel).apply(this, arguments));
    }

    _createClass(PokePanel, [{
        key: 'createdCallback',
        value: function createdCallback() {
            this.no = counter + 1;
            counter = this.no;
            this.innerHTML = '\n            <div id="pkmn_' + this.no + '" class="pokepanel pkmn column large-6 medium-6 small-12">\n                <form name="pkmn_' + this.no + '" action="#">\n                  <label>Pokémon #' + this.no + ' </label>\n                  <select id="pkmnSelect_' + this.no + '"></select>\n                  <div id="IV">\n                    <label>IV</label>\n                    <input id="iv_' + this.no + '" type="text">\n                  </div>\n                  <div id="EV">\n                    <label>EV</label>\n                    <input id="ev_' + this.no + '" type="text">\n                  </div>\n                  <div id="Level">\n                    <label>Level</label>\n                    <input id="level_' + this.no + '" type="text">\n                  </div>\n                  <label>Nature</label>\n                  <select id="nature_' + this.no + '" class="nature">\n                    <option value="+">+</option>\n                    <option value="N/A" selected="">N/A</option>\n                    <option value="-">-</option>\n                  </select>\n                  <label>Ability</label>\n                  <select id="ability_' + this.no + '" class="ability">\n                    <option value="N/A" selected="">N/A</option>\n                    <option value="unburden">Unburden</option>\n                    <option value="chlorophyl">Chlorophyl</option>\n                    <option value="swiftSwim">Swift swim</option>\n                    <option value="quickFeet">Quick Feet</option>\n                  </select>\n                  <div id="para">\n                    <label>Paralysis</label>\n                    <input id="para_' + this.no + '" type="checkbox" class="para">\n                  </div>\n                  <div id="tailwind">\n                    <label>Tailwind</label>\n                    <input id="tailw_' + this.no + '" type="checkbox" class="tailw">\n                  </div>\n                  <div id="item"></div>\n                  <label>Item</label>\n                  <select id="item_' + this.no + '" class="item">\n                    <option value="N/A">N/A</option>\n                    <option value="Scarf">Choice Scarf</option>\n                    <option value="Power">Power Item</option>\n                    <option value="Macho">Macho Brace</option>\n                    <option value="Iron">Iron Ball</option>\n                  </select>\n                  <div id="modifier">\n                    <label>Modifier</label>\n                    <select id="modifier_' + this.no + '" class="modifier">\n                      <option value="+6">+6</option>\n                      <option value="+5">+5</option>\n                      <option value="+4">+4</option>\n                      <option value="+3">+3</option>\n                      <option value="+2">+2</option>\n                      <option value="+1">+1</option>\n                      <option value="N/A" selected="">N/A</option>\n                      <option value="-1">-1</option>\n                      <option value="-2">-2</option>\n                      <option value="-3">-3</option>\n                      <option value="-4">-4</option>\n                      <option value="-5">-5</option>\n                      <option value="-6">-6</option>\n                    </select>\n                  </div>\n                  <div id="base">\n                    <label>Base:</label>\n                    <input id="base_' + this.no + '" readonly="readonly" class="base">\n                  </div>®\n                  <div id="speed">\n                    <label>Speed:</label>\n                    <input id="speed_' + this.no + '" readonly="readonly" class="speed">\n                  </div>\n                </form>\n              </div>\n    ';
        }
    }]);

    return PokePanel;
})(HTMLElement);

document.registerElement('poke-panel', PokePanel);
"use strict";

//for (let i = 1 ; i < 3 ; i++) {
//    let pokemon`${i}` = new Pokepanel(i);
//    pokemon`${i}`.parent = this;
//}

var pokemon1 = new Pokepanel(1);
var pokemon2 = new Pokepanel(2);
pokemon1.parent = undefined;
pokemon2.parent = undefined;

var output = document.getElementById('outputBox');

function updateOutput() {
    if (pokemon1.mon.speed > pokemon2.mon.speed) {
        output.value = pokemon1.mon.name + ' outspeeds ' + pokemon2.mon.name;
    } else if (pokemon1.mon.speed > pokemon2.mon.speed) output.value = pokemon2.mon.name + ' outspeeds ' + pokemon1.mon.name;else output.value = 'Speed tie!';
}

updateOutput();
//# sourceMappingURL=pokespeedtier.js.map
