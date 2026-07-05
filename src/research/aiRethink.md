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
  <p style="font-family:Arial,sans-serif;font-size:16px;line-height:1.55;color:#E8F4F3;margin:0 0 0.75rem;">Rethinking what AI should be: local, open, human-led, and owned by no one but you. aiRethink is a research initiative building a full-stack alternative to corporate AI &mdash; free and unlimited systems that run privately on your own computer, on open models and open tools, with the human, not the cloud, in charge.</p>
  <p class="rt-hero-meta">SSHRC Insight Grant 2026&ndash;2030 &nbsp;&middot;&nbsp; $500K+ Combined Funding &nbsp;&middot;&nbsp; Open Source &nbsp;&middot;&nbsp; SFU Leads</p>
</div>

<div class="rt-stats">
  <div class="rt-stat"><div class="rt-stat-num">0.13 Wh</div><div class="rt-stat-label">per query &mdash; a fraction of GPT-5's estimated 20&ndash;50 Wh</div></div>
  <div class="rt-stat"><div class="rt-stat-num">100%</div><div class="rt-stat-label">private &mdash; data never leaves your machine</div></div>
  <div class="rt-stat"><div class="rt-stat-num">$0</div><div class="rt-stat-label">no subscription, no account, no cloud</div></div>
  <div class="rt-stat"><div class="rt-stat-num">0</div><div class="rt-stat-label">corporate gatekeepers</div></div>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - The Problem - - - </p>
  <h2>What is wrong with AI today &mdash; and who gets to fix it?</h2>
  <p>Corporate AI has one architecture: your words travel to their servers, their model answers, and everything about the exchange belongs to them &mdash; your data, the running cost, the model, and the rules. From that single design choice, the familiar problems follow.</p>
  <ul class="rt-list">
    <li><strong>Privacy.</strong> Your prompts, documents, and creative work are routed through corporate infrastructure under terms you don't set and can't renegotiate.</li>
    <li><strong>Access.</strong> Subscription walls and rate limits price out students, non-profits, Indigenous communities, and cultural organizations &mdash; the very groups with the most to gain.</li>
    <li><strong>Energy.</strong> Cloud inference consumes energy at a scale that meaningfully harms the climate, and none of that cost is ever shown to the person incurring it.</li>
    <li><strong>Data taken without consent.</strong> The dominant models were trained on copyrighted and culturally sensitive works, with no attribution and no provenance.</li>
    <li><strong>Cultural flattening.</strong> A graduate student in our lab, studying Chinese art conservation, fed traditional Chinese scroll paintings into a leading commercial model and received output shaped by modern Japanese aesthetics. That is not a glitch; it is Western-dominated bias baked in at the data level, and Indigenous and non-Western traditions are harmed most.</li>
    <li><strong>Passive use.</strong> The "you prompt, AI produces" pattern erodes the reasoning, questioning, and synthesis of the people who use it &mdash; and, in creative fields, displaces the artist from their own process.</li>
  </ul>
  <p>Critique alone doesn't fix any of this. Someone has to build the alternative &mdash; openly, in public, with the communities most affected. At the <strong>iVizLab research lab (DiPaola, Dir.)</strong> at Simon Fraser University, we believe AI should not be an oracle controlled by a few. It should be a transparent, sustainable medium for human knowledge and creativity. Our answer is two interconnected open-source projects: <strong>Uness</strong>, the knowledge layer, and <strong>Hilma</strong>, the creative layer.</p>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Shared Foundation - - - </p>
  <h2>One Foundation, Three Commitments</h2>
  <p>Everything we build &mdash; both projects, every tool &mdash; rests on the same three commitments, in this order.</p>
  <h3>01 &middot; Ownership &mdash; Free, Local, Private, Unlimited</h3>
  <p>This is the base condition for everything else. Our systems run entirely on your own computer, on open models and open tools. No cloud, no login, no API key, no subscription, no rate limit. Your prompts, your documents, and your creative work never leave your machine &mdash; which means there is nothing for a company to collect, mine, or monetize. AI you can actually own, on hardware you already have.</p>
  <h3>02 &middot; Orchestration &mdash; Humans Conduct, AI Plays a Part</h3>
  <p>We are moving away from the "you prompt, AI produces" trap. Passive prompting leads to cognitive atrophy: the slow erosion of reasoning, questioning, synthesis, and reflection. Real professional and creative work is never one-shot &mdash; so our systems are built for active orchestration. You decompose the problem, direct each step, verify the output, then fork, reflect, and continue. You are the conductor; AI executes a part. This human-in-the-loop philosophy shapes the interface of both projects.</p>
  <img src="/assets/images/res/human_loop.jpg" alt="Diagram comparing passive prompting vs. HITL orchestration workflow" class="rt-figure" style="border-radius:6px;">
  <h3>03 &middot; Sustainability &mdash; Energy You Can See and Manage</h3>
  <p>Running locally already cuts energy use to a fraction of cloud AI: our measured 0.13 watt-hours per query, against an estimated 20&ndash;50 watt-hours for GPT-5. But we go further. Both tools include a real-time energy dashboard, so the environmental cost of every prompt and every session is visible as you work. Our published user studies show that this visibility changes behavior &mdash; people query more deliberately when they can see the cost.</p>
  <img src="/assets/images/res/energy4all.jpg" alt="Energy dashboard diagram" class="rt-figure" style="border-radius:6px;">
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Two Projects &mdash; One Unified Mission - - - </p>
  <h2>Same Foundation, Two Layers</h2>
  <p>The two projects share the foundation above but attack different layers of the AI stack &mdash; and, to our knowledge, no one else is rebuilding both. Open infrastructure answers "how do you run AI without corporate capture?" A new model answers "is what's inside the model ethical?" You need both.</p>
  <div class="rt-grid">
    <div class="rt-card teal">
      <p class="rt-card-label">Project 1</p>
      <p class="rt-card-title">Uness (<a href="https://uness.org" target="_blank" rel="noopener noreferrer">uness.org</a>)</p>
      <p class="rt-card-sub">The Knowledge Layer &mdash; LLM / Text AI</p>
      <p class="rt-card-body"><em>Rebuilds the infrastructure:</em> a free, local, private LLM system that runs today's best open distilled models on your own Mac or PC. Designed for deliberate, human-led knowledge work.</p>
      <p class="rt-card-status">Status: v4.0 deployed and in use</p>
      <p class="rt-card-target">Students &middot; educators &middot; non-profits &middot; Indigenous groups &middot; cultural institutions</p>
    </div>
    <div class="rt-card rust">
      <p class="rt-card-label">Project 2</p>
      <p class="rt-card-title">Hilma</p>
      <p class="rt-card-sub">The Creative Layer &mdash; Visual / Image AI</p>
      <p class="rt-card-body"><em>Rebuilds the model itself:</em> a wholly new visual generative model trained from the ground up on an ethically sourced dataset, with culturally grounded captioning and a Creative Journey interface that puts artists in control.</p>
      <p class="rt-card-status">Funding: 5-Year SSHRC Insight Grant (2026&ndash;2030)</p>
      <p class="rt-card-target">Artists &middot; designers &middot; cultural institutions &middot; Indigenous communities</p>
    </div>
  </div>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Project 1 - - - </p>
  <h2>Uness: The Knowledge Layer</h2>
  <p>Uness is our fully open-source, locally-run LLM system for reflective knowledge work: free, unlimited, and private, designed to democratize access to AI and shrink the digital divide.</p>
  <ul class="rt-list">
    <li><strong>Runs on your machine.</strong> A single mid- to high-end consumer Mac or PC. No cloud dependencies, no logins, no costs; your conversation history stays on your own file system.</li>
    <li><strong>Open, modular models.</strong> You choose the distilled open model that fits your hardware and your energy goals &mdash; smaller for light tasks, larger when the work demands it.</li>
    <li><strong>Built for orchestration.</strong> Web research, reasoning, and document knowledge (PDF, DOCX, TXT) are deliberately separate tools you invoke on purpose &mdash; human-in-the-loop by design, with live efficiency tips as you work.</li>
    <li><strong>Deployed now.</strong> v4.0 is in real use with students, researchers, and community partners &mdash; from Indigenous knowledge projects and medical education to Chinese art conservation and animal communication research.</li>
  </ul>
  <p>Uness has its own site with the full story: <a href="https://uness.org" target="_blank" rel="noopener noreferrer">uness.org</a></p>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Project 2 - - - </p>
  <h2>Hilma: The Creative Layer</h2>
  <p>Hilma is named for Hilma af Klint, the pioneering abstract painter who worked outside the commercial art market and went unrecognized for decades &mdash; a companion to Uness, named for climate scientist Eunice Foote, whose work history also failed to credit. Funded by a major five-year SSHRC Insight Grant (2026&ndash;2030), Hilma reorients visual generative AI to protect and empower artists and cultural communities rather than displace them.</p>
  <h3>Why a New Model, Not Just a New Interface</h3>
  <p>Today's image models were trained on copyrighted and culturally sensitive work taken without consent, captioned by systems that flatten cultural and aesthetic distinctions, and tuned toward a pop-commercial center of gravity. Every artist who uses them feels the pull: outputs drift toward the same polished, Western, market-tested look. For an artist trying to reach what is in their own head and heart, that gravity is hard to escape &mdash; the model keeps dragging the work back toward everyone else's. Fixing this requires going below the interface, to the data and the model itself. We are doing that across three objectives.</p>
  <h3>1 &middot; An Ethically Sourced Dataset and a New Model</h3>
  <p>A new visual generative model trained exclusively on pre-1932 public domain artworks and design works &mdash; legally clean and fully documented, with special emphasis on Canadian and Indigenous artistic traditions. Every source, artist, and image will be publicly searchable. Provenance is not an afterthought; it is a design requirement.</p>
  <h3>2 &middot; Culturally Grounded Captioning</h3>
  <p>A semantic captioning and retraining system built with Indigenous communities, Asian cultural experts, dance and movement practitioners, designers, and other domain experts. The goal: captions that preserve cultural specificity, art-historical knowledge, stylistic nuance, and technical execution &mdash; instead of erasing them. We are actively seeking faculty collaborators across traditions to help build this "Culture Caption" framework.</p>
  <h3>3 &middot; The Creative Journey Interface</h3>
  <p>Artists don't prompt in the real world; they journey. Hilma maps every step of a creative session and makes that map visible and navigable: move forward, return to an earlier branch, label, fork in a new direction, and see the whole territory of your own creative process. Session-specific personalization adapts the model to the artist's emerging direction &mdash; toward their vision, not the market's. Human-in-the-loop throughout, running locally, with the energy dashboard integrated so artists see the cost of every session.</p>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Who We Are - - - </p>
  <h2>Artists and Researchers Who Build Tools and Use Them</h2>
  <div class="rt-pull-quote">"We are not primarily researchers who study artists. We are artists and researchers who build tools and use them."</div>
  <p>The iVizLab team at SFU is embedded in the communities we serve. We build working prototypes and deploy them in real creative and professional contexts &mdash; gallery shows, Chinese scroll conservation, dance and movement research, medical education, architectural ideation, and animal communication studies &mdash; then refine the tools against genuine creative and community needs, not just lab conditions.</p>
  <p>This work is grounded in five published or submitted papers (AIES 2026, ICML 2026, IJCAI, ICCC 2023) covering inference-phase energy visibility, Slow AI design principles, the environmental burden of stored AI output ("AI slag," as distinct from "AI slop"), and culturally grounded generative systems. See the full list below.</p>
</div>

<div class="rt-section">
  <p class="rt-section-label"> - - - Get Involved - - - </p>
  <h2>Join Us in Re-Democratizing AI</h2>
  <p>We are actively seeking collaborators, community partners, and early users. If your organization works in arts, culture, education, Indigenous knowledge, or community services, we want to hear from you.</p>
  <ul class="rt-list">
    <li><strong>Faculty and researchers</strong> to co-develop the Culture Caption framework with domain expertise in Indigenous, Asian, dance, design, or other traditions &mdash; and to try Uness in your classes and add to our user studies</li>
    <li><strong>Cultural institutions and non-profits</strong> to pilot Uness as a free, private AI tool for your community</li>
    <li><strong>Artists and designers</strong> to use and help shape the Hilma Creative Journey interface</li>
    <li><strong>Students</strong> interested in graduate research at the intersection of AI, ethics, sustainability, and community</li>
  </ul>
  <p><strong>Built for the people AI has priced out.</strong> aiRethink exists to show that AI can be something other than a corporate cloud product: free, private, community-based, sustainable, and under the user's control. It is about agency &mdash; the agency of each person using these tools, and the agency of a democratic public deciding what AI should be.</p>
</div>

<div class="rt-cta">
  <p class="rt-cta-quote">"AI should not be an oracle controlled by a few. It should be a transparent, sustainable medium for human knowledge and creativity."</p>
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
