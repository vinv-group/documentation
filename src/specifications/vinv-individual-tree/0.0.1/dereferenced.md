# Individual Tree Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json
```

Tree definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## Individual Tree Type

`object` ([Individual Tree](dereferenced.md))

# Individual Tree Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [location](#location) | `object` | Required | cannot be null | [Individual Tree](dereferenced-properties-location.md "https://schema.vinv.io/location/0.0.1.json#/properties/location")                         |
| [species](#species)   | `string` | Required | cannot be null | [Individual Tree](dereferenced-properties-tree-species.md "https://schema.vinv.io/species/0.0.1.json#/properties/species")                       |
| [dbh](#dbh)           | `number` | Required | cannot be null | [Individual Tree](dereferenced-properties-diameter-at-breast-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/dbh") |
| [height](#height)     | `number` | Optional | can be null    | [Individual Tree](dereferenced-properties-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/height")                 |
| [trunk](#trunk)       | `object` | Optional | can be null    | [Individual Tree](dereferenced-properties-trunk-definition.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/trunk")        |
| [crown](#crown)       | `object` | Optional | can be null    | [Individual Tree](dereferenced-properties-crown.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown")                   |
| [birth](#birth)       | `string` | Optional | can be null    | [Individual Tree](dereferenced-properties-birthday.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/birth")                |

## location



`location`

*   is required

*   Type: `object` ([Location](dereferenced-properties-location.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-properties-location.md "https://schema.vinv.io/location/0.0.1.json#/properties/location")

*   vinv:id: https://schema.vinv.io/location/0.0.1.json

### location Type

`object` ([Location](dereferenced-properties-location.md))

## species

Tree Species values taken from <https://github.com/b-lack/tree-species>

`species`

*   is required

*   Type: `string` ([Tree species](dereferenced-properties-tree-species.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-properties-tree-species.md "https://schema.vinv.io/species/0.0.1.json#/properties/species")

### species Type

`string` ([Tree species](dereferenced-properties-tree-species.md))

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

*   Type: `number` ([Diameter at Breast Height](dereferenced-properties-diameter-at-breast-height.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-properties-diameter-at-breast-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/dbh")

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

## height

Height in Meter

`height`

*   is optional

*   Type: `number` ([Height](dereferenced-properties-height.md))

*   can be null

*   defined in: [Individual Tree](dereferenced-properties-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/height")

### height Type

`number` ([Height](dereferenced-properties-height.md))

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

*   Type: `object` ([Trunk definition](dereferenced-properties-trunk-definition.md))

*   can be null

*   defined in: [Individual Tree](dereferenced-properties-trunk-definition.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/trunk")

### trunk Type

`object` ([Trunk definition](dereferenced-properties-trunk-definition.md))

## crown

Crown definition

`crown`

*   is optional

*   Type: `object` ([Crown](dereferenced-properties-crown.md))

*   can be null

*   defined in: [Individual Tree](dereferenced-properties-crown.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/crown")

### crown Type

`object` ([Crown](dereferenced-properties-crown.md))

## birth

Birthday of the tree

`birth`

*   is optional

*   Type: `string` ([Birthday](dereferenced-properties-birthday.md))

*   can be null

*   defined in: [Individual Tree](dereferenced-properties-birthday.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/birth")

### birth Type

`string` ([Birthday](dereferenced-properties-birthday.md))

### birth Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### birth Examples

```json
"2010-09-13"
```

# Individual Tree Definitions

## Definitions group dimension\_at\_height

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height-1)   | `number` | Optional | cannot be null | [Individual Tree](dereferenced-defs-diameter-at-height-properties-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/height")     |
| [diameter](#diameter) | `number` | Optional | cannot be null | [Individual Tree](dereferenced-defs-diameter-at-height-properties-diameter.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/diameter") |

### height

Height of tree in PERCENT where diameter is measured

`height`

*   is optional

*   Type: `number` ([Height](dereferenced-defs-diameter-at-height-properties-height.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-defs-diameter-at-height-properties-height.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/height")

#### height Type

`number` ([Height](dereferenced-defs-diameter-at-height-properties-height.md))

#### height Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

#### height Examples

```json
0.5
```

```json
0.1
```

### diameter

Diameter in CENTIMETER at measured height

`diameter`

*   is optional

*   Type: `number` ([Diameter](dereferenced-defs-diameter-at-height-properties-diameter.md))

*   cannot be null

*   defined in: [Individual Tree](dereferenced-defs-diameter-at-height-properties-diameter.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/$defs/dimension_at_height/properties/diameter")

#### diameter Type

`number` ([Diameter](dereferenced-defs-diameter-at-height-properties-diameter.md))

#### diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `10`

#### diameter Examples

```json
34
```

```json
38
```
