// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// // Enregistrement du plugin ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// // Fonction d'initialisation GSAP pour l'effet de défilement horizontal
// export function initializeGsap(): void {
//   const projet = document.querySelector('.projet') as HTMLElement;
//   const cards = document.querySelectorAll('.card');

//   if (projet && cards.length > 0) {
//     gsap.to(projet, {
//       xPercent: -100 * (cards.length - 1),
//       ease: 'none',
//       scrollTrigger: {
//         trigger: '.projetTitre',
//         pin: true,
//         scrub: 1,
//         end: () => '+=' + projet.scrollWidth
//       }
//     });
//   }
// }
