"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zealot = void 0;
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
