<template>
	<div class="cell">
		<p>name: {{ actor.name }}</p>
		<ul>
			<li v-for="(skill, index) in actor.skills" :key="index">
				{{ skill.name }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.cell {
	border : 1px solid gray;
	border-radius : 0.5em;
	padding : 0.3em;
	margin-bottom : 0.3em;
}
</style>

<script lang="ts">

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Actor } from '../../Data/MasterData/Actor/Actors';

@Component({})
export default class ActorCell extends Vue {

	@Prop()
	public actor!: Actor

	// private mounted() {
	// 	console.log(`ActorCell.vue: mounted():`, this.actor)
	// }

}

</script>