# Frequency Schema

```txt
https://schema.vinv.io/vinv-sensors/0.0.1.json#/properties/settings/properties/frequency
```

The requested number of times per second the sensor should be sampled.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## frequency Type

`number` ([Frequency](dereferenced-properties-settings-properties-frequency.md))

## frequency Constraints

**maximum**: the value of this number must smaller than or equal to: `86400`

**minimum**: the value of this number must greater than or equal to: `0`

## frequency Default Value

The default value is:

```json
60
```

## frequency Examples

```json
60
```
