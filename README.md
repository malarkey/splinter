# Splinter Text

Sometimes I don’t want to style a whole word or heading. I want to style individual letters—to nudge 
a character into place, give one glyph extra weight, or animate a few letters independently.

Sadly, some splitting solutions don’t deliver an always accessible result, so I’ve written my own text splitter.

---

1) To activate splinter.js, add a data- attribute to the element you want to split:

<h2 data-split="toon">Hum Sweet Hum</h2>

2) splinter.js separates each word into individual letters and wraps them in a <span> element with a
   toon-char class and aria-hidden attributes applied:

<span class="toon-char" aria-hidden="true">H</span>
<span class="toon-char" aria-hidden="true">u</span>
<span class="toon-char" aria-hidden="true">m</span>

3) splinter.js takes the initial content of the splintered element and adds it as an aria-label
   attribute to help maintain accessibility:

<h2 data-split="toon" aria-label="Hum Sweet Hum">
  <span class="toon-char" aria-hidden="true">H</span>
  <span class="toon-char" aria-hidden="true">u</span>
  <span class="toon-char" aria-hidden="true">m</span>
</h2>

4) Lines of text separated by <br> elements are wrapped in a <span> element with a toon-line class
   attribute applied:

<h2 data-split="toon" aria-label="Hum Sweet Hum">
  <span class="toon-line">
    <span class="toon-char" aria-hidden="true">H</span>
    <span class="toon-char" aria-hidden="true">u</span>
    <span class="toon-char" aria-hidden="true">m</span>
  </span>
<br>
[…]
</h2>
