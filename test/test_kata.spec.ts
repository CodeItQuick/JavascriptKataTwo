import {assert} from "chai";
import {Marine, Zealot, Zergling} from '../src';

describe('can do battle', () => {
    it('the vile zerg zergling will kill the epic terran marine', () => {
        const marine = new Marine();
        const zergling = new Zergling();
        zergling.run(marine);
        marine.shoot(zergling);
        zergling.attack(marine);

        marine.shoot(zergling);

        assert.equal(marine.alive(), true)
        assert.equal(zergling.alive(), false)
    })
    it('the vile zerg zerglings will kill the epic protos zealot', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();
        const zerglingTwo = new Zergling();
        zergling.run(zealot);
        zerglingTwo.run(zealot);
        zealot.claw(zergling);
        zealot.claw(zergling);
        zergling.attack(zealot);

        zerglingTwo.attack(zealot);

        assert.equal(zealot.alive(), true)
        assert.equal(zergling.alive(), false)
        assert.equal(zerglingTwo.alive(), true)
    })
    it('the vile zerg zergling cannot hit a unit it has not run at', () => {
        const zealot = new Zealot();
        const zergling = new Zergling();

        zergling.attack(zealot);

        assert.equal(zealot.hitpointBar(), "full")
    })
})