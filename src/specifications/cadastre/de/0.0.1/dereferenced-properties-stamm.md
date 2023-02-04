# Stamm Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown
```

Stammfuß und Stamm

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## crown Type

`object` ([Stamm](dereferenced-properties-stamm.md))

# crown Properties

| Property                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                               |
| :------------------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [mushroom](#mushroom)                                   | `boolean` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-pilzfruchtkörper.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/mushroom")                      |
| [deadwood](#deadwood)                                   | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-totholz.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/deadwood")                               |
| [body\_longitudinal\_cracks](#body_longitudinal_cracks) | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-holzkörper-längsrisse.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/body_longitudinal_cracks") |
| [cracked\_v-twin](#cracked_v-twin)                      | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-gerissener-v-zwiesel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/cracked_v-twin")            |
| [cave](#cave)                                           | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-höhle.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/cave")                                     |
| [rib\_pointed\_nose](#rib_pointed_nose)                 | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-spitznasige-längsrippe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/rib_pointed_nose")        |
| [thickening](#thickening)                               | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-verdickung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/thickening")                          |
| [dead\_bark](#dead_bark)                                | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-tote-rinde.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/dead_bark")                           |
| [wound\_rot](#wound_rot)                                | `object`  | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-wunde-mit-fäule.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/wound_rot")                      |
| [loose\_hanging\_branch](#loose_hanging_branch)         | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-lose-hängender-ast.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/loose_hanging_branch")        |
| [breakdown](#breakdown)                                 | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stamm-properties-anbruch.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/breakdown")                              |
| [annotation](#annotation)                               | `string`  | Optional | can be null    | [Baumkontrolle](dereferenced-properties-stamm-properties-anmerkung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/annotation")                           |

## mushroom

Zeitweise sichtbares Vermehrungsorgan eines Pilzes, der möglicherweise lebendes Holz zersetzt.

`mushroom`

*   is required

*   Type: `boolean` ([Pilzfruchtkörper](dereferenced-properties-stamm-properties-pilzfruchtkörper.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-pilzfruchtkörper.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/mushroom")

### mushroom Type

`boolean` ([Pilzfruchtkörper](dereferenced-properties-stamm-properties-pilzfruchtkörper.md))

### mushroom Examples

```json
false
```

```json
true
```

## deadwood

(sicherheitsrelevant)

`deadwood`

*   is optional

*   Type: `boolean` ([Totholz](dereferenced-properties-stamm-properties-totholz.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-totholz.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/deadwood")

### deadwood Type

`boolean` ([Totholz](dereferenced-properties-stamm-properties-totholz.md))

### deadwood Examples

```json
false
```

```json
true
```

## body\_longitudinal\_cracks



`body_longitudinal_cracks`

*   is optional

*   Type: `boolean` ([Holzkörper Längsrisse](dereferenced-properties-stamm-properties-holzkörper-längsrisse.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-holzkörper-längsrisse.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/body_longitudinal_cracks")

### body\_longitudinal\_cracks Type

`boolean` ([Holzkörper Längsrisse](dereferenced-properties-stamm-properties-holzkörper-längsrisse.md))

### body\_longitudinal\_cracks Examples

```json
false
```

```json
true
```

## cracked\_v-twin



`cracked_v-twin`

*   is optional

*   Type: `boolean` ([gerissener V-Zwiesel](dereferenced-properties-stamm-properties-gerissener-v-zwiesel.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-gerissener-v-zwiesel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/cracked_v-twin")

### cracked\_v-twin Type

`boolean` ([gerissener V-Zwiesel](dereferenced-properties-stamm-properties-gerissener-v-zwiesel.md))

### cracked\_v-twin Examples

```json
false
```

```json
true
```

## cave



`cave`

*   is optional

*   Type: `boolean` ([Höhle](dereferenced-properties-stamm-properties-höhle.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-höhle.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/cave")

### cave Type

`boolean` ([Höhle](dereferenced-properties-stamm-properties-höhle.md))

### cave Examples

```json
false
```

```json
true
```

## rib\_pointed\_nose



`rib_pointed_nose`

*   is optional

*   Type: `boolean` ([spitznasige Längsrippe](dereferenced-properties-stamm-properties-spitznasige-längsrippe.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-spitznasige-längsrippe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/rib_pointed_nose")

### rib\_pointed\_nose Type

`boolean` ([spitznasige Längsrippe](dereferenced-properties-stamm-properties-spitznasige-längsrippe.md))

### rib\_pointed\_nose Examples

```json
false
```

```json
true
```

## thickening



`thickening`

*   is optional

*   Type: `boolean` ([Verdickung](dereferenced-properties-stamm-properties-verdickung.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-verdickung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/thickening")

### thickening Type

`boolean` ([Verdickung](dereferenced-properties-stamm-properties-verdickung.md))

### thickening Examples

```json
false
```

```json
true
```

## dead\_bark



`dead_bark`

*   is optional

*   Type: `boolean` ([tote Rinde](dereferenced-properties-stamm-properties-tote-rinde.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-tote-rinde.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/dead_bark")

### dead\_bark Type

`boolean` ([tote Rinde](dereferenced-properties-stamm-properties-tote-rinde.md))

### dead\_bark Examples

```json
false
```

```json
true
```

## wound\_rot



`wound_rot`

*   is optional

*   Type: `object` ([Wunde mit Fäule](dereferenced-properties-stamm-properties-wunde-mit-fäule.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-wunde-mit-fäule.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/wound_rot")

### wound\_rot Type

`object` ([Wunde mit Fäule](dereferenced-properties-stamm-properties-wunde-mit-fäule.md))

## loose\_hanging\_branch



`loose_hanging_branch`

*   is optional

*   Type: `boolean` ([lose hängender Ast](dereferenced-properties-stamm-properties-lose-hängender-ast.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-lose-hängender-ast.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/loose_hanging_branch")

### loose\_hanging\_branch Type

`boolean` ([lose hängender Ast](dereferenced-properties-stamm-properties-lose-hängender-ast.md))

### loose\_hanging\_branch Examples

```json
false
```

```json
true
```

## breakdown



`breakdown`

*   is optional

*   Type: `boolean` ([Anbruch](dereferenced-properties-stamm-properties-anbruch.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-anbruch.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/breakdown")

### breakdown Type

`boolean` ([Anbruch](dereferenced-properties-stamm-properties-anbruch.md))

### breakdown Examples

```json
false
```

```json
true
```

## annotation



`annotation`

*   is optional

*   Type: `string` ([Anmerkung](dereferenced-properties-stamm-properties-anmerkung.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-stamm-properties-anmerkung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/crown/properties/annotation")

### annotation Type

`string` ([Anmerkung](dereferenced-properties-stamm-properties-anmerkung.md))

### annotation Constraints

**maximum length**: the maximum number of characters for this string is: `500`

### annotation Examples

```json
"Unterversorgtes Holzgewebe durch Behinderung oder Unterbrechung des Saftstroms."
```
