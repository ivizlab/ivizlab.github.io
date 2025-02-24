---
title: "iVizLab - Research"
layout: textlay
excerpt: "iVizLab -- AI Modeling Thought & Language"
sitemap: false
permalink: /aiThought/
---

# AI Modeling Thought & Language


<strong> [See Related Papers](#paperSection) and Related Projects:</strong> <br>
 ## [Semantic Meaning & Analysis]({{ site.url }}{{ site.baseurl }}/aiMeaning) ## [AI-based Exploration of Art and Design]({{ site.url }}{{ site.baseurl }}/aiArts) ## [AI Cognitive Creativity]({{ site.url }}{{ site.baseurl }}/aiCreativity)<br>
 ## [Sensing Humans (Bio/Brain/Face/Movement/VR)]({{ site.url }}{{ site.baseurl }}/bioBrainVR)  <br>

Researchers: Steve DiPaola, Rafael Arias Gonzalez, Nilay Yalcin, Maryam Ahmadzadeh


**The Research:**
Our AI work in cognitive modeling of thought, expression and language using advanced AI systems like AI Knowledge Graphs of thought and chained RAG based LLMs. We have on going research on VR simulators where females can pratice negotiating for a raise with their boss, as well as being able to ask any question to a climate change expert ( see video below). Also, allowing the public to talk faithfully (as much as possible) to inspiring historical figures like our Picasso and Van Gogh. With Van Gogh, we used our specific AI pre-processing of times of his life, historical events/people and the 700 letters he wrote in his own words to his brother Theo into a knowledge system that then goes through additional 3D facial expression, body gesture, talking, voice AI systems.
<br> 
<br>


**See figures and videos of our work below:**
<br>

<img src="{{ site.url }}{{ site.baseurl }}/images/res/vg1.jpg" class="img-responsive" width="70%"/>
**Figure 1:** Cognitive modeling of our virtual Van Gogh.
<br>
<br>
<br>

<img src="{{ site.url }}{{ site.baseurl }}/images/res/vg2.jpg" class="img-responsive" width="70%"/>
**Figure 2:** Sample of user conversation with our Van Gogh model.
<br>
<br>
<br>

<img src="{{ site.url }}{{ site.baseurl }}/images/res/vg3.jpg" class="img-responsive" width="70%"/>
**Figure 3:** Our VR characters even dynamically morph into painted forms based on their emotional state.
<br>
<br>
<br>

<iframe width="550" height="330" src="https://www.youtube.com/embed/m64_xhSzbYw?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 1:** Our interactive realtime advanced AI /VR character talking with DiPaola about any aspect of climate change via its knowlevge base.
(Multi document knowledge base, RAG system, expression, emotion, gesture, lipsyc, experssive voice).
<br>
<br>

<iframe width="550" height="330" src="https://www.youtube.com/embed/Up7rLNkDkRo?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 2:** Talking with our Virtual AI Picasso live (created with ivizlab research and [Virtro](https://www.virtro.ca/))
<br>
<br>


<div id="paperSection"></div>


**------  PAPERS: AI Modeling Thought & Language  ------**


{% for publi in site.data.publist %}
  {% if publi.research contains 'aiThought' %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} --   <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br> <a href="{{ publi.url }}">{{ publi.display }}
  {% endif %}  
{% endfor %}

