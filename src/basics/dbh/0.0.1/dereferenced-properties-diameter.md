# Diameter Schema

```txt
https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/diameter
```

Diameter in centimeter at measured height (1.3m).

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## diameter Type

`integer` ([Diameter](dereferenced-properties-diameter.md))

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
