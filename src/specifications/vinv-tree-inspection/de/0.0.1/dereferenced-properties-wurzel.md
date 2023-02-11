# Wurzel Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root
```

Root of the tree.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## root Type

`object` ([Wurzel](dereferenced-properties-wurzel.md))

# root Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :---------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [raised\_root\_plate](#raised_root_plate) | `boolean` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel-properties-angehobener-wurzelteller.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/raised_root_plate")      |
| [floor\_cracks](#floor_cracks)            | `boolean` | Required | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel-properties-bodenrisse.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/floor_cracks")                         |
| [main\_root\_damage](#main_root_damage)   | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel-properties-windseitige-hauptwurzelschäden.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/main_root_damage") |
| [near\_trunk\_shafts](#near_trunk_shafts) | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel-properties-stammnahe-schachtungen.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/near_trunk_shafts")        |
| [backfill\_root](#backfill_root)          | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel-properties-stammnahe-schachtungen-1.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/backfill_root")          |
| [stilt\_roots](#stilt_roots)              | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel-properties-stelzwurzeln.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/stilt_roots")                        |
| [exposed\_roots](#exposed_roots)          | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-wurzel-properties-freigespülte-wurzeln.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/exposed_roots")              |
| [annotation](#annotation)                 | `string`  | Optional | can be null    | [Baumkontrolle](dereferenced-properties-wurzel-properties-anmerkung.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/annotation")                            |

## raised\_root\_plate



`raised_root_plate`

*   is required

*   Type: `boolean` ([angehobener Wurzelteller](dereferenced-properties-wurzel-properties-angehobener-wurzelteller.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-angehobener-wurzelteller.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/raised_root_plate")

### raised\_root\_plate Type

`boolean` ([angehobener Wurzelteller](dereferenced-properties-wurzel-properties-angehobener-wurzelteller.md))

### raised\_root\_plate Examples

```json
false
```

```json
true
```

## floor\_cracks

konzentrische Bodenrisse quer zur Wurzel (auch Wegedecken, Mauern usw.)

`floor_cracks`

*   is required

*   Type: `boolean` ([Bodenrisse](dereferenced-properties-wurzel-properties-bodenrisse.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-bodenrisse.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/floor_cracks")

### floor\_cracks Type

`boolean` ([Bodenrisse](dereferenced-properties-wurzel-properties-bodenrisse.md))

### floor\_cracks Examples

```json
false
```

```json
true
```

## main\_root\_damage



`main_root_damage`

*   is optional

*   Type: `boolean` ([windseitige Hauptwurzelschäden](dereferenced-properties-wurzel-properties-windseitige-hauptwurzelschäden.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-windseitige-hauptwurzelschäden.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/main_root_damage")

### main\_root\_damage Type

`boolean` ([windseitige Hauptwurzelschäden](dereferenced-properties-wurzel-properties-windseitige-hauptwurzelschäden.md))

### main\_root\_damage Examples

```json
false
```

```json
true
```

## near\_trunk\_shafts



`near_trunk_shafts`

*   is optional

*   Type: `boolean` ([stammnahe Schachtungen](dereferenced-properties-wurzel-properties-stammnahe-schachtungen.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-stammnahe-schachtungen.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/near_trunk_shafts")

### near\_trunk\_shafts Type

`boolean` ([stammnahe Schachtungen](dereferenced-properties-wurzel-properties-stammnahe-schachtungen.md))

### near\_trunk\_shafts Examples

```json
false
```

```json
true
```

## backfill\_root



`backfill_root`

*   is optional

*   Type: `boolean` ([stammnahe Schachtungen](dereferenced-properties-wurzel-properties-stammnahe-schachtungen-1.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-stammnahe-schachtungen-1.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/backfill_root")

### backfill\_root Type

`boolean` ([stammnahe Schachtungen](dereferenced-properties-wurzel-properties-stammnahe-schachtungen-1.md))

### backfill\_root Examples

```json
false
```

```json
true
```

## stilt\_roots



`stilt_roots`

*   is optional

*   Type: `boolean` ([Stelzwurzeln](dereferenced-properties-wurzel-properties-stelzwurzeln.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-stelzwurzeln.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/stilt_roots")

### stilt\_roots Type

`boolean` ([Stelzwurzeln](dereferenced-properties-wurzel-properties-stelzwurzeln.md))

### stilt\_roots Examples

```json
false
```

```json
true
```

## exposed\_roots



`exposed_roots`

*   is optional

*   Type: `boolean` ([freigespülte Wurzeln](dereferenced-properties-wurzel-properties-freigespülte-wurzeln.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-freigespülte-wurzeln.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/exposed_roots")

### exposed\_roots Type

`boolean` ([freigespülte Wurzeln](dereferenced-properties-wurzel-properties-freigespülte-wurzeln.md))

### exposed\_roots Examples

```json
false
```

```json
true
```

## annotation



`annotation`

*   is optional

*   Type: `string` ([Anmerkung](dereferenced-properties-wurzel-properties-anmerkung.md))

*   can be null

*   defined in: [Baumkontrolle](dereferenced-properties-wurzel-properties-anmerkung.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root/properties/annotation")

### annotation Type

`string` ([Anmerkung](dereferenced-properties-wurzel-properties-anmerkung.md))

### annotation Constraints

**maximum length**: the maximum number of characters for this string is: `500`

### annotation Examples

```json
"Unterversorgtes Holzgewebe durch Behinderung oder Unterbrechung des Saftstroms."
```
