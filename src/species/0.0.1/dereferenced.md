# Tree species Schema

```txt
https://schema.vinv.io/species/0.0.1.json
```

Tree Species values taken from <https://github.com/b-lack/tree-species>

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json](schema/dereferenced.doc.json "open original schema") |

## Tree species Type

`string` ([Tree species](dereferenced.md))

## Tree species Constraints

**pattern**: the string must match the following regular expression:&#x20;

```
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24 "try regular expression with regexr.com")

## Tree species Examples

```json
"JM2"
```
