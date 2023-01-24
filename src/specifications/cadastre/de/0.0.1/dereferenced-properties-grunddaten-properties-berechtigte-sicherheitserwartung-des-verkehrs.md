# Berechtigte Sicherheitserwartung des Verkehrs Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/safety_expectation
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## safety\_expectation Type

`string` ([Berechtigte Sicherheitserwartung des Verkehrs](dereferenced-properties-grunddaten-properties-berechtigte-sicherheitserwartung-des-verkehrs.md))

## safety\_expectation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"geringer"` |             |
| `"höher"`    |             |

## safety\_expectation Default Value

The default value is:

```json
"geringer"
```

## safety\_expectation Examples

```json
"geringer"
```

```json
"höher"
```
