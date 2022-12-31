<template>
  <div class="Home">
	<main>
        <router-link to="/chatbot"  @click= "() => toggleChat('buttonTrigger')">
			<img src="@/assets/chat.png">
		</router-link> 

		
		<div
            v-if="chatTriggers.buttonTrigger" 
			:toggleChat="() => toggleChat('buttonTrigger')" >
	    </div>
	
		

	</main>
</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup () {
		const chatTriggers = ref({
			buttonTrigger: false,
			timedTrigger: false
		});


		const toggleChat = (trigger) => {
			chatTriggers.value[trigger] = !chatTriggers.value[trigger]
		}



		return {
			chatTriggers,
			toggleChat,
			
		}
	}
}
</script>

<style scoped>

img{
	width: 50px;
	height: 50px;
	position: fixed;
	top: 500px;
	left: 30px;
	bottom: 30px;

}

</style>