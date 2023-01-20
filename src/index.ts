import { fahrenheitToCelsius, celsiusToFahrenheit } from './temperatures';
import { calculateDiscount } from './shopping';

/**
 * Oven Temperature Code
 */

const ovenTemperature: number = 375; // degrees fahrenheit
console.log(
  `Set your oven to ${ovenTemperature} degrees Fahrenheit or ${fahrenheitToCelsius(
    ovenTemperature
  )} degrees celsius.`
);

const dailyTempsCelsius: Array<number> = [123, 42, 78, 92, 12];
const dailyTempsFahrenheit: Array<number> = dailyTempsCelsius.map(celsiusToFahrenheit);

for (const temp of dailyTempsFahrenheit) {
  console.log(temp);
}

/**
 * Shopping Cart Code
 */
const carts: Array<ShoppingCart> = [
  {
    n_items: 7,
    total: 122.12,
  },
  {
    n_items: 3,
    total: 77.23,
  },
  {
    n_items: 12,
    total: 12.89,
  },
];

const discounts: Array<number> = carts.map(calculateDiscount);

console.log('\nDiscounts: ');
for (const discount of discounts) {
  console.log(discount);
}
