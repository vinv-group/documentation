---
title: Cadastre
editLink: true

schema: 'vinv-cadastre'
---

<script setup>
    import { withBase, useData } from 'vitepress'

    import json from '../../../public/releases.json'

    const { page } = useData()
    
    const spec = json['vinv-cadastre'];
</script>

<div class="vinv-jumbo">
    <img class="banner" :src="spec.hero">
    <img class="icon" :src="spec.icon">
</div>

# {{spec.title}}

Version: <Badge type="info" text="0.0.1" />

Language: <Badge type="info" text="en" />

{{spec.description}}

## Schema

https://schema.vinv.io/vinv-cadastre/en/0.0.1.json

<<< @/assets/schema/vinv-cadastre/en/0.0.1-schema.json

<sub>
    Full <a href="/specifications/vinv-cadastre/0.0.1/dereferenced.html" >Documentation</a>.
</sub>

## Example File

<sub>This example file is automatically generated. [Raw Example](https://schema.vinv.io/vinv-cadastre/en/0.0.1/example.json)</sub>

::: details Click me to view the code
```json
<!--@include: ../../assets/schema/vinv-cadastre/0.0.1-example.json-->
```

