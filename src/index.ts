interface IUnit {
    attack(unit: IUnit): void;
    alive(): boolean;
    hurt(damage: number): void;
}
export class Zergling implements IUnit {
    hitpoints = 1;
    closeUnits: IUnit[] = [];
    attack(unit: IUnit): void {
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
        this.hitpoints -= damage;
    }
}
export class Marine implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.shoot(unit);
    }

    alive(): boolean {
        return true;
    }

    shoot(unit: IUnit): void {
        unit.hurt(1);
    }
    hurt(damage: number): void {
        this.hitpoints -= damage;
    }
}
export class Zealot implements IUnit {
    hitpoints = 2;
    attack(unit: IUnit): void {
        this.claw(unit);
    }

    alive(): boolean {
        return true;
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
        return "not full";
    }
}