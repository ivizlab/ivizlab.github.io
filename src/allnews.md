---
title: "iVizLab - News"
layout: gridlay.njk
excerpt: "iVizLab -- News."
permalink: /allnews/
---

# iViz Lab News

{% set rest = [] %}

<!-- Takes the first article from the news data list and makes it big, front and center -->
{% for article in news %}
  {% if loop.first %}
  <div class="row featured-news">
    <div class="col-sm-10 col-sm-offset-1 clearfix text-center">
      {% if article.image %}
      <img src="/assets/images/news/{{ article.image }}" class="img-responsive" style="width: 80%; margin: 50px auto 15px; aspect-ratio: 16 / 9;" />
      {% endif %}
      <h2>{{ article.headline }}</h2>
      <p>{{ article.info }}</p>
      <p class="text-muted">{{ article.date }}</p>
    </div>
  </div>
  {% else %}
    {% set _ = rest.push(article) %}
  {% endif %}
{% endfor %}

<p>&nbsp;</p>

<!-- The rest of the news articles in from the data list are in a grid below -->
{% for row in rest | batch(3) %}
<div class="row">
  {% for article in row %}
  <div class="col-sm-4 clearfix small-news">
    {% if article.image %}
    <img src="/assets/images/news/{{ article.image }}" class="img-responsive" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; margin-bottom: 10px;" />
    {% endif %}
    <strong>{{ article.headline }}</strong> : : : {{ article.date }}
    <p>{{ article.info }}</p>
  </div>
  {% endfor %}
</div>
{% endfor %}

<p>&nbsp;</p>