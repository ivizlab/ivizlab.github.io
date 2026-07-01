---
title: "iVizLab - Team"
layout: gridlay.njk
excerpt: "iVizLab: Team members"
permalink: /team/
---

# iViz Lab Research Members

## Director / Faculty

{% for row in team_members | batch(2) %}
<div class="row">
  {% for member in row %}
  <div class="col-sm-6 clearfix">
    <img src="/assets/images/people/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
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

{% for row in students | batch(2) %}
<div class="row">
  {% for member in row %}
  <div class="col-sm-6 clearfix">
    <img src="/assets/images/people/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
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

{% for row in alumni_members | batch(2) %}
<div class="row">
  {% for member in row %}
  <div class="col-sm-6 clearfix">
    <img src="/assets/images/people/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
    <h4>{{ member.name }}</h4>
    <i>{{ member.tag | safe }}
    {{ member.info | safe }}</i>
    <ul style="overflow: hidden"></ul>
  </div>
  {% endfor %}
</div>
{% endfor %}
