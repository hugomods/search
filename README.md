# Hugo Search Module

The client search module built on top of Fuse.js for Hugo.

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

### Create a modal toggle

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
