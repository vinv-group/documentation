# Gamma Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/gamma
```

The y-axis rotation of the device, in degrees, around the y-axis. This value represents the left-to-right tilt of the device.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## gamma Type

`number` ([Gamma](dereferenced-defs-device_orientation-properties-gamma.md))

## gamma Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

## gamma Examples

```json
0
```
