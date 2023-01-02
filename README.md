# Hugo Search Module

The client search module built on top of Fuse.js for Hugo.

## Features

- Lightweight:
  - JS: ~30kB (~10kB with Gzip)
  - CSS: ~3kB (~1kB with Gzip)
- [Flexible and configurable](#parameters)
- Built-in UI and interactive logic, it's easy to integrate it with your theme.
- Restyle the UI with CSS variables.
- Configurable shortcuts:
  - <kbd>CTRL</kbd> + <kbd>K</kbd> to search.
  - <kbd>ESC</kbd> to close.

## Usage

There is an [example site](https://projects.razonyang.com/hugo-mod-search/) and it's [source code](exampleSite) to help you get started.

### Import the module

```toml
[[modules.imports]]
path = "github.com/razonyang/hugo-mod-search"
```

### Include the CSS

```go
{{ partial "search/assets/css" . }}
```

### Include the JavaScript

```go
{{ partial "search/assets/js" . }}
```

### Include the Modal

```go
{{ partial "search/modal" . }}
```

### Create a modal toggle (optional)

> This step is optional, you're still be able to open the search modal by shortcuts (default to <kbd>CTRL</kbd> + <kbd>K</kbd>), but I recommend adding such a toggle button for getting better user experience.

Adjust the button to your theme UI, place it wherever you like, for example,

```html
<button class="search-modal-toggle">Search</button>
```

### Set up the search index

Append the `SearchIndex` format into `outputs.home`.

```toml
[outputs]
home = ["HTML", "SearchIndex"]
```

## Parameters

```toml
# config.toml
[params.search]
stall_threshold = 200
# ...
```

| Name | Type | Default | Description
|---|:-:|:-:|--|
| `search` | Object | |
| `search.stall_threshold` | Integer | `300` | How many milliseconds must elapse before considering the autocomplete experience stalled.
| `search.case_sensitive` | Boolean | `false` | Indicates whether comparisons should be case sensitive.
| `search.min_match_char_length` | Integer | `1` | Only the matches whose length exceeds this value will be returned. (For instance, if you want to ignore single character matches in the result, set it to `2`).
| `search.location` | Integer | `0` | Determines approximately where in the text is the pattern expected to be found.
| `search.threshold` | Integer | `0.6` | At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
| `search.distance` | Integer | `100` | Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified. A distance of 1000 would require a perfect match to be within `800` characters of the location to be found using a threshold of `0.8`.
| `search.ignore_location` | Boolean | `false` | When true, search will ignore location and distance, so it won't matter where in the string the pattern appears.
| `search.shortcut_close` | Array | `["Escape"]` | Shortcuts to close the search modal. Empty array means disabled. See [key values for keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
| `search.shortcut_search` | Array | `["Control", "k"]` | Shortcuts to open the search modal. Leave it empty to disable.
| `search.input_placeholder` | String | `i18n "search"` | The placeholder of search input.
| `search.paginate` | Integer | `20` | How many results per page, at least `20`, for making sure the load more event will be able to trigger.
| `search.max_results` | Integer | `100` | Denotes the max number of returned search results.
