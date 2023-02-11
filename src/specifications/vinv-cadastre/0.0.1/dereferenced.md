# Cadastre Schema

```txt
https://schema.vinv.io/vinv-cadastre/0.0.1.json
```

Tree cadastre

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## Cadastre Type

`object` ([Cadastre](dereferenced.md))

# Cadastre Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                         |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [location](#location) | `object` | Required | cannot be null | [Cadastre](dereferenced-properties-location.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/location")             |
| [dbh](#dbh)           | `number` | Required | cannot be null | [Cadastre](dereferenced-properties-diameter-at-breast-height.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/dbh") |
| [tree](#tree)         | `object` | Required | cannot be null | [Cadastre](dereferenced-properties-individual-tree.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/tree")          |

## location



`location`

*   is required

*   Type: `object` ([Location](dereferenced-properties-location.md))

*   cannot be null

*   defined in: [Cadastre](dereferenced-properties-location.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/location")

### location Type

`object` ([Location](dereferenced-properties-location.md))

## dbh

Diameter in centimeter

`dbh`

*   is required

*   Type: `number` ([Diameter at Breast Height](dereferenced-properties-diameter-at-breast-height.md))

*   cannot be null

*   defined in: [Cadastre](dereferenced-properties-diameter-at-breast-height.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/dbh")

### dbh Type

`number` ([Diameter at Breast Height](dereferenced-properties-diameter-at-breast-height.md))

### dbh Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

### dbh Examples

```json
34
```

```json
56
```

## tree

Tree definition

`tree`

*   is required

*   Type: `object` ([Individual Tree](dereferenced-properties-individual-tree.md))

*   cannot be null

*   defined in: [Cadastre](dereferenced-properties-individual-tree.md "https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/tree")

### tree Type

`object` ([Individual Tree](dereferenced-properties-individual-tree.md))
