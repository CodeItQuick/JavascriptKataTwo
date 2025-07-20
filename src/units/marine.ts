import {IUnit} from "./IUnit";

export class Marine implements IUnit {
    hitpoints = 2;

    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return this.hitpoints > 0;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }

    hurt(damage: number): void {
        if (damage > 0) {
            this.hitpoints -= damage;
        }
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