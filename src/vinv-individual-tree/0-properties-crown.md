# Crown Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown
```

Crown definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [0.0.1.doc.json\*](0.0.1.doc.json "open original schema") |

## crown Type

`object` ([Crown](0-properties-crown.md))

# crown Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :--------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dimensions](#dimensions)    | `array`  | Required | cannot be null | [Individual Tree](0-properties-crown-properties-crown-dimensions.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions")               |
| [image\_crown](#image_crown) | `object` | Optional | can be null    | [Individual Tree](0-properties-trunk-definition-properties-image-of-the-trunk.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/image_crown") |

## dimensions

Diameter per height

`dimensions`

*   is required

*   Type: `object[]` ([Diameter at height](0-defs-diameter-at-height.md))

*   cannot be null

*   defined in: [Individual Tree](0-properties-crown-properties-crown-dimensions.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions")

### dimensions Type

`object[]` ([Diameter at height](0-defs-diameter-at-height.md))

## image\_crown

Image of the trunk

`image_crown`

*   is optional

*   Type: `object` ([Image of the trunk](0-properties-trunk-definition-properties-image-of-the-trunk.md))

*   can be null

*   defined in: [Individual Tree](0-properties-trunk-definition-properties-image-of-the-trunk.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/image_crown")

*   vinv:id: https://schema.vinv.io/image/0.0.1.json

### image\_crown Type

`object` ([Image of the trunk](0-properties-trunk-definition-properties-image-of-the-trunk.md))
