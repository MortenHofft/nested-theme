---
layout: null
# This page is now processed because it contains frontmatter
# That means that we can use Liquid and include variables from config
---
var themeStyle = {{ site.algae.style | jsonify }};
{% include js/config.js %}