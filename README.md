# Hugo Client Side Fuzzy Search (Auto Complete) Module

The [Hugo](https://gohugo.io/) client side fuzzy search (auto complete) module built on top of [Fuse.js](https://github.com/krisk/Fuse).

## Features

- Fuzzy search by title, summary and headings.
- [Flexible and configurable](#parameters).
- Built-in responsive, theme-less UI and interactive logic, which in most cases can be safely and effortlessly integrated with any theme.
- Allow restyling the UI with [CSS variables](#css-variables).
- Pagination: load more when scrolling to the bottom of results.
- Highlighting matches.
- Statistic: the number of search results, search time.
- Results navigation.
- Filters: language.
- Sorting: sortable by score and date.
- [Internationalization (i18n)](#internationalization).
- Lightweight.

<div align="center">

| | CSS | JS
|---|:-:|:-:
| Compressed | `~6kB` | `~40kB`
| Gzip | `~2kB` | `~13kB`

</div>

- Configurable shortcuts.

<div align="center">

| Shortcuts | |
|---|---|
| <kbd>CTRL</kbd> + <kbd>K</kbd> | to search.
| <kbd>ESC</kbd> | to close.

</div>

- Excluding pages by setting the `noindex` page parameter as `true`.
- Support RTL languages: experimental, please feel free to [file an issue](https://github.com/razonyang/hugo-mod-search/issues/new) if you found one.

## Requirements

- Hugo **extended** version.
- [Hugo Module](https://gohugo.io/hugo-modules/use-modules/#prerequisite).
- PostCSS, Autoprefixer and RTLCSS, you can install those dependencies via one command `npm i postcss-cli autoprefixer rtlcss`.

## Usage

There is an [example site](https://projects.razonyang.com/hugo-mod-search/) and it's [source code](exampleSite) to help you get started.

### 1. Import the module

```toml
[[modules.imports]]
path = "github.com/razonyang/hugo-mod-search"
```

### 2. Include the CSS

There are three approaches to include the CSS. It's recommended to use the first two approaches, since the CSS file is too small as a single CSS file.
Embed the CSS into your own bundle is helpful to reduce extra HTTP requests.

#### Import the CSS via SCSS file (recommended)

```scss
@import 'search/scss/index'
```

The RTL feature requires [PostCSS](https://gohugo.io/hugo-pipes/postcss/) and [RTLCSS](https://rtlcss.com/).

See how [CSS resource partial](layouts/partials/search/assets/css-resource.html) does.

#### Include the CSS via Hugo Pipe (recommended)

```go
{{- $rtl := eq .Language.LanguageDirection "rtl" }}
{{/* NOTE: we must change the CSS target to separate the style between LTR and RTL sites. */}}
{{/* Otherwise, Hugo may treats it as the same style (cached). */}}
{{ $cssTarget := cond $rtl "css/main.rtl.css" "css/main.css" }}
{{ $css := resources.Get "main.scss" | toCSS }}
{{ $searchCSS := partial "search/assets/css-resource" . }}
{{ $css = slice $searchCSS $css | resources.Concat $cssTarget }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}" />
```

> Note that `slice $searchCSS $css` puts the `$css` after `$searchCSS`, so that `$css` style can override the search's.

#### Include the CSS via partial

This approach generates a `<link>` tag.

```go
{{ partial "search/assets/css" . }}
```

### 3. Include the JavaScript

We can achieve this via two ways.

#### Include the JavaScript via Hugo Pipe (recommended)

```go
{{ $js := resources.Get "main.ts" | js.Build }}
{{ $searchJS := partial "search/assets/js-resource" . }}
{{ $js = slice $js $searchJS | resources.Concat "js/main.js" }}
<script src="{{ $js.RelPermalink }}"></script>
```

#### Include the JavaScript via partial

This partial will generate a `<script>` tag.

```go
{{ partial "search/assets/js" . }}
```

### 4. Create a modal toggle (optional)

> This step is optional, you're still be able to open the search modal by shortcuts (default to <kbd>CTRL</kbd> + <kbd>K</kbd>), but I recommend adding such a toggle button for getting better user experience.

Adjust the button to your theme UI, place it wherever you like, for example,

```html
<button class="search-modal-toggle">Search</button>
```

### 5. Set up the search index

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
| `stall_threshold` | Integer | `300` | How many milliseconds must elapse before considering the autocomplete experience stalled.
| `case_sensitive` | Boolean | `false` | Indicates whether comparisons should be case sensitive.
| `min_match_char_length` | Integer | `1` | Only the matches whose length exceeds this value will be returned. (For instance, if you want to ignore single character matches in the result, set it to `2`).
| `location` | Integer | `0` | Determines approximately where in the text is the pattern expected to be found.
| `threshold` | Integer | `0.6` | At what point does the match algorithm give up. A threshold of `0.0` requires a perfect match (of both letters and location), a threshold of `1.0` would match anything.
| `distance` | Integer | `100` | Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified. A distance of `1000` would require a perfect match to be within `800` characters of the location to be found using a threshold of `0.8`.
| `ignore_location` | Boolean | `false` | When true, search will ignore location and distance, so it won't matter where in the string the pattern appears.
| `shortcut_close` | Array | `["Escape"]` | Shortcuts to close the search modal. Empty array means disabled. See [key values for keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
| `shortcut_search` | Array | `["Control", "k"]` | Shortcuts to open the search modal. Leave it empty to disable.
| ~`input_placeholder`~ | String | `i18n "search"` | **Deprecated**, please use [i18n](#internationalization) instead.
| `paginate` | Integer | `20` | How many results per page, at least `20`, for making sure the load more event will be able to trigger.
| `max_results` | Integer | `100` | Denotes the max number of returned search results.
| `index_all_pages` | Boolean | `true` | When `true`, all pages except `noindex` pages will be indexed, include non-regular pages, such as home and taxonomy lists.
| `expand_results_meta` | Boolean | `false` | When `true`, expand the results meta by default.

## CSS Variables

You can easily to adjust the search UI to fit your theme and dark mode via the following CSS variables.

```css
:root {
    --search-primary: skyblue;
}
```

| Name | Description
|---|---
| `--search-primary` | Primary color.
| `--search-container-bg` | Container background color.
| `--search-bg` | Background color.
| `--search-color` | Primary text color.
| `--search-color-secondary` | Secondary text color.
| `--search-result-bg` | Result background color.
| `--search-result-bg-active` | Result background color on active.
| `--search-result-color` | Primary result text color.
| `--search-result-color-active` | Primary result text color on active.
| `--search-result-color-secondary` | Secondary result text color.
| `--search-result-color-secondary-active` | Secondary result text color on active.
| `--search-result-highlight-bg` | The highlight result background color, default to `inherit`.
| `--search-result-highlight-color` | The highlight result color, default to `inherit`.
| `--search-border-color` | Border color.

## Page Parameters

> AKA front matter.

| Name | Type | Default | Description
|---|:-:|:-:|---|
| `noindex` | Boolean | `false` | When `true`, the page won't be indexed, that is, it won't appear on the search results.

## Internationalization

Currently, this module supports the following languages, please feel free to open a PR to add more languages.

> The translations are stored in the [`data/search/i18n`](data/search/i18n) folder, it's different from Hugo i18n, since the module using JS instead of templates to render the HTML markup.

- English (`en`)
- Simplified Chinese (`zh-hans`)
- Traditional Chinese `zh-hant`)

### Custom i18n Translations

Let's take the `input_placeholder` as an example, just create the corresponding translations file under your project's root.

```toml
# data/search/i18n/en.toml
[input_placeholder]
other = "SEARCH INPUT PLACEHOLDER"
```

Now, the `input_placeholder` will be `SEARCH INPUT PLACEHOLDER` in `en` sites.

All the available translations' keys can be found at [`data/search/i18n`](data/search/i18n) folder.
