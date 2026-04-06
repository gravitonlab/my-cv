import { ILocation } from "models";

export function getFullAddress(address: ILocation) {
  return `${address.city}, ${address.region}, ${address.country}`;
}
