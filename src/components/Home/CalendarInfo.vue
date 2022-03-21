<template>
  <div class="v-card v-sheet theme--light">
    <div class="v-card__edit">
      <button>
        <img :src="require('@/assets/image/icons/Edit_rectangle.png')" alt="Edit_rectangle">
      </button>
    </div>
    <div class="v-card__title ">
      {{ selectedEvent.title }}
    </div>
    <div class="v-card__all-info">
      <div class="v-card__info" v-for="(item,index) in selectedEvent.contentFull" :key="index">
        <div class="v-card__info--title">
          {{ item.title }}
        </div>
        <div class="v-card__info--content" v-for="(content,index) in item.content" :key="index">
          <div class="v-card__info--icon">
            <img :src='require(`@/assets/image/icons/${content.img}.png`)' alt="content">
          </div>
          <div class="v-card__info--text">
            <span v-if="content.showData">
              {{ selectedEvent.start.format('DD/MM/YYYY') }} - {{ selectedEvent.end.format('DD/MM/YYYY') }}
            </span>
            <span v-else-if="content.showTime">
              {{ selectedEvent.start.format('HH:MM') }} - {{ selectedEvent.end.format('HH:MM') }}
            </span>
            <span v-else> {{ content.info }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="v-card__cancel">
      <button>Отменить запись</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarInfo",
  props: {
    selectedEvent: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
