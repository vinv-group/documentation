# Zustand Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## status Type

`object` ([Zustand](dereferenced-properties-zustand.md))

# status Properties

| Property                                 | Type     | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :--------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [health](#health)                        | `string` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-zustand-properties-gesundheit.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status/properties/health")                              |
| [control\_interval ](#control_interval-) | `string` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-zustand-properties-künftiges-kontrollintervall-.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status/properties/control_interval ") |

## health



`health`

*   is optional

*   Type: `string` ([Gesundheit](dereferenced-properties-zustand-properties-gesundheit.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-zustand-properties-gesundheit.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status/properties/health")

### health Type

`string` ([Gesundheit](dereferenced-properties-zustand-properties-gesundheit.md))

### health Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"gesund/leicht geschädigt"` |             |
| `"stärker geschädigt"`       |             |
| `"nachhaltig geschädigt"`    |             |

### health Examples

```json
"gesund/leicht geschädigt"
```

```json
"stärker geschädigt"
```

```json
"nachhaltig geschädigt"
```

## control\_interval&#x20;



`control_interval `

*   is optional

*   Type: `string` ([Künftiges Kontrollintervall ](dereferenced-properties-zustand-properties-künftiges-kontrollintervall-.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-zustand-properties-künftiges-kontrollintervall-.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status/properties/control_interval ")

### control\_interval  Type

`string` ([Künftiges Kontrollintervall ](dereferenced-properties-zustand-properties-künftiges-kontrollintervall-.md))

### control\_interval  Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"halbjährlich"` |             |
| `"jährlich"`     |             |
| `"alle 2 Jahre"` |             |
| `"alle 3 Jahre"` |             |

### control\_interval  Examples

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
