# Changelog

## [0.20.0](https://github.com/hugomods/search/compare/v0.19.2...v0.20.0) (2025-03-17)


### Features ✨

* **i18n:** add support for pt  ([#291](https://github.com/hugomods/search/issues/291)) ([79e847a](https://github.com/hugomods/search/commit/79e847a8dddc9c2643f8fc6d9c01c5f125862a4f))


### Bug Fixes 🐞

* fallback locale to default locale if not supported ([#289](https://github.com/hugomods/search/issues/289)) ([9d845b1](https://github.com/hugomods/search/commit/9d845b18b13ad01b8b980577021cb4f835cc6d55))
* set default locale as en ([6fcf16f](https://github.com/hugomods/search/commit/6fcf16fd5fdb2964d9c4c505d3de32f98f89e48e))

## [0.19.2](https://github.com/hugomods/search/compare/v0.19.1...v0.19.2) (2025-02-16)


### Bug Fixes 🐞

* remove the disabled attribute from input, to pop up keyboard on iOS devices ([#287](https://github.com/hugomods/search/issues/287)) ([73d8de2](https://github.com/hugomods/search/commit/73d8de2e1a58f096b7de15f7ac5d16cf93d53fce))

## [0.19.1](https://github.com/hugomods/search/compare/v0.19.0...v0.19.1) (2025-02-15)


### Bug Fixes 🐞

* **ue:** revert b4cacc7 ([2f473e5](https://github.com/hugomods/search/commit/2f473e53f7c8cc50b3ba16e36f0027969b559fd2))

## [0.19.0](https://github.com/hugomods/search/compare/v0.18.3...v0.19.0) (2024-11-23)


### Features ✨

* **i18n:** add Spanish translations ([#281](https://github.com/hugomods/search/issues/281)) ([3ad9f94](https://github.com/hugomods/search/commit/3ad9f94cc12d0a09f0bfc51e2061f9ed686dbc86))

## [0.18.3](https://github.com/hugomods/search/compare/v0.18.2...v0.18.3) (2024-11-04)


### Styles 🎨

* set the width of dropdown search box to 100% ([596de5a](https://github.com/hugomods/search/commit/596de5a46d9ea66db4088378fbbfef035574c794))

## [0.18.2](https://github.com/hugomods/search/compare/v0.18.1...v0.18.2) (2024-11-03)


### Bug Fixes 🐞

* do not transform the baseURL, leave it as it is ([#277](https://github.com/hugomods/search/issues/277)) ([e9b39f8](https://github.com/hugomods/search/commit/e9b39f80f429749ee640099d6810ed847d700fc3))

## [0.18.1](https://github.com/hugomods/search/compare/v0.18.0...v0.18.1) (2024-10-26)


### Bug Fixes 🐞

* import github.com/hugomods/search-index ([#275](https://github.com/hugomods/search/issues/275)) ([5a836e5](https://github.com/hugomods/search/commit/5a836e5d7cabfd80bcb00cefa5af8db03a0e1fc0))

## [0.18.0](https://github.com/hugomods/search/compare/v0.17.2...v0.18.0) (2024-10-25)


### Features ✨

* add the `indices` parameter, to load external indices ([23784f5](https://github.com/hugomods/search/commit/23784f58e57b7648587d4c3dcd48a18dc5573217))
* add the reset button for dropdowns ([#273](https://github.com/hugomods/search/issues/273)) ([36af817](https://github.com/hugomods/search/commit/36af817b3e45ca17a107174aa9438a928dce6de8))
* allow filtering taxonomies with search box ([#272](https://github.com/hugomods/search/issues/272)) ([0f42374](https://github.com/hugomods/search/commit/0f42374fbe3b4be918740d3f077c5c783d4aacae)), closes [#264](https://github.com/hugomods/search/issues/264)
* **ue:** open result on new tab when on single search page mode ([#270](https://github.com/hugomods/search/issues/270)) ([e3e6d56](https://github.com/hugomods/search/commit/e3e6d56be5d8654f891acb3dfb3619023e43b796))


### Bug Fixes 🐞

* able to trigger load more event without specifying max-height ([#269](https://github.com/hugomods/search/issues/269)) ([884385a](https://github.com/hugomods/search/commit/884385ae46defae85ab00c813562662ac3ca6ac1))
* check if indices is set ([#268](https://github.com/hugomods/search/issues/268)) ([35025a1](https://github.com/hugomods/search/commit/35025a14452c06ae8b245d907ad4a551a85d96cd)), closes [#261](https://github.com/hugomods/search/issues/261)
* languages filter ([#271](https://github.com/hugomods/search/issues/271)) ([e685ace](https://github.com/hugomods/search/commit/e685ace3be181185ce85edfa3dc608ae3abd3c02))
* remove stats when query is empty ([f0e5f7d](https://github.com/hugomods/search/commit/f0e5f7d8aaab0aede9716352951ee51cb2539885))
* set the height and width attributes for image resources ([#274](https://github.com/hugomods/search/issues/274)) ([4b09871](https://github.com/hugomods/search/commit/4b098718d9348f7dd5d8d29b0f67ebe25f619cca)), closes [#242](https://github.com/hugomods/search/issues/242)
* **ue:** display at most one dropdown ([b670c84](https://github.com/hugomods/search/commit/b670c8453f389ecfc3b14747290c5d186d46e9d9))


### Performance Improvements ⚡️

* lazy loading locales ([#267](https://github.com/hugomods/search/issues/267)) ([23784f5](https://github.com/hugomods/search/commit/23784f58e57b7648587d4c3dcd48a18dc5573217))


### Styles 🎨

* display filter labels on small screen ([a1a7313](https://github.com/hugomods/search/commit/a1a7313a5e4fa02d007da2e8c9490ef938f32ace))
* minor changes ([8e2e295](https://github.com/hugomods/search/commit/8e2e295f1a8c15836c86f9423e8d68d5b0e68072))
* tweak disabled input ([3bb42d6](https://github.com/hugomods/search/commit/3bb42d64ab13f2dc32f696aba72d5d1a77d609aa))

## [0.17.2](https://github.com/hugomods/search/compare/v0.17.1...v0.17.2) (2024-10-05)


### Bug Fixes 🐞

* do not disable input after resetting form ([#259](https://github.com/hugomods/search/issues/259)) ([d3d9db7](https://github.com/hugomods/search/commit/d3d9db7727827a0f63b7bfeb6a159d2584d02cbd)), closes [#258](https://github.com/hugomods/search/issues/258)

## [0.17.1](https://github.com/hugomods/search/compare/v0.17.0...v0.17.1) (2024-09-09)


### Styles 🎨

* add the disabled state for input ([915f75e](https://github.com/hugomods/search/commit/915f75eab06ae078c759f065b69f4e41e9c70c4c))

## [0.17.0](https://github.com/hugomods/search/compare/v0.16.0...v0.17.0) (2024-09-09)


### Features ✨

* add more index* parameters ([0e06ef2](https://github.com/hugomods/search/commit/0e06ef283ff7d90b0baacb3debec77f87bf7faaa))
* add the `headings_end_level` parameter, default to `6` ([d6ba834](https://github.com/hugomods/search/commit/d6ba834afef9a4090126ceb9468d2acf92b775fa))
* add the `index_headings` parameter, default to `true` ([0e06ef2](https://github.com/hugomods/search/commit/0e06ef283ff7d90b0baacb3debec77f87bf7faaa))
* add the `index_summary` parameter, default to `true` ([0e06ef2](https://github.com/hugomods/search/commit/0e06ef283ff7d90b0baacb3debec77f87bf7faaa))
* add the `index_taxonomies` parameter, default to `true` ([0e06ef2](https://github.com/hugomods/search/commit/0e06ef283ff7d90b0baacb3debec77f87bf7faaa))


### Bug Fixes 🐞

* **ue:** disable input while searching and then resume it once the ([b4cacc7](https://github.com/hugomods/search/commit/b4cacc72cecf7d6d1e410095a42de8aeaca01658))

## [0.16.0](https://github.com/hugomods/search/compare/v0.15.1...v0.16.0) (2024-09-06)


### Features ✨

* add search.key_weights parameters ([#252](https://github.com/hugomods/search/issues/252)) ([8e58fd9](https://github.com/hugomods/search/commit/8e58fd9050ebbfab46c4158df557724cc455a92f))


### Bug Fixes 🐞

* show ancestors of headings ([#250](https://github.com/hugomods/search/issues/250)) ([56760ab](https://github.com/hugomods/search/commit/56760abd60282f43b41e82c525318188240a085d)), closes [#249](https://github.com/hugomods/search/issues/249)

## [0.15.1](https://github.com/hugomods/search/compare/v0.15.0...v0.15.1) (2024-09-06)


### Bug Fixes 🐞

* duplicate matched headings ([#247](https://github.com/hugomods/search/issues/247)) ([18331e8](https://github.com/hugomods/search/commit/18331e83fe695d79ab5aa8f38e6c8f9bf3cd072b)), closes [#246](https://github.com/hugomods/search/issues/246)

## [0.15.0](https://github.com/hugomods/search/compare/v0.14.1...v0.15.0) (2024-08-22)


### Features ✨

* add the search.sass_transpiler parameter, default to dartsass ([25c6f06](https://github.com/hugomods/search/commit/25c6f067fa4d90d22114a11ac152900808586e1e))

## [0.14.1](https://github.com/hugomods/search/compare/v0.14.0...v0.14.1) (2024-08-20)


### Bug Fixes 🐞

* replace resources.PostCSS with css.PostCSS ([#243](https://github.com/hugomods/search/issues/243)) ([ee85370](https://github.com/hugomods/search/commit/ee8537018887839cdd0c5c72a373722dc8c9af06))

## [0.14.0](https://github.com/hugomods/search/compare/v0.13.4...v0.14.0) (2024-05-28)


### Features ✨

* **i18n:** add Vietnamese translations ([b423f34](https://github.com/hugomods/search/commit/b423f347663fb7ac929df35dbe343aa447e50e81))

## [0.13.4](https://github.com/hugomods/search/compare/v0.13.3...v0.13.4) (2024-05-26)


### Performance Improvements ⚡️

* use hugo.IsMultihost instead of custom function ([#237](https://github.com/hugomods/search/issues/237)) ([bc1adb5](https://github.com/hugomods/search/commit/bc1adb5f5ff0c3860c1acb38ee481ac6828535b8)), closes [#225](https://github.com/hugomods/search/issues/225)

## [0.13.3](https://github.com/hugomods/search/compare/v0.13.2...v0.13.3) (2024-03-08)


### Bug Fixes 🐞

* check before parsing headings ([1af30b8](https://github.com/hugomods/search/commit/1af30b8caaa4824ecd3e9785247ee883e30b5f8d))

## [0.13.2](https://github.com/hugomods/search/compare/v0.13.1...v0.13.2) (2024-02-23)


### Styles 🎨

* change top as 0.25rem for result actions ([4d3181d](https://github.com/hugomods/search/commit/4d3181d8db6c1af2fa14e098a95554e6a0111359))

## [0.13.1](https://github.com/hugomods/search/compare/v0.13.0...v0.13.1) (2024-02-22)


### Bug Fixes 🐞

* do not save history to client if search.histories parameter is `false` ([#222](https://github.com/hugomods/search/issues/222)) ([6e9b943](https://github.com/hugomods/search/commit/6e9b94333faf93a9a6722f79f06830bda9e3b5ae))

## [0.13.0](https://github.com/hugomods/search/compare/v0.12.0...v0.13.0) (2024-02-21)


### Features ✨

* add the reset button ([#220](https://github.com/hugomods/search/issues/220)) ([526a7de](https://github.com/hugomods/search/commit/526a7de9e350f5bf39210342c223191b0bfd6bf4))


### Styles 🎨

* set top as 0.5rem for search result actions to avoid CLS ([a06fea1](https://github.com/hugomods/search/commit/a06fea10d97ac65ca62a5b2416739810ef41df94))

## [0.12.0](https://github.com/hugomods/search/compare/v0.11.1...v0.12.0) (2024-02-20)


### Features ✨

* add the search.histories parameter, disable histories if `false` ([#217](https://github.com/hugomods/search/issues/217)) ([280694f](https://github.com/hugomods/search/commit/280694faa82378edda56285c4537bb09a353a0ab))


### Styles 🎨

* fix height as 48px for result img ([d6cba31](https://github.com/hugomods/search/commit/d6cba3145036a9a3e0beac5a1d95a9fc9f07bdb4))

## [0.11.1](https://github.com/hugomods/search/compare/v0.11.0...v0.11.1) (2024-02-20)


### Bug Fixes 🐞

* make sure hiding search icon before showing spinner icon ([#215](https://github.com/hugomods/search/issues/215)) ([7fe1301](https://github.com/hugomods/search/commit/7fe13018ca92dde2789a3ef5186b68f0a0fb608a))
* stop propagation when selecting history entities ([#213](https://github.com/hugomods/search/issues/213)) ([a33e085](https://github.com/hugomods/search/commit/a33e085338b2cc4e140c86e1c728126fe096bdc8))


### Styles 🎨

* change spinner icon size to 1.35em ([7fe1301](https://github.com/hugomods/search/commit/7fe13018ca92dde2789a3ef5186b68f0a0fb608a))

## [0.11.0](https://github.com/hugomods/search/compare/v0.10.0...v0.11.0) (2024-02-19)


### Features ✨

* add support for histories ([#210](https://github.com/hugomods/search/issues/210)) ([4e28dfa](https://github.com/hugomods/search/commit/4e28dfa17d3ae9405590f6e068579b572346d2de))


### Bug Fixes 🐞

* correct spinner icon size ([88d6d7d](https://github.com/hugomods/search/commit/88d6d7d2a9a0b31dfec7b5b1569d216a82101db1))

## [0.10.0](https://github.com/hugomods/search/compare/v0.9.0...v0.10.0) (2024-02-19)


### Features ✨

* show page image if present ([#208](https://github.com/hugomods/search/issues/208)) ([0a36bdb](https://github.com/hugomods/search/commit/0a36bdba5d204ba9ede73f3740285244fff02e19))


### Bug Fixes 🐞

* correct icons size ([1559bcf](https://github.com/hugomods/search/commit/1559bcfc79c01d685c0f027537667a233c0ab402))
* show search stat when searching without keywords ([b782874](https://github.com/hugomods/search/commit/b782874907474e86ddc96450091617ab052f4545))

## [0.9.0](https://github.com/hugomods/search/compare/v0.8.7...v0.9.0) (2024-02-19)


### Features ✨

* allow searching without keywords ([#204](https://github.com/hugomods/search/issues/204)) ([714daf9](https://github.com/hugomods/search/commit/714daf9162905834b299465abce7fc41d7126cb7))

## [0.8.7](https://github.com/hugomods/search/compare/v0.8.6...v0.8.7) (2024-02-11)


### Bug Fixes 🐞

* set index_all_pages to false as the default value ([96d562b](https://github.com/hugomods/search/commit/96d562bfe4f930c87f745bc7c6059116ff9e1463))

## [0.8.6](https://github.com/hugomods/search/compare/v0.8.5...v0.8.6) (2024-02-08)


### Styles 🎨

* disable input autocomplete ([#197](https://github.com/hugomods/search/issues/197)) ([1b9b59b](https://github.com/hugomods/search/commit/1b9b59badecccf5cb84affdec90869297307ffb0)), closes [#196](https://github.com/hugomods/search/issues/196)

## [0.8.5](https://github.com/hugomods/search/compare/v0.8.4...v0.8.5) (2024-02-03)


### Bug Fixes

* hide the languages filter on monolingual site ([#195](https://github.com/hugomods/search/issues/195)) ([05bb665](https://github.com/hugomods/search/commit/05bb665fc4d62af512cec1a7db6933a57e0728b9))
* **i18n:** improve German transalation ([#89](https://github.com/hugomods/search/issues/89)) ([#192](https://github.com/hugomods/search/issues/192)) ([be96a62](https://github.com/hugomods/search/commit/be96a62c12b11ca7bfba67429fc4505410da9eff))

## [0.8.4](https://github.com/hugomods/search/compare/v0.8.3...v0.8.4) (2024-02-01)


### Bug Fixes

* correct indices URLs for multihost ([#190](https://github.com/hugomods/search/issues/190)) ([ec12c52](https://github.com/hugomods/search/commit/ec12c5244ae7211c9f056d6e4ab07160cb6386e2))

## [0.8.3](https://github.com/hugomods/search/compare/v0.8.2...v0.8.3) (2023-12-16)


### Bug Fixes

* prevent default for arrow up and down events ([#185](https://github.com/hugomods/search/issues/185)) ([1d31b05](https://github.com/hugomods/search/commit/1d31b05bfb75692f0faf0b4f9847d322ed966453))

## [0.8.2](https://github.com/hugomods/search/compare/v0.8.1...v0.8.2) (2023-12-03)


### Bug Fixes

* set the name attribute for search input ([c567d21](https://github.com/hugomods/search/commit/c567d213834d8c48086fd5c00855718a01e658fc))

## [0.8.1](https://github.com/hugomods/search/compare/v0.8.0...v0.8.1) (2023-11-10)


### Bug Fixes

* **i18n:** update pt-br.toml ([#177](https://github.com/hugomods/search/issues/177)) ([ec24428](https://github.com/hugomods/search/commit/ec244289c793ee48887d755e5c5102eb9610f8f5))

## [0.8.0](https://github.com/hugomods/search/compare/v0.7.0...v0.8.0) (2023-11-10)


### Features

* **i18n:** create pt-br.toml ([#174](https://github.com/hugomods/search/issues/174)) ([65ceb82](https://github.com/hugomods/search/commit/65ceb82813e68f21d46978292802e762418a873d))
* **i18n:** create pt-br.toml ([#175](https://github.com/hugomods/search/issues/175)) ([688d8f6](https://github.com/hugomods/search/commit/688d8f622c5ed0aad10262f35954b6bb817eb2cb))

## [0.7.0](https://github.com/hugomods/search/compare/v0.6.0...v0.7.0) (2023-11-02)


### Features

* **i18n:** add French translations ([#172](https://github.com/hugomods/search/issues/172)) ([23706f7](https://github.com/hugomods/search/commit/23706f72fcfb2fb40e0c015a497ffc1866e44f85))

## [0.6.0](https://github.com/hugomods/search/compare/v0.5.0...v0.6.0) (2023-11-01)


### Features

* **i18n:** add Russian translations ([#170](https://github.com/hugomods/search/issues/170)) ([bcf8362](https://github.com/hugomods/search/commit/bcf83622fbd093ff77b4f6f48893a5b981a63045))

## [0.5.0](https://github.com/hugomods/search/compare/v0.4.5...v0.5.0) (2023-10-21)


### Features

* **i18n:** add ms.toml ([#166](https://github.com/hugomods/search/issues/166)) ([9c555c8](https://github.com/hugomods/search/commit/9c555c85261b97527181447a21400eb74caeedf1))

## [0.4.5](https://github.com/hugomods/search/compare/v0.4.4...v0.4.5) (2023-08-28)


### Bug Fixes

* unescape the summary ([ab1521c](https://github.com/hugomods/search/commit/ab1521c9f8d4b93659fb66412c57ba3562cfd2b2))
* use page description as summary if present ([bd6dc23](https://github.com/hugomods/search/commit/bd6dc236e752754572c853ed633fba9d8c67db34))

## [0.4.4](https://github.com/hugomods/search/compare/v0.4.3...v0.4.4) (2023-06-28)


### Bug Fixes

* strip HTML tags from headings ([167d5f1](https://github.com/hugomods/search/commit/167d5f1436c158bb944055d6882f79fefe5afaac))

## [0.4.3](https://github.com/hugomods/search/compare/v0.4.2...v0.4.3) (2023-05-23)


### Bug Fixes

* adjust to Hugo v0.112.0 changes ([e2715f4](https://github.com/hugomods/search/commit/e2715f4bc05fe9f9822cd839c6d0ca9523ca2760))

## [0.4.2](https://github.com/hugomods/search/compare/v0.4.1...v0.4.2) (2023-05-23)


### Bug Fixes

* adjust to Hugo v0.112.0 changes ([e2715f4](https://github.com/hugomods/search/commit/e2715f4bc05fe9f9822cd839c6d0ca9523ca2760))

## [0.4.1](https://github.com/hugomods/search/compare/v0.4.0...v0.4.1) (2023-05-14)


### Performance Improvements

* simplify the hashing method ([e6d2d90](https://github.com/hugomods/search/commit/e6d2d90a1b52079262d1543dffa4046ab17ee1df))

## [0.4.0](https://github.com/hugomods/search/compare/v0.3.1...v0.4.0) (2023-05-13)


### Features

* generate the hash for search indices ([#140](https://github.com/hugomods/search/issues/140)) ([03db352](https://github.com/hugomods/search/commit/03db352944287a788450af84a153578d4be547b5))

## [0.3.1](https://github.com/hugomods/search/compare/v0.3.0...v0.3.1) (2023-05-13)


### Bug Fixes

* check if the taxonomies exist before rendering ([6f6dd63](https://github.com/hugomods/search/commit/6f6dd63ce22f2bcbb88f12fd65626d5dea0f7268))
* ignore invalid years ([f87cb77](https://github.com/hugomods/search/commit/f87cb7748411f6fa4236f7867d3b9ae3403a1408))
* set z-index as 1 for dropdown menu to avoid overlapping with others ([52584dc](https://github.com/hugomods/search/commit/52584dce1368edeecfbc5280586f1a74d1cdca57))

## [0.3.0](https://github.com/hugomods/search/compare/v0.2.1...v0.3.0) (2023-05-13)


### Features

* add support for filtering by years ([dc8567d](https://github.com/hugomods/search/commit/dc8567db62760c7ccdf75716606e7751578e2931))
* add the filter_years parameter ([34d9f83](https://github.com/hugomods/search/commit/34d9f833bbdec89f1f435d1a3ef342f41c70ed88))
* add the taxonomies filter ([55f6947](https://github.com/hugomods/search/commit/55f69473afbfd5817efb31b5147130ec3a176dcc))


### Bug Fixes

* correct the margin-bottom of dropdown menus ([bcb43a0](https://github.com/hugomods/search/commit/bcb43a0d1fa5ff20fbcef6bceb13a9ab56eef317))

## [0.2.0](https://github.com/hugomods/search/compare/v0.1.2...v0.2.0) (2023-05-05)


### Features

* add the modal_toggle_selector parameter ([5283b8c](https://github.com/hugomods/search/commit/5283b8c5c201d0e2cd2a3098327830b34614b5cb))


### Bug Fixes

* correct the search result heading style ([20384da](https://github.com/hugomods/search/commit/20384da8ffb7e6d67eb6fe82b2c4ff79a2a01c98))
* remove multiple active results and keep only one ([1dd929d](https://github.com/hugomods/search/commit/1dd929d426eb1a65510ad1836fca4cae53fb1b24))
