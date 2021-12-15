"use strict";
{
  const open = document.querySelector(".open");
  const open02 = document.querySelector(".open02");
  const mask = document.getElementById("mask");
  const mask02 = document.getElementById("mask02");
  const modal = document.getElementById("modal");
  const modal02 = document.getElementById("modal02");
  const close = document.getElementById("close");
  const close02 = document.getElementById("close02");


open.addEventListener("click", () => {
  modal.classList.remove("hidden");
  mask.classList.remove("hidden");
});

open02.addEventListener("click", () => {
  modal02.classList.remove("hidden");
  mask02.classList.remove("hidden");
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
  mask.classList.add("hidden");
});
close02.addEventListener("click", () => {
  modal02.classList.add("hidden");
  mask02.classList.add("hidden");
});

mask.addEventListener("click", () => {
  close.click();
});
mask02.addEventListener("click", () => {
  close02.click();
});
}