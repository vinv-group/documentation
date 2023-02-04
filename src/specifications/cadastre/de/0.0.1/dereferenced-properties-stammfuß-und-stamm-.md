# Stammfuß und Stamm  Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk
```

trunk foot and trunk

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## trunk Type

`object` ([Stammfuß und Stamm ](dereferenced-properties-stammfuß-und-stamm-.md))

# trunk Properties

| Property                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :------------------------------------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [misalignment](#misalignment)                           | `object`  | Required | can be null    | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/misalignment")                    |
| [juice\_leakage](#juice_leakage)                        | `boolean` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/juice_leakage")                     |
| [mushroom](#mushroom)                                   | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-pilzfruchtkörper.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/mushroom")                      |
| [body\_longitudinal\_cracks](#body_longitudinal_cracks) | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-holzkörper-längsrisse.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/body_longitudinal_cracks") |
| [cracked\_v-twin](#cracked_v-twin)                      | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-gerissener-v-zwiesel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/cracked_v-twin")            |
| [cave](#cave)                                           | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-höhle.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/cave")                                     |
| [rib\_pointed\_nose](#rib_pointed_nose)                 | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-spitznasige-längsrippe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/rib_pointed_nose")        |
| [thickening](#thickening)                               | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-verdickung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/thickening")                          |
| [dead\_bark](#dead_bark)                                | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-tote-rinde.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/dead_bark")                           |
| [wound\_rot](#wound_rot)                                | `object`  | Optional | can be null    | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-wunde-mit-fäule.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/wound_rot")                      |
| [capping](#capping)                                     | `object`  | Optional | can be null    | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-kappung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/capping")                                |
| [annotation](#annotation)                               | `string`  | Optional | can be null    | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-anmerkung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/annotation")                           |

## misalignment

akutes Kippen

`misalignment`

*   is required

*   Type: `object` ([Schiefstellung](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/misalignment")

### misalignment Type

`object` ([Schiefstellung](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md))

## juice\_leakage

dunkler Saftaustritt am Stammfuß

`juice_leakage`

*   is required

*   Type: `boolean` ([Saftaustritt](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/juice_leakage")

### juice\_leakage Type

`boolean` ([Saftaustritt](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md))

### juice\_leakage Examples

```json
false
```

```json
true
```

## mushroom

Zeitweise sichtbares Vermehrungsorgan eines Pilzes, der möglicherweise lebendes Holz zersetzt.

`mushroom`

*   is optional

*   Type: `boolean` ([Pilzfruchtkörper](dereferenced-properties-stammfuß-und-stamm--properties-pilzfruchtkörper.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-pilzfruchtkörper.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/mushroom")

### mushroom Type

`boolean` ([Pilzfruchtkörper](dereferenced-properties-stammfuß-und-stamm--properties-pilzfruchtkörper.md))

### mushroom Examples

```json
false
```

```json
true
```

## body\_longitudinal\_cracks



`body_longitudinal_cracks`

*   is optional

*   Type: `boolean` ([Holzkörper Längsrisse](dereferenced-properties-stammfuß-und-stamm--properties-holzkörper-längsrisse.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-holzkörper-längsrisse.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/body_longitudinal_cracks")

### body\_longitudinal\_cracks Type

`boolean` ([Holzkörper Längsrisse](dereferenced-properties-stammfuß-und-stamm--properties-holzkörper-längsrisse.md))

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

*   Type: `boolean` ([gerissener V-Zwiesel](dereferenced-properties-stammfuß-und-stamm--properties-gerissener-v-zwiesel.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-gerissener-v-zwiesel.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/cracked_v-twin")

### cracked\_v-twin Type

`boolean` ([gerissener V-Zwiesel](dereferenced-properties-stammfuß-und-stamm--properties-gerissener-v-zwiesel.md))

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

*   Type: `boolean` ([Höhle](dereferenced-properties-stammfuß-und-stamm--properties-höhle.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-höhle.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/cave")

### cave Type

`boolean` ([Höhle](dereferenced-properties-stammfuß-und-stamm--properties-höhle.md))

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

*   Type: `boolean` ([spitznasige Längsrippe](dereferenced-properties-stammfuß-und-stamm--properties-spitznasige-längsrippe.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-spitznasige-längsrippe.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/rib_pointed_nose")

### rib\_pointed\_nose Type

`boolean` ([spitznasige Längsrippe](dereferenced-properties-stammfuß-und-stamm--properties-spitznasige-längsrippe.md))

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

*   Type: `boolean` ([Verdickung](dereferenced-properties-stammfuß-und-stamm--properties-verdickung.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-verdickung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/thickening")

### thickening Type

`boolean` ([Verdickung](dereferenced-properties-stammfuß-und-stamm--properties-verdickung.md))

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

*   Type: `boolean` ([tote Rinde](dereferenced-properties-stammfuß-und-stamm--properties-tote-rinde.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-tote-rinde.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/dead_bark")

### dead\_bark Type

`boolean` ([tote Rinde](dereferenced-properties-stammfuß-und-stamm--properties-tote-rinde.md))

### dead\_bark Examples

```json
false
```

```json
true
```

## wound\_rot

Aufgrund einer Verletzung abgestorbenes, ausfaulendes Holz.

`wound_rot`

*   is optional

*   Type: `object` ([Wunde mit Fäule](dereferenced-properties-stammfuß-und-stamm--properties-wunde-mit-fäule.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-wunde-mit-fäule.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/wound_rot")

### wound\_rot Type

`object` ([Wunde mit Fäule](dereferenced-properties-stammfuß-und-stamm--properties-wunde-mit-fäule.md))

## capping

Baumzerstörende Einkürzung der Krone ohne Rücksicht auf die Wuchsform, Notmaßnahme zur Herstellung der Verkehrssicherheit. Geeignete Minderungsmaßnahme zur Entwicklung von Totholz-Lebensraum anstelle einer Fällung. Solange ein Totholzstumpf durch mögliches Umstürzen eine Verkehrsfläche erreichen kann, wird er der Regelkontrolle unterzogen.

`capping`

*   is optional

*   Type: `object` ([Kappung](dereferenced-properties-stammfuß-und-stamm--properties-kappung.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-kappung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/capping")

### capping Type

`object` ([Kappung](dereferenced-properties-stammfuß-und-stamm--properties-kappung.md))

## annotation



`annotation`

*   is optional

*   Type: `string` ([Anmerkung](dereferenced-properties-stammfuß-und-stamm--properties-anmerkung.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-anmerkung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/annotation")

### annotation Type

`string` ([Anmerkung](dereferenced-properties-stammfuß-und-stamm--properties-anmerkung.md))

### annotation Constraints

**maximum length**: the maximum number of characters for this string is: `500`

### annotation Examples

```json
"Unterversorgtes Holzgewebe durch Behinderung oder Unterbrechung des Saftstroms."
```
