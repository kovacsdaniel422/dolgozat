class KosarModel {
  #kosar = [];
  #osszar;
  #ossdb;
  constructor() {
    this.#kosar = [];
    this.#osszar = 0;
    this.#ossdb = 0;
  }
  getOsszDb(adat) {}
  getOsszAr(adat) {}
  getKosar(adat) {}
  kosarba(adat) {
    let azonosElem = this.#kosar.findIndex((elem) => {
      return elem.id === adat.id;
    });
    if (azonosElem >= 0) {
      console.log(azonosElem);
      this.#kosar[azonosElem].db++;
    } else {
      this.#kosar.push(adat);
      this.#kosar[this.#kosar.length()];
    }
  }
  kosarbolTorol(adat) {}
  kosarFeldolgoz() {}
}
export default KosarModel;
