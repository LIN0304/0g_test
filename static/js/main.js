// Cyberpunk Terminal - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const scrapeBtn = document.getElementById('scrapeBtn');
    const loading = document.getElementById('loading');
    const outputContent = document.getElementById('outputContent');
    const timestamp = document.getElementById('timestamp');
    const connectionStatus = document.getElementById('connection-status');

    // Update timestamp
    function updateTimestamp() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: false });
        const dateString = now.toLocaleDateString('en-US');
        timestamp.textContent = `${dateString} ${timeString}`;
    }

    // Initial timestamp
    updateTimestamp();
    setInterval(updateTimestamp, 1000);

    // Format result for terminal display
    function formatResult(data) {
        if (data.error) {
            return `
                <div class="error-msg fade-in">
                    <div class="result-line">
                        <span class="result-label">ERROR:</span>
                        <span class="result-value">${escapeHtml(data.error)}</span>
                    </div>
                </div>
            `;
        }

        let html = '<div class="fade-in">';
        html += '<div class="result-line">';
        html += '<span class="result-label">&gt;&gt; SCRAPE_STATUS:</span>';
        html += '<span class="result-value" style="color: var(--neon-green); text-shadow: 0 0 5px var(--neon-green);">SUCCESS</span>';
        html += '</div>';

        if (data.url) {
            html += '<div class="result-line">';
            html += '<span class="result-label">&gt;&gt; TARGET_URL:</span>';
            html += `<span class="result-value">${escapeHtml(data.url)}</span>`;
            html += '</div>';
        }

        if (data.title) {
            html += '<div class="result-line">';
            html += '<span class="result-label">&gt;&gt; PAGE_TITLE:</span>';
            html += `<span class="result-value">${escapeHtml(data.title)}</span>`;
            html += '</div>';
        }

        if (data.timestamp) {
            html += '<div class="result-line">';
            html += '<span class="result-label">&gt;&gt; TIMESTAMP:</span>';
            html += `<span class="result-value">${escapeHtml(data.timestamp)}</span>`;
            html += '</div>';
        }

        // Display any additional data
        for (const [key, value] of Object.entries(data)) {
            if (!['url', 'title', 'timestamp', 'error'].includes(key)) {
                html += '<div class="result-line">';
                html += `<span class="result-label">&gt;&gt; ${key.toUpperCase()}:</span>`;
                html += `<span class="result-value">${escapeHtml(String(value))}</span>`;
                html += '</div>';
            }
        }

        html += '</div>';
        return html;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Show loading state
    function showLoading() {
        loading.classList.remove('hidden');
        scrapeBtn.disabled = true;
        scrapeBtn.style.opacity = '0.5';
        scrapeBtn.style.cursor = 'not-allowed';
    }

    // Hide loading state
    function hideLoading() {
        loading.classList.add('hidden');
        scrapeBtn.disabled = false;
        scrapeBtn.style.opacity = '1';
        scrapeBtn.style.cursor = 'pointer';
    }

    // Display result
    function displayResult(data) {
        const resultHtml = formatResult(data);
        outputContent.innerHTML = resultHtml;
    }

    // Display error
    function displayError(message) {
        const errorHtml = `
            <div class="error-msg fade-in">
                <div class="result-line">
                    <span class="result-label">SYSTEM_ERROR:</span>
                    <span class="result-value">${escapeHtml(message)}</span>
                </div>
                <div class="system-msg" style="margin-top: 1rem;">
                    Check console for details. Connection may be interrupted.
                </div>
            </div>
        `;
        outputContent.innerHTML = errorHtml;
    }

    // Update connection status
    function updateConnectionStatus(isConnected) {
        if (isConnected) {
            connectionStatus.textContent = 'CONNECTED';
            connectionStatus.style.color = 'var(--neon-green)';
            connectionStatus.style.textShadow = '0 0 5px var(--neon-green)';
        } else {
            connectionStatus.textContent = 'DISCONNECTED';
            connectionStatus.style.color = '#ff5555';
            connectionStatus.style.textShadow = '0 0 5px #ff5555';
        }
    }

    // Perform scrape
    async function performScrape() {
        showLoading();
        updateConnectionStatus(true);

        try {
            // Add terminal-style output
            outputContent.innerHTML = `
                <div class="system-msg fade-in">
                    <span style="color: var(--neon-cyan);">&gt;</span> Initializing neural connection...
                </div>
                <div class="system-msg fade-in">
                    <span style="color: var(--neon-cyan);">&gt;</span> Establishing secure link to target...
                </div>
                <div class="system-msg fade-in">
                    <span style="color: var(--neon-cyan);">&gt;</span> Parsing data stream...
                </div>
            `;

            const response = await fetch('/api/scrape');

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Small delay for effect
            setTimeout(() => {
                displayResult(data);
                hideLoading();
                updateConnectionStatus(true);
            }, 1000);

        } catch (error) {
            console.error('Scrape error:', error);
            hideLoading();
            updateConnectionStatus(false);
            displayError(error.message || 'Unknown error occurred');
        }
    }

    // Button click handler
    scrapeBtn.addEventListener('click', performScrape);

    // Random core count animation
    const coresCount = document.querySelector('.cores-count');
    setInterval(() => {
        const cores = Math.floor(Math.random() * 4) + 6; // Random between 6-9
        coresCount.textContent = cores;
    }, 5000);

    // Easter egg: Konami code
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateMatrixMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateMatrixMode() {
        const glitchElement = document.querySelector('.glitch');
        const originalText = glitchElement.textContent;
        glitchElement.textContent = 'MATRIX MODE';

        // Flash colors
        let colorIndex = 0;
        const colors = ['var(--neon-cyan)', 'var(--neon-magenta)', 'var(--neon-green)', 'var(--neon-yellow)'];

        const interval = setInterval(() => {
            document.documentElement.style.setProperty('--neon-cyan', colors[colorIndex % colors.length]);
            colorIndex++;
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            glitchElement.textContent = originalText;
            // Reset color
            document.documentElement.style.setProperty('--neon-cyan', '#00ffff');
        }, 3000);
    }

    // Add keyboard shortcut (Enter) to execute scrape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !scrapeBtn.disabled) {
            performScrape();
        }
    });

    console.log('%c0G TERMINAL INITIALIZED', 'color: #00ffff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
    console.log('%cNEURAL SCRAPER v2.077', 'color: #ff00ff; font-size: 14px;');
    console.log('%cPress Enter or click EXECUTE to begin...', 'color: #00ff41;');
});
