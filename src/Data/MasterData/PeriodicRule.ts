/**
 * 期間表現ルール定義
 * TODO: 単独ファイル分離
 * - ゲーム運用では、実時間イベントに伴い様々な「期間」の表現が必要になる
 * 		- 個人的な経験上、運用で要求されるパターンは無数に考えられ、複雑になりがち
 * 		- マスターデータの入力も悩ましいものになり、運用でカバーしにくくなる
 * 		- 理想的にはこのクラスが複雑化しても、入力ツールや管理画面が人為ミスを最小化できるような明瞭なものになっていれば良いのだけども。。
 *
 * - このクラスで以下の表現を全て統一的に扱うか、「回数設定はクラスを分けるか」どうかも含めて考えてユニットテスト化まで試しておきたい
 * 		- ex: 「ゲーム開始から1度だけ交換できる」
 * 		- ex: 「xxxx/xx/xx xx:xx - yyyy/yy/yy yy:yy」の間に3回まで交換できる
 * 		- ex: 「毎週水曜日だけ回数制限なく交換できる」
 * 		- ex: ...
 */

export interface IPeriodicRule {
	limitCount: number // TODO: 交換可能数……? 期間表現ではないので多分ExchangeRules側に切り離す
	startAt?: Date
	endAt?: Date
}
