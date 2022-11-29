import KonyvModel from "../model/KonyvModel.js";
import KonyvekAdminView from "../view/admin/KonyvekAdminView.js";
import KonyvekPublicView from "../view/public/KonyvekPublicView.js";
import KosarModel from "../model/KosarModel.js";
class AdminController {
  constructor() {
    const konyvmodel = new KonyvModel();
    const kosarmodel = new KosarModel();
    $("#admin").on("click", () => {
      konyvmodel.adatBe("../adat.json", this.konyvAdminAdatok);
    });
    $("#public").on("click", () => {
      konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
    });

    $(window).on("modosit", (event) => {
      konyvmodel.adatModosit(event.detail);
    });
    $(window).on("torol", (event) => {
      konyvmodel.adatTorol(event.detail);
    });
    $(window).on("veszem", (event) => {
      kosarmodel.konyvVesz(event.detail);
    });
  }

  konyvAdminAdatok(tomb) {
    new KonyvekAdminView(tomb, $("main"));
  }
  konyvPublicAdatok(tomb) {
    new KonyvekPublicView(tomb, $("main"));
  }
}
export default AdminController;
