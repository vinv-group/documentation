# vinv-Envelope Schema

```txt
undefined
```

The envelope provides a structure for all vinv data.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## vinv-Envelope Type

`object` ([vinv-Envelope](dereferenced.md))

# vinv-Envelope Properties

| Property           | Type     | Required | Nullable       | Defined by                                                                         |
| :----------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------- |
| [$schema](#schema) | `string` | Required | cannot be null | [vinv-Envelope](dereferenced-properties-schema.md "undefined#/properties/$schema") |
| [data](#data)      | `object` | Optional | cannot be null | [vinv-Envelope](dereferenced-properties-data.md "undefined#/properties/data")      |

## $schema



`$schema`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [vinv-Envelope](dereferenced-properties-schema.md "undefined#/properties/$schema")

### $schema Type

`string`

### $schema Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### $schema Examples

```json
"https://schema.vinv.io/envelope/0.0.1.schema.json"
```

## data

The data to be validated.

`data`

*   is optional

*   Type: `object` ([Details](dereferenced-properties-data.md))

*   cannot be null

*   defined in: [vinv-Envelope](dereferenced-properties-data.md "undefined#/properties/data")

### data Type

`object` ([Details](dereferenced-properties-data.md))
