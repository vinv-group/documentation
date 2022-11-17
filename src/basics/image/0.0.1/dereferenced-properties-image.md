# Image Schema

```txt
https://schema.vinv.io/image/0.0.1.json#/properties/uri
```

A universal resource identifier (URI), according to RFC3986.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../vinv-schemas/vinv-tree/out/dereferenced.doc.json "open original schema") |

## uri Type

`string` ([Image](dereferenced-properties-image.md))

## uri Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## uri Examples

```json
"https://schema.vinv.io/asset/img/logo.png"
```
