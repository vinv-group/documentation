# Location Schema

```txt
https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [0.0.1.doc.json\*](0.0.1.doc.json "open original schema") |

## location Type

`object` ([Location](0-properties-location.md))

# location Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                              |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `object` | Required | cannot be null | [Individual Tree](0-properties-location-properties-coordinates.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/coordinates") |
| [accuracy](#accuracy)       | `number` | Required | cannot be null | [Individual Tree](0-properties-location-properties-accuracy.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/accuracy")       |
| [geogrid](#geogrid)         | `object` | Optional | can be null    | [Individual Tree](0-properties-location-properties-geo-grid.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid")        |

## coordinates

Anchor point of the Object on a map. Array of longitude, latitude and \[altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.

`coordinates`

*   is required

*   Type: `object` ([Coordinates](0-properties-location-properties-coordinates.md))

*   cannot be null

*   defined in: [Individual Tree](0-properties-location-properties-coordinates.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/coordinates")

### coordinates Type

`object` ([Coordinates](0-properties-location-properties-coordinates.md))

## accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).

`accuracy`

*   is required

*   Type: `number` ([Accuracy](0-properties-location-properties-accuracy.md))

*   cannot be null

*   defined in: [Individual Tree](0-properties-location-properties-accuracy.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/accuracy")

### accuracy Type

`number` ([Accuracy](0-properties-location-properties-accuracy.md))

### accuracy Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `10000`

**minimum**: the value of this number must greater than or equal to: `0`

### accuracy Examples

```json
3
```

```json
12
```

## geogrid

Geographical Aggregation Grid

`geogrid`

*   is optional

*   Type: `object` ([Geo Grid](0-properties-location-properties-geo-grid.md))

*   can be null

*   defined in: [Individual Tree](0-properties-location-properties-geo-grid.md "https://schema.vinv.io/vinv-individual-tree/0.0.1.json#/properties/location/properties/geogrid")

### geogrid Type

`object` ([Geo Grid](0-properties-location-properties-geo-grid.md))
