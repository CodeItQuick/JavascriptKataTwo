import {IUnit} from "./IUnit";

export class Zealot implements IUnit {
    hitpoints = 2;

    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    claw(unit: IUnit): void {
        unit.hurt(2);
    }

    hurt(damage: number): void {
        this.hitpoints -= damage;
    }

    hitpointBar(): string {
        if (this.hitpoints === 2) {
            return "full";
        }
        if (this.hitpoints === 1) {
            return "half full";
        }
        return "dead";
    }
}