const hexStringSixDigitsRegex = /^#[a-fA-F0-9]{6}$/;
const hexStringThreeDigitsRegex = /^#[a-fA-F0-9]{3}$/;

export function hexToRGB(hex: string, alpha?: number) {
  const invalidHexErrorMessage =
    "Expected to receive a hex color string, got " + hex;

  if (
    !(hexStringThreeDigitsRegex.test(hex) || hexStringSixDigitsRegex.test(hex))
  ) {
    throw new Error(invalidHexErrorMessage);
  }

  const justDigits = hex.slice(1);

  if (hexStringThreeDigitsRegex.test(hex)) {
    const firstDigit = hex[0];
    const allEqual = justDigits
      .split("")
      .every((digit) => digit === firstDigit);
    if (!allEqual) {
      throw new Error(invalidHexErrorMessage);
    }
  }

  var r = parseInt(justDigits.slice(0, 2), 16),
    g = parseInt(justDigits.slice(2, 4), 16),
    b = parseInt(justDigits.slice(4, 6), 16);

  if (alpha) {
    if (alpha < 0 || alpha > 1) {
      throw new Error("Invalid alpha value: " + alpha);
    }
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
