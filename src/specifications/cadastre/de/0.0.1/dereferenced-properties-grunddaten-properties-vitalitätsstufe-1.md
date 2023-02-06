# Vitalitätsstufe Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/vitality
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## vitality Type

`string` ([Vitalitätsstufe](dereferenced-properties-grunddaten-properties-vitalitätsstufe-1.md))

## vitality Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"vital"`             |             |
| `"leicht geschwächt"` |             |
| `"geschwächt"`        |             |
| `"stark geschwächt"`  |             |

## vitality Default Value

The default value is:

```json
"vital"
```

## vitality Examples

```json
"vital"
```

```json
"leicht geschwächt"
```

```json
"geschwächt"
```

```json
"stark geschwächt"
```
