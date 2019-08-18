# 20190816_three_ts_cmdconquest_proto

- ローカル通知を待つタイプのゲーム設計の検討プロトタイプ
	- 検討中のプロジェクト名は「コマンドコンクエスト(仮)」
	- マスターデータ、ユーザデータ、インベントリ、成長システム、ショップの実装
	- 操作はHTML表現でシンプルに済ませ、内部設計の検討に注力する

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### メモ: setup手順について

- 詳細は`20190804_TypeScript_Vue_ThreeJSメモ.md`を引き継いでいるのでそちらを参考。

- yarn global upgrade
- vue --version
	> 3.10.0
	- うん、`20190804_ThreeJS_and_VueTS`と同じ。
- cd 99_personal
- vue create 20190816_three_ts_cmdconquest_proto
	- プリセット選択。
	> nonchang-20190509 (dart-sass, babel, typescript, pwa, unit-jest) 

