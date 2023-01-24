# Künftiges Kontrollintervall  Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status/properties/control_interval 
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## control\_interval  Type

`string` ([Künftiges Kontrollintervall ](dereferenced-properties-zustand-properties-künftiges-kontrollintervall-.md))

## control\_interval  Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"halbjährlich"` |             |
| `"jährlich"`     |             |
| `"alle 2 Jahre"` |             |
| `"alle 3 Jahre"` |             |

## control\_interval  Examples

```json
"halbjährlich"
```

```json
"jährlich"
```

```json
"alle 2 Jahre"
```

```json
"alle 3 Jahre"
```
