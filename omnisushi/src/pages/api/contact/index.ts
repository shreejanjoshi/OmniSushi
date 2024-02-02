export interface Address {
  address: string[];
  mapUrl: string;
}

export const address: Address = {
  address: ["Omni Sushi", "03 220 55 00", "Noorderplaats 2, 2000 Antwerpen"],
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.392143503127!2d4.4116366780564595!3d51.23027247175155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f65215964b33%3A0x6ed6241722915029!2sAP%20Hogeschool%20-%20Campus%20Spoor%20Noord%20-%20Noorderplaats!5e0!3m2!1sen!2sbe!4v1702147781220!5m2!1sen!2sbe",
};

export const getAddress = async (): Promise<Address> => {
  return address;
};
