import{_ as e,o as t,c as i,a}from"./app.dc250873.js";const u=JSON.parse('{"title":"Geo Grid Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"geogrid Type","slug":"geogrid-type","link":"#geogrid-type","children":[]},{"level":2,"title":"h3","slug":"h3","link":"#h3","children":[{"level":3,"title":"h3 Type","slug":"h3-type","link":"#h3-type","children":[]},{"level":3,"title":"h3 Constraints","slug":"h3-constraints","link":"#h3-constraints","children":[]},{"level":3,"title":"h3 Examples","slug":"h3-examples","link":"#h3-examples","children":[]}]},{"level":2,"title":"geohash","slug":"geohash","link":"#geohash","children":[{"level":3,"title":"geohash Type","slug":"geohash-type","link":"#geohash-type","children":[]},{"level":3,"title":"geohash Constraints","slug":"geohash-constraints","link":"#geohash-constraints","children":[]},{"level":3,"title":"geohash Examples","slug":"geohash-examples","link":"#geohash-examples","children":[]}]}],"relativePath":"specifications/vinv-individual-tree/0.0.1/dereferenced-properties-location-properties-geo-grid.md","lastUpdated":1671539631000}'),s={name:"specifications/vinv-individual-tree/0.0.1/dereferenced-properties-location-properties-geo-grid.md"},r=a(`<h1 id="geo-grid-schema" tabindex="-1">Geo Grid Schema <a class="header-anchor" href="#geo-grid-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Geographical Aggregation Grid</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="geogrid-type" tabindex="-1">geogrid Type <a class="header-anchor" href="#geogrid-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced-properties-location-properties-geo-grid.html">Geo Grid</a>)</p><h1 id="geogrid-properties" tabindex="-1">geogrid Properties <a class="header-anchor" href="#geogrid-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#h3">h3</a></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-location-properties-geo-grid-properties-h3-location.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid/properties/h3">Individual Tree</a></td></tr><tr><td style="text-align:left;"><a href="#geohash">geohash</a></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-location-properties-geo-grid-properties-geohash-location.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid/properties/geohash">Individual Tree</a></td></tr></tbody></table><h2 id="h3" tabindex="-1">h3 <a class="header-anchor" href="#h3" aria-hidden="true">#</a></h2><p>Location of the event (h3 <a href="https://h3geo.org/" target="_blank" rel="noreferrer">https://h3geo.org/</a>)</p><p><code>h3</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>string</code> (<a href="./dereferenced-properties-location-properties-geo-grid-properties-h3-location.html">h3-Location</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-location-properties-geo-grid-properties-h3-location.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid/properties/h3">Individual Tree</a></p></li></ul><h3 id="h3-type" tabindex="-1">h3 Type <a class="header-anchor" href="#h3-type" aria-hidden="true">#</a></h3><p><code>string</code> (<a href="./dereferenced-properties-location-properties-geo-grid-properties-h3-location.html">h3-Location</a>)</p><h3 id="h3-constraints" tabindex="-1">h3 Constraints <a class="header-anchor" href="#h3-constraints" aria-hidden="true">#</a></h3><p><strong>maximum length</strong>: the maximum number of characters for this string is: <code>15</code></p><p><strong>minimum length</strong>: the minimum number of characters for this string is: <code>15</code></p><h3 id="h3-examples" tabindex="-1">h3 Examples <a class="header-anchor" href="#h3-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">8428309ffffffff</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="geohash" tabindex="-1">geohash <a class="header-anchor" href="#geohash" aria-hidden="true">#</a></h2><p>Location of the event (geohash <a href="https://en.wikipedia.org/wiki/Geohash" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Geohash</a>)</p><p><code>geohash</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>string</code> (<a href="./dereferenced-properties-location-properties-geo-grid-properties-geohash-location.html">geohash-Location</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-location-properties-geo-grid-properties-geohash-location.html" title="https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid/properties/geohash">Individual Tree</a></p></li></ul><h3 id="geohash-type" tabindex="-1">geohash Type <a class="header-anchor" href="#geohash-type" aria-hidden="true">#</a></h3><p><code>string</code> (<a href="./dereferenced-properties-location-properties-geo-grid-properties-geohash-location.html">geohash-Location</a>)</p><h3 id="geohash-constraints" tabindex="-1">geohash Constraints <a class="header-anchor" href="#geohash-constraints" aria-hidden="true">#</a></h3><p><strong>maximum length</strong>: the maximum number of characters for this string is: <code>12</code></p><p><strong>minimum length</strong>: the minimum number of characters for this string is: <code>1</code></p><h3 id="geohash-examples" tabindex="-1">geohash Examples <a class="header-anchor" href="#geohash-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ww8p1r4t8</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,30),o=[r];function n(l,h,d,p,c,g){return t(),i("div",null,o)}const m=e(s,[["render",n]]);export{u as __pageData,m as default};
