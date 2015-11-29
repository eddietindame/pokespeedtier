"use strict";

let counter = 0;

class PokePanel extends HTMLElement {
    createdCallback() {
        this.no = counter+1;
        counter = this.no;
        this.innerHTML = `
            <div id="pkmn_${this.no}" class="pokepanel pkmn column large-6 medium-6 small-12">
                <form name="pkmn_${this.no}" action="#">
                  <label>Pokémon #${this.no} </label>
                  <select id="pkmnSelect_${this.no}"></select>
                  <div id="IV">
                    <label>IV</label>
                    <input id="iv_${this.no}" type="text">
                  </div>
                  <div id="EV">
                    <label>EV</label>
                    <input id="ev_${this.no}" type="text">
                  </div>
                  <div id="Level">
                    <label>Level</label>
                    <input id="level_${this.no}" type="text">
                  </div>
                  <label>Nature</label>
                  <select id="nature_${this.no}" class="nature">
                    <option value="+">+</option>
                    <option value="N/A" selected="">N/A</option>
                    <option value="-">-</option>
                  </select>
                  <label>Ability</label>
                  <select id="ability_${this.no}" class="ability">
                    <option value="N/A" selected="">N/A</option>
                    <option value="unburden">Unburden</option>
                    <option value="chlorophyl">Chlorophyl</option>
                    <option value="swiftSwim">Swift swim</option>
                    <option value="quickFeet">Quick Feet</option>
                  </select>
                  <div id="para">
                    <label>Paralysis</label>
                    <input id="para_${this.no}" type="checkbox" class="para">
                  </div>
                  <div id="tailwind">
                    <label>Tailwind</label>
                    <input id="tailw_${this.no}" type="checkbox" class="tailw">
                  </div>
                  <div id="item"></div>
                  <label>Item</label>
                  <select id="item_${this.no}" class="item">
                    <option value="N/A">N/A</option>
                    <option value="Scarf">Choice Scarf</option>
                    <option value="Power">Power Item</option>
                    <option value="Macho">Macho Brace</option>
                    <option value="Iron">Iron Ball</option>
                  </select>
                  <div id="modifier">
                    <label>Modifier</label>
                    <select id="modifier_${this.no}" class="modifier">
                      <option value="+6">+6</option>
                      <option value="+5">+5</option>
                      <option value="+4">+4</option>
                      <option value="+3">+3</option>
                      <option value="+2">+2</option>
                      <option value="+1">+1</option>
                      <option value="N/A" selected="">N/A</option>
                      <option value="-1">-1</option>
                      <option value="-2">-2</option>
                      <option value="-3">-3</option>
                      <option value="-4">-4</option>
                      <option value="-5">-5</option>
                      <option value="-6">-6</option>
                    </select>
                  </div>
                  <div id="base">
                    <label>Base:</label>
                    <input id="base_${this.no}" readonly="readonly" class="base">
                  </div>®
                  <div id="speed">
                    <label>Speed:</label>
                    <input id="speed_${this.no}" readonly="readonly" class="speed">
                  </div>
                </form>
              </div>
    `;}
}

document.registerElement('poke-panel', PokePanel);