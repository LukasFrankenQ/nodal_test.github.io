document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.file-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filename = this.getAttribute('data-filename');
            loadAndCreateButtons(filename);
        });
    });
});

function loadAndCreateButtons(filename) {
    fetch(filename)
        .then(response => response.text())
        .then(text => {
            const container = document.getElementById('buttonsContainer');
            container.innerHTML = ''; // Clear existing buttons
            const lines = text.split('\n');

            lines.forEach(line => {
                const value = parseFloat(line.trim());
                if (!isNaN(value)) {
                    const color = mapValueToColor(value);
                    const button = document.createElement('button');
                    button.style.backgroundColor = color;
                    container.appendChild(button);
                }
            });
        })
        .catch(err => console.error(err));
}

function mapValueToColor(value) {
    // Simple linear interpolation between two colors
    const minColor = [255, 255, 255]; // White
    const maxColor = [0, 0, 255]; // Blue
    return interpolateColor(minColor, maxColor, value);
}

function interpolateColor(minColor, maxColor, fraction) {
    const color = minColor.map((minVal, i) => (minVal + fraction * (maxColor[i] - minVal))).map(val => Math.round(val));
    return `rgb(${color.join(',')})`;
}