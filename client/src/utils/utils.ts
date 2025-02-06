import { formatEther } from "viem";

export function toEther(value: string) {
  return formatEther(BigInt(value));
}
