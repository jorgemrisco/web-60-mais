export function numberToTelephoneString(telephoneNumber: number): string {
  const inputNumber = 551633739146;
  const inputString = inputNumber.toString();

  const countryCode = inputString.slice(0, 2);
  const areaCode = inputString.slice(2, 4);
  const rest = inputString.slice(4);

  return `+${countryCode} (${areaCode}) ${rest}`;
}
