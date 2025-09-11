import { peajeDiario,validador } from "./calculadorPeajes";


describe("CalcularPeajes", () => {
  it("deberia conseguir peaje entre dos horas", () => {
    expect(peajeDiario(new Date("2025-03-25T13:00:00"), new Date("2025-03-25T15:00:00"))).toEqual(20);
  });
  it("deberia conseguir peaje regular  dos horas", () => {
    expect(peajeDiario(new Date("2025-03-25T13:00:00"), new Date("2025-03-25T16:00:00"))).toEqual(30);
  });
    it("si se perdio el ticket el peaje deberia ser de 80 bs", () => {
    expect(validador(new Date("2025-03-25T13:00:00"), new Date("2025-03-25T16:00:00"),true)).toEqual(80);
  });
  it("si no se perdio el ticket el peaje se calcula normalmente", () => {
    expect(validador(new Date("2025-03-25T13:00:00"), new Date("2025-03-25T16:00:00"),false)).toEqual(30);
  });
  it("si la fecha de salida es antes que de la entrada devuelve error", () => {
    expect(validador(new Date("2025-03-25T18:00:00"), new Date("2025-03-25T16:00:00"),true)).toEqual("La fecha de Entrada no puede ser despues de la de Salida");
  });
  it("Para cualquier fecha de salida que sea antes que  la entrada devuelve error", () => {
    expect(validador(new Date("2025-03-25T23:00:00"), new Date("2025-03-25T16:00:00"),true)).toEqual("La fecha de Entrada no puede ser despues de la de Salida");
  });
  it("para horas nocturnas deberia usar la tarifa nocturna", () => {
    expect(peajeDiario(new Date("2025-03-25T22:00:00"), new Date("2025-03-25T23:00:00"))).toEqual(6);
  });
  it("para horas nocturnas desde la madrugada deberia usar la tarifa nocturna", () => {
    expect(peajeDiario(new Date("2025-03-25T01:00:00"), new Date("2025-03-25T04:00:00"))).toEqual(18);
  });
    it("para cuando esta en horas normales y nocturnas este usa el peaje de ambas", () => {
    expect(peajeDiario(new Date("2025-03-25T04:00:00"), new Date("2025-03-25T07:00:00"))).toEqual(22);
  });
  it("que tambien sea compatible con minutos y segundos", () => {
    expect(peajeDiario(new Date("2025-03-25T04:00:00"), new Date("2025-03-25T07:06:00"))).toEqual(23);
  });
  it("que redondee al segundo decimal mayor", () => {
    expect(peajeDiario(new Date("2025-03-25T04:00:00"), new Date("2025-03-25T07:00:06"))).toEqual(22.02);
  });
  it("Que la tarifa diaria maxima sea de 50 bs", () => {
    expect(peajeDiario(new Date("2025-03-25T04:00:00"), new Date("2025-03-25T22:00:06"))).toEqual(50);
  });
});