# Handlungsbedarf Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## action\_required Type

`object` ([Handlungsbedarf](dereferenced-properties-handlungsbedarf.md))

# action\_required Properties

| Property                                                                   | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                              |
| :------------------------------------------------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [further\_visual\_inspection](#further_visual_inspection)                  | `boolean`     | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-handlungsbedarf-properties-further_visual_inspection.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required/properties/further_visual_inspection")       |
| [further\_visual\_inspection\_comment](#further_visual_inspection_comment) | Not specified | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-handlungsbedarf-properties-eingehende-untersuchung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required/properties/further_visual_inspection_comment") |
| [urgency](#urgency)                                                        | `string`      | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-handlungsbedarf-properties-dringlichkeit.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required/properties/urgency")                                     |

## further\_visual\_inspection



`further_visual_inspection`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-handlungsbedarf-properties-further_visual_inspection.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required/properties/further_visual_inspection")

### further\_visual\_inspection Type

`boolean`

### further\_visual\_inspection Examples

```json
false
```

```json
true
```

## further\_visual\_inspection\_comment



`further_visual_inspection_comment`

*   is optional

*   Type: unknown ([Eingehende Untersuchung](dereferenced-properties-handlungsbedarf-properties-eingehende-untersuchung.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-handlungsbedarf-properties-eingehende-untersuchung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required/properties/further_visual_inspection_comment")

### further\_visual\_inspection\_comment Type

unknown ([Eingehende Untersuchung](dereferenced-properties-handlungsbedarf-properties-eingehende-untersuchung.md))

### further\_visual\_inspection\_comment Examples

```json
false
```

```json
true
```

## urgency



`urgency`

*   is optional

*   Type: `string` ([Dringlichkeit](dereferenced-properties-handlungsbedarf-properties-dringlichkeit.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-handlungsbedarf-properties-dringlichkeit.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/action_required/properties/urgency")

### urgency Type

`string` ([Dringlichkeit](dereferenced-properties-handlungsbedarf-properties-dringlichkeit.md))

### urgency Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"nicht dringend"` |             |
| `"dringend"`       |             |
| `"sehr dringend"`  |             |

### urgency Examples

```json
"nicht dringend"
```

```json
"dringend"
```

```json
"sehr dringend"
```
