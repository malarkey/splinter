<script>
// Initialize text splitting for elements with data-split="toon"
initTextSplitting('[data-split="toon"]');

function initTextSplitting(selector) {
const elements = document.querySelectorAll(selector);
if (elements.length === 0) {
console.log(`No elements found for selector: "${selector}"`);
return;
}

console.log(`Applying toon text to ${elements.length} element(s)`);

elements.forEach(element => {
// Save the original text content for aria-label
const originalText = element.textContent;

// Apply the aria-label with the original text
element.setAttribute('aria-label', originalText);

if (element.innerHTML.includes('<br>')) {
const lines = element.innerHTML.split('<br>');
element.innerHTML = lines.map(line =>
`<span class="toon-line">${line.trim()}</span>`
).join('<br>');
} else {
element.innerHTML = `<span class="toon-line">${element.innerHTML}</span>`;
}
});

toonTextSplitter('.toon-line');
}

function toonTextSplitter(selector) {
const lines = document.querySelectorAll(selector);
let totalChars = 0;

lines.forEach(line => {
const text = line.textContent;
let html = '';

for (let i = 0; i < text.length; i++) {
const char = text[i];
if (char === ' ') {
html += ' ';
} else {
html += `<span class="toon-char" aria-hidden="true">${char}</span>`;
totalChars++;
}
}

line.innerHTML = html;
});

document.querySelectorAll('.toon-char').forEach((char, index) => {
char.style.display = 'inline-block';
});

console.log(`Split into ${totalChars} characters`);
}
</script>
