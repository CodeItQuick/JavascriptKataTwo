"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marine = void 0;
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
