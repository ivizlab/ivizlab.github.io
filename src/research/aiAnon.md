---
title: "iVizLab - AI Anonymization"
layout: textlay.njk
excerpt: "iVizLab -- AI Anonymization"
permalink: /aiAnon/
researchTag: aiAnon
---

# AI Anonymization

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[Semantic Meaning & Analysis](/aiMeaning) &nbsp; [AI Modeling Thought & Language](/aiThought) &nbsp; [AI Cognitive Creativity](/aiCreativity)<br>
[Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR) &nbsp; [AI Ethics: Gender](/aiEthicsG) &nbsp; [AI Ethics: Climate](/aiEthicsC)
<br>

Researchers: Steve DiPaola, Vanessa Utz, Nilay Ozge Yalcin

**The Research:**
Bringing together an interdisciplinary team, we have researched and created a **wholly new AI** technique to **anonymize interview subjects and scenes** in regular and 360 videos. Our goal was to create a technique that would be much **better at conveying emotional and knowledge information than current anonymization techniques**. Our studies comparing our AI painterly emotional techniques to the best of the standard pixelization techniques, **show viewers watched longer, empathized with the subject more and were more engaged**. We have now demoed our work to the NY Times, The BBC, and The Washington Post with the hope of bringing this system to the general public to continue our labs goal of **AI for social good**.
<br><br>
**See main site of the project at [aipaint360.org](https://aipaint360.org)**
<br><br><br>

**See samples of the work in the videos below:**
<br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/56-S-gSINgk?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 1:** Sample of VR anonymization for journalistic purposes.
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/O_FaV-6hahM?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 2:** Demo of facial recognition system to track emotional state of subjects.
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/R7Y_XVq9CBI?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 3:** Sample 1 of Standard vs AI anonymization tool.
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/ZOj9DUsx5Ww?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 4:** Sample 2 of Standard vs AI anonymization tool.
<br><br>

<div id="paperSection"></div>

<br><br>
**------ PAPERS: AI Anonymization ------**

See main site at [aipaint360.org](https://aipaint360.org)

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
