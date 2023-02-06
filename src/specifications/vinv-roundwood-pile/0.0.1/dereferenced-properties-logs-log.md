# Log Schema

```txt
https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/logs/items
```

A part of the trunk or a large branch of a tree that has fallen or been cut off.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## items Type

`object` ([Log](dereferenced-properties-logs-log.md))

# items Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                      |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [species](#species)       | `string` | Required | cannot be null | [RoundwoodPile](dereferenced-properties-logs-log-properties-tree-species.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/logs/items/properties/species")  |
| [dimensions](#dimensions) | `array`  | Required | cannot be null | [RoundwoodPile](dereferenced-properties-logs-log-properties-dimensions.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/logs/items/properties/dimensions") |
| [image\_log](#image_log)  | `object` | Optional | can be null    | [RoundwoodPile](dereferenced-properties-logs-log-properties-image.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/logs/items/properties/image_log")       |

## species

Tree Species values taken from <https://github.com/b-lack/tree-species>

`species`

*   is required

*   Type: `string` ([Tree species](dereferenced-properties-logs-log-properties-tree-species.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-properties-logs-log-properties-tree-species.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/logs/items/properties/species")

### species Type

`string` ([Tree species](dereferenced-properties-logs-log-properties-tree-species.md))

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

Dimensions of the log

`dimensions`

*   is required

*   Type: `object[]` ([Diameter at height](dereferenced-properties-logs-log-properties-dimensions-diameter-at-height.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-properties-logs-log-properties-dimensions.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/logs/items/properties/dimensions")

### dimensions Type

`object[]` ([Diameter at height](dereferenced-properties-logs-log-properties-dimensions-diameter-at-height.md))

### dimensions Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## image\_log

Image of the log

`image_log`

*   is optional

*   Type: `object` ([Image](dereferenced-properties-logs-log-properties-image.md))

*   can be null

*   defined in: [RoundwoodPile](dereferenced-properties-logs-log-properties-image.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/logs/items/properties/image_log")

### image\_log Type

`object` ([Image](dereferenced-properties-logs-log-properties-image.md))
