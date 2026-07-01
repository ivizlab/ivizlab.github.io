---
title: "iVizLab - AI and Cognitive Health"
layout: textlay.njk
excerpt: "iVizLab -- AI and Cognitive Health"
permalink: /aiHealth/
researchTag: aiHealth
---

# AI and Cognitive Health

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[AI Modeling Thought & Language](/aiThought) &nbsp; [AI Cognitive Creativity](/aiCreativity)<br>
[XR Avatars; Edu, Coaches, Health](/xrAvatars) &nbsp; [Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR)<br>

Researchers: Maryam Ahmadzadeh, Steve DiPaola, Sylvain Moreno

**The Research**

We used Deep Learning techniques on several systematic reviews with the most recent neuroimaging procedures and machine learning approaches for the prediction of conversion from mild cognitive impairment to Alzheimer's disease dementia.
We systematically searched PubMed, SCOPUS, and Web of Science databases following Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) systematic review guidelines.

The multimodality framework and deep learning techniques showed potential for predicting the conversion of MCI to AD dementia.
Findings of these systematic reviews identified that the possibility of using neuroimaging data processed by advanced learning algorithms is promising for the prediction of AD progression.

<br>
<img src="/assets/images/res/aiHealth.jpg" class="img-responsive" width="80%"/>

<div id="paperSection"></div>

<br><br>
**------ PAPERS: AI and Cognitive Health ------**

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
