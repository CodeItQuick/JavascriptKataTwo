import {assert} from "chai";
import {Zergling} from "../src/units/zergling";
import {Marine} from "../src/units/marine";
import {Zealot} from "../src/units/zealot";

describe('can do battle', () => {
    it('the vile zerg zergling will kill the epic terran marine', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        const zerglingTwo = new Zergling();
        zergling.run(marine);
        zerglingTwo.run(zerglingTwo);
        marine.shoot(zergling);
        zergling.claw(marine);
        marine.shoot(zergling);

        zergling.claw(marine);
        zerglingTwo.claw(marine);

        assert.equal(marine.alive(), false)
        assert.equal(zergling.alive(), false)
        assert.equal(zerglingTwo.alive(), true)
    })
    it('the vile zerg zerglings will kill the epic protos zealot', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();
        const zerglingTwo = new Zergling();
        zergling.run(zealot);
        zerglingTwo.run(zealot);
        zealot.claw(zergling);
        zealot.claw(zergling);
        zergling.claw(zealot);

        zerglingTwo.claw(zealot);

        assert.equal(zergling.alive(), false)
        assert.equal(zerglingTwo.alive(), true)
        assert.equal(zealot.alive(), false)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();

        zergling.claw(zealot);

        assert.equal(zealot.hitpointBar(), "full")
        assert.equal(zergling.hitpointBar(), "full")
    })
    it('the zealots hitpoint bar reflects its health', () => {
        const zealot = new Zealot();

        zealot.hurt(1);

        assert.equal(zealot.hitpointBar(), "half full")
    })
    it('the marines hitpoint bar reflects its health', () => {
        const marine = new Marine();

        marine.hurt(1);

        assert.equal(marine.hitpointBar(), "half full")
    })
    it('the vile zerg zergling cannot get hit with negative damage', () => {
        const zergling = new Zergling();

        zergling.hurt(-1);

        assert.equal(zergling.hitpointBar(), "full")
    })
    it('the terran marine cannot get hit with negative damage', () => {
        const marine = new Marine();

        marine.hurt(-1);

        assert.equal(marine.hitpointBar(), "full")
    })
    it('the zealots hitpoint bar reflects its health when dead', () => {
        const zealot = new Zealot();

        zealot.hurt(2);

        assert.equal(zealot.hitpointBar(), "dead")
    })
    it('the zergling hitpoint bar reflects its health when dead', () => {
        const zergling = new Zergling();

        zergling.hurt(1);

        assert.equal(zergling.hitpointBar(), "dead")
    })
    it('the marine hitpoint bar reflects its health when dead', () => {
        const marine = new Marine();

        marine.hurt(2);

        assert.equal(marine.hitpointBar(), "dead")
    })
    it('the vile zerg zergling will kill the epic terran marine with attack commands', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        const zerglingTwo = new Zergling();
        zergling.run(marine);
        zerglingTwo.run(zerglingTwo);
        marine.attack(zergling);
        zergling.attack(marine);
        marine.attack(zergling);

        zergling.attack(marine);
        zerglingTwo.attack(marine);

        assert.equal(marine.alive(), false)
        assert.equal(zergling.alive(), false)
        assert.equal(zerglingTwo.alive(), true)
    })
    it('the vile zerg zerglings will kill the epic protos zealot with attack commands', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();
        const zerglingTwo = new Zergling();
        zergling.run(zealot);
        zerglingTwo.run(zealot);
        zealot.attack(zergling);
        zealot.attack(zergling);
        zergling.attack(zealot);

        zerglingTwo.attack(zealot);

        assert.equal(zergling.alive(), false)
        assert.equal(zerglingTwo.alive(), true)
        assert.equal(zealot.alive(), false)
    })
})