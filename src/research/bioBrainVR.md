---
title: "iVizLab - Sensing Humans (Bio/Brain/Face/Movement/VR)"
layout: textlay.njk
excerpt: "iVizLab -- Sensing Humans (Bio/Brain/Face/Movement/VR)"
permalink: /bioBrainVR/
researchTag: bioBrainVR
---

# Sensing Humans (Bio/Brain/Face/Movement/VR)

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[AI-based Exploration of Art and Design](/aiArts) &nbsp; [AI Cognitive Creativity](/aiCreativity) &nbsp; [AI Affective Virtual Human](/virtualHumans)<br>
[XR Avatars; Edu, Coaches, Health](/xrAvatars)<br>

Researchers: Steve DiPaola, Meehae Song

**About:**
Our lab has extensive experience in using different sensing technologies to better understand and incorporate human intent and interaction. Including eye tracking, facial emotion recognition; gesture, body, & hand tracking; bio sensing - heart rate and EDA; brain waves (BCI), both for human understanding and for more human centered interaction for affect generative systems.

**The Research:**
Emotional facial tracking using camera and AI software. Motion, gesture and body tracking using overhead cameras and MS Kinect. Hand tracking via our own data gloves and Leap Controller. Eye tracking via our Pupil eye tracker. Bio sensing (heart rate and EDA) via our Empatica E4 watch. Brain wave via Muse and other systems.

**Setup and Results:**
Some examples of our tracking systems. All our 2d, 3d and VR systems have an abstraction layer with software modules to support several advanced input technologies such as emotion tracking, motion tracking, and bio-sensors.
<br>

**See samples of this work in the videos below:**
<br>

<iframe width="450" height="230" src="https://www.youtube.com/embed/MYZDRSRadaY?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 1:** DiPaola in our lab, demonstrating Brain and Heart Rate sensing for health.
<br><br>

<iframe width="450" height="230" src="https://www.youtube.com/embed/8mWX9cWJolQ?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 2:** Our work where a mental health counsellor uses our system to create a happy place and brings via brain/breathing control the VR patient to that place.
<br><br><br>

<iframe width="450" height="230" src="https://www.youtube.com/embed/JaOKbKGkwVw?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 3**
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/0FaDEymjxbg?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 4**
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/7I3heXUNZ8U?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 5**
<br><br>
<iframe width="450" height="230" src="https://www.youtube.com/embed/rm7iR-WvHSM?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 6**
<br><br><br>

<iframe width="450" height="230" src="https://www.youtube.com/embed/cncSjzDkkEk?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 7:** Breath controlled art.
<br><br>

<iframe width="450" height="230" src="https://www.youtube.com/embed/I-sZEyvtsXk?rel=0" frameborder="0" allowfullscreen></iframe>
**Video 8:** Emotional facial recognition combined with movement/placement recognition and hand finger tracking.
<br><br><br>

<div id="paperSection"></div>

<br><br>
**------ PAPERS: Sensing Humans (Bio/Brain/Face/Movement/VR) ------**

{% for publi in publist %}
  {% if publi.research | contains(researchTag) %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
