const sections = document.querySelectorAll('.section');
const controlContainer = document.querySelectorAll('.controls');
const controlBtn = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');

function pageTransitions() {
    // Button click active class
    for(let i = 0; i < controlBtn.length; i++) {
        controlBtn[i].addEventListener('click', function () {
            let currentControlBtn = document.querySelectorAll('.active-btn');
            currentControlBtn[0].className = currentControlBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        });
    }

    // Section active class
    body.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        if (id) {
            // // Remove active class from ControlBtn
            // controlContainer.forEach( (btn) => {
            //     btn.classList.remove('active');
            // });
            // // Add active class from selected section
            // event.target.classList.add('active');

            // Hide unselected sections
            sections.forEach( (section) => {
                section.classList.remove('active');
            });

            // Grab the id of the selected section
            const el = document.getElementById(id);
            el.classList.add('active');
        }
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let elBody = document.body;
        elBody.classList.toggle('light-mode');
    })
}

pageTransitions();