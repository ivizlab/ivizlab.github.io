---
title: "iVizLab - Rethinking AI"
layout: textlay.njk
excerpt: "iVizLab -- Rethinking Artificial Intelligence"
permalink: /aiRethink/
---

<style>
  /* All rules scoped under .rethink-wrap so they never touch the rest of the site.
     Font sizes below are fixed px on purpose (not rem) — rem inherits the site's
     root html font-size, which can be much smaller than 16px, shrinking headers
     relative to body text. Px keeps this section's type scale predictable. */
  .rethink-wrap, .rethink-wrap *, .rethink-wrap *::before, .rethink-wrap *::after {
    box-sizing: border-box;
  }
  .rethink-wrap {
    max-width: 100%;
    font-family: 'Georgia', serif;
    font-size: 16px;
    color: #1A2631;
    line-height: 1.65;
  }
  .rethink-wrap img { max-width: 100%; height: auto; }
  .rethink-wrap .rt-figure { display: block; max-width: 80%; margin: 0.75rem auto; }

  .rt-hero {
    background: #027D7A;
    color: #fff;
    padding: 2rem 1.5rem;
    border-radius: 8px;
    margin: 0.5rem 0 1.5rem;
  }
  .rt-hero-eyebrow { font-family: Arial, sans-serif; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #B2D8D6; margin-bottom: 0.5rem; }
  .rt-hero h2 { font-family: Arial, sans-serif; font-size: clamp(26px, 6vw, 36px); font-weight: 800; line-height: 1.2; margin: 0 0 0.4rem; color: #fff; }
  .rt-hero-sub { font-family: Arial, sans-serif; font-size: 17px; color: #D4EFED; font-style: italic; margin-bottom: 0.75rem; }
  .rt-hero-meta { font-family: Arial, sans-serif; font-size: 14px; color: #A8D8D5; }

  .rt-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    background: #B2D8D6;
    border: 1px solid #B2D8D6;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }
  .rt-stat {
    flex: 1 1 45%;
    min-width: 140px;
    background: #E8F4F3;
    padding: 0.9rem 0.8rem;
    text-align: center;
  }
  .rt-stat-num { font-family: Arial, sans-serif; font-size: 26px; font-weight: 800; color: #027D7A; line-height: 1; margin-bottom: 0.25rem; }
  .rt-stat-label { font-family: Arial, sans-serif; font-size: 13px; color: #3D5263; line-height: 1.3; }

  .rt-section { margin-bottom: 1.75rem; padding-top: 1.5rem; border-top: 1px solid #E4EEED; }
  .rt-section:first-of-type { padding-top: 0; border-top: none; }
  .rt-section-label { font-family: Arial, sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: #4A7C7A; margin-bottom: 0.3rem; }
  .rt-section h2 { font-family: Arial, sans-serif; font-size: 26px; font-weight: 700; margin-bottom: 0.7rem; line-height: 1.25; color: #1A2631; }
  .rt-section h3 { font-family: Arial, sans-serif; font-size: 19px; font-weight: 700; margin: 1rem 0 0.25rem; color: #1A2631; }

  .rt-pull-quote { border-left: 4px solid #027D7A; padding: 0.5rem 0 0.5rem 1rem; margin: 1rem 0; font-style: italic; font-size: 18px; color: #4A7C7A; }

  .rt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 0.75rem; }
  .rt-card { border-radius: 8px; padding: 1.1rem 1.25rem; }
  .rt-card.teal { background: #E8F4F3; }
  .rt-card.rust { background: #F5EDE9; }
  .rt-card-label { font-family: Arial, sans-serif; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.2rem; }
  .rt-card.teal .rt-card-label { color: #027D7A; }
  .rt-card.rust .rt-card-label { color: #C05A3A; }
  .rt-card-title { font-family: Arial, sans-serif; font-size: 21px; font-weight: 800; margin-bottom: 0.15rem; }
  .rt-card-sub { font-family: Arial, sans-serif; font-size: 14px; font-style: italic; margin-bottom: 0.6rem; }
  .rt-card.teal .rt-card-sub { color: #4A7C7A; }
  .rt-card.rust .rt-card-sub { color: #C05A3A; }
  .rt-card-body { font-size: 16px; line-height: 1.6; }
  .rt-card-status { font-family: Arial, sans-serif; font-size: 14px; font-weight: 700; margin-top: 0.6rem; }
  .rt-card.teal .rt-card-status { color: #027D7A; }
  .rt-card.rust .rt-card-status { color: #C05A3A; }
  .rt-card-target { font-family: Arial, sans-serif; font-size: 13px; font-style: italic; color: #3D5263; margin-top: 0.2rem; }

  .rt-list { list-style: none; padding: 0; margin: 0.5rem 0; }
  .rt-list li { padding: 0.5rem 0 0.5rem 1rem; position: relative; border-bottom: 1px solid #E4EEED; font-size: 16px; line-height: 1.55; }
  .rt-list li:last-child { border-bottom: none; }
  .rt-list li::before { content: ''; position: absolute; left: 0; top: 1rem; width: 5px; height: 5px; border-radius: 50%; background: #027D7A; }

  .rt-cta { background: #1A2631; color: #fff; padding: 1.75rem 1.25rem; text-align: center; border-radius: 8px; margin-bottom: 1.5rem; }
  .rt-cta-quote { font-style: italic; color: #A8D8D5; font-size: 17px; max-width: 520px; margin: 0 auto 1rem; line-height: 1.55; }
  .rt-cta-btn { display: inline-block; background: #027D7A; color: #fff; font-family: Arial, sans-serif; font-size: 15px; font-weight: 700; padding: 0.65rem 1.4rem; border-radius: 4px; text-decoration: none; margin: 0.3rem; }
  .rt-cta-btn.outline { background: transparent; border: 2px solid #B2D8D6; color: #B2D8D6; }

  @media (max-width: 480px) {
    .rt-stat { flex: 1 1 100%; }
  }
</style>

<div class="rethink-wrap">

# AI Rethink

<strong>[See Related Papers](#paperSection) and Related Projects:</strong><br>
[Semantic Meaning & Analysis](/aiMeaning) &nbsp; [AI Modeling Thought & Language](/aiThought) &nbsp; [AI Affective Virtual Human](/virtualHumans)<br>
[XR Avatars; Edu, Coaches, Health](/xrAvatars) &nbsp; [Sensing Humans (Bio/Brain/Face/Movement/VR)](/bioBrainVR)<br>

Researchers: Steve DiPaola, Vanessa Utz, Rafael Arias Gonzalez, Shannon Cuykendall, Shumeng Dai

<div class="rt-hero">
  <p class="rt-hero-eyebrow">Steve DiPaola, Dir. &middot; iVizLab &middot; Simon Fraser University</p>
  <h2>Rethinking Artificial Intelligence</h2>
  <p class="rt-hero-sub">A Community Answer to Corporate AI</p>
  <p class="rt-hero-meta">SSHRC Insight Grant 2026&ndash;2030 &nbsp;&middot;&nbsp; Large 5 Year Combined Funding &nbsp;&middot;&nbsp; Open Source</p>
</div>

<div class="rt-stats">
  <div class="rt-stat"><div class="rt-stat-num">70%</div><div class="rt-stat-label">less energy than GPT-5 per query</div></div>
  <div class="rt-stat"><div class="rt-stat-num">100%</div><div class="rt-stat-label">private &mdash; data never leaves your machine</div></div>
  <div class="rt-stat"><div class="rt-stat-num">$0</div><div class="rt-stat-label">no subscription, no account, no cloud</div></div>
  <div class="rt-stat"><div class="rt-stat-num">0</div><div class="rt-stat-label">corporate gatekeepers</div></div>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - The Problem - - - </p>
  <h2>What is wrong with AI today &mdash; and who gets to fix it?</h2>
  <p>Current corporate AI systems present fundamental challenges to our society. They send private data to corporate servers with no transparency or user control. They hide behind subscription walls that price out students, non-profits, Indigenous communities, and cultural organizations. They consume enormous amounts of energy at a scale that meaningfully harms the climate. And they were built on biased, Western-dominated datasets filled with copyrighted and culturally sensitive material taken without consent or attribution.</p>
  <p>Perhaps less discussed but equally serious: these systems are actively misidentifying and homogenizing cultural and aesthetic distinctions. A graduate student in our lab studying Chinese art conservation fed traditional Chinese scroll paintings into a leading commercial model and received output influenced by modern Japanese aesthetics. This is not a minor error. It reflects a systematic cultural bias baked into these systems at the data level.</p>
  <p>At the <strong>iVizLab research lab (DiPaola, Dir.)</strong> at Simon Fraser University, we believe AI should not be an oracle controlled by a few. It should be a transparent, sustainable medium for human creativity. Our initiative consists of two interconnected open-source projects: <strong>U.ness</strong>, our text and knowledge layer, and <strong>RethinkAI</strong>, our visual and creative layer.</p>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Shared Principles - - - </p>
  <h2>The Philosophy Uniting Our Work</h2>
  <p>Both projects are grounded in the same two commitments.</p>
  <h3>Human-in-the-Loop Orchestration</h3>
  <p>We are moving away from what we call the "you prompt, AI produces" trap. Passive prompting leads to what we describe as cognitive atrophy: the gradual erosion of reasoning, questioning, synthesis, and reflection in the people using these tools. Real professional and creative work is never one-shot. Our systems are built for active orchestration instead.</p>
  <img src="/assets/images/res/human_loop.jpg" alt="Diagram comparing passive prompting vs. HITL orchestration workflow" class="rt-figure" style="border-radius:6px;">
  <h3>Energy Transparency and Sustainability</h3>
  <p>Generative AI has a large and largely hidden environmental cost. A single query to GPT-5 consumes an estimated 20&ndash;50 watt-hours. Our locally-run models average around 0.13 watt-hours per query, roughly 70% less. Both of our tools include a real-time energy dashboard so users can see the actual environmental cost of every session.</p>
  <img src="/assets/images/res/energy4all.jpg" alt="Energy dashboard diagram" class="rt-figure" style="border-radius:6px;">
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Two Projects &mdash; One Unified Mission - - - </p>
  <h2>What We Are Building</h2>
  <div class="rt-grid">
    <div class="rt-card teal">
      <p class="rt-card-label">Project 1</p>
      <p class="rt-card-title">U.ness (<a href="https://uness.org" target="_blank" rel="noopener noreferrer">uness.org</a>)</p>
      <p class="rt-card-sub">The Knowledge Layer &mdash; LLM / Text AI</p>
      <p class="rt-card-body">A fully open-source, locally-run AI system. Free, private, no cloud, no subscription. Runs on your Mac or PC. Designed for deliberate, human-led use.</p>
      <p class="rt-card-status">Status: v4.0 deployed</p>
      <p class="rt-card-target">Students &middot; educators &middot; non-profits &middot; Indigenous groups &middot; cultural institutions</p>
    </div>
    <div class="rt-card rust">
      <p class="rt-card-label">Project 2</p>
      <p class="rt-card-title">RethinkAI</p>
      <p class="rt-card-sub">The Creative Layer &mdash; Visual / Image AI</p>
      <p class="rt-card-body">A new visual generative model built from ethically sourced data, with culturally grounded captioning and a Creative Journey interface that puts artists in control.</p>
      <p class="rt-card-status">Funding: Large 5 year SSHRC Insight Grant</p>
      <p class="rt-card-target">Artists &middot; designers &middot; cultural institutions &middot; Indigenous communities</p>
    </div>
  </div>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Project 1 - - - </p>
  <h2>U.ness: The Knowledge Layer</h2>
  <p>U.ness (<a href="https://uness.org" target="_blank" rel="noopener noreferrer">uness.org</a>) is a fully open-source, locally-run large language model system designed to democratize access to AI for knowledge work and reduce the digital divide.</p>
  <ul class="rt-list">
    <li><strong>Free, local, and private.</strong> U.ness runs directly on your existing Mac or PC. There are no cloud dependencies, no logins, no APIs, and no subscription costs.</li>
    <li><strong>Modular distilled models.</strong> Users choose the model size that fits their hardware and energy goals.</li>
    <li><strong>Built for reflection, not passive use.</strong> U.ness keeps search and reasoning tools separate. These are tools for humans to use deliberately.</li>
    <li><strong>Live guidance built in.</strong> The interface includes efficiency tips that help users develop better habits.</li>
    <li><strong>Real-world deployment.</strong> We are already using U.ness with students, researchers, and community organizations.</li>
  </ul>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Project 2 - - - </p>
  <h2>RethinkAI: The Creative Layer</h2>
  <p>Funded by a Large 5 year SSHRC Insight Grant, RethinkAI fundamentally reorients visual generative AI to protect and empower artists and cultural communities rather than displace them.</p>
  <h3>An Ethically Sourced Dataset</h3>
  <p>We are building a new visual generative model trained exclusively on pre-1932 public domain artworks. Every source, artist, and image in the system will be publicly searchable.</p>
  <h3>Culturally Grounded Captioning</h3>
  <p>We are developing a semantic captioning system built in collaboration with Indigenous communities, Asian cultural experts, dance practitioners, designers, and others.</p>
  <h3>The Creative Journey Interface</h3>
  <p>Artists do not prompt in the real world. They journey through a creative space: exploring, backtracking, forking, discovering. Our interface maps every creative decision the artist makes and makes that map visible and navigable.</p>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Who We Are - - - </p>
  <h2>Artists and Researchers Who Build Tools and Use Them</h2>
  <div class="rt-pull-quote">"We are not primarily researchers who study artists. We are artists and researchers who build tools and use them."</div>
  <p>The iVizLab team at SFU is embedded in the communities we serve. We build working prototypes and deploy them in real creative and professional contexts: gallery shows, Chinese scroll conservation, dance and movement research, medical education, architectural ideation, and animal communication studies.</p>
  <p>We have five published or submitted papers on this work, including contributions to AIES 2026, ICML 2026, IJCAI, and ICCC 2023.</p>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Get Involved - - - </p>
  <h2>Join Us in Re-Democratizing AI</h2>
  <p>We are actively seeking collaborators, community partners, and early users.</p>
  <ul class="rt-list">
    <li><strong>Faculty and researchers</strong> to co-develop the Cultural Captioning framework</li>
    <li><strong>Cultural institutions and non-profits</strong> to pilot U.ness as a private, free AI tool</li>
    <li><strong>Artists and designers</strong> to use and help shape the RethinkAI Creative Journey interface</li>
    <li><strong>Students</strong> interested in graduate research at the intersection of AI, ethics, and community</li>
  </ul>
</div>

<div class="rt-cta">
  <p class="rt-cta-quote">"AI should not be an oracle controlled by a few. It should be a transparent, sustainable medium for human creativity."</p>
  <a class="rt-cta-btn" href="mailto:sdipaola@sfu.ca">Contact Us</a>
  <a class="rt-cta-btn outline" href="/">ivizlab.sfu.ca</a>
</div>

</div>

<div id="paperSection"></div>
<br>

**------ PAPERS: AI Rethink ------**
<br>

{% for publi in publist %}
  {% if publi.research | contains("aiEthicsC") %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}

{% for publi in publist %}
  {% if publi.research | contains("aiMeaning") %}
  <pubtit>{{ publi.title }}</pubtit> by
  {{ publi.authors }} -- <pubtit>{{ publi.type }}</pubtit> -- {{ publi.description }}
  <br><a href="{{ publi.url }}">{{ publi.display }}</a>
  {% endif %}
{% endfor %}
