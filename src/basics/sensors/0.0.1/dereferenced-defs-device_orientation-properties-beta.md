# Beta Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/beta
```

The x-axis rotation of the device, in degrees, around the x-axis. This value represents the front-to-back tilt of the device.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## beta Type

`number` ([Beta](dereferenced-defs-device_orientation-properties-beta.md))

## beta Constraints

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

## beta Examples

```json
0
```
