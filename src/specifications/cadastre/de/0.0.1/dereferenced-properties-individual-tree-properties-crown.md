# Crown Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/crown
```

Crown definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## crown Type

`object` ([Crown](dereferenced-properties-individual-tree-properties-crown.md))

# crown Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :--------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dimensions](#dimensions)    | `array`  | Required | cannot be null | [Baumkataster](dereferenced-properties-individual-tree-properties-crown-properties-crown-dimensions.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/crown/properties/dimensions")    |
| [image\_crown](#image_crown) | `object` | Optional | can be null    | [Baumkataster](dereferenced-properties-individual-tree-properties-crown-properties-image-of-the-trunk.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/crown/properties/image_crown") |

## dimensions

Diameter per height

`dimensions`

*   is required

*   Type: `object[]` ([Diameter at height](dereferenced-properties-individual-tree-properties-crown-properties-crown-dimensions-diameter-at-height.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-individual-tree-properties-crown-properties-crown-dimensions.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/crown/properties/dimensions")

### dimensions Type

`object[]` ([Diameter at height](dereferenced-properties-individual-tree-properties-crown-properties-crown-dimensions-diameter-at-height.md))

## image\_crown

Image of the trunk

`image_crown`

*   is optional

*   Type: `object` ([Image of the trunk](dereferenced-properties-individual-tree-properties-crown-properties-image-of-the-trunk.md))

*   can be null

*   defined in: [Baumkataster](dereferenced-properties-individual-tree-properties-crown-properties-image-of-the-trunk.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/crown/properties/image_crown")

*   vinv:id: https://schema.vinv.io/image/0.0.1.json

### image\_crown Type

`object` ([Image of the trunk](dereferenced-properties-individual-tree-properties-crown-properties-image-of-the-trunk.md))
