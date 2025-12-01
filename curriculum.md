---
layout: page
title: "Curriculum"
permalink: /curriculum/
---

Here lies the path to mastery. Follow the modules in order, or jump to the topic you need.

{% assign modules = site.lessons | map: 'module' | uniq | sort %}

{% for module_num in modules %}
  {% assign module_lessons = site.lessons | where: "module", module_num | sort: "order" %}
  {% assign first_lesson = module_lessons.first %}
  
  <section class="module-section" style="margin-bottom: 2rem;">
    <h2 class="module-header">Module {{ module_num }}: {{ first_lesson.module_title }}</h2>
    <div class="lesson-list">
      {% for lesson in module_lessons %}
      <div class="lesson-card" style="padding: 1rem; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 0.5rem; border-radius: 4px; background: rgba(255,255,255,0.02);">
        <a href="{{ lesson.url | relative_url }}" style="display: block; font-weight: bold; font-size: 1.1rem;">{{ lesson.order }}. {{ lesson.title }}</a>
        <span style="font-size: 0.85rem; color: var(--color-fire-orange);">⏱ {{ lesson.estimated_time }}</span>
      </div>
      {% endfor %}
    </div>
  </section>
{% endfor %}

