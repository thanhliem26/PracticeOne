const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleOpenNavigate = () => {
    const button = $('.openNavigate');
    const backgroundFlow = $('#background__flow')
    const Navigate = $('.header__navbar-list');

    button.addEventListener('click', () => {
        backgroundFlow.classList.add("background__flow");
    });

    backgroundFlow.addEventListener('click', () => {
        backgroundFlow.classList.remove("background__flow");
    })

    Navigate.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}
handleOpenNavigate();