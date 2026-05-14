---
title: "iVizLab - Publications"
layout: gridlay
excerpt: "iVizLab -- Publications."
sitemap: false
permalink: /publications/
---


# iViz Lab Publications


{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>

 </div>
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


<div class="full-list-section" markdown="0">
  <h2>Full List</h2>

  <div class="search-container" style="margin-bottom: 30px; display: flex; gap: 10px;">
    <input type="text" id="pubSearch" onkeyup="filterPublications()" placeholder="Search titles, authors, or years..." style="flex-grow: 1; padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
    
    <button onclick="resetSearch()" style="padding: 12px 20px; border-radius: 5px; border: 1px solid #ddd; background: #f8f9fa; cursor: pointer; font-weight: bold;">
      Reset
    </button>
  </div>

  <div id="fullPubList">
    {% for publi in site.data.publist %}
      <div class="pub-item" style="margin-bottom: 30px;">
        <strong class="searchable-title" style="font-size: 1.2em; display: block;">{{ publi.title }}</strong> 
        
        <div style="margin: 5px 0;">
          <small>Related Project: </small>
          <a href="{{ site.url }}{{ site.baseurl }}/{{ publi.research }}">{{ publi.research }}</a>
        </div>

        <span class="searchable-info">
          by {{ publi.authors }} — <i>{{ publi.type }}</i> — {{ publi.description }} ({{ publi.year }})
        </span>
        
        <br> 
        <a href="{{ publi.url }}" target="_blank" style="font-weight: bold;">{{ publi.display }}</a>
        <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;">
      </div>
    {% endfor %}
  </div>
</div>

<script>
function filterPublications() {
  var input = document.getElementById('pubSearch');
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('pub-item');

  for (var i = 0; i < nodes.length; i++) {
    var content = nodes[i].innerText || nodes[i].textContent;
    if (content.toLowerCase().indexOf(filter) > -1) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}

// New function to clear search and restore the list
function resetSearch() {
  document.getElementById('pubSearch').value = ""; // Clear the text
  var nodes = document.getElementsByClassName('pub-item');
  
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.display = "block"; // Show everything again
  }
}
</script>