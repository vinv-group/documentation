import{_ as e,o as t,c as a,a as s}from"./app.dc250873.js";const u=JSON.parse('{"title":"Diameter at Breast Height Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"dbh Type","slug":"dbh-type","link":"#dbh-type","children":[]},{"level":2,"title":"dbh Constraints","slug":"dbh-constraints","link":"#dbh-constraints","children":[]},{"level":2,"title":"dbh Examples","slug":"dbh-examples","link":"#dbh-examples","children":[]}],"relativePath":"specifications/cadastre/de/0.0.1/dereferenced-properties-diameter-at-breast-height.md","lastUpdated":1673905503000}'),n={name:"specifications/cadastre/de/0.0.1/dereferenced-properties-diameter-at-breast-height.md"},l=s(`<h1 id="diameter-at-breast-height-schema" tabindex="-1">Diameter at Breast Height Schema <a class="header-anchor" href="#diameter-at-breast-height-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/dbh</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Diameter in centimeter</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="dbh-type" tabindex="-1">dbh Type <a class="header-anchor" href="#dbh-type" aria-hidden="true">#</a></h2><p><code>number</code> (<a href="./dereferenced-properties-diameter-at-breast-height.html">Diameter at Breast Height</a>)</p><h2 id="dbh-constraints" tabindex="-1">dbh Constraints <a class="header-anchor" href="#dbh-constraints" aria-hidden="true">#</a></h2><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>100</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>1</code></p><h2 id="dbh-examples" tabindex="-1">dbh Examples <a class="header-anchor" href="#dbh-examples" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">34</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">56</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,13),i=[l];function r(d,o,c,h,p,m){return t(),a("div",null,i)}const f=e(n,[["render",r]]);export{u as __pageData,f as default};
