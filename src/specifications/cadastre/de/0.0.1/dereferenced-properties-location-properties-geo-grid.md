# Geo Grid Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/location/properties/geogrid
```

Geographical Aggregation Grid

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## geogrid Type

`object` ([Geo Grid](dereferenced-properties-location-properties-geo-grid.md))

# geogrid Properties

| Property            | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                      |
| :------------------ | :------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [h3](#h3)           | `string` | Optional | can be null | [Baumkontrolle](dereferenced-properties-location-properties-geo-grid-properties-h3-location.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/location/properties/geogrid/properties/h3")           |
| [geohash](#geohash) | `string` | Optional | can be null | [Baumkontrolle](dereferenced-properties-location-properties-geo-grid-properties-geohash-location.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/location/properties/geogrid/properties/geohash") |

## h3

Location of the event (h3 <https://h3geo.org/>)

`h3`

*   is optional

*   Type: `string` ([h3-Location](dereferenced-properties-location-properties-geo-grid-properties-h3-location.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-location-properties-geo-grid-properties-h3-location.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/location/properties/geogrid/properties/h3")

### h3 Type

`string` ([h3-Location](dereferenced-properties-location-properties-geo-grid-properties-h3-location.md))

### h3 Constraints

**maximum length**: the maximum number of characters for this string is: `15`

**minimum length**: the minimum number of characters for this string is: `15`

### h3 Examples

```json
"8428309ffffffff"
```

## geohash

Location of the event (geohash <https://en.wikipedia.org/wiki/Geohash>)

`geohash`

*   is optional

*   Type: `string` ([geohash-Location](dereferenced-properties-location-properties-geo-grid-properties-geohash-location.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-location-properties-geo-grid-properties-geohash-location.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/location/properties/geogrid/properties/geohash")

### geohash Type

`string` ([geohash-Location](dereferenced-properties-location-properties-geo-grid-properties-geohash-location.md))

### geohash Constraints

**maximum length**: the maximum number of characters for this string is: `12`

**minimum length**: the minimum number of characters for this string is: `1`

### geohash Examples

```json
"ww8p1r4t8"
```
