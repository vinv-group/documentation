# Height of trunk Schema

```txt
https://schema.vinv.io/diameter_at_height/0.0.1.json
```

Height in Meter where diameter is zero.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## Height of trunk Type

`object` ([Height of trunk](dereferenced.md))

# Height of trunk Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                         |
| :-------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height)     | `number`  | Required | cannot be null | [Height of trunk](dereferenced-properties-height.md "https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/height")     |
| [diameter](#diameter) | `integer` | Required | cannot be null | [Height of trunk](dereferenced-properties-diameter.md "https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/diameter") |

## height

Height of the trunk.

`height`

*   is required

*   Type: `number` ([Height](dereferenced-properties-height.md))

*   cannot be null

*   defined in: [Height of trunk](dereferenced-properties-height.md "https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/height")

### height Type

`number` ([Height](dereferenced-properties-height.md))

### height Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

### height Examples

```json
1.3
```

## diameter

Diameter at max Height.

`diameter`

*   is required

*   Type: `integer` ([Diameter](dereferenced-properties-diameter.md))

*   cannot be null

*   defined in: [Height of trunk](dereferenced-properties-diameter.md "https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/diameter")

### diameter Type

`integer` ([Diameter](dereferenced-properties-diameter.md))

### diameter Constraints

**constant**: the value of this property must be equal to:

```json
0
```

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `0`

### diameter Examples

```json
0
```
