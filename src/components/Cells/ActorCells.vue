<template>
	<div class="list">
		<div v-for="(actor, index) in actors" :key='index'>
			<ActorCell :actor="actor" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.list {
	// border : 5px solid blue;
	// overflow: scroll; //TODO: スクロールできてない。あれれ
	padding-bottom : 100px; // BottomButtonとの被り回避用
}
</style>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import Actors from '../../Data/MasterData/Actor/Actors';
import ActorCell from './ActorCell.vue'

@Component({
	components: {
		ActorCell,
	}
})
export default class ActorCells extends Vue {

	public actors: Actors = new Actors()

	public SetActorTest(actors: Actors) {
		actors.forEach((actor) => { 
			// console.log(`SetActorTest(): actor`, actor);
			this.actors.push(actor)
		})
	}

}

</script>