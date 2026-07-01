---
title: "iVizLab - Research"
layout: gridlay.njk
excerpt: "iVizLab -- Research."
permalink: /research/
---

# Research

**Our research lab**, consisting of [~70% women (mostly PhDs)](/team), uses **computational & AI [modeling](/aiThought) of typically cognitive-based (human mind) phenomena** such as [Meaning, Semantics](/aiMeaning)
and [Thought](/aiThought). These include more human centric areas like [Creativity](/aiCreativity) (in general and in [new creativity systems](/aiArts)),
[Expression](/bioBrainVR) (like facial & body expression, speaking, thinking, empathy) as well as cognitive behavior (human and [animal](/aiAnimals)).
Most of these systems we code, use [advanced AI](/aiThought) and at times [advanced sensing systems](/bioBrainVR) and have applications in
[Health](/aiHealth), Education, [AI Coaches](/xrAvatars), [Anonymization](/aiAnon), the [emerging and interactive Arts](/aiArts),
talking and expressive [Virtual Humans](/virtualHumans), [VR, XR Environments/Avatars](/xrAvatars) and AI Ethics (e.g. [Gender](/aiEthicsG) & [Climate Change](/aiEthicsC)).
<br><br> **Browse our interconnected 'cogs meets AI', human centric areas, with videos and papers:** <br>

{% for row in research | selectattr("highlight", "equalto", 1) | batch(2) %}
<div class="row">
  {% for publi in row %}
  <div class="col-sm-6 clearfix">
    <strong><a href="{{ publi.page }}">{{ publi.title }}</a></strong>
    <a href="{{ publi.page }}"><img src="/assets/images/res/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" /></a>
    <p>{{ publi.description }}</p>
  </div>
  {% endfor %}
</div>
{% endfor %}

<p>&nbsp;</p>
