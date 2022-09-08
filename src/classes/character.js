export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Invalid name length (minimum: 2, maximum: 10)');
    }

    if (!Character.characterTypes.includes(type)) {
      throw new Error(`"${type}" is non-existent character type`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 10;
  }

  static characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повышать level мертвого персонажа');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Персонаж уже мертв');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
