"false" == checkConnect() && (window.location = "/PortailSofrecom/connexion");
function getParameterByName(e, r) {
  r || (r = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
  var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(r);
  return o ? (o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "") : null;
}
var ref = getParameterByName("ref"),
  source = getParameterByName("source"),
  id = getParameterByName("id");
var button = document.getElementById("save");
function renderLists() {
  $("#save").click(function () {
    var $this = $(this);
    $this.button("loading");
    setTimeout(function () {
      $this.button("reset");
    }, 9000);
  });
  var e = document.getElementById("DebExp");
  1 == e.options[e.selectedIndex].value &&
    ((document.getElementById("SOCIET").disabled = !0),
    (document.getElementById("IDINDU").disabled = !0),
    (document.getElementById("POSTEX").disabled = !0),
    (document.getElementById("TXPRWK").disabled = !0),
    (document.getElementById("DATDEB").disabled = !0),
    (document.getElementById("DATFIN").disabled = !0),
    (document.getElementById("ajouter").disabled = !0)),
    $("[name=DebExp]").change(function () {
      1 == e.options[e.selectedIndex].value
        ? ((document.getElementById("SOCIET").disabled = !0),
          (document.getElementById("IDINDU").disabled = !0),
          (document.getElementById("POSTEX").disabled = !0),
          (document.getElementById("TXPRWK").disabled = !0),
          (document.getElementById("DATDEB").disabled = !0),
          (document.getElementById("DATFIN").disabled = !0),
          (document.getElementById("ajouter").disabled = !0))
        : ((document.getElementById("SOCIET").disabled = !1),
          (document.getElementById("IDINDU").disabled = !1),
          (document.getElementById("POSTEX").disabled = !1),
          (document.getElementById("TXPRWK").disabled = !1),
          (document.getElementById("DATDEB").disabled = !1),
          (document.getElementById("DATFIN").disabled = !1),
          (document.getElementById("ajouter").disabled = !1));
    });
  [
    {
      path: "RepUIH",
      elementId: "QUALIT",
    },
    {
      path: "RepUIN",
      elementId: "NATION",
    },
    {
      path: "RepUGP",
      elementId: "SEXEMP",
    },
    {
      path: "RepUIL",
      elementId: "SITFAM",
    },
    {
      path: "RepW02",
      elementId: "ADCACO",
    },
    {
      path: "RepUIN",
      elementId: "CDPAYS",
    },
    {
      path: "RepU4G",
      elementId: "IDINDU",
    },
    {
      path: "RepU25",
      elementId: "LIBELLE",
    },
    {
      path: "RepUIT",
      elementId: "CODLAN",
    },
    {
      path: "RepUGX",
      elementId: "NIVLUE",
    },
    {
      path: "RepUGX",
      elementId: "NIVPAR",
    },
    {
      path: "RepUGX",
      elementId: "NIVECR",
    },
    {
      path: "RepUIN",
      elementId: "CDPAYD",
    },
    {
      path: "RepUHT",
      elementId: "PLOMCD",
    },
    {
      path: "RepHPK",
      elementId: "SPECIA",
    },
    {
      path: "RepU5T",
      elementId: "IDSCHO",
    },
    {
      path: "RepU26",
      elementId: "LVPROF",
    },
  ].forEach(function (e) {
    var t = e.elementId;
    fetch("getlist/" + e.path, {
      method: "GET",
      credentials: "include",
    })
      .then((e) => {
        var n = e.headers.get("content-type");
        return n && -1 !== n.indexOf("application/json")
          ? e.json().then(function (e) {
              for (
                var n = document.getElementById(t), l = 0;
                l < e.length;
                l++
              ) {
                var d = document.createElement("option");
                (d.innerHTML = e[l]), (d.value = e[l]), n.appendChild(d);
              }
            })
          : (console.log("Oops, nous n'avons pas du JSON!"), e.text());
      })
      .catch((e) => {});
  });
}
function renderExpLists(e) {
  [
    {
      path: "RepU4G",
      elementId: "IDINDU" + e,
    },
  ].forEach(function (e) {
    var t = e.elementId;
    fetch("getlist/" + e.path, {
      method: "GET",
      credentials: "include",
    })
      .then((e) => {
        var n = e.headers.get("content-type");
        return n && -1 !== n.indexOf("application/json")
          ? e.json().then(function (e) {
              for (
                var n = document.getElementById(t), l = 0;
                l < e.length;
                l++
              ) {
                var d = document.createElement("option");
                (d.innerHTML = e[l]), (d.value = e[l]), n.appendChild(d);
              }
            })
          : (console.log("Oops, nous n'avons pas du JSON!"), e.text());
      })
      .catch((e) => {});
  });
}
fetch("authentication", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
  credentials: "include",
})
  .then((e) => e.text())
  .then((e) => {
    renderLists();
  });
var i_EXP = 1;
function appendText() {
  var e = "TXPRWK" + i_EXP,
    t = "DATDEB" + i_EXP,
    n = "DATFIN" + i_EXP,
    l = "SOCIET" + i_EXP,
    d = "IDINDU" + i_EXP,
    a = "POSTEX" + i_EXP,
    o =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>Entreprise:</label><input type='text' placeholder='Entreprise *' id='" +
      l +
      "' name='" +
      l +
      "'></div>",
    u =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>Secteur:</label><select id='" +
      d +
      "' name='" +
      d +
      "'></select></div>",
    s =
      "<label class='for'>Intitulé du poste:</label><input type='text' placeholder='Intitulé du poste *' id='" +
      a +
      "' name='" +
      a +
      "' required>",
    m =
      "<label class='for'>Principales tâches réalisées:</label><textarea placeholder='Principales tâches réalisées'  id='" +
      e +
      "' name='" +
      e +
      "' required></textarea>",
    c =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>De:</label><input type='text' pattern='([0-9]{2})/([0-9]{2})/([0-9]{4})' placeholder='jj/mm/aaaa *' id='" +
      t +
      "' name='" +
      t +
      "' required></div>",
    i =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>À:</label><input type='text' pattern='([0-9]{2})/([0-9]{2})/([0-9]{4})' placeholder='jj/mm/aaaa' id='" +
      n +
      "' name='" +
      n +
      "'></div>";
  $(".innerExp").append(o, u, s, m, c, i), renderExpLists(i_EXP), i_EXP++;
}
function renderCompLists(e) {
  [
    {
      path: "RepU25",
      elementId: "LIBELLE" + e,
    },
    {
      path: "RepU26",
      elementId: "LVPROF" + e,
    },
  ].forEach(function (e) {
    var t = e.elementId;
    fetch("getlist/" + e.path, {
      method: "GET",
      credentials: "include",
    })
      .then((e) => {
        var n = e.headers.get("content-type");
        return n && -1 !== n.indexOf("application/json")
          ? e.json().then(function (e) {
              for (
                var n = document.getElementById(t), l = 0;
                l < e.length;
                l++
              ) {
                var d = document.createElement("option");
                (d.innerHTML = e[l]), (d.value = e[l]), n.appendChild(d);
              }
            })
          : (console.log("Oops, nous n'avons pas du JSON!"), e.text());
      })
      .catch((e) => {});
  });
}
function renderForLists(e) {
  [
    {
      path: "RepUIN",
      elementId: "CDPAYD" + e,
    },
    {
      path: "RepUHT",
      elementId: "PLOMCD" + e,
    },
    {
      path: "RepHPK",
      elementId: "SPECIA" + e,
    },
    {
      path: "RepU5T",
      elementId: "IDSCHO" + e,
    },
  ].forEach(function (e) {
    var t = e.elementId;
    fetch("getlist/" + e.path, {
      method: "GET",
      credentials: "include",
    })
      .then((e) => {
        var n = e.headers.get("content-type");
        return n && -1 !== n.indexOf("application/json")
          ? e.json().then(function (e) {
              for (
                var n = document.getElementById(t), l = 0;
                l < e.length;
                l++
              ) {
                var d = document.createElement("option");
                (d.innerHTML = e[l]), (d.value = e[l]), n.appendChild(d);
              }
            })
          : (console.log("Oops, nous n'avons pas du JSON!"), e.text());
      })
      .catch((e) => {});
  });
}
function renderLanLists(e) {
  [
    {
      path: "RepUIT",
      elementId: "CODLAN" + e,
    },
    {
      path: "RepUGX",
      elementId: "NIVLUE" + e,
    },
    {
      path: "RepUGX",
      elementId: "NIVPAR" + e,
    },
    {
      path: "RepUGX",
      elementId: "NIVECR" + e,
    },
  ].forEach(function (e) {
    var t = e.elementId;
    fetch("getlist/" + e.path, {
      method: "GET",
      credentials: "include",
    })
      .then((e) => {
        var n = e.headers.get("content-type");
        return n && -1 !== n.indexOf("application/json")
          ? e.json().then(function (e) {
              for (
                var n = document.getElementById(t), l = 0;
                l < e.length;
                l++
              ) {
                var d = document.createElement("option");
                (d.innerHTML = e[l]), (d.value = e[l]), n.appendChild(d);
              }
            })
          : (console.log("Oops, nous n'avons pas du JSON!"), e.text());
      })
      .catch((e) => {});
  });
}
var i_Comp = 1;
function appendTextComp() {
  var e = "LIBELLE" + i_Comp,
    t = "LVPROF" + i_Comp,
    n =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>Libellé compétence:</label><select id='" +
      e +
      "' name='" +
      e +
      "'></select></div>",
    l =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>Niveau compétence:</label><select id='" +
      t +
      "' name='" +
      t +
      "'></select></div>";
  $(".innerComp").append(n, l), renderCompLists(i_Comp), i_Comp++;
}
var i_For = 1;
function appendTextFor() {
  var e = "PLOMCD" + i_For,
    t = "DATDIP" + i_For,
    n = "SPECIA" + i_For,
    l = "IDSCHO" + i_For,
    d = "CDPAYD" + i_For,
    a =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>Diplôme:</label><select id='" +
      e +
      "' name='" +
      e +
      "' required></select><label>Domaine:</label><select id='" +
      n +
      "' name='" +
      n +
      "' required></select></div>",
    o =
      "<div class='col-sm-12 col-md-6 col-lg-6'><label>Université:</label><select id='" +
      l +
      "' name='" +
      l +
      "'></select><label>Date d'obtention:</label><input type='text' pattern='([0-9]{2})/([0-9]{2})/([0-9]{4})' placeholder='jj/mm/aaaa *' id='" +
      t +
      "' name='" +
      t +
      "' required></div>",
    u =
      "<label class='mar'>Pays:</label><br><div align='center'><select id='" +
      d +
      "' name='" +
      d +
      "'></select></div>";
  $(".innerFor").append(a, o, u), renderForLists(i_For), i_For++;
}
var i_Lan = 1;
function appendTextLangue() {
  var e = "CODLAN" + i_Lan,
    t = "NIVECR" + i_Lan,
    n = "NIVLUE" + i_Lan,
    l = "NIVPAR" + i_Lan,
    d =
      "<div class='row'><div class='col-sm-3'><label>Langue:</label><select id='" +
      e +
      "' name='" +
      e +
      "'></select></div><div class='col-sm-3'><label>Ecrit:</label><select id='" +
      t +
      "' name='" +
      t +
      "'></select></div><div class='col-sm-3'><label>Lu:</label><select id='" +
      n +
      "' name='" +
      n +
      "'></select></div><div class='col-sm-3'><label>Parlé:</label><select id='" +
      l +
      "' name='" +
      l +
      "'></select></div></div>";
  $(".innerLangue").append(d), renderLanLists(i_Lan), i_Lan++;
}
function addCandidat() {
  console.log("Going in");
  var e = [];
  e.push(document.getElementById("NATION").value),
    e.push(document.getElementById("SITFAM").value),
    e.push(document.getElementById("DATNAI").value),
    e.push(document.getElementById("VILNAI").value),
    e.push(document.getElementById("NOMUSE").value),
    e.push(document.getElementById("PRENOM").value),
    e.push(document.getElementById("QUALIT").value),
    e.push(document.getElementById("SEXEMP").value),
    e.push(document.getElementById("CDPAYS").value),
    e.push(document.getElementById("ZONADA").value),
    e.push(document.getElementById("ZONADB").value),
    e.push(document.getElementById("ZONADC").value),
    e.push(document.getElementById("CDPOST").value),
    e.push(document.getElementById("NUMTEL1").value),
    e.push(document.getElementById("NUMTEL").value),
    e.push(document.getElementById("SOCIET").value),
    e.push(document.getElementById("IDINDU").value),
    e.push(document.getElementById("POSTEX").value),
    e.push(document.getElementById("TXPRWK").value),
    e.push(document.getElementById("DATDEB").value),
    e.push(document.getElementById("DATFIN").value),
    e.push(document.getElementById("LIBELLE").value),
    e.push(document.getElementById("LVPROF").value),
    e.push(document.getElementById("PLOMCD").value),
    e.push(document.getElementById("DATDIP").value),
    e.push(document.getElementById("SPECIA").value),
    e.push(document.getElementById("IDSCHO").value),
    e.push(document.getElementById("CDPAYD").value),
    e.push(document.getElementById("CODLAN").value),
    e.push(document.getElementById("NIVECR").value),
    e.push(document.getElementById("NIVLUE").value),
    e.push(document.getElementById("NIVPAR").value);
  for (var t = 1; t < i_EXP; t++)
    e.push(document.getElementById("SOCIET" + t).value),
      e.push(document.getElementById("IDINDU" + t).value),
      e.push(document.getElementById("POSTEX" + t).value),
      e.push(document.getElementById("TXPRWK" + t).value),
      e.push(document.getElementById("DATDEB" + t).value),
      e.push(document.getElementById("DATFIN" + t).value);
  var n = [];
  for (t = 1; t < i_Comp; t++)
    n.push(document.getElementById("LIBELLE" + t).value),
      n.push(document.getElementById("LVPROF" + t).value);
  var l = [];
  for (t = 1; t < i_For; t++)
    l.push(document.getElementById("PLOMCD" + t).value),
      l.push(document.getElementById("DATDIP" + t).value),
      l.push(document.getElementById("SPECIA" + t).value),
      l.push(document.getElementById("IDSCHO" + t).value),
      l.push(document.getElementById("CDPAYD" + t).value);
  var d = [];
  for (t = 1; t < i_Lan; t++)
    d.push(document.getElementById("CODLAN" + t).value),
      d.push(document.getElementById("NIVECR" + t).value),
      d.push(document.getElementById("NIVLUE" + t).value),
      d.push(document.getElementById("NIVPAR" + t).value);
  var a = [];
  a.push(document.getElementById("NUMCIN").value),
    a.push(document.getElementById("ADCACO").value),
    a.push(document.getElementById("NMPRES").value),
    a.push(i_EXP),
    a.push(i_Comp),
    a.push(i_For),
    a.push(i_Lan),
    a.push(ref),
    a.push(source),
    a.push(id);
  var o = {
      listMultiple: e,
      listComp: n,
      listFor: l,
      listLan: d,
      listLan: d,
      listTest: a,
    },
    u = document.getElementById("BLOB09").files[0],
    s = document.getElementById("BLOB10").files[0],
    m = document.getElementById("BLOB13").files[0],
    c = new FormData();
  c.append("file", u),
    c.append("jsondata", JSON.stringify(o)),
    c.append("file1", s),
    c.append("file2", m),
    fetch("addservice", {
      method: "POST",
      body: c,
      credentials: "include",
    })
      .then((e) => {
        try {
          var t = e.headers.get("content-type");
          return t && -1 !== t.indexOf("application/json")
            ? e.json().then(function (e) {
                var t = e.TestCin,
                  n = e.TestMatcle;
                "True" == t && "True" == n
                  ? toastr.success(
                      "Votre candidature est enregistrée avec succès, vous recevrez un email de confirmation.",
                      "Bravo !"
                    )
                  : "False" == t
                  ? toastr.error(
                      "Le numéro de carte d’identité nationale que vous venez de saisir existe déjà \n Veuillez vérifier le numéro de votre CIN",
                      "Oups !"
                    )
                  : toastr.error(
                      "Une erreur s’est glissée dans votre saisie, veuillez vérifier à nouveau",
                      "Oups !"
                    );
              })
            : (console.log("Oops, nous n'avons pas du JSON!"), json.TestCin);
        } catch (error) {
          console.log(error);
        }
      })
      .then((e) => {
        console.log(e);
      });
}

function connect() {
  return true;
}
function deconnect() {
  return false;
}
function checkConnect() {
  return true;
}

addCandidat();
console.log("Salut");
