# Root Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root
```

Tree root definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## root Type

`object` ([Root](dereferenced-properties-root.md))

# root Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :--------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dimensions](#dimensions)    | `array`  | Required | cannot be null | [Baumkataster](dereferenced-properties-root-properties-crown-dimensions.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/dimensions")    |
| [image\_crown](#image_crown) | `object` | Optional | can be null    | [Baumkataster](dereferenced-properties-root-properties-image-of-the-trunk.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/image_crown") |

## dimensions

Diameter per height

`dimensions`

*   is required

*   Type: `object[]` ([Diameter at height](dereferenced-properties-root-properties-crown-dimensions-diameter-at-height.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-root-properties-crown-dimensions.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/dimensions")

### dimensions Type

`object[]` ([Diameter at height](dereferenced-properties-root-properties-crown-dimensions-diameter-at-height.md))

## image\_crown

Image of the trunk

`image_crown`

*   is optional

*   Type: `object` ([Image of the trunk](dereferenced-properties-root-properties-image-of-the-trunk.md))

*   can be null

*   defined in: [Baumkataster](dereferenced-properties-root-properties-image-of-the-trunk.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/image_crown")

*   vinv:id: https://schema.vinv.io/image/0.0.1.json

### image\_crown Type

`object` ([Image of the trunk](dereferenced-properties-root-properties-image-of-the-trunk.md))
