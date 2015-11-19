"use strict";

class Pokepanel {
    constructor(no) {
        // Set DOM elements based on panel number.
        this.selectBox  = document.getElementById(`pkmnSelect_${no}`);
        this.iv         = document.getElementById(`iv_${no}`);
        this.ev         = document.getElementById(`ev_${no}`);
        this.level      = document.getElementById(`level_${no}`);
        this.base       = document.getElementById(`base_${no}`);
        this.speed      = document.getElementById(`speed_${no}`);
        this.nature     = document.getElementById(`nature_${no}`);
        this.modifier   = document.getElementById(`modifier_${no}`);
        this.item       = document.getElementById(`item_${no}`);
        this.ability    = document.getElementById(`ability_${no}`);
        this.para       = document.getElementById(`para_${no}`);
        this.tailw      = document.getElementById(`tailw_${no}`);
        this.mon        = new Pokemon(25,pokeDex);
        
        // Set parent-child relationships.
        this.mon.parent        = this;
        this.selectBox.parent  = this;
        this.iv.parent         = this;
        this.ev.parent         = this;
        this.level.parent      = this;
        this.base.parent       = this;
        this.speed.parent      = this;
        this.nature.parent     = this;
        this.modifier.parent   = this;
        this.item.parent       = this;
        this.ability.parent    = this;
        this.para.parent       = this;
        this.tailw.parent      = this;
        
        this.setup();
    }
    
    setup() {
        for(let i = 0; i < pokeDex.length; i++) {
            let poke = pokeDex[i];
            this.selectBox.options.add( new Option(poke.name, poke.dex) );
        }

        this.selectBox.value = this.mon.dex;
        this.mon.updateFields();

        this.selectBox.onchange = function() {
            this.parent.mon.changeDex(this.parent.selectBox.value);
        }

        this.para.onchange = function() {
            this.parent.mon.changePara(this.parent.para.checked);
        }

        this.tailw.onchange = function() {
            this.parent.mon.changeTailwind(this.parent.tailw.checked);
        }

        this.modifier.onchange = function() {
            this.parent.mon.changeMod(this.parent.modifier.value);
        }

        this.nature.onchange = function() {
            this.parent.mon.changeNature(this.parent.nature.value);
        }

        this.item.onchange = function() {
            this.parent.mon.changeItem(this.parent.item.value);
        }

        this.ability.onchange = function() {
            this.parent.mon.changeAbility(this.parent.ability.value);
        }

        this.iv.onchange = function() {
            this.parent.mon.changeIV(this.parent.iv.value);
        }

        this.ev.onchange = function() {
            this.parent.mon.changeEV(this.parent.ev.value);
        }

        this.level.onchange = function() {
            this.parent.mon.changeLevel(this.parent.level.value);
        }
    }
}

class Pokemon {
    constructor(no, dexList) {
        this.dex      = no;
        this.name     = dexList[no-1].name;
        this.base     = dexList[no-1].base;
        this.iv       = 31;
        this.ev       = 252;
        this.level    = 50;
        this.ability  = "N/A";
        this.nature   = "N/A";
        this.modifier = "N/A";
        this.item     = "N/A";
        this.para     = false;
        this.tailwind = false;
        
        this.updateSpeed();
    }
    
    updateFields() {
        this.updateSpeed();
        this.parent.iv.value        = this.iv;
        this.parent.ev.value        = this.ev;  
        this.parent.level.value     = this.level;  
        this.parent.speed.value     = this.speed;
        this.parent.base.value      = this.base;
        this.parent.nature.value    = this.nature;
        this.parent.modifier.value  = this.modifier;
        this.parent.item.value      = this.item;  
        this.parent.ability.value   = this.ability;
        this.parent.para.value      = this.para;
        this.parent.tailw.value     = this.tailw;
        this.parent.selectBox.value = this.dex;
    }
    
    updateSpeed() {
        this.calcMods();
        this.speed = this.calcSpeed();
    }
    
    printDebug(string) {
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
    
    calcMods() {
        // Nature
        if (this.nature == "+")
            this.natureMod = parseFloat(1.1);
        else if (this.nature == "-")
            this.natureMod = parseFloat(0.9);
        else if (this.nature == "N/A")
            this.natureMod = parseFloat(1);
        // Modifier
        if (this.modifier == "N/A")
            this.modMod = parseFloat(1);
        else if (this.modifier == "+1")
            this.modMod = parseFloat(1.5);
        else if (this.modifier == "+2")
            this.modMod = parseFloat(2);
        else if (this.modifier == "+3")
            this.modMod = parseFloat(2.5);
        else if (this.modifier == "+4")
            this.modMod = parseFloat(3);
        else if (this.modifier == "+5")
            this.modMod = parseFloat(3.5);
        else if (this.modifier == "+6")
            this.modMod = parseFloat(4);
        else if (this.modifier == "-1")
            this.modMod = parseFloat(0.66);
        else if (this.modifier == "-2")
            this.modMod = parseFloat(0.5);
        else if (this.modifier == "-3")
            this.modMod = parseFloat(0.4);
        else if (this.modifier == "-4")
            this.modMod = parseFloat(0.33);
        else if (this.modifier == "-5")
            this.modMod = parseFloat(0.285);
        else if (this.modifier == "-6")
            this.modMod = parseFloat(0.25);
        // Item
        if (this.item == "N/A")
            this.itemMod = parseFloat(1);
        else if (this.item == "Scarf")
            this.itemMod = parseFloat(1.5);
        else if (this.item == "Macho")
            this.itemMod = parseFloat(0.5);
        else if (this.item == "Power")
            this.itemMod = parseFloat(0.66);
        else if (this.item == "Iron")
            this.itemMod = parseFloat(0.66);
        // Ability
        if (this.ability == "N/A")
            this.abilityMod = parseFloat(1);
        else if (this.ability == "quickFeet")
            this.abilityMod = parseFloat(1.5);
        else
            this.abilityMod = parseFloat(2);
        // Paralysis
        if (this.para == true)
            this.paraMod = parseFloat(0.25);
        else
            this.paraMod = parseFloat(1);
        // Tailwind
        if (this.tailw == true)
            this.tailwindMod = parseFloat(2);
        else
            this.tailwindMod = parseFloat(1);
    }
    
    calcSpeed() {
        return  Math.floor(((((Math.round(this.iv
                                          + (2 * this.base)
                                          + (this.ev/4))) * (this.level/100))
                                          + 5) * this.natureMod)
                                          * this.modMod * this.itemMod
                                          * this.abilityMod * this.paraMod
                                          * this.tailwindMod);
    }
    
    changeIV(value) {
        this.iv = value;
        this.updateFields();
        console.log(`iv changed to ${this.iv}`);
    }
    
    changeEV(value) {
        this.ev = value;
        this.updateFields();
        console.log(`ev changed to ${this.ev}`);
        
    }
    
    changeLevel(value) {
        this.level = value;
        this.updateFields();
        console.log(`level changed to ${this.level}`);
        
    }
    
    changeAbility(value) {
        this.ability = value;
        this.updateFields();
        console.log(`ability changed to ${this.ability}`);
        
    }
    
    changeNature(value) {
        this.nature = value;
        this.updateFields();
        console.log(`nature changed to ${this.nature}`);
        
    }
    
    changeMod(value) {
        this.modifier = value;
        this.updateFields();
        console.log(`modifier changed to ${this.modifier}`);
    }
    
    changeItem(value) {
        this.item = value;
        this.updateFields();
        console.log(`item changed to ${this.item}`);
    }
    
    changePara(boolean) {
        this.para = boolean;
        this.updateFields();
        console.log(`paralysis changed to ${this.para}`);
    }
    
    changeTailwind(boolean) {
        this.tailwind = boolean;
        this.updateFields();
        console.log(`tailwind changed to ${this.tailwind}`);
    }
    
    changeDex(value) {
        this.dex  = value;
        this.name = pokeDex[this.dex-1].name;
        this.base = pokeDex[this.dex-1].base;
        this.updateFields();
        console.log(`monster changed to ${this.name} , #${this.dex}`);
    }
}