# Timestamp Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/sensor_data/items/properties/timestamp
```

The time at which the data was retrieved, in milliseconds since the Unix epoch.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | Read only           | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## timestamp Type

`number` ([Timestamp](dereferenced-properties-device-orientation-items-properties-timestamp.md))

## timestamp Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## timestamp Examples

```json
0
```
