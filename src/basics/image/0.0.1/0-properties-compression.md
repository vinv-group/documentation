# Compression Schema

```txt
https://schema.vinv.io/image/0.0.1.json#/properties/compression
```

The compression used to encode the image.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.0.1.json\*](schema/0.0.1.json "open original schema") |

## compression Type

`number` ([Compression](0-properties-compression.md))

## compression Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

## compression Default Value

The default value is:

```json
1
```

## compression Examples

```json
0.8
```
