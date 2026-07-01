---
title: "iVizLab - News"
layout: gridlay.njk
excerpt: "iVizLab -- News."
permalink: /allnews/
---

# iViz Lab News

{% for row in news | batch(2) %}
<div class="row">
  {% for article in row %}
  <div class="col-sm-6 clearfix">
    <strong>{{ article.headline }}</strong> : : : {{ article.date }}
    {% if article.image %}
    <img src="/assets/images/news/{{ article.image }}" class="img-responsive" width="33%" style="float: left" />
    {% endif %}
    <p>{{ article.info }}</p>
  </div>
  {% endfor %}
</div>
{% endfor %}

<p>&nbsp;</p>
