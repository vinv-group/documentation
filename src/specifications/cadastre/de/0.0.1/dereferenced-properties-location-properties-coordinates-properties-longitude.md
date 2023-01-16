# Longitude Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/location/properties/coordinates/properties/longitude
```

The decimal east/west position of a point. (7 decimal places max)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## longitude Type

`number` ([Longitude](dereferenced-properties-location-properties-coordinates-properties-longitude.md))

## longitude Constraints

**multiple of**: the value of this number must be a multiple of: `1e-7`

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

## longitude Examples

```json
-130.5627874
```

```json
130.5627874
```
