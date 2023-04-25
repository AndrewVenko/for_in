export default function orderByProps(obj, order) {
  if (typeof (obj) !== 'object') {
    throw new Error('Переданный аргумент не является объектом');
  }

  if (order === undefined) {
    order = [];
  }
  const orderedProps = [];
  const unorderedProps = [];

  // Разбиваем объект на два массива в зависимости от вхождения в order
  for (const prop in obj) {
    if (order.includes(prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    } else {
      unorderedProps.push({ key: prop, value: obj[prop] });
    }
  }
  // Сортируем первый массив по заданным свойствам, а второй в алфавитном порядке
  orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  unorderedProps.sort((a, b) => a.key.localeCompare(b.key));
  // Возвращаем объединенный массив
  return orderedProps.concat(unorderedProps);
}
