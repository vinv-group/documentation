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

| Property                         | Type      | Required | Nullable       | Defined by                                                                                                                                                                         |
| :------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [misalignment](#misalignment)    | `boolean` | Required | cannot be null | [Baumkataster](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/misalignment") |
| [juice\_leakage](#juice_leakage) | `boolean` | Required | cannot be null | [Baumkataster](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/juice_leakage")  |

## misalignment

Schiefstellung (akutes Kippen)

`misalignment`

*   is required

*   Type: `boolean` ([Schiefstellung](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/misalignment")

### misalignment Type

`boolean` ([Schiefstellung](dereferenced-properties-stammfuß-und-stamm--properties-schiefstellung.md))

### misalignment Examples

```json
false
```

```json
true
```

## juice\_leakage

dunkler Saftaustritt am Stammfuß

`juice_leakage`

*   is required

*   Type: `boolean` ([Saftaustritt](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md))

*   cannot be null

*   defined in: [Baumkataster](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md "https://schema.vinv.io/cadastre/de/0.0.1.json#/properties/trunk/properties/juice_leakage")

### juice\_leakage Type

`boolean` ([Saftaustritt](dereferenced-properties-stammfuß-und-stamm--properties-saftaustritt.md))

### juice\_leakage Examples

```json
false
```

```json
true
```
