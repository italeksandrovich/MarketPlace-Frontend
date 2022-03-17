<template>
  <div class="home">
    <div class="home-date">
     <!-- <calendar v-model="date"/>-->
<!--      <input type="date" v-model="date">-->
      <div class="d-flex">
        <div class="home__calendar">
          <DatePicker v-model="date" mode="date"  :masks="masks" title-position="left" :max-date="new Date()"  color="indigo" >
      
            <template v-slot="{ inputValue, inputEvents }" >
              <input
                ref="calendarInput"
                class="home__calendar--input"
                :value="inputValue"
                v-on="inputEvents"
                @change="dateName"
              />
            </template>
          </DatePicker>
          <div  class="home__calendar--mm" @click="openCalendar">{{dateNameText }}</div>
        </div>
      </div>
      
      
    </div>
    
    <vue-cal :selected-date="date"
             :time-from="9 * 60"
             :time-to="19 * 60"
             hide-view-selector
             hide-weekends
             :disable-views="['years', 'year','month','day']"
             active-view="month"
             :events="events"
             :time-cell-height="99"
    />
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
        dateNameText:"",
        visibility: 'hidden',
        masks: {
          mode: 'date',
          title: 'MMMM',
        
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
    computed: {
      formattedDate() {
        return this.date.format('MM')
      },
      dateName(){
        if ( this.formattedDate == "01"){
          this.dateNameText = 'Январь '
        }
        if ( this.formattedDate == "02"){
          this.dateNameText = 'Февраль '
        }
        if ( this.formattedDate == "03"){
          this.dateNameText = 'Март '
        }
        if ( this.formattedDate == "04"){
          this.dateNameText = 'Апрель '
        }
        if ( this.formattedDate == "05"){
          this.dateNameText = 'Май '
        }
        if ( this.formattedDate == "06"){
          this.dateNameText = 'Июнь '
        }
        if ( this.formattedDate == "07"){
          this.dateNameText = 'Июль '
        }
        if ( this.formattedDate == "08"){
          this.dateNameText = 'Август '
        }
        if ( this.formattedDate == "09"){
          this.dateNameText = 'Сентябрь '
        }
        if ( this.formattedDate == "10"){
          this.dateNameText = 'Октябрь '
        }
        if ( this.formattedDate == "11"){
          this.dateNameText = 'Ноябрь '
        }
        if ( this.formattedDate == "12"){
          this.dateNameText = 'Декабрь '
        }
      }
    },
    methods: {
      openCalendar() {
        this.$refs.calendarInput.focus();
      },
    }
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
      padding: 21px 0px ;
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
    &__time-column{
      width: 112px;
      .vuecal__time-cell{
        text-align: center;
        font-size: 17px;
        line-height: 21px;
        color: #141414;
      }
      .vuecal__time-cell-line:before{
        left: 112px;
        border-top: 1px solid #E5E5E5;
      }
    }
    &__cell--selected{
      background: #F9F9F9;
    }
  &--view-with-time .vuecal__weekdays-headings{
    padding-left: 112px;
    padding-right: 0;
  }
    &__event{
      background: #F5F5F5;
      border-radius: 8px;
      padding: 16px;
      color: #868686;
      text-align: left;
      &:before {
        content: "";
        position: absolute;
        width: 4px;
        left: 0px;
        top: 0%;
        bottom: 0%;
        background: #AEAEAE;
      }
      &--focus{
        background: #556BF4!important;
        color: #FFFFFF!important;
        &:before {
          background: #556BF4!important;
        }
      }
      &:hover {
        background: #E5E9F8;
        color: #556BF4;
        &:before {
          background: #556BF4;
        }
      }
      &-time{
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        padding: 0;
        margin: 2px 0;
        border-bottom: none;
      }
      &-title{
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;
        margin: 2px 0;
      }
      &-content{
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        font-style: normal;
        margin: 2px 0;
      }
    }
  }
  .home__calendar{
    .vc-popover-content-wrapper{
      margin-top: -50px!important;
    }
    .vc-popover-caret{
      display: none;
    }
    .vc-title{font-size: 24px;
      line-height: 29px;
      color: #141414;
      &:first-letter{
        text-transform: uppercase;
      }
    }
    .vc-popover-content{
      border: none;
      background: #FFFFFF;
      box-shadow: 4px 16px 32px rgba(20, 20, 20, 0.15);
      border-radius: 12px;
    }
    &--input{
      height: 0;
      opacity: 0;
      width: 0;
    }
    &--mm{
      padding: 8px 60px 8px 20px;
      font-weight: 500;
      font-size: 40px;
      line-height: 48px;
      position: relative;
      color: #141414;
      border-radius: 12px;
      display: inline-block;
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        top: calc(50% - 3px);
        right: 28px;
        transform: translate(0, -50%) rotate(-45deg);
        padding: 0;
        width: 12px;
        height: 12px;
        border-color: #868686;
        border-width: 0 0 2px  2px;
        border-style: solid;
      }
      &:hover {
        background: #F5F5F5;
        &:before {
          border-color: #556BF4;
        }
      }
    }
  }

</style>
