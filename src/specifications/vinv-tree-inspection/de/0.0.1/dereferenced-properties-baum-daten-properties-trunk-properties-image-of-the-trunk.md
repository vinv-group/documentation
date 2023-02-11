# Image of the trunk Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk
```

Image of the trunk

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## image\_trunk Type

`object` ([Image of the trunk](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk.md))

# image\_trunk Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                               |
| :-------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [uri](#uri)                 | `string`  | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-image.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/uri")               |
| [encoder](#encoder)         | `string`  | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-encoder.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/encoder")         |
| [compression](#compression) | `number`  | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-compression.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/compression") |
| [width](#width)             | `integer` | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-width.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/width")             |
| [height](#height)           | `integer` | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-height.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/height")           |

## uri

A universal resource identifier (URI), according to RFC3986.

`uri`

*   is required

*   Type: `string` ([Image](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-image.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-image.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/uri")

### uri Type

`string` ([Image](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-image.md))

### uri Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### uri Examples

```json
"https://schema.vinv.io/asset/img/logo.png"
```

## encoder

The encoder used to encode the image.

`encoder`

*   is optional

*   Type: `string` ([Encoder](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-encoder.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-encoder.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/encoder")

### encoder Type

`string` ([Encoder](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-encoder.md))

### encoder Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"image/jpeg"` |             |
| `"image/webp"` |             |

### encoder Default Value

The default value is:

```json
"image/webp"
```

### encoder Examples

```json
"image/webp"
```

```json
"image/jpeg"
```

## compression

The compression used to encode the image.

`compression`

*   is optional

*   Type: `number` ([Compression](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-compression.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-compression.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/compression")

### compression Type

`number` ([Compression](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-compression.md))

### compression Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### compression Default Value

The default value is:

```json
1
```

### compression Examples

```json
0.8
```

## width

Width of the image.

`width`

*   is optional

*   Type: `integer` ([Width](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-width.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-width.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/width")

### width Type

`integer` ([Width](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-width.md))

### width Constraints

**maximum**: the value of this number must smaller than or equal to: `10000`

**minimum**: the value of this number must greater than or equal to: `25`

### width Examples

```json
500
```

## height

Height of the image

`height`

*   is optional

*   Type: `integer` ([Height](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-height.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-height.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk/properties/image_trunk/properties/height")

### height Type

`integer` ([Height](dereferenced-properties-baum-daten-properties-trunk-properties-image-of-the-trunk-properties-height.md))

### height Constraints

**maximum**: the value of this number must smaller than or equal to: `10000`

**minimum**: the value of this number must greater than or equal to: `25`

### height Examples

```json
500
```
