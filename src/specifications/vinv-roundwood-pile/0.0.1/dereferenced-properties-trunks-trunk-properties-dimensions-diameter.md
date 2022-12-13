# Diameter Schema

```txt
https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/trunks/items/properties/dimensions/items
```

Array including height and diameter at height

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## items Type

`object` ([Diameter](dereferenced-properties-trunks-trunk-properties-dimensions-diameter.md))

## items Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

# items Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height)     | `number` | Optional | cannot be null | [RoundwoodPile](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-height.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/trunks/items/properties/dimensions/items/properties/height")     |
| [diameter](#diameter) | `number` | Optional | cannot be null | [RoundwoodPile](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-diameter.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/trunks/items/properties/dimensions/items/properties/diameter") |

## height

Height of tree in PERCENT where diameter is measured

`height`

*   is optional

*   Type: `number` ([Height](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-height.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-height.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/trunks/items/properties/dimensions/items/properties/height")

### height Type

`number` ([Height](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-height.md))

### height Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

### height Examples

```json
0.5
```

```json
0.1
```

## diameter

Diameter in CENTIMETER at measured height

`diameter`

*   is optional

*   Type: `number` ([Diameter](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-diameter.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-diameter.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/trunks/items/properties/dimensions/items/properties/diameter")

### diameter Type

`number` ([Diameter](dereferenced-properties-trunks-trunk-properties-dimensions-diameter-properties-diameter.md))

### diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `10`

### diameter Examples

```json
34
```

```json
38
```
