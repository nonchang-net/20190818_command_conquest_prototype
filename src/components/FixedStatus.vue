<template>
	<div class="componentRoot">
		<img class="flavorBackground" :src="imagePath" />

		<div class="status">
			HP:---/--- <br />
			stamina: ---/---
		</div>

		<div class="placeText">
			〜 拠点 〜
		</div>

	</div>
</template>

<style lang="scss" scoped>

.componentRoot {
	position : relative;
	width : 100% ;
	height : 200px ;

	img.flavorBackground {
		width : 100% ;
		height : 100% ;
		object-fit : cover;
		flex-grow: 1;
	}

	div.status {
		position : absolute;
		top : 0.3em;
		left : 0.3em;

		border : 3px solid rgb(1, 56, 1);
		border-radius : 0.5em;
		background : rgba(0, 83, 37, 0.739);
		color: white;

		padding : 0.5em;
	}

	div.placeText {
		position : absolute;
		bottom : 0.3em;
		right : 1em;
		color: white;
		font-style: italic;
		text-shadow: 1px 1px 3px #333;
	}

}

</style>

<script lang="ts">

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
// import { Actor } from '../../Data/MasterData/Actor/Actors';

@Component({})
export default class FixedStatus extends Vue {

	// TODO: enum stateの辞書定義に置き換えたい
	private readonly townBackground = '32850890c89814227530f4d4b5d053d8.png'
	private readonly backgroundImagePath = '/img/backgrounds/'

	private get imagePath() {
		// TODO: stateに応じて変更できるように
		return `${this.backgroundImagePath}${this.townBackground}`
	}

	// @Prop()
	// public actor!: Actor

	// private mounted() {
	// }

}

</script>