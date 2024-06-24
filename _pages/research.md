---
title: "iVizLab - Research"
layout: gridlay
excerpt: "iVizLab -- Research."
sitemap: false
permalink: /research/
---


# Research 


**Our research lab**, consisting of [~67% women (mostly PhDs)]({{ site.url }}{{ site.baseurl }}/team), uses **computational & AI [modeling]({{ site.url }}{{ site.baseurl }}/aiThought) of typically cognitive-based (human mind) phenomena** such as [Meaning, Semantics]({{ site.url }}{{ site.baseurl }}/aiMeaning) 
and [Thought]({{ site.url }}{{ site.baseurl }}/aiThought). These include more human centric areas like  [Creativity]({{ site.url }}{{ site.baseurl }}/aiCreativity) (in general and in [new creativity systems]({{ site.url }}{{ site.baseurl }}/aiArts)), 
[Expression]({{ site.url }}{{ site.baseurl }}/bioBrainVR) (like facial & body expression, speaking, thinking, empathy) as well as cognitive behavior (human and [animal]({{ site.url }}{{ site.baseurl }}/aiAnimals)).
Most of these systems we code, use [advanced AI]({{ site.url }}{{ site.baseurl }}/aiThought) and at times [advanced sensing systems]({{ site.url }}{{ site.baseurl }}/bioBrainVR) and have applications in
[Health]({{ site.url }}{{ site.baseurl }}/aiHealth), Education, [AI Coaches]({{ site.url }}{{ site.baseurl }}/xrAvatars), [Anonymization]({{ site.url }}{{ site.baseurl }}/aiAnon), the [emerging and interactive Arts]({{ site.url }}{{ site.baseurl }}/aiArts), 
talking and expressive [Virtual Humans]({{ site.url }}{{ site.baseurl }}/virtualHumans), [VR, XR Environments/Avatars]({{ site.url }}{{ site.baseurl }}/xrAvatars) and AI Ethics (e.g. [Gender]({{ site.url }}{{ site.baseurl }}/aiEthicsG) & [Climate Change]({{ site.url }}{{ site.baseurl }}/aiEthicsC)). 
<br><br> **Browse our interconnected 'cogs meets AI',  human centric areas, with videos and papers:** <br>

{% assign number_printed = 0 %}
{% for publi in site.data.research %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">

  <strong> [{{ publi.title }}]( {{ publi.page | relative_url }} ) 
  </strong>
  <a href=" {{ publi.page | relative_url }}"><img src="{{ site.url }}{{ site.baseurl }}/images/res/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" /></a>  
  <p>{{ publi.description }}</p>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>


