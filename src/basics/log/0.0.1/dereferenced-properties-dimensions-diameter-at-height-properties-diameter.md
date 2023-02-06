# Diameter Schema

```txt
https://schema.vinv.io/log/0.0.1.json#/properties/dimensions/items/properties/diameter
```

Diameter in centimeter at measured height.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## diameter Type

`integer` ([Diameter](dereferenced-properties-dimensions-diameter-at-height-properties-diameter.md))

## diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `1`

## diameter Examples

```json
34
```

```json
38
```
