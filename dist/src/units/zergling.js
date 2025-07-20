"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zergling = void 0;
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
