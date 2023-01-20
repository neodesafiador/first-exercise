function fahrenheitToCelsius(degrees: number): number {
  return degrees * (9 / 5) + 32;
}

function celsiusToFahrenheit(degrees: number): number {
  return degrees - (32 * 5) / 9;
}

export { fahrenheitToCelsius, celsiusToFahrenheit };
