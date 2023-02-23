export default class Character {
  constructor(name, type) {
    if ((name.length > 2) && (name.length < 10)) {
      this.name = name;
    } else {
      throw new Error('Неверное количество букв в имени!');
    }

    const options = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (options.some((el) => el === type)) {
      this.type = type;
    } else {
      throw new Error('Неверно выбран тип героя');
    }
    this.health = 100;
    this.level = 1;
  }
}
