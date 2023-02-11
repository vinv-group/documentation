# Encoder Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/crown/properties/image_crown/properties/encoder
```

The encoder used to encode the image.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## encoder Type

`string` ([Encoder](dereferenced-properties-baum-daten-properties-crown-properties-image-of-the-trunk-properties-encoder.md))

## encoder Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"image/jpeg"` |             |
| `"image/webp"` |             |

## encoder Default Value

The default value is:

```json
"image/webp"
```

## encoder Examples

```json
"image/webp"
```

```json
"image/jpeg"
```
