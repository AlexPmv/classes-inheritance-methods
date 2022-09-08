import Character from '../classes/character';
import Bowman from '../classes/bowman';
import Daemon from '../classes/daemon';
import Magician from '../classes/magician';
import Swordsman from '../classes/swordsman';
import Undead from '../classes/undead';
import Zombie from '../classes/zombie';

test('testing class Character with non-valid name', () => {
  expect(() => new Character('V', 'Bowman')).toThrowError('Invalid name length (minimum: 2, maximum: 10)');
});

test('testing class Character with non-valid type', () => {
  expect(() => new Character('Vasya', 'Archer')).toThrowError('"Archer" is non-existent character type');
});

test('testing class Character with valid name and type', () => {
  expect(new Character('Vasya', 'Bowman')).toEqual({
    name: 'Vasya',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10,
  });
});

test('level up character', () => {
  const character = new Character('Vasya', 'Bowman');
  character.health = 10;
  character.levelUp();
  expect(character).toEqual({
    name: 'Vasya',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12,
  });
});

test('level up character with health <= 0', () => {
  const character = new Character('Vasya', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError('Нельзя повышать level мертвого персонажа');
});

test('level up character with health > 0', () => {
  const character = new Character('Vasya', 'Bowman');
  character.levelUp();
  expect(character).toEqual({
    name: 'Vasya',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12,
  });
});

test('Calculate damage with health <= 0', () => {
  const character = new Character('Vasya', 'Bowman');
  character.health = 0;
  expect(() => character.damage(10)).toThrowError('Персонаж уже мертв');
});

test('Calculate damage with health > 0', () => {
  const character = new Character('Vasya', 'Bowman');
  character.damage(10);
  expect(character.health).toBe(91);
});

test('testing class Bowman', () => {
  expect(new Bowman('Vasya', 'Bowman')).toEqual({
    name: 'Vasya',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('testing class Daemon', () => {
  expect(new Daemon('Vasya', 'Daemon')).toEqual({
    name: 'Vasya',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('testing class Magician', () => {
  expect(new Magician('Vasya', 'Magician')).toEqual({
    name: 'Vasya',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('testing class Swordsman', () => {
  expect(new Swordsman('Vasya', 'Swordsman')).toEqual({
    name: 'Vasya',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('testing class Undead', () => {
  expect(new Undead('Vasya', 'Undead')).toEqual({
    name: 'Vasya',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('testing class Zombie', () => {
  expect(new Zombie('Vasya', 'Zombie')).toEqual({
    name: 'Vasya',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
