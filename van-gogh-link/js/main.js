document.addEventListener('DOMContentLoaded', () => {
    // Бургер-меню
    const burgerBtn = document.getElementById('burger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const burgerIcon = document.getElementById('burger-icon');

    // Переменные для путей к иконкам
    const burgerIconPath = 'assets/icons/Frame 372.svg';
    const closeIconPath = 'assets/icons/Frame 373.svg';

    // Переменная для отслеживания состояния меню
    let isMenuOpen = false;

    // Обработчик клика по кнопке бургера
    burgerBtn.addEventListener('click', () => {
        // Переключаем состояние меню
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            // Если меню открыто
            mobileNav.style.display = 'block';
            burgerIcon.src = closeIconPath;
        } else {
            // Если меню закрыто
            mobileNav.style.display = 'none';
            burgerIcon.src = burgerIconPath;
        }
    });

    // Закрываем меню при изменении размера окна, если экран становится больше
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1160 && isMenuOpen) {
            // Если ширина окна больше 1160px и меню открыто
            isMenuOpen = false;
            mobileNav.style.display = 'none';
            burgerIcon.src = burgerIconPath;
        }
    });
});