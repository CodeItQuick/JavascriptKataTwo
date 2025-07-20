"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe('can do battle', () => {
    it('the vile zerg zergling will kill the epic terran marine', () => {
        const marine = new src_1.Marine();
        const zergling = new src_1.Zergling();
        const zerglingTwo = new src_1.Zergling();
        zergling.run(marine);
        zerglingTwo.run(zerglingTwo);
        marine.shoot(zergling);
        zergling.claw(marine);
        marine.shoot(zergling);
        zergling.claw(marine);
        zerglingTwo.claw(marine);
        chai_1.assert.equal(marine.alive(), false);
        chai_1.assert.equal(zergling.alive(), false);
        chai_1.assert.equal(zerglingTwo.alive(), true);
    });
    it('the vile zerg zerglings will kill the epic protos zealot', () => {
        const zealot = new src_1.Zealot();
        const zergling = new src_1.Zergling();
        const zerglingTwo = new src_1.Zergling();
        zergling.run(zealot);
        zerglingTwo.run(zealot);
        zealot.claw(zergling);
        zealot.claw(zergling);
        zergling.claw(zealot);
        zerglingTwo.claw(zealot);
        chai_1.assert.equal(zergling.alive(), false);
        chai_1.assert.equal(zerglingTwo.alive(), true);
        chai_1.assert.equal(zealot.alive(), false);
    });
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new src_1.Zealot();
        const zergling = new src_1.Zergling();
        zergling.claw(zealot);
        chai_1.assert.equal(zealot.hitpointBar(), "full");
        chai_1.assert.equal(zergling.hitpointBar(), "full");
    });
    it('the zealots hitpoint bar reflects its health', () => {
        const zealot = new src_1.Zealot();
        zealot.hurt(1);
        chai_1.assert.equal(zealot.hitpointBar(), "half full");
    });
    it('the marines hitpoint bar reflects its health', () => {
        const marine = new src_1.Marine();
        marine.hurt(1);
        chai_1.assert.equal(marine.hitpointBar(), "half full");
    });
    it('the vile zerg zergling cannot get hit with negative damage', () => {
        const zergling = new src_1.Zergling();
        zergling.hurt(-1);
        chai_1.assert.equal(zergling.hitpointBar(), "full");
    });
    it('the terran marine cannot get hit with negative damage', () => {
        const marine = new src_1.Marine();
        marine.hurt(-1);
        chai_1.assert.equal(marine.hitpointBar(), "full");
    });
    it('the zealots hitpoint bar reflects its health when dead', () => {
        const zealot = new src_1.Zealot();
        zealot.hurt(2);
        chai_1.assert.equal(zealot.hitpointBar(), "dead");
    });
    it('the zergling hitpoint bar reflects its health when dead', () => {
        const zergling = new src_1.Zergling();
        zergling.hurt(1);
        chai_1.assert.equal(zergling.hitpointBar(), "dead");
    });
    it('the marine hitpoint bar reflects its health when dead', () => {
        const marine = new src_1.Marine();
        marine.hurt(2);
        chai_1.assert.equal(marine.hitpointBar(), "dead");
    });
    it('the vile zerg zergling will kill the epic terran marine with attack commands', () => {
        const marine = new src_1.Marine();
        const zergling = new src_1.Zergling();
        const zerglingTwo = new src_1.Zergling();
        zergling.run(marine);
        zerglingTwo.run(zerglingTwo);
        marine.attack(zergling);
        zergling.attack(marine);
        marine.attack(zergling);
        zergling.attack(marine);
        zerglingTwo.attack(marine);
        chai_1.assert.equal(marine.alive(), false);
        chai_1.assert.equal(zergling.alive(), false);
        chai_1.assert.equal(zerglingTwo.alive(), true);
    });
    it('the vile zerg zerglings will kill the epic protos zealot with attack commands', () => {
        const zealot = new src_1.Zealot();
        const zergling = new src_1.Zergling();
        const zerglingTwo = new src_1.Zergling();
        zergling.run(zealot);
        zerglingTwo.run(zealot);
        zealot.attack(zergling);
        zealot.attack(zergling);
        zergling.attack(zealot);
        zerglingTwo.attack(zealot);
        chai_1.assert.equal(zergling.alive(), false);
        chai_1.assert.equal(zerglingTwo.alive(), true);
        chai_1.assert.equal(zealot.alive(), false);
    });
});
