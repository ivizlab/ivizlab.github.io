---
title: "iVizLab - XR Avatars; Edu, Coaches, Health"
layout: textlay.njk
excerpt: "iVizLab -- XR Avatars; Edu, Coaches, Health"
permalink: /xrAvatars/
researchTag: xrAvatars
---

# XR Avatars; Edu, Coaches, Health

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[AI Modeling Thought & Language](/aiThought) &nbsp; [AI Cognitive Creativity](/aiCreativity)<br>
[AI Affective Virtual Human](/virtualHumans) &nbsp; [Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR)<br>

Researchers: Steve DiPaola, Mahdi Davoodikakhki, Andrey Goncharov, Nilay Ozge Yalcin

**The Research**
XR (VR/AR/3D) systems where a person (at home or work) can fully express themselves as a 3D avatar in desktop or full VR. With and without motion tracking their gestures and facial expressions. For education (fully credited university XR class), as coaches for the elderly and others, and as a trainer in health (like we did here with nurses during covid).

<br><br>
**Samples of our work can be seen below:**
<br><br>
Our work with fully credited university XR class during COVID (COGS100 at SFU) using XR systems with full mocap avatars, interactive multimedia etc.
<iframe width="450" height="230" src="https://www.youtube.com/embed/RMLD7jccv_w?rel=0" frameborder="0" allowfullscreen></iframe>
<iframe width="450" height="230" src="https://www.youtube.com/embed/mkWEz01Z1kw?rel=0" frameborder="0" allowfullscreen></iframe>
<br><br>
Fully reacting AR coaches in front of you, to discuss the Climate Change or here to be there for an elderly woman to help her as an assistant:
<iframe width="450" height="230" src="https://www.youtube.com/embed/JS58OBE0TwM?rel=0" frameborder="0" allowfullscreen></iframe>
<iframe width="450" height="230" src="https://www.youtube.com/embed/2NmsT3VgZXg?rel=0" frameborder="0" allowfullscreen></iframe>
<br><br>
Full motion tracked VR interactive for health training nurses (during COVID):
<iframe width="450" height="230" src="https://www.youtube.com/embed/xB1ZPNC1Vdo?t=16?rel=0" frameborder="0" allowfullscreen></iframe>

<div id="paperSection"></div>

<br><br>
**------ PAPERS: XR Avatars; Edu, Coaches, Health ------**

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
