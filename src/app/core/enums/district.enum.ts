export enum District{
    Ampara = 1,
    Anuradhapura,
    Badulla,
    Batticaloa,
    Colombo,
    Galle,
    Gampaha,
    Hambantota,
    Jaffna,
    Kalutara,
    Kandy,
    Kegalle,
    Kilinochchi,
    Kurunegala,
    Mannar,
    Matale,
    Matara,
    Moneragala,
    Mullaitivu,
    NuwaraEliya,
    Polonnaruwa,
    Puttalam,
    Ratnapura,
    Trincomalee,
    Vavuniya
}

export const DistrictList: {
    key: number
    value: string;
  }[] = Object.values(District)
    .filter((value, key) => typeof value === "string")
    .map((value, key) => ({ key: key+1 as number, value: value as string }));
