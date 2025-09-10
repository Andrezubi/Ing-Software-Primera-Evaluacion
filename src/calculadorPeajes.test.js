import { peaje,estaPerdido } from "./calculadorPeajes";


describe("CalcularPeajes", () => {
  it("deberia conseguir peaje entre dos horas", () => {
    expect(peaje(new Date("2025-03-25T13:00:00Z"), new Date("2025-03-25T15:00:00Z"))).toEqual(20);
  });
  it("deberia conseguir peaje regular  dos horas", () => {
    expect(peaje(new Date("2025-03-25T13:00:00Z"), new Date("2025-03-25T16:00:00Z"))).toEqual(30);
  });
    it("si se perdio el ticket el peaje deberia ser de 80 bs", () => {
    expect(estaPerdido(new Date("2025-03-25T13:00:00Z"), new Date("2025-03-25T16:00:00Z"),true)).toEqual(80);
  });
  it("si no se perdio el ticket el peaje se calcula normalmente", () => {
    expect(estaPerdido(new Date("2025-03-25T13:00:00Z"), new Date("2025-03-25T16:00:00Z"),false)).toEqual(30);
  });
  it("si la fecha de salida es antes que de la entrada devuelve error", () => {
    expect(estaPerdido(new Date("2025-03-25T18:00:00Z"), new Date("2025-03-25T16:00:00Z"),true)).toEqual("La fecha de Entrada no puede ser despues de la de Salida");
  });
  
});