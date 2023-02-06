# Baum Daten Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree
```

Tree definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## tree Type

`object` ([Baum Daten](dereferenced-properties-baum-daten.md))

# tree Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [species](#species) | `string` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten-properties-tree-species.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/species")          |
| [dbh](#dbh)         | `number` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten-properties-diameter-at-breast-height.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/dbh") |
| [height](#height)   | `number` | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-height.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/height")                 |
| [trunk](#trunk)     | `object` | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/trunk")                   |
| [crown](#crown)     | `object` | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-crown.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/crown")                   |
| [birth](#birth)     | `string` | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-birthday.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/birth")                |

## species

Tree Species values taken from <https://github.com/b-lack/tree-species>

`species`

*   is required

*   Type: `string` ([Tree species](dereferenced-properties-baum-daten-properties-tree-species.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-tree-species.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/species")

### species Type

`string` ([Tree species](dereferenced-properties-baum-daten-properties-tree-species.md))

### species Constraints

**pattern**: the string must match the following regular expression:&#x20;

```txt
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24 "try regular expression with regexr.com")

### species Examples

```json
"JM2"
```

## dbh

Diameter in centimeter

`dbh`

*   is required

*   Type: `number` ([Diameter at Breast Height](dereferenced-properties-baum-daten-properties-diameter-at-breast-height.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-diameter-at-breast-height.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/dbh")

### dbh Type

`number` ([Diameter at Breast Height](dereferenced-properties-baum-daten-properties-diameter-at-breast-height.md))

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

## height

Height in Meter

`height`

*   is optional

*   Type: `number` ([Height](dereferenced-properties-baum-daten-properties-height.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-height.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/height")

### height Type

`number` ([Height](dereferenced-properties-baum-daten-properties-height.md))

### height Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `99`

**minimum**: the value of this number must greater than or equal to: `0.5`

### height Examples

```json
14
```

```json
13.5
```

```json
15.6
```

## trunk

Trunk definition

`trunk`

*   is optional

*   Type: `object` ([Trunk](dereferenced-properties-baum-daten-properties-trunk.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/trunk")

### trunk Type

`object` ([Trunk](dereferenced-properties-baum-daten-properties-trunk.md))

## crown

Crown definition

`crown`

*   is optional

*   Type: `object` ([Crown](dereferenced-properties-baum-daten-properties-crown.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-crown.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/crown")

### crown Type

`object` ([Crown](dereferenced-properties-baum-daten-properties-crown.md))

## birth

Birthday of the tree

`birth`

*   is optional

*   Type: `string` ([Birthday](dereferenced-properties-baum-daten-properties-birthday.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-birthday.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/birth")

### birth Type

`string` ([Birthday](dereferenced-properties-baum-daten-properties-birthday.md))

### birth Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### birth Examples

```json
"2010-09-13"
```
