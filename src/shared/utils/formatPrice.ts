export function formatPrice(value: number) {
  return value.toFixed(2).padStart(2, "0").replace(".", ",");
}
