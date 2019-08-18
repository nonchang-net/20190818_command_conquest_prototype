<template>
	<div id="app">

		<FixedStatus />

		<p>{{ statusText }}</p>

		<div class="list">
			<ActorCells ref="actorCells"/>
		</div>

	</div>
</template>

<style lang="scss">

* {
	margin : 0 ;
	padding : 0 ;
	box-sizing: border-box;
}

body, html {
	// border : 5px solid green;
	width : 100%;
	height : 100%;
}

#app {
	// border : 5px solid red;
	width : 100%;
	height : 100%;
	overflow: hidden;

	display: flex;
	flex-direction: column;
}

img.flavorBackground {
	width : 100% ;
	height : 300px ;
	object-fit : cover;
	flex-grow: 1;
}

div.list {
	// border : 5px solid red;
	flex-grow : 10;
	overflow: scroll;
}

</style>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import FixedStatus from './components/FixedStatus.vue'
import ActorCells from './components/Cells/ActorCells.vue'
import MasterData from './Data/MasterData'

@Component({
	components: {
		FixedStatus,
		ActorCells,
	},
})
export default class App extends Vue {

	private readonly VERSION_STRING = `20190818.2131`;

	@Ref()
	private actorCells!: ActorCells

	private statusText: string = ''

	private masterData: MasterData = new MasterData()

	private async mounted() {

		console.log(`%cver: ${this.VERSION_STRING} `, `color: green; font-weight: bold; background : #eee`)

		this.statusText = 'now loading...'
		await this.masterData.asyncSetup()
		this.statusText = 'mounted'

		// console.log(`App.vue mounted(): actors.length = ${this.masterData.AllActors.length}`)

		this.actorCells.SetActorTest(this.masterData.AllActors)

	}

}
</script>
