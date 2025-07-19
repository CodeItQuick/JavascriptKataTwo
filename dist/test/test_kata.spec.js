"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe('can do battle', () => {
    it('the vile zerg zergling will battle the epic terran marine', () => {
        const marine = new src_1.Marine();
        const zergling = new src_1.Zergling();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);
        marine.shoot(zergling);
        chai_1.assert.equal(marine.alive(), true);
        chai_1.assert.equal(zergling.alive(), false);
    });
    it('the vile zerg zergling will battle the epic protos zealot', () => {
        const zealot = new src_1.Zealot();
        const zergling = new src_1.Zergling();
        zergling.run(zealot);
        zealot.claw(zergling);
        zergling.attack(zealot);
        zealot.claw(zergling);
        chai_1.assert.equal(zealot.alive(), true);
    });
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new src_1.Zealot();
        const zergling = new src_1.Zergling();
        zergling.attack(zealot);
        chai_1.assert.equal(zealot.hitpointBar(), "full");
    });
});
