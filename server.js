// Fetch connection data using a standard, public lookup utility
async function fetchConnectionData() {
    try {
        const response = await fetch('https://ipify.org');
        if (!response.ok) throw new Error('Network response failed');
        
        const data = await response.json();
        
        // Display the results dynamically on the webpage
        document.getElementById('ip-display').innerText = `Public IP: ${data.ip}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('ip-display').innerText = 'Unable to load network details.';
    }
}

// Run the function immediately when the webpage loads
window.onload = fetchConnectionData;
