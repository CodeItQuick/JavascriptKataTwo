import {Zergling} from "./units/zergling";
import {Marine} from "./units/marine";
import {Zealot} from "./units/zealot";


const Driver = class Driver {
    battle(zerg: number, marine: number, zealot: number) {
        if (zerg === 0 && marine === 0 && zealot === 0) {
            return "no units provided";
        }

        if (zerg > 0 && marine === 1) {
            let firstPlayer: Zergling[] = [], secondPlayer: Marine;
            for (let idx = 0; idx < zerg; idx++) {
                firstPlayer.push(new Zergling());
            }
            secondPlayer = new Marine();

            while(firstPlayer.some(unit => unit.alive()) && secondPlayer.alive()) {
                firstPlayer.forEach(unit => {
                    unit.run(secondPlayer);
                    unit.attack(secondPlayer)
                })
                const firstPlayerAttackedUnit = firstPlayer.find(unit => unit.alive());
                if (firstPlayerAttackedUnit) {
                    secondPlayer.shoot(firstPlayerAttackedUnit);
                }
            }

            return firstPlayer.some(unit => unit.alive()) ? "zerg have won" : "terran have won";
        }


        return "protos have won"
    }
}

export default Driver;