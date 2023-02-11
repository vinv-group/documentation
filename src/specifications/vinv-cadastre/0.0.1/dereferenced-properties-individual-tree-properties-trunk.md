# Trunk Schema

```txt
https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/tree/properties/trunk
```

Trunk definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## trunk Type

`object` ([Trunk](dereferenced-properties-individual-tree-properties-trunk.md))

# trunk Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :--------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dimensions](#dimensions)    | `array`  | Required | cannot be null | [Cadastre](dereferenced-properties-individual-tree-properties-trunk-properties-trunk-dimensions.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/tree/properties/trunk/properties/dimensions")    |
| [image\_trunk](#image_trunk) | `object` | Optional | can be null    | [Cadastre](dereferenced-properties-individual-tree-properties-trunk-properties-image-of-the-trunk.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk") |

## dimensions

Diameter per height

`dimensions`

*   is required

*   Type: `object[]` ([Diameter at height](dereferenced-properties-individual-tree-properties-trunk-properties-trunk-dimensions-diameter-at-height.md))

*   cannot be null

*   defined in: [Cadastre](dereferenced-properties-individual-tree-properties-trunk-properties-trunk-dimensions.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/tree/properties/trunk/properties/dimensions")

### dimensions Type

`object[]` ([Diameter at height](dereferenced-properties-individual-tree-properties-trunk-properties-trunk-dimensions-diameter-at-height.md))

## image\_trunk

Image of the trunk

`image_trunk`

*   is optional

*   Type: `object` ([Image of the trunk](dereferenced-properties-individual-tree-properties-trunk-properties-image-of-the-trunk.md))

*   can be null

*   defined in: [Cadastre](dereferenced-properties-individual-tree-properties-trunk-properties-image-of-the-trunk.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk")

### image\_trunk Type

`object` ([Image of the trunk](dereferenced-properties-individual-tree-properties-trunk-properties-image-of-the-trunk.md))
