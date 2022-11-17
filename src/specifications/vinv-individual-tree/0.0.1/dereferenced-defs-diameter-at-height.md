# Diameter at height Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height
```

Array including height and diameter at height

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../vinv-schemas/vinv-tree/out/dereferenced.doc.json "open original schema") |

## dimension\_at\_height Type

`object` ([Diameter at height](dereferenced-defs-diameter-at-height.md))

## dimension\_at\_height Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

# dimension\_at\_height Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height)     | `number` | Optional | cannot be null | [Individual Tree](dereferenced-defs-diameter-at-height-properties-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/height")     |
| [diameter](#diameter) | `number` | Optional | cannot be null | [Individual Tree](dereferenced-defs-diameter-at-height-properties-diameter.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/diameter") |

## height

Height of tree in PERCENT where diameter is measured

`height`

*   is optional

*   Type: `number` ([Height](dereferenced-defs-diameter-at-height-properties-height.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-defs-diameter-at-height-properties-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/height")

### height Type

`number` ([Height](dereferenced-defs-diameter-at-height-properties-height.md))

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

*   Type: `number` ([Diameter](dereferenced-defs-diameter-at-height-properties-diameter.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-defs-diameter-at-height-properties-diameter.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/diameter")

### diameter Type

`number` ([Diameter](dereferenced-defs-diameter-at-height-properties-diameter.md))

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
