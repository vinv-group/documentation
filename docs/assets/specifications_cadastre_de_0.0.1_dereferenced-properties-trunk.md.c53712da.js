import{_ as e,o as t,c as r,a as i}from"./app.dc250873.js";const m=JSON.parse('{"title":"Trunk Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"trunk Type","slug":"trunk-type","link":"#trunk-type","children":[]},{"level":2,"title":"dimensions","slug":"dimensions","link":"#dimensions","children":[{"level":3,"title":"dimensions Type","slug":"dimensions-type","link":"#dimensions-type","children":[]}]},{"level":2,"title":"image_trunk","slug":"image-trunk","link":"#image-trunk","children":[{"level":3,"title":"image_trunk Type","slug":"image-trunk-type","link":"#image-trunk-type","children":[]}]}],"relativePath":"specifications/cadastre/de/0.0.1/dereferenced-properties-trunk.md","lastUpdated":1673905503000}'),n={name:"specifications/cadastre/de/0.0.1/dereferenced-properties-trunk.md"},a=i(`<h1 id="trunk-schema" tabindex="-1">Trunk Schema <a class="header-anchor" href="#trunk-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Trunk definition</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="trunk-type" tabindex="-1">trunk Type <a class="header-anchor" href="#trunk-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced-properties-trunk.html">Trunk</a>)</p><h1 id="trunk-properties" tabindex="-1">trunk Properties <a class="header-anchor" href="#trunk-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#dimensions">dimensions</a></td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-trunk-properties-trunk-dimensions.html" title="https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/dimensions">Baumkataster</a></td></tr><tr><td style="text-align:left;"><a href="#image_trunk">image_trunk</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-trunk-properties-image-of-the-trunk.html" title="https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/image_trunk">Baumkataster</a></td></tr></tbody></table><h2 id="dimensions" tabindex="-1">dimensions <a class="header-anchor" href="#dimensions" aria-hidden="true">#</a></h2><p>Diameter per height</p><p><code>dimensions</code></p><ul><li><p>is required</p></li><li><p>Type: <code>object[]</code> (<a href="./dereferenced-properties-trunk-properties-trunk-dimensions-diameter-at-height.html">Diameter at height</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-trunk-properties-trunk-dimensions.html" title="https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/dimensions">Baumkataster</a></p></li></ul><h3 id="dimensions-type" tabindex="-1">dimensions Type <a class="header-anchor" href="#dimensions-type" aria-hidden="true">#</a></h3><p><code>object[]</code> (<a href="./dereferenced-properties-trunk-properties-trunk-dimensions-diameter-at-height.html">Diameter at height</a>)</p><h2 id="image-trunk" tabindex="-1">image_trunk <a class="header-anchor" href="#image-trunk" aria-hidden="true">#</a></h2><p>Image of the trunk</p><p><code>image_trunk</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-trunk-properties-image-of-the-trunk.html">Image of the trunk</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-trunk-properties-image-of-the-trunk.html" title="https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/image_trunk">Baumkataster</a></p></li><li><p>vinv\u{1F194} <a href="https://schema.vinv.io/image/0.0.1.json" target="_blank" rel="noreferrer">https://schema.vinv.io/image/0.0.1.json</a></p></li></ul><h3 id="image-trunk-type" tabindex="-1">image_trunk Type <a class="header-anchor" href="#image-trunk-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-trunk-properties-image-of-the-trunk.html">Image of the trunk</a>)</p>`,20),s=[a];function l(d,o,p,h,c,u){return t(),r("div",null,s)}const k=e(n,[["render",l]]);export{m as __pageData,k as default};
