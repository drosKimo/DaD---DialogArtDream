document.addEventListener('DOMContentLoaded', function () {
    // Находим все контейнеры с фильтрами
    const filtersContainers = document.querySelectorAll('.filters');

    // Перебираем каждый контейнер
    filtersContainers.forEach(container => {
        // Находим все кнопки внутри текущего контейнера
        const buttons = container.querySelectorAll('button');

        // Добавляем класс .active к первой кнопке
        buttons[0].classList.add('active');

        // Добавляем обработчик клика на каждую кнопку
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                // Убираем класс .active у всех кнопок в текущем контейнере
                buttons.forEach(btn => btn.classList.remove('active'));
                // Добавляем класс .active к выбранной кнопке
                this.classList.add('active');
            });
        });
    });
});