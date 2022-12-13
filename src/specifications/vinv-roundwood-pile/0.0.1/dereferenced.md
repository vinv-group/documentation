# RoundwoodPile Schema

```txt
https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json
```

Roundwood Pile

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## RoundwoodPile Type

`object` ([RoundwoodPile](dereferenced.md))

# RoundwoodPile Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [location](#location)                   | `object` | Required | cannot be null | [RoundwoodPile](dereferenced-properties-location.md "https://schema.vinv.io/location/0.0.1.json#/properties/location")        |
| [trunks](#trunks)                       | `array`  | Required | cannot be null | [RoundwoodPile](dereferenced-properties-trunks.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/trunks") |
| [image\_pile\_front](#image_pile_front) | `object` | Optional | can be null    | [RoundwoodPile](dereferenced-properties-image.md "https://schema.vinv.io/image/0.0.1.json#/properties/image_pile_front")      |

## location



`location`

*   is required

*   Type: `object` ([Location](dereferenced-properties-location.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-properties-location.md "https://schema.vinv.io/location/0.0.1.json#/properties/location")

*   vinv:id: https://schema.vinv.io/location/0.0.1.json

### location Type

`object` ([Location](dereferenced-properties-location.md))

## trunks

Multiple trunk definition.

`trunks`

*   is required

*   Type: `object[]` ([Trunk](dereferenced-properties-trunks-trunk.md))

*   cannot be null

*   defined in: [RoundwoodPile](dereferenced-properties-trunks.md "https://schema.vinv.io/vinv-roundwood-pile/0.0.1.json#/properties/trunks")

### trunks Type

`object[]` ([Trunk](dereferenced-properties-trunks-trunk.md))

### trunks Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## image\_pile\_front

Image of the Pile front

`image_pile_front`

*   is optional

*   Type: `object` ([Image](dereferenced-properties-image.md))

*   can be null

*   defined in: [RoundwoodPile](dereferenced-properties-image.md "https://schema.vinv.io/image/0.0.1.json#/properties/image_pile_front")

*   vinv:id: https://schema.vinv.io/image/0.0.1.json

### image\_pile\_front Type

`object` ([Image](dereferenced-properties-image.md))
