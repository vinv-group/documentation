# Settings Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/settings
```

Settings for the device orientation sensor.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## settings Type

`object` ([Settings](dereferenced-properties-settings.md))

# settings Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [frequency](#frequency) | `number` | Optional | cannot be null | [Sensors](dereferenced-properties-settings-properties-frequency.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/settings/properties/frequency") |

## frequency

The requested number of times per second the sensor should be sampled.

`frequency`

*   is optional

*   Type: `number` ([Frequency](dereferenced-properties-settings-properties-frequency.md))

*   cannot be null

*   defined in: [Sensors](dereferenced-properties-settings-properties-frequency.md "https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/settings/properties/frequency")

### frequency Type

`number` ([Frequency](dereferenced-properties-settings-properties-frequency.md))

### frequency Constraints

**maximum**: the value of this number must smaller than or equal to: `86400`

**minimum**: the value of this number must greater than or equal to: `0`

### frequency Default Value

The default value is:

```json
60
```

### frequency Examples

```json
60
```
