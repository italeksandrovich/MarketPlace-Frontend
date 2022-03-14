<template>
  <div class="home">
    <input type="date" v-model="date">
    <vue-cal :selected-date="date"
             :time-from="9 * 60"
             :time-to="19 * 60"
             :disable-views="['years', 'year','month','day']"
             :events="events" />
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

  export default {
    name: 'Home',
    components: { VueCal },
    data() {
      return {
        selectedEvent: {},
        showDialog: false,
        date:'2018-11-19',
        events: [
          {
            start: '2018-11-20 14:00',
            end: '2018-11-20 18:00',
            title: 'Need to go shopping',
            icon: 'shopping_cart', // Custom attribute.
            content: 'Click to see my shopping list',
            contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
            class: 'leisure'
          },
          {
            start: '2018-11-22 10:00',
            end: '2018-11-22 15:00',
            title: 'Golf with John',
            icon: 'golf_course', // Custom attribute.
            content: 'Do I need to tell how many holes?',
            contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
            class: 'sport'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  .home {
    width: 100%;
  }

  .vuecal__event {cursor: pointer;}

  .vuecal__event-title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 4px 0 8px;
  }

  .vuecal__event-time {
    display: inline-block;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .vuecal__event-content {
    font-style: italic;
  }
</style>
