# Height Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown/properties/dimensions/items/properties/height
```

Height of tree in PERCENT where diameter is measured

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## height Type

`number` ([Height](dereferenced-properties-crown-properties-crown-dimensions-diameter-at-height-properties-height.md))

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
