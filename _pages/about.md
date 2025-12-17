---
permalink: /
title: "Rong Zhou's Homepage"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div id="about" class="page-section" markdown="1">

## About Me

I'm a second-year Computer Science Ph.D. student at [Lehigh University](https://www2.lehigh.edu/). My research interests include Medical AI, Generative AI, Multi-Modal Data Analysis, Medical Image Computing, and Brain Imaging Genomics. Previously, I obtained my B.E. in Computer Science from Minzu University of China.

I am very fortunate to be advised by [Prof. Lifang He](https://engineering.lehigh.edu/faculty/lifang-he), [Prof. Yu Zhang](https://yuzhangresearch.weebly.com/), [Prof. Brian Y. Chen](https://www.cse.lehigh.edu/~chen/).

</div>

<div id="news" class="page-section" markdown="1">

## News

* **[Dec 2024]** Updated website to single-page format
* **[Add your news here]** Your news content...

</div>

<div id="research" class="page-section" markdown="1">

## Research Interests

* **Medical AI**: Applying artificial intelligence techniques to medical data analysis and clinical decision support
* **Generative AI**: Developing generative models for medical image synthesis and augmentation
* **Multi-Modal Data Analysis**: Integrating and analyzing heterogeneous data from multiple sources
* **Medical Image Computing**: Advanced image processing and analysis for medical applications
* **Brain Imaging Genomics**: Linking brain imaging phenotypes with genetic variants

</div>

<div id="publications" class="page-section" markdown="1">

## Publications

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

</div>

<div id="awards" class="page-section" markdown="1">

## Honors & Awards

* **[Year]** Award Name - Organization
* **[Year]** Award Name - Organization
* **[Add your awards here]**

</div>
