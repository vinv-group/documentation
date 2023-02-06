import{_ as e,o as t,c as a,a as i}from"./app.dc250873.js";const g=JSON.parse('{"title":"Location Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"location Type","slug":"location-type","link":"#location-type","children":[]},{"level":2,"title":"coordinates","slug":"coordinates","link":"#coordinates","children":[{"level":3,"title":"coordinates Type","slug":"coordinates-type","link":"#coordinates-type","children":[]}]},{"level":2,"title":"accuracy","slug":"accuracy","link":"#accuracy","children":[{"level":3,"title":"accuracy Type","slug":"accuracy-type","link":"#accuracy-type","children":[]},{"level":3,"title":"accuracy Constraints","slug":"accuracy-constraints","link":"#accuracy-constraints","children":[]},{"level":3,"title":"accuracy Examples","slug":"accuracy-examples","link":"#accuracy-examples","children":[]}]},{"level":2,"title":"geogrid","slug":"geogrid","link":"#geogrid","children":[{"level":3,"title":"geogrid Type","slug":"geogrid-type","link":"#geogrid-type","children":[]}]}],"relativePath":"specifications/vinv-individual-tree/0.0.1/dereferenced-properties-location.md","lastUpdated":1671539631000}'),r={name:"specifications/vinv-individual-tree/0.0.1/dereferenced-properties-location.md"},l=i(`<h1 id="location-schema" tabindex="-1">Location Schema <a class="header-anchor" href="#location-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="location-type" tabindex="-1">location Type <a class="header-anchor" href="#location-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced-properties-location.html">Location</a>)</p><h1 id="location-properties" tabindex="-1">location Properties <a class="header-anchor" href="#location-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#coordinates">coordinates</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-location-properties-coordinates.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/coordinates">Individual Tree</a></td></tr><tr><td style="text-align:left;"><a href="#accuracy">accuracy</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-location-properties-accuracy.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/accuracy">Individual Tree</a></td></tr><tr><td style="text-align:left;"><a href="#geogrid">geogrid</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-location-properties-geo-grid.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid">Individual Tree</a></td></tr></tbody></table><h2 id="coordinates" tabindex="-1">coordinates <a class="header-anchor" href="#coordinates" aria-hidden="true">#</a></h2><p>Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.</p><p><code>coordinates</code></p><ul><li><p>is required</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-location-properties-coordinates.html">Coordinates</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-location-properties-coordinates.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/coordinates">Individual Tree</a></p></li></ul><h3 id="coordinates-type" tabindex="-1">coordinates Type <a class="header-anchor" href="#coordinates-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-location-properties-coordinates.html">Coordinates</a>)</p><h2 id="accuracy" tabindex="-1">accuracy <a class="header-anchor" href="#accuracy" aria-hidden="true">#</a></h2><p>The decimal accuracy of coordinates in meter (2 decimal places max).</p><p><code>accuracy</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-location-properties-accuracy.html">Accuracy</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-location-properties-accuracy.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/accuracy">Individual Tree</a></p></li></ul><h3 id="accuracy-type" tabindex="-1">accuracy Type <a class="header-anchor" href="#accuracy-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-location-properties-accuracy.html">Accuracy</a>)</p><h3 id="accuracy-constraints" tabindex="-1">accuracy Constraints <a class="header-anchor" href="#accuracy-constraints" aria-hidden="true">#</a></h3><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>10000</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0</code></p><h3 id="accuracy-examples" tabindex="-1">accuracy Examples <a class="header-anchor" href="#accuracy-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">12</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="geogrid" tabindex="-1">geogrid <a class="header-anchor" href="#geogrid" aria-hidden="true">#</a></h2><p>Geographical Aggregation Grid</p><p><code>geogrid</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-location-properties-geo-grid.html">Geo Grid</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-location-properties-geo-grid.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid">Individual Tree</a></p></li></ul><h3 id="geogrid-type" tabindex="-1">geogrid Type <a class="header-anchor" href="#geogrid-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-location-properties-geo-grid.html">Geo Grid</a>)</p>`,32),n=[l];function o(c,d,s,p,h,u){return t(),a("div",null,n)}const f=e(r,[["render",o]]);export{g as __pageData,f as default};
