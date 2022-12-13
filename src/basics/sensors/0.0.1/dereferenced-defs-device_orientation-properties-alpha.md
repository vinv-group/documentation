# Alpha Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/alpha
```

The z-axis rotation of the device, in degrees, around the z-axis. This value represents the compass direction the device is facing.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | Read only           | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## alpha Type

`number` ([Alpha](dereferenced-defs-device_orientation-properties-alpha.md))

## alpha Constraints

**maximum**: the value of this number must smaller than or equal to: `360`

**minimum**: the value of this number must greater than or equal to: `0`

## alpha Examples

```json
0
```
