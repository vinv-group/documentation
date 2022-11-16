# Trunk definition Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/trunk
```

Trunk definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../vinv-schemas/vinv-tree/out/dereferenced.doc.json "open original schema") |

## trunk Type

`object` ([Trunk definition](dereferenced-properties-trunk-definition.md))

# trunk Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :--------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dimensions](#dimensions)    | `array`  | Required | cannot be null | [Individual Tree](dereferenced-properties-trunk-definition-properties-trunk-dimensions.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/trunk/properties/dimensions")    |
| [image\_trunk](#image_trunk) | `object` | Optional | can be null    | [Individual Tree](dereferenced-properties-trunk-definition-properties-image-of-the-trunk.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/trunk/properties/image_trunk") |

## dimensions

Diameter per height

`dimensions`

*   is required

*   Type: `object[]` ([Diameter at height](dereferenced-defs-diameter-at-height.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-properties-trunk-definition-properties-trunk-dimensions.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/trunk/properties/dimensions")

### dimensions Type

`object[]` ([Diameter at height](dereferenced-defs-diameter-at-height.md))

## image\_trunk

Image of the trunk

`image_trunk`

*   is optional

*   Type: `object` ([Image of the trunk](dereferenced-properties-trunk-definition-properties-image-of-the-trunk.md))

*   can be null

*   defined in: [Individual Tree](dereferenced-properties-trunk-definition-properties-image-of-the-trunk.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/trunk/properties/image_trunk")

*   vinv:id: https://schema.vinv.io/image/0.0.1.json

### image\_trunk Type

`object` ([Image of the trunk](dereferenced-properties-trunk-definition-properties-image-of-the-trunk.md))
