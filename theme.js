// Функция для определения и установки темы
function setThemePreference() {
    // Проверяем поддержку matchMedia
    if (window.matchMedia) {
        // Создаем медиа-запрос для темной темы
        const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Устанавливаем начальную тему
        setTheme(darkThemeQuery.matches);
        
        // Используем addEventListener вместо addListener для Safari
        darkThemeQuery.addEventListener('change', (e) => {
            setTheme(e.matches);
        });
    }
}

// Функция установки темы
function setTheme(isDark) {
    // Добавим принудительное обновление для Safari
    requestAnimationFrame(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    });
}

// Запускаем сразу при загрузке скрипта
setThemePreference(); 