import "./App.css";
import "./Konyv.css";
function Konyv(props) {
  let konyvAdat = [];
  function kosarba() {
    console.log(props.konyvAdat.id);
    props.kosarKattintasMetodus(props.konyvAdat.id);
  }
  function kosarFeldolgoz() {
    console.log(konyvAdat.id);

  }

  return (
    <div className="Konyv">
            <h3>szerző: {props.konyvAdat.szerzo}</h3>     {" "}
      <p>cím: {props.konyvAdat.cim}</p>      <p>ár: {props.konyvAdat.ar}</p>   
        <button onClick={kosarba}>Kosárba</button>   {" "}
    </div>
  );
}

export default Konyv;

//szerző, cím, ár
