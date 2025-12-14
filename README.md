# Splinter Text

Sometimes I don’t want to style a whole word or heading. I want to style individual letters—to nudge 
a character into place, give one glyph extra weight, or animate a few letters independently.

Sadly, some splitting solutions don’t deliver an always accessible result, so I’ve written my own text splitter.

---

1) To activate splinter.js, add a data- attribute to the element you want to split:

<pre><code>&#60;h2 data-split="toon"&#62;Hum Sweet Hum&#60;/h2&#62;</code></pre>

2) splinter.js separates each word into individual letters and wraps them in a &#60;span&#62; element with a
   toon-char class and aria-hidden attributes applied:

<pre><code>&#60;span class="toon-char" aria-hidden="true"&#62;H&#60;/span&#62;<br>
&#60;span class="toon-char" aria-hidden="true"&#62;u&#60;/span&#62;<br>
&#60;span class="toon-char" aria-hidden="true"&#62;m&#60;/span&#62;</code></pre>

3) splinter.js takes the initial content of the splintered element and adds it as an aria-label
   attribute to help maintain accessibility:

<pre><code>&#60;h2 data-split="toon" aria-label="Hum Sweet Hum"&#62;<br>
  &#60;span class="toon-char" aria-hidden="true"&#62;H&#60;/span&#62;<br>
  &#60;span class="toon-char" aria-hidden="true"&#62;u&#60;/span&#62;<br>
  &#60;span class="toon-char" aria-hidden="true"&#62;m&#60;/span&#62;<br>
&#60;/h2&#62;</code></pre>

4) Lines of text separated by &#60;br&#62; elements are wrapped in a &#60;span&#62; element with a toon-line class
   attribute applied:

<pre><code>&#60;h2 data-split="toon" aria-label="Hum Sweet Hum"&#62;<br>
  &#60;span class="toon-line"&#62;<br>
    &#60;span class="toon-char" aria-hidden="true"&#62;H&#60;/span&#62;<br>
    &#60;span class="toon-char" aria-hidden="true"&#62;u&#60;/span&#62;<br>
    &#60;span class="toon-char" aria-hidden="true"&#62;m&#60;/span&#62;<br>
  &#60;/span&#62;<br>
&#60;br&#62;<br>
[&#8230;…]<br>
&#60;/h2&#62;</code></pre>
