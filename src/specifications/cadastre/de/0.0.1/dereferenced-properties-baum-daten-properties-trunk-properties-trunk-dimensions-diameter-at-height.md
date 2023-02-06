# Diameter at height Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/trunk/properties/dimensions/items
```

Array including height and diameter at height

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## items Type

`object` ([Diameter at height](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height.md))

## items Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

# items Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                   |
| :-------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height)     | `number`  | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-height.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/trunk/properties/dimensions/items/properties/height")     |
| [diameter](#diameter) | `integer` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-diameter.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/trunk/properties/dimensions/items/properties/diameter") |

## height

Height of measurment in meter where diameter is measured.

`height`

*   is required

*   Type: `number` ([Height](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-height.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-height.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/trunk/properties/dimensions/items/properties/height")

### height Type

`number` ([Height](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-height.md))

### height Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

### height Examples

```json
0.5
```

```json
0.1
```

## diameter

Diameter in centimeter at measured height.

`diameter`

*   is required

*   Type: `integer` ([Diameter](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-diameter.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-diameter.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/trunk/properties/dimensions/items/properties/diameter")

### diameter Type

`integer` ([Diameter](dereferenced-properties-baum-daten-properties-trunk-properties-trunk-dimensions-diameter-at-height-properties-diameter.md))

### diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `1`

### diameter Examples

```json
34
```

```json
38
```
