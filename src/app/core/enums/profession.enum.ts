export enum Profession{
    accountant = 1,
    actor,
    architect,
    artist,
    attorney,
    banker,
    cashier,
    coach,
    designer,
    doctor,
    electrician,
    engineer,
    filmmaker,
    lawyer,
    mechanic,
    musician,
    nurse,
    painter,
    pharmacist,
    photographer,
    physician,
    pilot,
    plumber,
    police,
    politician,
    professor,
    programmer,
    psychologist,
    receptionist,
    secretary,
    singer,
    surgeon,
    teacher,
    therapist,
    translator,
    veterinarian,
    videographer,
    writer,
    other
}

export const ProfessionList: {
    key: number
    value: string;
  }[] = Object.values(Profession)
    .filter((value, key) => typeof value === "string")
    .map((value, key) => ({ key: key+1 as number, value: value as string }));