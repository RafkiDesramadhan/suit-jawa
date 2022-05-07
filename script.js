const getPilihanComputer = () => {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
};

const getHasil = (player, comp) => {
  let info = document.querySelector(".info");
  if (player == comp) {
    setTimeout(() => {
      info.style.backgroundColor = "#ffcc00";
      info.style.color = "black";
    }, 1000);
    return "SERI";
  }

  //   if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  //   if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  //   if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";

  if (player == "gajah") {
    if (comp == "orang") {
      setTimeout(() => {
        info.style.backgroundColor = "#339900";
        info.style.color = "white";
      }, 1000);
      return "MENANG!";
    } else {
      setTimeout(() => {
        info.style.backgroundColor = "#d9534f";
        info.style.color = "white";
      }, 1000);
      return "KALAH..";
    }
  }

  if (player == "orang") {
    if (comp == "gajah") {
      setTimeout(() => {
        info.style.backgroundColor = "#d9534f";
        info.style.color = "white";
      }, 1000);
      return "KALAH..";
    } else {
      setTimeout(() => {
        info.style.backgroundColor = "#339900";
        info.style.color = "white";
      }, 1000);
      return "MENANG!";
    }
  }

  if (player == "semut") {
    if (comp == "orang") {
      setTimeout(() => {
        info.style.backgroundColor = "#d9534f";
        info.style.color = "white";
      }, 1000);
      return "KALAH..";
    } else {
      setTimeout(() => {
        info.style.backgroundColor = "#339900";
        info.style.color = "white";
      }, 1000);
      return "MENANG!";
    }
  }
};

const putar = () => {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 100);
};

let scorePlayer = 0;
let scoreComputer = 0;
let kesempatan = 3;
const pilihan = document.querySelectorAll("li img");
pilihan.forEach((pil) => {
  pil.addEventListener("click", () => {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanPlayer, pilihanComputer);

    putar();
    setTimeout(() => {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);
    }, 1000);

    // info text
    const info = document.querySelector(".info");
    setTimeout(() => {
      info.innerHTML = hasil;
    }, 1000);

    // score
    if (hasil === "SERI") {
      scorePlayer += 0;
      scoreComputer += 0;
    } else if (hasil === "MENANG!") {
      scorePlayer++;
      scoreComputer += 0;
    } else {
      scorePlayer += 0;
      scoreComputer++;
      kesempatan--;
    }

    const idKesempatan = document.querySelector("#kesempatan");
    const idPlayer = document.querySelector("#score-player");
    const idComputer = document.querySelector("#score-computer");

    setTimeout(() => {
      idKesempatan.innerHTML = kesempatan;
      idPlayer.innerHTML = scorePlayer;
      idComputer.innerHTML = scoreComputer;
    }, 1000);

    if (scorePlayer > 3) {
      scorePlayer = 0;
      scoreComputer = 0;
      idPlayer.innerHTML = 0;
      idComputer.innerHTML = 0;
      swal("Kamu Menang!");
      kesempatan = 3;
      idKesempatan.innerHTML = kesempatan;
    } else if (scoreComputer > 3) {
      scoreComputer = 0;
      scorePlayer = 0;
      idPlayer.innerHTML = 0;
      idComputer.innerHTML = 0;
      swal("Kamu kalah..");
      kesempatan = 3;
      idKesempatan.innerHTML = kesempatan;
    }
  });
});

const darkMode = () => {
  document.body.style.backgroundColor = "#333";
  const p = document.querySelectorAll("p");
  const h2 = document.querySelectorAll("h2");
  const list = document.querySelectorAll("ol li");
  const areaScore = document.querySelector(".area-score");
  areaScore.style.color = "white";
  p.forEach((p) => {
    p.style.color = "white";
  });
  h2.forEach((h2) => {
    h2.style.color = "white";
  });
  list.forEach((list) => {
    list.style.color = "white";
  });
};

const lightMode = () => {
  document.body.style.backgroundColor = "lightgrey";
  const p = document.querySelectorAll("p");
  const pFooter = document.querySelector("footer p");
  const h2 = document.querySelectorAll("h2");
  const list = document.querySelectorAll("ol li");
  const areaScore = document.querySelector(".area-score");
  areaScore.style.color = "black";
  p.forEach((p) => {
    p.style.color = "black";
  });
  pFooter.style.color = "white";
  h2.forEach((h2) => {
    h2.style.color = "black";
  });
  list.forEach((list) => {
    list.style.color = "black";
  });
};

const btnModeDark = document.querySelector("#btnModeDark");
btnModeDark.addEventListener("click", darkMode);

const btnModeLight = document.querySelector("#btnModeLight");
btnModeLight.addEventListener("click", lightMode);
