---
title: "iVizLab - AI Modeling Animals"
layout: textlay.njk
excerpt: "iVizLab -- AI Modeling Animals"
permalink: /aiAnimals/
researchTag: aiAnimals
---

# AI Modeling Animals

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[Semantic Meaning & Analysis](/aiMeaning) &nbsp; [AI Modeling Thought & Language](/aiThought)<br>
[AI Affective Virtual Human](/virtualHumans) &nbsp; [XR Avatars; Edu, Coaches, Health](/xrAvatars) &nbsp; [Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR)

Researchers: Steve DiPaola, Bill Kraus

**The Research:**
Our AI work here is in analysing and simulating complex (human and) animal behavior using Action Selection AI, Semantic Analysis and Deep Neural Networks (see papers). Our work with Semantic Analysis specifically on Dogs is being used (MITACS granted work) for veterinary sciences including understanding the health of a dog.
Our AI simulation work and technology is becoming increasingly incorporated into exhibit design. Both on the floor and extended online. Our AI work focuses on the design of VR AI interactive exhibits for an aquarium gallery. The goal was to use technology to better immerse and engage the visitors in complicated educational concepts about the life of wild belugas.
<br><br>

**See samples of the work below:**
<br>
<img src="/assets/images/res/dog.jpg" class="img-responsive" width="70%"/>
**Figure 1:** Semantic Analysis on Dogs is being used (MITACS granted work) for veterinary health.
<br><br>

<img src="/assets/images/res/whale1.jpg" class="img-responsive" width="70%"/>
**Figure 2:** Aquarium visitors interacting with virtual belugas.
<br><br>

<img src="/assets/images/res/whale2.jpg" class="img-responsive" width="70%"/>
**Figure 3:** Diagram of the belugas' AI "brain structure".
<br><br>

<img src="/assets/images/res/whale3.jpg" class="img-responsive" width="70%"/>
**Figure 4:** Diagram of the belugas' neural net.
<br><br><br>

<div id="paperSection"></div>

**------ PAPERS: AI Modeling Animals ------**

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
