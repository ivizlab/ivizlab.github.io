---
title: "iVizLab - Research"
layout: gridlay.njk
excerpt: "iVizLab -- Research."
permalink: /research/
---

<style>
  .rt-publi-img {
  display: block;
  width: 100%;
  aspect-ratio: 16/9;      
  object-fit: cover;     
  margin-bottom: 12px;
}
</style>

<!-- Title -->
# Research

<!-- Introduction -->
**Our research lab**, consisting of [~70% women (mostly PhDs)](/team), uses **computational & AI [modeling](/aiThought) of typically cognitive-based (human mind) phenomena** such as [Meaning, Semantics](/aiMeaning)
and [Thought](/aiThought). These include more human centric areas like [Creativity](/aiCreativity) (in general and in [new creativity systems](/aiArts)),
[Expression](/bioBrainVR) (like facial & body expression, speaking, thinking, empathy) as well as cognitive behavior (human and [animal](/aiAnimals)).
Most of these systems we code, use [advanced AI](/aiThought) and at times [advanced sensing systems](/bioBrainVR) and have applications in
[Health](/aiHealth), Education, [AI Coaches](/xrAvatars), [Anonymization](/aiAnon), the [emerging and interactive Arts](/aiArts),
talking and expressive [Virtual Humans](/virtualHumans), [VR, XR Environments/Avatars](/xrAvatars) and AI Ethics (e.g. [Gender](/aiEthicsG) & [Climate Change](/aiEthicsC)).

<div style="padding-bottom: 35px;"> </div>

<!-- Grid of research articles -->
{% for row in research | selectattr("highlight", "equalto", 1) | batch(2) %}
<div class="row">
  {% for publi in row %}
  <div class="col-sm-6 clearfix">
    <a href="{{ publi.page }}">
      <img src="/assets/images/res/{{ publi.image }}" class="img-responsive rt-publi-img" />
    </a>
    <strong><a href="{{ publi.page }}">{{ publi.title }}</a></strong>
    <p>{{ publi.description }}</p>
  </div>
  {% endfor %}
</div>
{% endfor %}

<p>&nbsp;</p>
