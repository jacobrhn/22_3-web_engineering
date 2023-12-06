export function renderHeader(divId) {
    const headerDiv = document.getElementById(divId);

    const headerHTML = `
        <div class="dineinsight-logo">
            <a href="index.html">
                <img src="assets/logos/DS_Logo.PNG" alt="DineInsight Logo">
            </a>
        </div>
        <nav class="generic-nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="objects.html">Objects</a></li>
                <li><a href="favorites.html">Favorites</a></li>
                <li><a href="charts.html">Charts</a></li>
                <li><a href="contact.html">Contact</a></li>                
            </ul>
        </nav>
    `;

    headerDiv.innerHTML = headerHTML;
}
