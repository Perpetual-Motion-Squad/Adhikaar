export function stringToBytes32(input: string) {
  // Ensure the input string is not longer than 32 characters
  if (input.length > 32) {
    throw new Error("String length must be 32 characters or less");
  }

  // Pad the input string with null bytes to make it 32 bytes long
  const paddedString = input.padEnd(32, "\0");

  // Convert the padded string to a hexadecimal representation
  const hexString = "0x" + Buffer.from(paddedString).toString("hex");

  return hexString as `0x${string}`;
}
