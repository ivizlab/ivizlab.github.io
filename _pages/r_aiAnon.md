---
title: "iVizLab - Research"
layout: textlay
excerpt: "iVizLab -- AI Anonymization"
sitemap: false
permalink: /aiAnon/
---

# AI Anonymization 


<strong> [See Related Papers](#paperSection) and Related Projects:</strong> <br>
 ## [Semantic Meaning & Analysis]({{ site.url }}{{ site.baseurl }}/aiMeaning) ## [AI Modeling Thought & Language]({{ site.url }}{{ site.baseurl }}/aiThought)  ## [AI Cognitive Creativity]({{ site.url }}{{ site.baseurl }}/aiCreativity) <br> ## [Sensing Humans (Bio/Brain/Face/Movement/VR)]({{ site.url }}{{ site.baseurl }}/bioBrainVR)
 ## [AI Cognitive Creativity]({{ site.url }}{{ site.baseurl }}/aiCreativity) ## [AI Ethics: Gender]({{ site.url }}{{ site.baseurl }}/aiEthicsG) ## [AI Ethics: Climate]({{ site.url }}{{ site.baseurl }}/aiEthicsC)
<br>

Researchers: Steve DiPaola, Vanessa Utz, Nilay Ozge Yalcin 


**The Research:**
Bringing together an interdisciplinary team, we have researched and created a **wholly new AI** technique to **anonymize interview subjects and scenes** in regular and 360 videos. Our goal was to create a technique that would be much **better at conveying emotional and knowledge information than current anonymization techniques**. Our studies comparing our AI painterly emotional techniques to the best of the standard pixelization techniques, **show viewers watched longer, empathized with the subject more and were more engaged**. We have now demoed our work to the NY Times, The BBC, and The Washington Post with the hope of bringing this system to the general public to continue our labs goal of **AI for social good**.
<br> <br>
**See main site of the project at [aipaint360.org](https://aipaint360.org)**
<br> <br> <br>

**See samples of the work in the videos below:**
<br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/56-S-gSINgk?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 1:** Sample of VR anonymization for journalistic purposes.
<br> <br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/O_FaV-6hahM?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 2:** Demo of facial recognition system to track emotional state of subjects (used to alter the visual appearance of the videos to reflect said state).
<br> <br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/R7Y_XVq9CBI?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 3:** Sample 1 of Standard vs AI anonymization tool.
<br> <br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/ZOj9DUsx5Ww?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 4:** Sample 2 of Standard vs AI anonymization tool.
<br> <br>


<div id="paperSection"></div>


<br><br>
**------  PAPERS: AI Anonymization   ------**

See main site at [aipaint360.org](https://aipaint360.org)

{% for publi in site.data.publist %}
  {% if publi.research contains 'aiAnon' %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} --   <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br> <a href="{{ publi.url }}">{{ publi.display }}
  {% endif %}  
{% endfor %}

