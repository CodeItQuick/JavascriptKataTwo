"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = __importDefault(require("../src"));
describe('can do battle', () => {
    it('can enter zero units they do not battle', () => {
        const driver = new src_1.default();
        const battleResults = driver.battle(0, 0, 0);
        chai_1.assert.equal(battleResults, "no units provided");
    });
    it('can enter one marine and one zerg and they do battle', () => {
        const driver = new src_1.default();
        const battleResults = driver.battle(1, 1, 0);
        chai_1.assert.equal(battleResults, "terran have won");
    });
    it('can enter one zerg and one protos and they do battle', () => {
        const driver = new src_1.default();
        const battleResults = driver.battle(1, 0, 1);
        chai_1.assert.equal(battleResults, "protos have won");
    });
    it('can enter two zerg and one terran and they do battle', () => {
        const driver = new src_1.default();
        const battleResults = driver.battle(2, 1, 0);
        chai_1.assert.equal(battleResults, "zerg have won");
    });
    // it('can enter two zerg and two terran and they do battle', () => {
    //     const driver = new Driver();
    //
    //     const battleResults = driver.battle(2, 1, 0);
    //
    //     assert.equal(battleResults, "terran have won")
    // });
});
