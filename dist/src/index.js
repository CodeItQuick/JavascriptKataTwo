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
    alive() {
        return this.hitpoints > 0;
    }
    run(unit) {
        this.closeUnits.push(unit);
    }
    hurt(damage) {
        this.hitpoints -= damage;
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
        return true;
    }
    shoot(unit) {
        unit.hurt(1);
    }
    hurt(damage) {
        this.hitpoints -= damage;
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
        return true;
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
        return "not full";
    }
}
exports.Zealot = Zealot;
