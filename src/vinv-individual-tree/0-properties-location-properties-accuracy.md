# Accuracy Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/accuracy
```

The decimal accuracy of coordinates in meter (2 decimal places max).

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.0.1.doc.json\*](0.0.1.doc.json "open original schema") |

## accuracy Type

`number` ([Accuracy](0-properties-location-properties-accuracy.md))

## accuracy Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `10000`

**minimum**: the value of this number must greater than or equal to: `0`

## accuracy Examples

```json
3
```

```json
12
```
