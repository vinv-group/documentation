import{_ as e,c as t,o as s,a}from"./app.c323d8d2.js";const f=JSON.parse('{"title":"Tree species Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"species Type","slug":"species-type","link":"#species-type","children":[]},{"level":2,"title":"species Constraints","slug":"species-constraints","link":"#species-constraints","children":[]},{"level":2,"title":"species Examples","slug":"species-examples","link":"#species-examples","children":[]}],"relativePath":"vinv-individual-tree/0-properties-tree-species.md","lastUpdated":1668558989000}'),n={name:"vinv-individual-tree/0-properties-tree-species.md"},i=a(`<h1 id="tree-species-schema" tabindex="-1">Tree species Schema <a class="header-anchor" href="#tree-species-schema" aria-hidden="true">#</a></h1><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/species</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Tree Species values taken from <a href="https://github.com/b-lack/tree-species" target="_blank" rel="noreferrer">https://github.com/b-lack/tree-species</a></p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="0.0.1.doc.json" title="open original schema">0.0.1.doc.json*</a></td></tr></tbody></table><h2 id="species-type" tabindex="-1">species Type <a class="header-anchor" href="#species-type" aria-hidden="true">#</a></h2><p><code>string</code> (<a href="./0-properties-tree-species.html">Tree species</a>)</p><h2 id="species-constraints" tabindex="-1">species Constraints <a class="header-anchor" href="#species-constraints" aria-hidden="true">#</a></h2><p><strong>pattern</strong>: the string must match the following regular expression: </p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">^[a-zA-Z0-9_-]{3}$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24" title="try regular expression with regexr.com" target="_blank" rel="noreferrer">try pattern</a></p><h2 id="species-examples" tabindex="-1">species Examples <a class="header-anchor" href="#species-examples" aria-hidden="true">#</a></h2><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JM2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div>`,12),l=[i];function r(p,c,o,d,h,g){return s(),t("div",null,l)}const x=e(n,[["render",r]]);export{f as __pageData,x as default};