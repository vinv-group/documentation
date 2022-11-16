# Schemas

The schemas are based on the [JSON Schema](https://json-schema.org/) standard and are supplemented with additional information for the documentation.


## vinv-Syntax

<Badge type="info" text="Documentation coming soon..." />

## Custom Data Models

The vinv specification is designed to be flexible and can be extended with **custom data models**. This can exactly meet your needs or be helpful for everyone.

When developing your schema, you will be guided by the json schema standard. You can extend this with the vinv-syntax.

To make your work easier and to avoid having to rewrite recurring logic, you can integrate existing schemas into your custom data model.

``` json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Mushroom Spots",
    "description": "Schema for saving and sharing my favorite mushroom spots",
    "type": "object",
    "properties": {
        "mushroom-name": {
            "title": "Mushroom Name",
            "description": "Name the mushroom found",
            "type": "string",
        },
        "mushroom-position": {
            "$ref": "https://schemas.vinv.org/vinv-tree/v1.0.0/vinv-id.json"
        },
        "mushroom-count": {
            "title": "Mushroom Count",
            "description": "Number of mushrooms found",
            "type": "integer",
            "minimum": 1,
            "maximum": 100
        }
    }
}
```

In this example, a custom data model is extended by an existing data model [Location](/location.md).
The resulting data model thus contains important information for locating your favourit mushrooms.

[Join the vinv-group](/guide/introduction.html) for more information.