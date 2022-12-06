<template>
  <div class="container-fluid">
    gifts go here
  </div>
</template>

<script>
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    onMounted(() => {
      getGifts()
    })    
    async function getGifts(){
        try {
          await giftsService.getGifts()
        } catch (error) {
          
        }
      }

    }

    return {}
  }
}
</script>



<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
