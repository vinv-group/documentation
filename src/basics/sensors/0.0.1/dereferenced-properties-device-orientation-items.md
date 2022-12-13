# Untitled object in Sensors Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## items Type

`object` ([Details](dereferenced-properties-device-orientation-items.md))

# items Properties

| Property                                   | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :----------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [timestamp](#timestamp)                    | `number` | Required | cannot be null | [Sensors](dereferenced-properties-device-orientation-items-properties-timestamp.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/timestamp") |
| [device\_orientation](#device_orientation) | `object` | Required | cannot be null | [Sensors](dereferenced-defs-device_orientation.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation")                         |

## timestamp

The time at which the data was retrieved, in milliseconds since the Unix epoch.

`timestamp`

*   is required

*   Type: `number` ([Timestamp](dereferenced-properties-device-orientation-items-properties-timestamp.md))

*   cannot be null

*   defined in: [Sensors](dereferenced-properties-device-orientation-items-properties-timestamp.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/timestamp")

### timestamp Type

`number` ([Timestamp](dereferenced-properties-device-orientation-items-properties-timestamp.md))

### timestamp Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### timestamp Examples

```json
0
```

### timestamp Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## device\_orientation



`device_orientation`

*   is required

*   Type: `object` ([Details](dereferenced-defs-device_orientation.md))

*   cannot be null

*   defined in: [Sensors](dereferenced-defs-device_orientation.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/device_orientation")

### device\_orientation Type

`object` ([Details](dereferenced-defs-device_orientation.md))
