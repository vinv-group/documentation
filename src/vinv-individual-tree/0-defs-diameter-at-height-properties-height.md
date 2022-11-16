# Height Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/height
```

Height of tree in PERCENT where diameter is measured

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.0.1.doc.json\*](0.0.1.doc.json "open original schema") |

## height Type

`number` ([Height](0-defs-diameter-at-height-properties-height.md))

## height Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

## height Examples

```json
0.5
```

```json
0.1
```
