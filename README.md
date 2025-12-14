# Splinter Text

Sometimes I don’t want to style a whole word or heading. I want to style individual letters—to nudge 
a character into place, give one glyph extra weight, or animate a few letters independently.

In plain HTML and CSS, there’s only one reliable way to do that: wrap each character in its own span 
element. I could do that manually, but that would be fragile, hard to maintain, and would quickly fall 
apart when copy changes. Instead, when I need per-letter control, I’ve used a text-splitting library 
which takes a text node and automatically wraps words or characters, giving me extra hooks to animate 
and style without messing up my markup.

Sadly, some splitting solutions don’t deliver an always accessible result, so I’ve written my own text splitter.
