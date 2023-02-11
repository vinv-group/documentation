# Altitude Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/location/properties/coordinates/properties/altitude
```

The altitude of the position in meters above mean sea level. (2 decimal places max)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## altitude Type

`number` ([Altitude](dereferenced-properties-location-properties-coordinates-properties-altitude.md))

## altitude Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `2500`

**minimum**: the value of this number must greater than or equal to: `0`

## altitude Examples

```json
0
```

```json
130
```
