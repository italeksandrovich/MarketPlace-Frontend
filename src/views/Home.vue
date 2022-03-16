<template>
  <div class="home">
    <div class="home-date">
     <!-- <calendar v-model="date"/>-->
<!--      <input type="date" v-model="date">-->
      
      <DatePicker v-model="date" mode="date"  :masks="masks">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="px-3 py-1 border rounded"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </DatePicker>
    </div>
    
    <vue-cal :selected-date="date"
             :time-from="9 * 60"
             :time-to="19 * 60"
             hide-view-selector
             hide-weekends
             
             :disable-views="['years', 'year','month','day']"
             active-view="month"
             :events="events" />
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
  export default {
    name: 'Home',
    components: { VueCal,Calendar , DatePicker},
    data() {
      return {
        date: new Date(),
        masks: {
          navMonths: 'MMM',
          inputTime:false,
          mode: 'date'
        },
        selectedEvent: {},
        showDialog: false,
        /*date:'2018-11-19',*/
        events: [
          {
            start: '2022-03-16 14:00',
            end: '2022-03-16 18:00',
            title: 'Need to go shopping',
            icon: 'shopping_cart', // Custom attribute.
            content: 'Click to see my shopping list',
            contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
            class: 'leisure'
          },
          {
            start: '2022-03-14 10:00',
            end: '2022-03-14 15:00',
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
    &-date{
      padding: 42px  40px 22px 20px;
    }
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
  .vuecal{
    &__header{
      background: rgba(255, 255, 255, 0.82);
      border-top: 1px solid #EAEAEB;
      border-bottom: 1px solid #EAEAEB;
      padding: 21px 44px ;
      position: relative;
    }
   
    &__title-bar{
      background: none;
      min-height: 0;
    }
    &__title{
      display: none;
    }
    &__arrow{
      width: 36px;
      height: 36px;
      background: #FFFFFF;
      box-shadow: 0px 1.94595px 11.6757px rgba(20, 20, 20, 0.12);
      border-radius: 50%;
      margin: 0;
      position: absolute;
      top: calc(50% - 18px);
      i.angle{
        position: absolute;
        top: 50%;
        left: calc(50% - 3px);
        transform: translate(0, -50%) rotate(-45deg);
        padding: 0;
        width: 12px;
        height: 12px;
        border-color: #868686;
      }
      &--prev{
        left: 44px;
      }
      &--next{
        right: 44px;
        i.angle{
          left: calc(50% - 8px);
        }
      }
    }
    &__weekdays-headings{
      border-bottom: none;
      
    }
    &__heading .weekday-label{
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #141414;
    }
  }
</style>
