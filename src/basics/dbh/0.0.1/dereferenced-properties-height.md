# Height Schema

```txt
https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/height
```

Height of measurment in meter where diameter is measured (1.3m).

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## height Type

`number` ([Height](dereferenced-properties-height.md))

## height Constraints

**constant**: the value of this property must be equal to:

```json
1.3
```

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

## height Examples

```json
1.3
```
