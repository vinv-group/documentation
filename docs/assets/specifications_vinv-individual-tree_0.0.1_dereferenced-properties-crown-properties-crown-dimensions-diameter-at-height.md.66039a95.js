import{_ as e,o as t,c as i,a as s}from"./app.dc250873.js";const u=JSON.parse('{"title":"Diameter at height Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"items Type","slug":"items-type","link":"#items-type","children":[]},{"level":2,"title":"items Constraints","slug":"items-constraints","link":"#items-constraints","children":[]},{"level":2,"title":"height","slug":"height","link":"#height","children":[{"level":3,"title":"height Type","slug":"height-type","link":"#height-type","children":[]},{"level":3,"title":"height Constraints","slug":"height-constraints","link":"#height-constraints","children":[]},{"level":3,"title":"height Examples","slug":"height-examples","link":"#height-examples","children":[]}]},{"level":2,"title":"diameter","slug":"diameter","link":"#diameter","children":[{"level":3,"title":"diameter Type","slug":"diameter-type","link":"#diameter-type","children":[]},{"level":3,"title":"diameter Constraints","slug":"diameter-constraints","link":"#diameter-constraints","children":[]},{"level":3,"title":"diameter Examples","slug":"diameter-examples","link":"#diameter-examples","children":[]}]}],"relativePath":"specifications/vinv-individual-tree/0.0.1/dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height.md","lastUpdated":1671539631000}'),a={name:"specifications/vinv-individual-tree/0.0.1/dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height.md"},r=s(`<h1 id="diameter-at-height-schema" tabindex="-1">Diameter at height Schema <a class="header-anchor" href="#diameter-at-height-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions/items</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Array including height and diameter at height</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="items-type" tabindex="-1">items Type <a class="header-anchor" href="#items-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height.html">Diameter at height</a>)</p><h2 id="items-constraints" tabindex="-1">items Constraints <a class="header-anchor" href="#items-constraints" aria-hidden="true">#</a></h2><p><strong>maximum number of items</strong>: the maximum number of items for this array is: <code>2</code></p><p><strong>minimum number of items</strong>: the minimum number of items for this array is: <code>2</code></p><h1 id="items-properties" tabindex="-1">items Properties <a class="header-anchor" href="#items-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#height">height</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-height.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions/items/properties/height">Individual Tree</a></td></tr><tr><td style="text-align:left;"><a href="#diameter">diameter</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-diameter.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions/items/properties/diameter">Individual Tree</a></td></tr></tbody></table><h2 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-hidden="true">#</a></h2><p>Height of tree in PERCENT where diameter is measured</p><p><code>height</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-height.html">Height</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-height.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions/items/properties/height">Individual Tree</a></p></li></ul><h3 id="height-type" tabindex="-1">height Type <a class="header-anchor" href="#height-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-height.html">Height</a>)</p><h3 id="height-constraints" tabindex="-1">height Constraints <a class="header-anchor" href="#height-constraints" aria-hidden="true">#</a></h3><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>1</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0.1</code></p><h3 id="height-examples" tabindex="-1">height Examples <a class="header-anchor" href="#height-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0.5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="diameter" tabindex="-1">diameter <a class="header-anchor" href="#diameter" aria-hidden="true">#</a></h2><p>Diameter in CENTIMETER at measured height</p><p><code>diameter</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-diameter.html">Diameter</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-diameter.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions/items/properties/diameter">Individual Tree</a></p></li></ul><h3 id="diameter-type" tabindex="-1">diameter Type <a class="header-anchor" href="#diameter-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-diameter.html">Diameter</a>)</p><h3 id="diameter-constraints" tabindex="-1">diameter Constraints <a class="header-anchor" href="#diameter-constraints" aria-hidden="true">#</a></h3><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>100</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>10</code></p><h3 id="diameter-examples" tabindex="-1">diameter Examples <a class="header-anchor" href="#diameter-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">34</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">38</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,35),n=[r];function l(d,o,h,p,c,m){return t(),i("div",null,n)}const f=e(a,[["render",l]]);export{u as __pageData,f as default};
