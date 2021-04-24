/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL DASAR*/
sr.reveal('.dasar__subtitle',{}); 
sr.reveal('.dasar__text',{}); 
sr.reveal('.dasar__data',{interval: 200}); 
sr.reveal('.dasar__img',{delay: 600});

/*SCROLL KUIS*/
sr.reveal('.sec-title',{delay: 200}); 

/*SCROLL TENTOR*/
sr.reveal('.section-title',{delay: 200}); 
sr.reveal('.card',{delay: 200}); 

/*SCROLL TENTOR*/
sr.reveal('.section-title',{delay: 200});
sr.reveal('.middle',{delay: 300});

/*SCROLL GALERI*/
sr.reveal('.galeri__img', {interval: 300})

/*SCROLL KUIS*/
sr.reveal('.sec-title',{delay: 200}); 
sr.reveal('.counters-item',{delay: 300}); 

/*SCROLL TEKS*/
sr.reveal('.landingText',{delay: 200});
sr.reveal('.landingImage',{delay: 200});
sr.reveal('.infoHeader1',{delay: 100});
sr.reveal('.aboutText',{delay: 200});
sr.reveal('.aboutList',{delay: 200});
sr.reveal('.infoHeader',{delay: 200});
sr.reveal('.infoCards1', {interval: 300});
sr.reveal('.infoCards2', {interval: 300});
sr.reveal('.banner',{delay: 200});
sr.reveal('.bannerTest',{delay: 200});
sr.reveal('.bannerImg',{delay: 200});
sr.reveal('.button',{delay: 200});