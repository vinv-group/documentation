# Gesundheit Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/status/properties/health
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## health Type

`string` ([Gesundheit](dereferenced-properties-zustand-properties-gesundheit.md))

## health Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"gesund/leicht geschädigt"` |             |
| `"stärker geschädigt"`       |             |
| `"nachhaltig geschädigt"`    |             |

## health Examples

```json
"gesund/leicht geschädigt"
```

```json
"stärker geschädigt"
```

```json
"nachhaltig geschädigt"
```
