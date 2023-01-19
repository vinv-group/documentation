# Wurzel Schema

```txt
https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root
```

Root of the tree.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## root Type

`object` ([Wurzel](dereferenced-properties-wurzel.md))

# root Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [raised\_root\_plate](#raised_root_plate) | `boolean` | Required | cannot be null | [Baumkataster](dereferenced-properties-wurzel-properties-angehobener-wurzelteller.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/raised_root_plate") |
| [floor\_cracks](#floor_cracks)            | `boolean` | Required | cannot be null | [Baumkataster](dereferenced-properties-wurzel-properties-bodenrisse.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/floor_cracks")                    |

## raised\_root\_plate



`raised_root_plate`

*   is required

*   Type: `boolean` ([angehobener Wurzelteller](dereferenced-properties-wurzel-properties-angehobener-wurzelteller.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-wurzel-properties-angehobener-wurzelteller.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/raised_root_plate")

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

*   defined in: [Baumkataster](dereferenced-properties-wurzel-properties-bodenrisse.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/root/properties/floor_cracks")

### floor\_cracks Type

`boolean` ([Bodenrisse](dereferenced-properties-wurzel-properties-bodenrisse.md))

### floor\_cracks Examples

```json
false
```

```json
true
```
