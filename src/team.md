---
title: "iVizLab - Team"
layout: gridlay.njk
excerpt: "iVizLab: Team members"
permalink: /team/
---

<style>
  .col-sm-6 img.img-responsive {
    display: block;
    margin-bottom: 12px;
    width: 60%;
  }
  .col-sm-4 img.img-responsive {
  display: block;
  width: 70%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  margin-bottom: 12px;
}
  .rt-content-narrow {
    max-width: 900px;
    margin: 0 auto;
  }
</style>

<div class="rt-content-narrow">

# iViz Lab Research Members

## Director / Faculty

<!-- Lead Director, slightly bigger than the rest, one col -->
{% for row in team_members | batch(2) %}
<div class="row">
  {% for member in row %}
  <div class="col-sm-6 clearfix">
    <img src="/assets/images/people/{{ member.photo }}" class="img-responsive" style="width: 75%;" />
    <h4>{{ member.name }}</h4>
    <i>{{ member.tag | safe }}
    {{ member.info | safe }}</i>
    <ul style="overflow: hidden"></ul>
  </div>
  {% endfor %}
</div>
{% endfor %}

<br>

## Lab PostDocs, PhDs, and Masters

<!-- Researchers, two col -->
{% for row in students | batch(2) %}
<div class="row">
  {% for member in row %}
  <div class="col-sm-6 clearfix">
    <img src="/assets/images/people/{{ member.photo }}" class="img-responsive" />
    <h4>{{ member.name }}</h4>
    <i>{{ member.tag | safe }}
    {{ member.info | safe }}</i>
    <ul style="overflow: hidden"></ul>
  </div>
  {% endfor %}
</div>
{% endfor %}

<br>

## Alumni

<!-- Alumni, three col -->
{% for row in alumni_members | batch(3) %}
<div class="row">
  {% for member in row %}
  <div class="col-sm-4 clearfix">
    <img src="/assets/images/people/{{ member.photo }}" class="img-responsive" />
    <h4>{{ member.name }}</h4>
    <i>{{ member.tag | safe }}
    {{ member.info | safe }}</i>
    <ul style="overflow: hidden"></ul>
  </div>
  {% endfor %}
</div>
{% endfor %}