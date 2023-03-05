const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.easeOut" },
})

tl.fromTo(
  ".welcome h1",
  { y: "100px", opacity: 0 },
  { y: 0, opacity: 1, duration: 2, delay: 0.5 }
)
tl.fromTo(".intro-devinette", { opacity: 0 }, { opacity: 1 })
tl.fromTo(
  ".devinette",
  { opacity: 0 },
  {
    opacity: 1,
    delay: 1,
  }
)
tl.fromTo(".welcome button", { opacity: 0 }, { opacity: 1 })

const welcomeButton = document.querySelector(".welcome button")
welcomeButton.addEventListener("click", () => {
  tl.fromTo(".reponse", { opacity: 0 }, { opacity: 1 })

  tl.fromTo(
    ".welcome img",
    { opacity: 0 },
    {
      opacity: 1,
      delay: 3,
      onComplete: () => {
        const tarantula = document.querySelector(".welcome img")
        tarantula.classList.toggle("spin")
      },
    }
  )
  tl.to(".welcome", { opacty: 0, display: "none" })
})
