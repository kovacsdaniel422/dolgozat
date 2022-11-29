import "./App.css";
import Konyv from "./Konyv.js";
import KosarModel from "./model/KosarModel.js";
import React, { useState } from "react";
import Kosar from "./Kosar.js";

const konyveim = [
  {
    id: 1,
    cim: "malveil",
    szerzo: "robert merle",
    ar: 5990,
  },
  {
    id: 2,
    cim: "Stalin",
    szerzo: "Copium",
    ar: 3990,
  },
  {
    id: 3,
    cim: "Fent a jános hegyen",
    szerzo: "János",
    ar: 6990,
  },
];
function App() {
  const [db, setDb] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosar, setKosar] = useState([]);
  const kosarModel = new KosarModel(kosar);

  function kosarFeldolgoz(adat) {
    console.log(db);
    kosarModel.kosarba(adat)
    setDb(KosarModel.getOsszdb());
    setOsszAr(KosarModel.getOsszAr());
    setKosar(KosarModel.getKosar());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section className="kosar">
        <p>A könyvek száma: {db}</p>
        <p>A könyvek összértéke: {osszAr}</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Szerző</th>
              <th>Cím</th>
              <th>Ár</th>
            </tr>
          </thead>
          <tbody>
            {Kosar.konyveim.map((konyv, index) => {
              return <Kosar konyvAdat={konyv} key={index} />;
            })}
          </tbody>
        </table>
        {/*A kosár tartalmának megjelenítése*/}

        <p></p>
      </section>
      <article className="konyvek">
        {konyveim.map((konyv, index) => {
          return (
            <Konyv
              konyvAdat={konyv}
              key={index}
              kosarKattintasMetodus={kosarFeldolgoz}
            />
          );
        })}
      </article>

      <footer className="lablec"></footer>
    </div>
  );
}

export default App;
