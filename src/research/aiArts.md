---
title: "iVizLab - AI-based Exploration of Art and Design"
layout: textlay.njk
excerpt: "iVizLab -- AI-based Exploration of Art and Design"
permalink: /aiArts/
researchTag: aiArts
---

# AI-based Exploration of Art and Design

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[AI Anonymization](/aiAnon) &nbsp; [Semantic Meaning & Analysis](/aiMeaning)
[AI Modeling Thought & Language](/aiThought)<br>
[Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR)
[AI Cognitive Creativity](/aiCreativity) &nbsp; [AI Ethics: Gender](/aiEthicsG) &nbsp; [AI Ethics: Climate](/aiEthicsC)
<br>

Researchers: Steve DiPaola, Suk Choi, Meehae Song, Nouf Abukhodair, Vanessa Utz, Shannon Cuykendall

**The Research:**
Computational and AI techniques, combined with our research in cognitive science based work in creativity, aesthetics, sensing, movement -- heralds in new forms of art and design, including new exploration / ideation / creation / collaboration techniques.
<br><br><br>

**See samples of our work in the figures below:**
<br><br>

**See samples of the work in the videos below:**
<br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/0oftfWVBang?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 1:** Tour With the Advanced Stream Diffusion based artist tool we built ( ivizDiff ) - we can use source images - and even use several and blend them. And prompts ( again many and weight them) - and either live video or looped video files which we can control in realtime interactively with all our advanced parameters to make a realtime video with full interactive control including as you see here mapping live music, breath work, mic levels, hand gestures, and game controllers.
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/41qYi01eTgQ?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 2:** Demo of live AI architecture ideation using physical controllers: boxes.
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/CJT2ruwi5Yk?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 3:** We used our original tree painting as source combined with the living signals coming off our plant and our creative manipulation to make this music/visuals happen in real time.
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/tbHVtA7-OQs?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 4:** Our work commissioned at ACM SIGGRAPH
<br><br>

Using our systems - users can journey through art and design ideation space:
<img src="/assets/images/res/artmet1.jpg" class="img-responsive" width="50%"/>
<img src="/assets/images/res/artmet2.jpg" class="img-responsive" width="50%"/>
<img src="/assets/images/res/artmet3.jpg" class="img-responsive" width="50%"/>

Our system allows for moving through a space where all is logged and users can journey back and forth and on creative forks - where all parts of the journey are archived and mapped.
<img src="/assets/images/res/artexplor1.jpg" class="img-responsive" width="70%"/>
<img src="/assets/images/res/arte1.jpg" class="img-responsive" width="70%"/>
<img src="/assets/images/res/arte2.jpg" class="img-responsive" width="70%"/>

These techniques have been used by many artists including much work in video and large scale multimedia art including with dancers, and art activism. See work with:
[DANCE](https://1aha1.com/art/portfolio-items/floating-departures) .. and .. [Large Projection](https://1aha1.com/art/portfolio-items/body-as-border-traces-and-flows-of-connection/).
<img src="/assets/images/res/artdance1.jpg" class="img-responsive" width="70%"/>
<img src="/assets/images/res/artdance2.jpg" class="img-responsive" width="70%"/>
<img src="/assets/images/res/arta1.jpg" class="img-responsive" width="70%"/>
<img src="/assets/images/res/artsuk1.jpg" class="img-responsive" width="70%"/>

We often exhibit the work at major museums, galleries, conferences and at talks, interviews (TV News here), panels including discussing ethical implications. See News section for talks.
<img src="/assets/images/res/artPress1.jpg" class="img-responsive" width="70%"/>
<img src="/assets/images/res/artPress2.jpg" class="img-responsive" width="70%"/>

<br>

<div id="paperSection"></div>

**------ PAPERS: AI-based Exploration of Art and Design ------**

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
