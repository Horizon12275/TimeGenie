export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
// 日期转换为序数
export function convertToOrdinal(number: number) {
  if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13) {
    return number + 'th';
  } else {
    let lastDigit = number % 10;
    switch (lastDigit) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
      default:
        return number + 'th';
    }
  }
}
