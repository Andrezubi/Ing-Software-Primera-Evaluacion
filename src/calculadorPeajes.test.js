import { peaje } from "./calculadorPeajes";


describe("CalcularPeajes", () => {
  it("deberia conseguir peaje entre dos horas", () => {
    expect(peaje(new Date("2025-03-25T13:00:00Z"), new Date("2025-03-25T15:00:00Z"))).toEqual(20);
  });
  it("deberia conseguir peaje regular  dos horas", () => {
    expect(peaje(new Date("2025-03-25T13:00:00Z"), new Date("2025-03-25T16:00:00Z"))).toEqual(30);
  });

  
});