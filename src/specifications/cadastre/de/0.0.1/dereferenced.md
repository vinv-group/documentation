# Baumkataster Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json
```

Tree cadastre

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## Baumkataster Type

`object` ([Baumkataster](dereferenced.md))

# Baumkataster Properties

| Property                                     | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [tree](#tree)                                | `object` | Required | cannot be null | [Baumkataster](dereferenced-properties-individual-tree.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree")                    |
| [conservation\_status](#conservation_status) | `string` | Required | cannot be null | [Baumkataster](dereferenced-properties-conservation-status.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/conservation_status") |
| [root](#root)                                | `object` | Optional | cannot be null | [Baumkataster](dereferenced-properties-wurzel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root")                             |
| [trunk](#trunk)                              | `object` | Optional | cannot be null | [Baumkataster](dereferenced-properties-stammfuß-und-stamm-.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk")               |
| [crown](#crown)                              | `object` | Optional | cannot be null | [Baumkataster](dereferenced-properties-stammfuß-und-stamm--1.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown")             |
| [annotation](#annotation)                    | `string` | Optional | cannot be null | [Baumkataster](dereferenced-properties-anmerkung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/annotation")                    |

## tree

Tree definition

`tree`

*   is required

*   Type: `object` ([Individual Tree](dereferenced-properties-individual-tree.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-individual-tree.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree")

### tree Type

`object` ([Individual Tree](dereferenced-properties-individual-tree.md))

## conservation\_status

Conservation status of the tree.

`conservation_status`

*   is required

*   Type: `string` ([Conservation status](dereferenced-properties-conservation-status.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-conservation-status.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/conservation_status")

### conservation\_status Type

`string` ([Conservation status](dereferenced-properties-conservation-status.md))

### conservation\_status Constraints

**maximum length**: the maximum number of characters for this string is: `50`

### conservation\_status Examples

```json
"protected"
```

```json
"not protected"
```

## root

Root of the tree.

`root`

*   is optional

*   Type: `object` ([Wurzel](dereferenced-properties-wurzel.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-wurzel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root")

### root Type

`object` ([Wurzel](dereferenced-properties-wurzel.md))

## trunk

trunk foot and trunk

`trunk`

*   is optional

*   Type: `object` ([Stammfuß und Stamm ](dereferenced-properties-stammfuß-und-stamm-.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-stammfuß-und-stamm-.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk")

### trunk Type

`object` ([Stammfuß und Stamm ](dereferenced-properties-stammfuß-und-stamm-.md))

## crown

trunk foot and trunk

`crown`

*   is optional

*   Type: `object` ([Stammfuß und Stamm ](dereferenced-properties-stammfuß-und-stamm--1.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-stammfuß-und-stamm--1.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown")

### crown Type

`object` ([Stammfuß und Stamm ](dereferenced-properties-stammfuß-und-stamm--1.md))

## annotation

Zeitweise sichtbares Vermehrungsorgan eines Pilzes, der möglicherweise lebendes Holz zersetzt.

`annotation`

*   is optional

*   Type: `string` ([Anmerkung](dereferenced-properties-anmerkung.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-anmerkung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/annotation")

### annotation Type

`string` ([Anmerkung](dereferenced-properties-anmerkung.md))

### annotation Constraints

**maximum length**: the maximum number of characters for this string is: `500`

### annotation Examples

```json
"Unterversorgtes Holzgewebe durch Behinderung oder Unterbrechung des Saftstroms."
```
