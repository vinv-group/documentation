# Untitled object in Sensors Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## device\_orientation Type

`object` ([Details](dereferenced-properties-device-orientation-items-properties-device_orientation.md))

# device\_orientation Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                        |
| :-------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [alpha](#alpha)       | `number`  | Required | cannot be null | [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-alpha.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/alpha")       |
| [beta](#beta)         | `number`  | Required | cannot be null | [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-beta.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/beta")         |
| [gamma](#gamma)       | `number`  | Required | cannot be null | [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-gamma.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/gamma")       |
| [absolute](#absolute) | `boolean` | Optional | cannot be null | [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-absolute.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/absolute") |

## alpha

The z-axis rotation of the device, in degrees, around the z-axis. This value represents the compass direction the device is facing.

`alpha`

*   is required

*   Type: `number` ([Alpha](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-alpha.md))

*   cannot be null

*   defined in: [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-alpha.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/alpha")

### alpha Type

`number` ([Alpha](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-alpha.md))

### alpha Constraints

**maximum**: the value of this number must smaller than or equal to: `360`

**minimum**: the value of this number must greater than or equal to: `0`

### alpha Examples

```json
0
```

### alpha Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## beta

The x-axis rotation of the device, in degrees, around the x-axis. This value represents the front-to-back tilt of the device.

`beta`

*   is required

*   Type: `number` ([Beta](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-beta.md))

*   cannot be null

*   defined in: [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-beta.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/beta")

### beta Type

`number` ([Beta](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-beta.md))

### beta Constraints

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

### beta Examples

```json
0
```

## gamma

The y-axis rotation of the device, in degrees, around the y-axis. This value represents the left-to-right tilt of the device.

`gamma`

*   is required

*   Type: `number` ([Gamma](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-gamma.md))

*   cannot be null

*   defined in: [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-gamma.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/gamma")

### gamma Type

`number` ([Gamma](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-gamma.md))

### gamma Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

### gamma Examples

```json
0
```

## absolute

A boolean value that indicates whether the device's orientation is provided as relative to the Earth's coordinate system or as relative to the device's coordinate system.

`absolute`

*   is optional

*   Type: `boolean` ([Absolute](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-absolute.md))

*   cannot be null

*   defined in: [Sensors](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-absolute.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation/properties/absolute")

### absolute Type

`boolean` ([Absolute](dereferenced-properties-device-orientation-items-properties-device_orientation-properties-absolute.md))

### absolute Examples

```json
false
```

```json
true
```
