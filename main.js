document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("go").addEventListener("click", function () {
    const e = document.getElementById("firstComand").value,
      n = document.getElementById("secondComand").value;
    switch (document.getElementById("comand").value) {
      case "MOV":
        document.getElementById(`span${n}`).innerHTML = document.getElementById(
          `span${e}`
        ).innerText;
        break;
      case "SWAP":
        const t = document.getElementById(`span${e}`).innerText,
          d = document.getElementById(`span${n}`).innerText;
        (document.getElementById(`span${n}`).innerText = t),
          (document.getElementById(`span${e}`).innerText = d);
        break;
      case "ADD":
        const l =
          document.getElementById(`${e}`).value +
          document.getElementById(`${n}`).value;
        document.getElementById(`span${n}`).innerText = `#${Number(l).toString(
          16
        )}`;
        break;
      case "SUB":
        const o =
          document.getElementById(`${e}`).value -
          document.getElementById(`${n}`).value;
        document.getElementById(`span${n}`).innerText = `#${Number(o).toString(
          16
        )}`;
    }
  });
  const e = ["ax", "bx", "cx", "dx"];
  document
    .getElementById("firstComand")
    .addEventListener("change", function () {
      const n = document.getElementById("firstComand").value;
      e.forEach((e) => {
        document.getElementById(`s${e}`).style.display = "block";
      }),
        (document.getElementById(`s${n}`).style.display = "none");
    }),
    document
      .getElementById("secondComand")
      .addEventListener("change", function () {
        const n = document.getElementById("secondComand").value;
        e.forEach((e) => {
          document.getElementById(`f${e}`).style.display = "block";
        }),
          (document.getElementById(`f${n}`).style.display = "none");
      }),
    e.forEach((e) => {
      document.getElementById(e).addEventListener("blur", function () {
        (document.getElementById(e).parentElement.children[1].style.display =
          "none"),
          (document.getElementById(
            e
          ).parentElement.children[2].innerHTML = `#${Number(
            this.value
          ).toString(16)}`),
          (document.getElementById(e).parentElement.children[2].style.display =
            "inline-block");
      });
    }),
    e.forEach((e) => {
      document.getElementById(e).addEventListener("input", function () {
        console.log(this.value),
          console.log(isNaN(this.value)),
          isNaN(this.value) &&
            (this.value = this.value.slice(0, this.value.length - 1));
      });
    }),
    e.forEach((e) => {
      document
        .getElementById(`span${e}`)
        .addEventListener("click", function () {
          (document.getElementById(e).parentElement.children[1].style.display =
            "inline-block"),
            document.getElementById(e).parentElement.children[1].focus(),
            (document.getElementById(
              e
            ).parentElement.children[2].style.display = "none");
        });
    });
});
