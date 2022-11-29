class KosarView {
  constructor() {


    
  }
  kattintasTrigger(para) {
    const esemeny = new CustomEvent(para, { detail: this.#elem.id });
    window.dispatchEvent(esemeny);
  }
}
