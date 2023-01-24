# Grunddaten Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## base\_data Type

`object` ([Grunddaten](dereferenced-properties-grunddaten.md))

# base\_data Properties

| Property                                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                          |
| :------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [treeNumber](#treenumber)                    | `string` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-grunddaten-properties-baumnummer.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/treeNumber")                                            |
| [safety\_expectation](#safety_expectation)   | `string` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-grunddaten-properties-berechtigte-sicherheitserwartung-des-verkehrs.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/safety_expectation") |
| [conservation\_status](#conservation_status) | `string` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-grunddaten-properties-naturschutzstatus.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/conservation_status")                            |
| [development\_phase](#development_phase)     | `string` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-grunddaten-properties-vitalitätsstufe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/development_phase")                                |

## treeNumber

Tree number

`treeNumber`

*   is required

*   Type: `string` ([Baumnummer](dereferenced-properties-grunddaten-properties-baumnummer.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-grunddaten-properties-baumnummer.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/treeNumber")

### treeNumber Type

`string` ([Baumnummer](dereferenced-properties-grunddaten-properties-baumnummer.md))

### treeNumber Constraints

**maximum length**: the maximum number of characters for this string is: `50`

### treeNumber Examples

```json
"1"
```

```json
"2"
```

```json
"3"
```

## safety\_expectation



`safety_expectation`

*   is required

*   Type: `string` ([Berechtigte Sicherheitserwartung des Verkehrs](dereferenced-properties-grunddaten-properties-berechtigte-sicherheitserwartung-des-verkehrs.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-grunddaten-properties-berechtigte-sicherheitserwartung-des-verkehrs.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/safety_expectation")

### safety\_expectation Type

`string` ([Berechtigte Sicherheitserwartung des Verkehrs](dereferenced-properties-grunddaten-properties-berechtigte-sicherheitserwartung-des-verkehrs.md))

### safety\_expectation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"geringer"` |             |
| `"höher"`    |             |

### safety\_expectation Default Value

The default value is:

```json
"geringer"
```

### safety\_expectation Examples

```json
"geringer"
```

```json
"höher"
```

## conservation\_status



`conservation_status`

*   is optional

*   Type: `string` ([Naturschutzstatus](dereferenced-properties-grunddaten-properties-naturschutzstatus.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-grunddaten-properties-naturschutzstatus.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/conservation_status")

### conservation\_status Type

`string` ([Naturschutzstatus](dereferenced-properties-grunddaten-properties-naturschutzstatus.md))

### conservation\_status Constraints

**maximum length**: the maximum number of characters for this string is: `50`

### conservation\_status Examples

```json
"protected"
```

```json
"not protected"
```

## development\_phase



`development_phase`

*   is optional

*   Type: `string` ([Vitalitätsstufe](dereferenced-properties-grunddaten-properties-vitalitätsstufe.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-grunddaten-properties-vitalitätsstufe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data/properties/development_phase")

### development\_phase Type

`string` ([Vitalitätsstufe](dereferenced-properties-grunddaten-properties-vitalitätsstufe.md))

### development\_phase Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"Jugendphase"`    |             |
| `"Reifephase"`     |             |
| `"Alterungsphase"` |             |

### development\_phase Default Value

The default value is:

```json
"vital"
```

### development\_phase Examples

```json
"Jugendphase"
```

```json
"Reifephase"
```

```json
"Alterungsphase"
```
