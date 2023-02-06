import{_ as e,o as t,c as s,a}from"./app.dc250873.js";const u=JSON.parse('{"title":"Height Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"height Type","slug":"height-type","link":"#height-type","children":[]},{"level":2,"title":"height Constraints","slug":"height-constraints","link":"#height-constraints","children":[]},{"level":2,"title":"height Examples","slug":"height-examples","link":"#height-examples","children":[]}],"relativePath":"specifications/cadastre/de/0.0.1/dereferenced-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-height.md","lastUpdated":1673905503000}'),n={name:"specifications/cadastre/de/0.0.1/dereferenced-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-height.md"},i=a(`<h1 id="height-schema" tabindex="-1">Height Schema <a class="header-anchor" href="#height-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/dimensions/items/properties/height</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Height of tree in PERCENT where diameter is measured</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="height-type" tabindex="-1">height Type <a class="header-anchor" href="#height-type" aria-hidden="true">#</a></h2><p><code>number</code> (<a href="./dereferenced-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-height.html">Height</a>)</p><h2 id="height-constraints" tabindex="-1">height Constraints <a class="header-anchor" href="#height-constraints" aria-hidden="true">#</a></h2><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>1</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0.1</code></p><h2 id="height-examples" tabindex="-1">height Examples <a class="header-anchor" href="#height-examples" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0.5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,12),r=[i];function l(h,d,o,p,c,g){return t(),s("div",null,r)}const f=e(n,[["render",l]]);export{u as __pageData,f as default};
