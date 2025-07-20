"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zergling_1 = require("./units/zergling");
const marine_1 = require("./units/marine");
const Driver = class Driver {
    battle(zerg, marine, zealot) {
        if (zerg === 0 && marine === 0 && zealot === 0) {
            return "no units provided";
        }
        if (zerg > 0 && marine === 1) {
            let firstPlayer = [], secondPlayer;
            for (let idx = 0; idx < zerg; idx++) {
                firstPlayer.push(new zergling_1.Zergling());
            }
            secondPlayer = new marine_1.Marine();
            while (firstPlayer.some(unit => unit.alive()) && secondPlayer.alive()) {
                firstPlayer.forEach(unit => {
                    unit.run(secondPlayer);
                    unit.attack(secondPlayer);
                });
                const firstPlayerAttackedUnit = firstPlayer.find(unit => unit.alive());
                if (firstPlayerAttackedUnit) {
                    secondPlayer.shoot(firstPlayerAttackedUnit);
                }
            }
            return firstPlayer.some(unit => unit.alive()) ? "zerg have won" : "terran have won";
        }
        return "protos have won";
    }
};
exports.default = Driver;
