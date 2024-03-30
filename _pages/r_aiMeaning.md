---
title: "iVizLab - Research"
layout: textlay
excerpt: "iVizLab -- Semantic Meaning & Analysis"
sitemap: false
permalink: /aiMeaning/
---

# Semantic Meaning & Analysis


<strong> [See Related Papers](#paperSection) and Related Projects:</strong> <br>
 ## [AI-based Exploration of Art and Design]({{ site.url }}{{ site.baseurl }}/aiArts) ## [AI Anonymization]({{ site.url }}{{ site.baseurl }}/aiAnon) ## [AI Cognitive Creativity]({{ site.url }}{{ site.baseurl }}/aiCreativity)<br>
 ## [Sensing Humans (Bio/Brain/Face/Movement/VR)]({{ site.url }}{{ site.baseurl }}/bioBrainVR) ## [AI Modeling Thought & Language]({{ site.url }}{{ site.baseurl }}/aiThought) <br>

Reseachers: Steve DiPaola, Suk Choi, Meehae Song, Nouf Abukhodair, Vanessa Utz


**The Research:**
Early Deep Learning systems are trained on huge datasets including text/image pairs that while can embed simple meaning, are still mainly trained on nouns like people and objects. Our main research area is to go beyond that to deeper Semantic Meaning & Analysis work. Which parses and models more multimodal and deeper semantic meaning to AI work. We do this by both analyzing meaning space (cognitive science of the arts, gesture, emotion, empathy, creativity, behavior etc.) but also then build models from cognitively and rigorously mapping these spaces that we can then use in our new emerging systems (with application in health, the arts, and education).
<br><br>

**See samples of our work in the figures below:**
<br> <br> <br>
Our work into a new method to understand, measure and model "aesthic emotion" (see studies and papers):
<img src="{{ site.url }}{{ site.baseurl }}/images/res/s1.jpg" class="img-responsive" width="70%"/>
**Figure 1:** Overview of the Emotion Wheel created by Song & Abukhodair
<br> <br>

<img src="{{ site.url }}{{ site.baseurl }}/images/res/s2.jpg" class="img-responsive" width="70%"/>
**Figure 2:** Explanation of the Emotion Wheel
<br> <br>

<img src="{{ site.url }}{{ site.baseurl }}/images/res/s3.jpg" class="img-responsive" width="70%"/>
**Figure 3:** Explanation of the Emotion Wheel - Secondary Emotion Selection
<br> <br> <br>


<img src="{{ site.url }}{{ site.baseurl }}/images/res/s4.jpg" class="img-responsive" width="70%"/>
**Figure 4:** Reverse engineering generative visual AI systems to better understand current meaning making to improve them. Here an emotionally complex prompt “an angry man punching a bag in a crowded joyful gym”.
<br> <br>
<img src="{{ site.url }}{{ site.baseurl }}/images/res/s5.jpg" class="img-responsive" width="70%"/>
**Figure 5:** The diffusion based output where we then used an advanced system to reverse detect and heatmap the meaning of every word back through the system.

<br> <br> <br>

Deep studies with eye tracking, on how an art viewer perceives (cognitively) artwork where we AI redraw masterwork (switch left/right eye detail & lost and found edges near chin). See several papers and over 200 press articles on our findings - like this one [Magic of Rembrandt's Painting Technique Revealed](https://www.livescience.com/9920-magic-rembrandt-painting-technique-revealed.html):
<img src="{{ site.url }}{{ site.baseurl }}/images/res/s6.jpg" class="img-responsive" width="70%"/>
**Figure 6:** Diagram from eye-tracking study showing that greater detail on a painted eye leads to quicker, longer and more frequent fixations.
<br> <br> <br>
Additional studies on deep meaning in aesthics, emotions, creativity, empathy etc ( see papers):
<img src="{{ site.url }}{{ site.baseurl }}/images/res/artsuk1.jpg" class="img-responsive" width="70%"/>
**Figure 7:** Desk setup for study on an artist's creative process.
<br> <br> 
<img src="{{ site.url }}{{ site.baseurl }}/images/res/s7.jpg" class="img-responsive" width="70%"/>
**Figure 8:** Diagram of eye-tracking data during an artist's creative process during a sketching task.
<br> <br>
<img src="{{ site.url }}{{ site.baseurl }}/images/res/s8.jpg" class="img-responsive" width="70%"/>
**Figure 9:** Outling the Source-Path-Goal Schema as applied to creative interactivity.
<br> <br>

<iframe width="450" height="230" src="https://www.youtube.com/embed/N4Xr6Zm7Fes?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 1:** Video of the study shown in Figures 7, 8 and 9.
<br> <br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/O_FaV-6hahM?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 2:** Video of demo - system to track facial emotion expression to adapt visual appearance of video (to reflect subject's emotional state).


<br> <br> <br>


<div id="paperSection"></div>


**------  PAPERS: Semantic Meaning & Analysis  ------**


{% for publi in site.data.publist %}
  {% if publi.research contains 'aiMeaning' %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} --   <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br> <a href="{{ publi.url }}">{{ publi.display }}
  {% endif %}  
{% endfor %}

