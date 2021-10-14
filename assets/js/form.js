const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const sign_in = document.getElementById('sign-in')

// ====== SIGN IN ======
// sign_in.addEventListener('submit',(e) => {
//   e.preventDefault()
// })

// ===== SIGN UP MODE ====
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

// ===== SIGN IN MODE ====
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
