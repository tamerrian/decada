document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.querySelector('.contact-form');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.type-card, .song-item, .content-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Хабарламаңыз жіберілді! Рахмет!');
            contactForm.reset();
        }
    });
});
// Burger menu toggle
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Auto-close menu after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Modal data for songs
const songData = {
    gakku: {
        title: "Гәкку",
        history: "«Гәкку» — Үкілі Ыбырайдың ең танымал лирикалық әндерінің бірі. Бұл ән қазақтың дала әуезін, табиғат сұлулығын және нәзік сезімді жырлайды.",
        lyrics: `Үкілі Ыбырайдың әні
Аралап талай жердің дәмін таттым,
Құс салып, айдын көлден дабыл қақтым.
Айта алмай Гәккуімді ешбір адам,
Маймаңдап қоңыр қаздай мамырлаттым.

Қайырмасы:
Гәк-ку, Гәк-ку,
Гак-га, га-га-га-га-га.
Гак-гак-ку, а,
Гәк-ку гәк-ку,
Га-га-га-га-га-га-га а-ау.

Түрленіп тоқсан түрлі ән саламын,
Жай тастап құлашымды, кең аламын.
Түскенде сен есіме, ерке Гәкку,
Құлпыртып осынау әнді еске толғанамын.`
    },

    erkem: {
        title: "Еркем-ай",
        history: "«Еркем-ай» — қазақтың кең таралған көңілді халық әні. Әдетте той мен мереке кезінде айтылады, адам жанына қуаныш сыйлайды.",
        lyrics: `Айт дегенде өлеңді аңырмаймын,
Көлден ұшқан аққудай мамырлаймын.

Еркем-ай,
Бүгін болған мерекең
Болсын тағы ертең-ай.

Қайда жүрсем жақсының жанындамын,
Іздегенмен жаманға табылмаймын.

Еркем-ай,
Бүгін болған мерекең
Болсын тағы ертең-ай.

Әншілердің серігі домбыра ма,
Тарта берсең домбыра болдыра ма.

Еркем-ай,
Бүгін болған мерекең
Болсын тағы ертең-ай.

Домбыраны баппенен қолға алып,
Шарықтата әнге сал оң бұра да.

Еркем-ай,
Бүгінгі күнің тамаша,
Ертең бұдан көркем-ай,
Еркем-ай,
Бүгін болған тамаша,
Болсын тағы ертең-ай.`
    },

    aiym: {
        title: "Әгугай",
        history: "«Әгугай» — «Қыз Жібек» эпикалық жырынан тараған халық әні. Төлеген мен Жібектің махаббатын жырлайды.",
        lyrics: `Ортамызда Төлеген тұрды жорға, ахау,
Сүріпбей ме, боз жорға қазған орға, әгугай.
Қыз-Жібекті ойласаң нең кетеді, ахау,
Орамалы тұрады бес жүз жорға, әгугай.

А-а-ай,
Айың тусын оңыңнан.
Жұлдызың тусын соңыңнан.
Хабарсыз кетсең тым ұзақ,
Сансызбай шығар соңыңнан.

Арамызда Төлеген көп жыл өтті, ахау,
Нелер келіп бұл басқа, нелер кетті, әгугай.
Арада өткен сегіз жыл сергелдеңде, ахау,
Хабар айтып жіберсең нең кетеді-ай, әгугай

А-а-ай,
Қыз-Жібек енді келгенше.
Иіліп сәлем бергеніие.
Даяр етіп қоялық.
Салдырып сарай өзгеше.`
    },

    kamazhai: {
        title: "Қамажай",
        history: "«Қамажай» — қазақтың әйгілі би әндерінің бірі. Махаббат пен әзілді астастыра отырып ширақ ырғақта орындалады.",
        lyrics: `Басында Қамажайдың бір тал үкі,
Айрылып Қамажайдан болдым күлкі.
Айрылып Қамажайдан отырғанда,
Келеді қай жерімнен ойын-күлкі.

Қайырмасы:
Ахау хайлилайьм, лилилайым,
Қамажай, қалдың кейін, сәулетайым.

Қолында Қамажайдың алтын жүзік,
Қамажай отыр ма екен көзін сүзіп.
Көрмесе жарты сағат тұра алмайихы ед,
Апырмай кетті ме екен күдер үзіп.

Қайырмасы.

Ертістің жағалауын жағалаймын,
Мұз болса көк бестіні тағалаймын.
Үш топтан таңдап алған Қамажайым,
Өзіңді тоқсан қызға бағалаймын.

Қайырмасы.

Мал жақсы жылқы деген бағып жүрсе,
Мойнына үкі-тұмар тағып жүрсе.
Ішінен бір жорғаны таңдап мініп,
Ауылына Қамажайдың барып жүрсе.`
    },

    dudarai: {
        title: "Дударай",
        history: "«Дударай» — Мәриям Жагор мен Дудар есімді жігіттің шынайы махаббаты туралы халық әні. Екі жастың сағынышы мен тағдырын бейнелейді.",
        lyrics: `Мәриям Жагор деген орыс қызы,
Он алты, он жетіге келген кезі.
Қазаққа Дудар деген ғашық болып,
Сондағы Мәриямның айтқан сөзі!

Қайырмасы:
Дударари-дудым,
Бір сен ушін тудым!
Шіркін-ай, Дудара-ри-дудым!

Дудар-ай, ақ боз атты жемдедің бе,
Жеріңе уағда айтқан келмедің бе.
Жеріңе уағда айтқан келмей қалып,
Мәриям заты орыс деп сенбедің бе?

Қайырмасы:

Ащыкөл, Тущыкөлдің арасы бір,
Басыңа кәмшат бөрік жарасып жүр.
Дудар-ай, келер болсаң тезірек кел,
Орныңа өңкей жаман таласып жүр.

Қайырмасы:

Қолында Мәриямның өткір қайшы,
Қағазға Мәриям аты жазылсайшы.
Қор болып бір жаманға кеткенімше,
Алдымнан қазулы көр табылсайшы!`
    }
};


const modal = document.getElementById("songModal");
const modalTitle = document.getElementById("modalTitle");
const modalHistory = document.getElementById("modalHistory");
const modalLyrics = document.getElementById("modalLyrics");

document.querySelectorAll('.song-item').forEach(song => {
    song.addEventListener('click', function () {
        const key = this.dataset.song;
        modalTitle.textContent = songData[key].title;
        modalHistory.textContent = songData[key].history;
        modalLyrics.textContent = songData[key].lyrics;
        modal.style.display = "flex";
    });
});

document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none" };
