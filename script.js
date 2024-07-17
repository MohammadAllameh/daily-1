const colorPalettes = [
    { name: 'Default', primary: '#2196F3', secondary: '#FFFFFF', background: '#F0F0F0', text: '#333333', gradient1: '#4158D0', gradient2: '#C850C0', gradient3: '#FFCC70' },
    { name: 'Nature', primary: '#4CAF50', secondary: '#E8F5E9', background: '#C8E6C9', text: '#1B5E20', gradient1: '#00C9FF', gradient2: '#92FE9D', gradient3: '#FFFFFF' },
    { name: 'Sunset', primary: '#FF9800', secondary: '#FFF3E0', background: '#FFE0B2', text: '#E65100', gradient1: '#FF416C', gradient2: '#FF4B2B', gradient3: '#FFFFFF' },
    { name: 'Ocean', primary: '#03A9F4', secondary: '#E1F5FE', background: '#B3E5FC', text: '#01579B', gradient1: '#2E3192', gradient2: '#1BFFFF', gradient3: '#FFFFFF' }
];

let currentPaletteIndex = 0;



function applyColorPalette(palette) {
    document.documentElement.style.setProperty('--primary-color', palette.primary);
    document.documentElement.style.setProperty('--secondary-color', palette.secondary);
    document.documentElement.style.setProperty('--background-color', palette.background);
    document.documentElement.style.setProperty('--text-color', palette.text);
    document.documentElement.style.setProperty('--gradient-1', palette.gradient1);
    document.documentElement.style.setProperty('--gradient-2', palette.gradient2);
    document.documentElement.style.setProperty('--gradient-3', palette.gradient3);
}

function changePalette() {
    currentPaletteIndex = (currentPaletteIndex + 1) % colorPalettes.length;
    applyColorPalette(colorPalettes[currentPaletteIndex]);
}


applyColorPalette(colorPalettes[0]);


const changeButton = document.createElement('button');
changeButton.textContent = 'Change Palette';
changeButton.addEventListener('click', changePalette);
document.body.insertBefore(changeButton, document.body.firstChild);