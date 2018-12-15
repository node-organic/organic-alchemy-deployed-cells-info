# organic-alchemy-deployed-cells-info

An `Array` implementation of deployed cells. Maintains unique presence of deployed cells and their offspring (running) instances.

## methods

### add(cellInfo: Object)

Adds `cellInfo` as array item if it doesn't exist already.

### match(cellInfo: Object)

returns `true` indicating that `cellInfo` has been found in array items

### remove(cellInfo: Object)

Removes array item by matching `cellInfo`
 
### addMany(cellInfos: Array)

Adds multiple array items at once by `cellsInfo` array. Will not add array items if exists already

## cellInfo: Object

```
{
  name: String,
  version: String,
  mode: String,
  siblingIndex: String
}
```

## Testing

You're more than welcome to contribute tests for this repo :)

## Contributing

We :hearts: contribution. Please follow these simple rules: 

- Keep the `README.md` up-to-date with changes
- Have fun :fire::rocket::shipit:
