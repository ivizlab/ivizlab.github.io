---
title: "iVizLab - AI Ethics: Gender"
layout: textlay.njk
excerpt: "iVizLab -- AI Ethics: Gender"
permalink: /aiEthicsG/
researchTag: aiEthicsG
---

# AI Ethics: Gender

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[AI Ethics: Climate](/aiEthicsC) &nbsp; [AI Anonymization](/aiAnon)

Researchers: Prochetta Nag, Nilay Yalcin, Steve DiPaola

**The Research:**
We should note that besides this area, our AI Ethics work is also wide ranging in privacy, climate, security, health, activism, ownership, futures, and outreach.

Our lab is currently 70% female PhDs and Masters which brings a different perspective to our work. We participate in Women in ML and Women in STEM/STEAM outreach. As well as talks, panels and organization on ethics.

**One such work:**
Will AI embodied agents follow the same gender stereotypes of early AI voice systems. Our society is changing its notions of gender stereotypical traits and roles. Virtual agent research should follow, where the old assumptions and research need to be revisited in light of new evidence on the critical gap in gender stereotypes. This research is the first step to highlight that these changing gender stereotypes also apply to virtual agents. By careful examination of the current stereotypical traits and introducing the androgynous agents' concept, we aimed to find an approach to reduce the stereotypical assumptions used by the virtual agent research, rather than reinforcing the bias.
<br>
<img src="/assets/images/res/gender1.jpg" class="img-responsive" width="70%"/>
**Figure 1:** Intro to study on user attitudes towards female and male AI agents.
<br><br>
<img src="/assets/images/res/gender2.jpg" class="img-responsive" width="70%"/>
**Figure 2:** Overview of issues with previous work in the field.
<br><br>
<img src="/assets/images/res/gender3.jpg" class="img-responsive" width="70%"/>
**Figure 3:** Samples of characters designed for this study.
<br><br>

<div id="paperSection"></div>

**------ PAPERS: AI Ethics: Gender ------**

[Papers](https://www.researchgate.net/profile/Procheta-Nag-2)

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
