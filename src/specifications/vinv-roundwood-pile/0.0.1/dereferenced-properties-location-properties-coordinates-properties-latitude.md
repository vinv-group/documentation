# Latitude Schema

```txt
https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/location/properties/coordinates/properties/latitude
```

The decimal north/south position of a point. (7 decimal places max)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## latitude Type

`number` ([Latitude](dereferenced-properties-location-properties-coordinates-properties-latitude.md))

## latitude Constraints

**multiple of**: the value of this number must be a multiple of: `1e-7`

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

## latitude Examples

```json
-12.4563
```

```json
50.5627874
```
