import orderByProps from '../src/orderByProps';

describe('orderByProps', () => {
  it('Checking that the function returns the correct array of objects', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  it('Checking that the function works correctly if not an object is passed', () => {
    const obj = 'не объект';
    const order = ['name', 'level'];

    expect(() => orderByProps(obj, order)).toThrowError('Переданный аргумент не является объектом');
  });

  it('Checking that the function works correctly if the sort order contains a non-existent key', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const order = ['name', 'level', 'unknown'];
    const result = orderByProps(obj, order);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  it('Checking that the function works correctly if the object is empty', () => {
    const obj = {};
    const result = orderByProps(obj, ['name', 'level']);

    expect(result).toEqual([]);
  });

  it('Checking that the function works correctly if no sort order is given', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = orderByProps(obj);

    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });
});
