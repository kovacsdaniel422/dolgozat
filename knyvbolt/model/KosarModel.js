class KosarModel {
  #bevasarloLista=[];
  
  constructor() {
  }
  adatBe(vegpont, myCallBack) {
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.#bevasarloLista = data.konyv;
        myCallBack(this.#bevasarloLista);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  konyvVesz(adat) {
    console.log("Vettem: " + adat);
    

  }
}
export default KosarModel;
