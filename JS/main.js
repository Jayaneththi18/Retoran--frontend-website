const btt_btn = document.getElementById("back-to-top");

btt_btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
