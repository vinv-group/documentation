# Baumkontrolle Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json
```

Baumkontrolle nach Vorgaben der Bundesanstalt für Gewässerkunde (bfa)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## Baumkontrolle Type

`object` ([Baumkontrolle](dereferenced.md))

# Baumkontrolle Properties

| Property                             | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :----------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [base\_data](#base_data)             | `object`  | Required | cannot be null | [Baumkontrolle](dereferenced-properties-grunddaten.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data")            |
| [tree](#tree)                        | `object`  | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree")                 |
| [exemption](#exemption)              | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-freistellung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/exemption")          |
| [vitality](#vitality)                | `string`  | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-vitalitätsstufe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/vitality")        |
| [root](#root)                        | `object`  | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root")                     |
| [trunk](#trunk)                      | `object`  | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm-.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk")       |
| [crown](#crown)                      | `object`  | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown")                     |
| [action\_required](#action_required) | `object`  | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-handlungsbedarf.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required") |
| [status](#status)                    | `object`  | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-zustand.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status")                  |

## base\_data



`base_data`

*   is required

*   Type: `object` ([Grunddaten](dereferenced-properties-grunddaten.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-grunddaten.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/base_data")

### base\_data Type

`object` ([Grunddaten](dereferenced-properties-grunddaten.md))

## tree

Tree definition

`tree`

*   is required

*   Type: `object` ([Baum Daten](dereferenced-properties-baum-daten.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree")

### tree Type

`object` ([Baum Daten](dereferenced-properties-baum-daten.md))

## exemption



`exemption`

*   is optional

*   Type: `boolean` ([Freistellung](dereferenced-properties-freistellung.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-freistellung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/exemption")

### exemption Type

`boolean` ([Freistellung](dereferenced-properties-freistellung.md))

### exemption Examples

```json
false
```

```json
true
```

## vitality



`vitality`

*   is optional

*   Type: `string` ([Vitalitätsstufe](dereferenced-properties-vitalitätsstufe.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-vitalitätsstufe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/vitality")

### vitality Type

`string` ([Vitalitätsstufe](dereferenced-properties-vitalitätsstufe.md))

### vitality Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"vital"`             |             |
| `"leicht geschwächt"` |             |
| `"geschwächt"`        |             |
| `"stark geschwächt"`  |             |

### vitality Default Value

The default value is:

```json
"vital"
```

### vitality Examples

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

## root

Root of the tree.

`root`

*   is optional

*   Type: `object` ([Wurzel](dereferenced-properties-wurzel.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root")

### root Type

`object` ([Wurzel](dereferenced-properties-wurzel.md))

## trunk

trunk foot and trunk

`trunk`

*   is optional

*   Type: `object` ([Stammfuß und Stamm ](dereferenced-properties-stammfuß-und-stamm-.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm-.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk")

### trunk Type

`object` ([Stammfuß und Stamm ](dereferenced-properties-stammfuß-und-stamm-.md))

## crown

Stammfuß und Stamm

`crown`

*   is optional

*   Type: `object` ([Stamm](dereferenced-properties-stamm.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown")

### crown Type

`object` ([Stamm](dereferenced-properties-stamm.md))

## action\_required



`action_required`

*   is optional

*   Type: `object` ([Handlungsbedarf](dereferenced-properties-handlungsbedarf.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-handlungsbedarf.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required")

### action\_required Type

`object` ([Handlungsbedarf](dereferenced-properties-handlungsbedarf.md))

## status



`status`

*   is optional

*   Type: `object` ([Zustand](dereferenced-properties-zustand.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-zustand.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/status")

### status Type

`object` ([Zustand](dereferenced-properties-zustand.md))
