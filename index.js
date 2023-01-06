const rop = document.querySelectorAll("#step");
const climber = document.querySelector(".cli");
const all = document.querySelector("html");
const flag = document.querySelector(".flag");
const pauk = document.querySelector(".pauk");

let rew = 0;
function uper() {
  all.addEventListener("keydown", (event) => {
    if (event.key === "z") {
      rew--;
      event.preventDefault();
      rop[rew].appendChild(climber);
      rop[rew - 1].appendChild(pauk);
    }

    if (event.key === "x") {
      rew++;
      if (event.key === "x" && rew === 5) {
        // rop[rew].appendChild(climber);
        rop[rew].appendChild(flag);
      } else event.preventDefault();
      rop[rew].appendChild(climber);
      rop[rew - 1].appendChild(pauk);
    }

    console.log(rop[rew]);
    console.log(rew);
  });
}

uper();
