# Life Cycle Hooks

```
// executed when components is build and initiated

1. ngOnInit()

```

```
// executed when property value is changed by input()

2. ngOnChanges()

```

```
// executed when component properties are verified

3. ngDoCheck()

```

# Check Events

```
// executed when Angular projects content on any of its components

3.1. ngAfterContentInit()

```

```
// executed everytime the components content is verifyed by Angular change detection mecanism

3.2. ngAfterContentChecked()

```

```
// executed after a component is completely initialized (loads everything)

3.3. ngAfterViewInit()

```

```
// executed after a component visualization is checked by Angular's change detection algorithm

3.4. ngAfterViewChecked()

```

# OnDestroy Event

```
// executed when the component is finished

4. ngOnDestroy()

```
