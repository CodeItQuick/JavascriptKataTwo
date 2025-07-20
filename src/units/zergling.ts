import {IUnit} from "./IUnit";

export class Zergling implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];

    attack(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    claw(unit: IUnit): void {
        if (this.closeUnits.includes(unit)) {
            unit.hurt(1);
        }
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    run(unit: IUnit): void {
        this.closeUnits.push(unit);
    }

    hurt(damage: number): void {
        if (damage > 0) {
            this.hitpoints -= damage;
        }
    }

    hitpointBar(): string {
        if (this.hitpoints === 1) {
            return "full";
        }
        return "dead";
    }
}