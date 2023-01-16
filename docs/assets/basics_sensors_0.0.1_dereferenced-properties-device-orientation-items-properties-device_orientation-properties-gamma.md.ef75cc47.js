import{_ as e,c as t,o as a,a as s}from"./app.6bb4bf53.js";const f=JSON.parse('{"title":"Gamma Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"gamma Type","slug":"gamma-type","link":"#gamma-type","children":[]},{"level":2,"title":"gamma Constraints","slug":"gamma-constraints","link":"#gamma-constraints","children":[]},{"level":2,"title":"gamma Examples","slug":"gamma-examples","link":"#gamma-examples","children":[]}],"relativePath":"basics/sensors/0.0.1/dereferenced-properties-device-orientation-items-properties-device_orientation-properties-gamma.md","lastUpdated":1671539631000}'),n={name:"basics/sensors/0.0.1/dereferenced-properties-device-orientation-items-properties-device_orientation-properties-gamma.md"},i=s(`<h1 id="gamma-schema" tabindex="-1">Gamma Schema <a class="header-anchor" href="#gamma-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/gamma</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The y-axis rotation of the device, in degrees, around the y-axis. This value represents the left-to-right tilt of the device.</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="gamma-type" tabindex="-1">gamma Type <a class="header-anchor" href="#gamma-type" aria-hidden="true">#</a></h2><p><code>number</code> (<a href="./dereferenced-properties-device-orientation-items-properties-device_orientation-properties-gamma.html">Gamma</a>)</p><h2 id="gamma-constraints" tabindex="-1">gamma Constraints <a class="header-anchor" href="#gamma-constraints" aria-hidden="true">#</a></h2><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>90</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>-90</code></p><h2 id="gamma-examples" tabindex="-1">gamma Examples <a class="header-anchor" href="#gamma-examples" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,11),r=[i];function l(o,d,m,p,c,h){return a(),t("div",null,r)}const u=e(n,[["render",l]]);export{f as __pageData,u as default};