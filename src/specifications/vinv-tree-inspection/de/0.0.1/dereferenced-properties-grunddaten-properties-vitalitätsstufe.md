# Vitalitätsstufe Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/base_data/properties/development_phase
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## development\_phase Type

`string` ([Vitalitätsstufe](dereferenced-properties-grunddaten-properties-vitalitätsstufe.md))

## development\_phase Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"Jugendphase"`    |             |
| `"Reifephase"`     |             |
| `"Alterungsphase"` |             |

## development\_phase Default Value

The default value is:

```json
"vital"
```

## development\_phase Examples

```json
"Jugendphase"
```

```json
"Reifephase"
```

```json
"Alterungsphase"
```
