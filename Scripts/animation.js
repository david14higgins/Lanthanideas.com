let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}});

tl.to('#landing-page h1', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
  .to('#landing-page h2', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=2")
  .to('#profile-pic-container', {y: 0, opacity: 1}, "-=2")
  .to('#learn-more-container', {opacity: 1}, "-=1.5")
  .to('.navbar', {y: 0}, '-=3')
  .to('.logo', {opacity: 1}, '-=1.5')
  .to('.toggle-button', {opacity: 1}, '-=2')
  .to('#home-link', {opacity: 1}, '-=2')
  .to('#about-link', {opacity: 1}, '-=2')
  .to('#rare-earth-link', {opacity: 1}, '-=2')
  .to('#service-link', {opacity: 1}, '-=2')
  .to('#contact-link', {opacity: 1}, '-=2')