# Dringlichkeit Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required/properties/urgency
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## urgency Type

`string` ([Dringlichkeit](dereferenced-properties-handlungsbedarf-properties-dringlichkeit.md))

## urgency Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"nicht dringend"` |             |
| `"dringend"`       |             |
| `"sehr dringend"`  |             |

## urgency Examples

```json
"nicht dringend"
```

```json
"dringend"
```

```json
"sehr dringend"
```
