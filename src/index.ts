import {Zergling} from "./units/zergling";
import {Marine} from "./units/marine";
import {Zealot} from "./units/zealot";


const Driver = class Driver {
    battle(zerg: number, marine: number, zealot: number) {
        if (zerg === 0 && marine === 0 && zealot === 0) {
            return "no units provided";
        }

        if (zerg > 0 && marine > 0) {
            let firstPlayer: Zergling[] = [], secondPlayer: Marine[] = [];
            for (let idx = 0; idx < zerg; idx++) {
                firstPlayer.push(new Zergling());
            }
            for (let idx = 0; idx < marine; idx++) {
                secondPlayer.push(new Marine());
            }

            while(firstPlayer.some(unit => unit.alive()) && secondPlayer.some(unit => unit.alive())) {
                const firstPlayerAttackedUnit = firstPlayer.find(unit => unit.alive());
                const secondPlayerAttackedUnit = secondPlayer.find(unit => unit.alive());
                if (secondPlayerAttackedUnit) {
                    firstPlayer.forEach(unit => {
                        unit.run(secondPlayerAttackedUnit);
                        unit.attack(secondPlayerAttackedUnit)
                    })
                }
                if (firstPlayerAttackedUnit) {
                    secondPlayer.forEach(unit => {
                        unit.attack(firstPlayerAttackedUnit)
                    })
                }
            }

            return firstPlayer.some(unit => unit.alive()) ? "zerg have won" : "terran have won";
        }

        if (zerg > 0 && zealot > 0) {
            let firstPlayer: Zergling[] = [], secondPlayer: Zealot[] = [];
            for (let idx = 0; idx < zerg; idx++) {
                firstPlayer.push(new Zergling());
            }
            for (let idx = 0; idx < zealot; idx++) {
                secondPlayer.push(new Zealot());
            }

            while(firstPlayer.some(unit => unit.alive()) && secondPlayer.some(unit => unit.alive())) {
                const firstPlayerAttackedUnit = firstPlayer.find(unit => unit.alive());
                const secondPlayerAttackedUnit = secondPlayer.find(unit => unit.alive());
                if (secondPlayerAttackedUnit) {
                    firstPlayer.forEach(unit => {
                        unit.run(secondPlayerAttackedUnit);
                        unit.attack(secondPlayerAttackedUnit)
                    })
                }
                if (firstPlayerAttackedUnit) {
                    secondPlayer.forEach(unit => {
                        unit.attack(firstPlayerAttackedUnit)
                    })
                }
            }

            return firstPlayer.some(unit => unit.alive()) ? "zerg have won" : "protos have won";
        }

        if (marine > 0 && zealot > 0) {
            let firstPlayer: Marine[] = [], secondPlayer: Zealot[] = [];
            for (let idx = 0; idx < marine; idx++) {
                firstPlayer.push(new Marine());
            }
            for (let idx = 0; idx < zealot; idx++) {
                secondPlayer.push(new Zealot());
            }

            while(firstPlayer.some(unit => unit.alive()) && secondPlayer.some(unit => unit.alive())) {
                const firstPlayerAttackedUnit = firstPlayer.find(unit => unit.alive());
                const secondPlayerAttackedUnit = secondPlayer.find(unit => unit.alive());
                if (secondPlayerAttackedUnit) {
                    firstPlayer.forEach(unit => {
                        unit.attack(secondPlayerAttackedUnit)
                    })
                }
                if (firstPlayerAttackedUnit) {
                    secondPlayer.forEach(unit => {
                        // TODO: should have unit.run(), zealots are melee
                        unit.attack(firstPlayerAttackedUnit)
                    })
                }
            }

            return firstPlayer.some(unit => unit.alive()) ? "marine have won" : "protos have won";
        }
    }
}

export default Driver;