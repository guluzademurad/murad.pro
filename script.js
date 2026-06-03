const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

function performSearch() {
    // Получаем текст из строки поиска и убираем лишние пробелы
    const query = searchInput.value.trim();
    
    if (query) {
        // Формируем ссылку для поиска в Google. 
        // encodeURIComponent нужна, чтобы корректно передавать пробелы и спецсимволы (?, &, #)
        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        
        // ВАРИАНТ 1: Открыть поиск в этой же вкладке
        window.location.href = googleUrl;

        // ВАРИАНТ 2: Открыть поиск в новой вкладке (если хочешь так, то сотри строку выше и раскомментируй эту)
        // window.open(googleUrl, '_blank');
    }
}

// Слушатель клика по кнопке "Искать"
searchButton.addEventListener('click', performSearch);

// Слушатель нажатия клавиши Enter в поле ввода
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});