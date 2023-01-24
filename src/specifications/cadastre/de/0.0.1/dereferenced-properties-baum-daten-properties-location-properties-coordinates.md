# Coordinates Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/location/properties/coordinates
```

Anchor point of the Object on a map. Array of longitude, latitude and \[altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## coordinates Type

`object` ([Coordinates](dereferenced-properties-baum-daten-properties-location-properties-coordinates.md))

# coordinates Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                              |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [longitude](#longitude) | `number` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-longitude.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/location/properties/coordinates/properties/longitude") |
| [latitude](#latitude)   | `number` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-latitude.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/location/properties/coordinates/properties/latitude")   |
| [altitude](#altitude)   | `number` | Optional | can be null    | [Baumkontrolle](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-altitude.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/location/properties/coordinates/properties/altitude")   |

## longitude

The decimal east/west position of a point. (7 decimal places max)

`longitude`

*   is required

*   Type: `number` ([Longitude](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-longitude.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-longitude.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/location/properties/coordinates/properties/longitude")

### longitude Type

`number` ([Longitude](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-longitude.md))

### longitude Constraints

**multiple of**: the value of this number must be a multiple of: `1e-7`

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

### longitude Examples

```json
-130.5627874
```

```json
130.5627874
```

## latitude

The decimal north/south position of a point. (7 decimal places max)

`latitude`

*   is required

*   Type: `number` ([Latitude](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-latitude.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-latitude.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/location/properties/coordinates/properties/latitude")

### latitude Type

`number` ([Latitude](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-latitude.md))

### latitude Constraints

**multiple of**: the value of this number must be a multiple of: `1e-7`

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

### latitude Examples

```json
-12.4563
```

```json
50.5627874
```

## altitude

The altitude of the position in meters above mean sea level. (2 decimal places max)

`altitude`

*   is optional

*   Type: `number` ([Altitude](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-altitude.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-altitude.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/tree/properties/location/properties/coordinates/properties/altitude")

### altitude Type

`number` ([Altitude](dereferenced-properties-baum-daten-properties-location-properties-coordinates-properties-altitude.md))

### altitude Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `2500`

**minimum**: the value of this number must greater than or equal to: `0`

### altitude Examples

```json
0
```

```json
130
```
