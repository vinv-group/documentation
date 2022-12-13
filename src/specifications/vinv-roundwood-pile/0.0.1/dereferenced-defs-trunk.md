# Trunk Schema

```txt
https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/$defs/trunk
```

Trunk definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## trunk Type

`object` ([Trunk](dereferenced-defs-trunk.md))

# trunk Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                                   |
| :--------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [species](#species)          | `string` | Required | cannot be null | [RoundwoodPile](dereferenced-defs-trunk-properties-tree-species.md "https://schema.vinv.io/species/0.0.1.json#/$defs/trunk/properties/species")              |
| [dimensions](#dimensions)    | `array`  | Required | cannot be null | [RoundwoodPile](dereferenced-defs-trunk-properties-dimensions.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/$defs/trunk/properties/dimensions") |
| [image\_trunk](#image_trunk) | `object` | Optional | can be null    | [RoundwoodPile](dereferenced-properties-image.md "https://schema.vinv.io/image/0.0.1.json#/$defs/trunk/properties/image_trunk")                              |

## species

Tree Species values taken from <https://github.com/b-lack/tree-species>

`species`

*   is required

*   Type: `string` ([Tree species](dereferenced-defs-trunk-properties-tree-species.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-defs-trunk-properties-tree-species.md "https://schema.vinv.io/species/0.0.1.json#/$defs/trunk/properties/species")

### species Type

`string` ([Tree species](dereferenced-defs-trunk-properties-tree-species.md))

### species Constraints

**pattern**: the string must match the following regular expression:&#x20;

```txt
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24 "try regular expression with regexr.com")

### species Examples

```json
"JM2"
```

## dimensions

Diameter per height

`dimensions`

*   is required

*   Type: `object[]` ([Diameter](dereferenced-defs-diameter.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-defs-trunk-properties-dimensions.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/$defs/trunk/properties/dimensions")

### dimensions Type

`object[]` ([Diameter](dereferenced-defs-diameter.md))

### dimensions Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## image\_trunk

Image of the Pile front

`image_trunk`

*   is optional

*   Type: `object` ([Image](dereferenced-properties-image.md))

*   can be null

*   defined in: [RoundwoodPile](dereferenced-properties-image.md "https://schema.vinv.io/image/0.0.1.json#/$defs/trunk/properties/image_trunk")

*   vinv:id: https://schema.vinv.io/image/0.0.1.json

### image\_trunk Type

`object` ([Image](dereferenced-properties-image.md))
