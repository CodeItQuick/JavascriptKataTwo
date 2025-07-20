"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zealot = exports.Marine = exports.Zergling = void 0;
class Zergling {
    constructor() {
        this.hitpoints = 1;
        this.closeUnits = [];
    }
    attack(unit) {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }
    claw(unit) {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }
    alive() {
        return this.hitpoints > 0;
    }
    run(unit) {
        this.closeUnits.push(unit);
    }
    hurt(damage) {
        if (damage > 0) {
            this.hitpoints -= damage;
        }
    }
    hitpointBar() {
        if (this.hitpoints === 1) {
            return "full";
        }
        return "dead";
    }
}
exports.Zergling = Zergling;
class Marine {
    constructor() {
        this.hitpoints = 2;
    }
    attack(unit) {
        this.shoot(unit);
    }
    alive() {
        return this.hitpoints > 0;
    }
    shoot(unit) {
        unit.hurt(1);
    }
    hurt(damage) {
        if (damage > 0) {
            this.hitpoints -= damage;
        }
    }
    hitpointBar() {
        if (this.hitpoints === 2) {
            return "full";
        }
        if (this.hitpoints === 1) {
            return "half full";
        }
        return "dead";
    }
}
exports.Marine = Marine;
class Zealot {
    constructor() {
        this.hitpoints = 2;
    }
    attack(unit) {
        this.claw(unit);
    }
    alive() {
        return this.hitpoints > 0;
    }
    claw(unit) {
        unit.hurt(2);
    }
    hurt(damage) {
        this.hitpoints -= damage;
    }
    hitpointBar() {
        if (this.hitpoints === 2) {
            return "full";
        }
        if (this.hitpoints === 1) {
            return "half full";
        }
        return "dead";
    }
}
exports.Zealot = Zealot;
