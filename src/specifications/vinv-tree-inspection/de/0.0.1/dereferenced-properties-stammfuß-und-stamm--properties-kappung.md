# Kappung Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/trunk/properties/capping
```

Baumzerstörende Einkürzung der Krone ohne Rücksicht auf die Wuchsform, Notmaßnahme zur Herstellung der Verkehrssicherheit. Geeignete Minderungsmaßnahme zur Entwicklung von Totholz-Lebensraum anstelle einer Fällung. Solange ein Totholzstumpf durch mögliches Umstürzen eine Verkehrsfläche erreichen kann, wird er der Regelkontrolle unterzogen.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## capping Type

`object` ([Kappung](dereferenced-properties-stammfuß-und-stamm--properties-kappung.md))

# capping Properties

| Property                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                             |
| :--------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height)                  | `number`  | Required | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-höhe-der-kappung.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/trunk/properties/capping/properties/height")      |
| [deadwood\_stump](#deadwood_stump) | `boolean` | Optional | cannot be null | [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-totholzstumpf.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/trunk/properties/capping/properties/deadwood_stump") |

## height



`height`

*   is required

*   Type: `number` ([Höhe der Kappung](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-höhe-der-kappung.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-höhe-der-kappung.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/trunk/properties/capping/properties/height")

### height Type

`number` ([Höhe der Kappung](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-höhe-der-kappung.md))

### height Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

### height Examples

```json
0
```

```json
100
```

## deadwood\_stump



`deadwood_stump`

*   is optional

*   Type: `boolean` ([Totholzstumpf](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-totholzstumpf.md))

*   cannot be null

*   defined in: [Baumkontrolle](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-totholzstumpf.md "https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/trunk/properties/capping/properties/deadwood_stump")

### deadwood\_stump Type

`boolean` ([Totholzstumpf](dereferenced-properties-stammfuß-und-stamm--properties-kappung-properties-totholzstumpf.md))

### deadwood\_stump Examples

```json
false
```

```json
true
```
