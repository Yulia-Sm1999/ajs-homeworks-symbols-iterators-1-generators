import Team from '../src/Team';
import Daemon from '../src/Daemon';
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';

test('should show all characters one by one', () => {
  const teamMembers = new Team();
  const swordsman = new Swordsman('Рыцарь');
  const daemon = new Daemon('Демон');
  const magician = new Magician('Маг');
  teamMembers.addCharacter([swordsman, daemon]);
  teamMembers.addCharacter(magician);
  const players = teamMembers[Symbol.iterator]();
  expect(players.next().value).toBe(swordsman);
  expect(players.next().value).toBe(daemon);
  expect(players.next().value).toBe(magician);
  expect(players.next().value).toBe(undefined);
});

test('should make team of one character', () => {
  const teamMembers = new Team();
  const swordsman = new Swordsman('Рыцарь');
  teamMembers.addCharacter(swordsman);
  const players = teamMembers[Symbol.iterator]();
  expect(players.next().value).toBe(swordsman);
  // teamMembers.team.forEach((character) => {
  //   expect(character).toBe(swordsman);
  // });
});

test('should throw an Error because of wrong amount of letters in a name', () => {
  expect(() => new Swordsman('Ры')).toThrow(new Error('Неверное количество букв в имени!'));
});

test('should throw an Error because of wrong type of character', () => {
  expect(() => new Swordsman('Рыцарь', 'Swords')).toThrow(new Error('Неверно выбран тип героя'));
});
