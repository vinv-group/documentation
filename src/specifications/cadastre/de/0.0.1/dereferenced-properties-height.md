# Height Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/height
```

Height in Meter

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## height Type

`number` ([Height](dereferenced-properties-height.md))

## height Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `99`

**minimum**: the value of this number must greater than or equal to: `0.5`

## height Examples

```json
14
```

```json
13.5
```

```json
15.6
```
