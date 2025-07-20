export interface IUnit {
    attack(unit: IUnit): void;

    alive(): boolean;

    hurt(damage: number): void;
}