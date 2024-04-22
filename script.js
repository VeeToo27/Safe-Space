document.addEventListener("DOMContentLoaded", function() {
    // Show chatbot popup after 5 seconds
    setTimeout(showChatbotPopup, 5000);

    // Check if dark mode preference exists in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode if preference exists
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Parse JSON data from the script tag
    const jsonData = JSON.parse(document.getElementById('news-data').textContent);

    // Get the news container
    const newsContainer = document.getElementById('news-container');

    // Loop through each news item
    jsonData.forEach(newsItem => {
        // Create a div for the news item
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-item');

        // Create elements for title, description, and link
        const title = document.createElement('h3');
        title.textContent = newsItem.title;

        const description = document.createElement('p');
        description.textContent = newsItem.description;

        const link = document.createElement('a');
        link.href = newsItem.link;
        link.textContent = 'Read More';

        const image = document.createElement('img');
        image.src = newsItem.image;
        image.alt = newsItem.title;

        // Set width and height attributes for the image (adjust values as needed)
        image.width = 200; // Set the desired width
        image.height = 150; // Set the desired height

        // Append image before the link
        newsDiv.appendChild(image);

        // Append elements to the news item div
        newsDiv.appendChild(title);
        newsDiv.appendChild(description);
        newsDiv.appendChild(link);

        // Append the news item div to the news container
        newsContainer.appendChild(newsDiv);
    });
});

function showChatbotPopup() {
    var chatbotPopup = document.getElementById("chatbot-popup");
    chatbotPopup.style.display = "block";
}

function toggleDarkMode() {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // Store dark mode preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
