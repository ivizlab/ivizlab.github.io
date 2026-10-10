---
title: "iVizLab - AI Modeling Thought & Language"
layout: textlay.njk
excerpt: "iVizLab -- AI Modeling Thought & Language"
permalink: /aiThought/
researchTag: aiThought
---

# AI Modeling Thought & Language

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[Semantic Meaning & Analysis](/aiMeaning) &nbsp; [AI-based Exploration of Art and Design](/aiArts) &nbsp; [AI Cognitive Creativity](/aiCreativity)<br>
[Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR)<br>

Researchers: Steve DiPaola, Rafael Arias Gonzalez, Nilay Yalcin, Maryam Ahmadzadeh

**The Research:**
Our AI work in cognitive modeling of thought, expression and language using advanced AI systems like AI Knowledge Graphs of thought and chained RAG based LLMs. We have ongoing research on VR simulators where females can practice negotiating for a raise with their boss, as well as being able to ask any question to a climate change expert (see video below). Also, allowing the public to talk faithfully (as much as possible) to inspiring historical figures like our Picasso and Van Gogh. With Van Gogh, we used our specific AI pre-processing of times of his life, historical events/people and the 700 letters he wrote in his own words to his brother Theo into a knowledge system that then goes through additional 3D facial expression, body gesture, talking, voice AI systems.
<br><br>

**See samples of the work in the videos below:**
<br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/BZ4QcQSoatk?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 1:** Our advanced talking AI character work on creating thinking Virtual Medical Patients for Medical School Education.
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/3H-CUDzBTvo?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 2:** Embodied Conversational AI for Women's Negotiation Training: A Regulatory-Focus-Informed Simulation and Evaluation.
<br><br>

**See figures and videos of our work below:**
<br>

<img src="/assets/images/res/vg1.jpg" class="img-responsive" width="70%"/>
**Figure 1:** Cognitive modeling of our virtual Van Gogh.
<br><br><br>

<img src="/assets/images/res/vg2.jpg" class="img-responsive" width="70%"/>
**Figure 2:** Sample of user conversation with our Van Gogh model.
<br><br><br>

<img src="/assets/images/res/vg3.jpg" class="img-responsive" width="70%"/>
**Figure 3:** Our VR characters even dynamically morph into painted forms based on their emotional state.
<br><br><br>

<iframe width="550" height="330" src="https://www.youtube.com/embed/m64_xhSzbYw?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 3:** Our interactive realtime advanced AI/VR character talking with DiPaola about any aspect of climate change via its knowledge base.
<br><br>

<iframe width="550" height="330" src="https://www.youtube.com/embed/Up7rLNkDkRo?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 4:** Talking with our Virtual AI Picasso live (created with ivizlab research and [Virtro](https://www.virtro.ca/))
<br><br>

<div id="paperSection"></div>

**------ PAPERS: AI Modeling Thought & Language ------**

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
