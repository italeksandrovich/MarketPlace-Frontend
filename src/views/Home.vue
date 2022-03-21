<template>
  <div class="home">
    <div class="home-date" @click="hideDialog">
      <div class="home__calendar">
        <DatePicker v-model="date" mode="date" :masks="masks" title-position="left" :max-date="new Date()"
                    color="indigo" :popover="{ placement: 'bottom', visibility: 'click' }">
          <template v-slot="{ inputValue, inputEvents }">
            <input
              readonly
              ref="calendarInput"
              class="home__calendar--input"
              :value="dateNameText"
              v-on="inputEvents"
              @click="hideDialog"
              @change="dateName"
            />
          </template>
        </DatePicker>
      </div>
      <div class="home__buttons">
        <button class="active">
          <img src="../assets/image/icons/icon_bell_header.svg" alt="">
        </button>
        <button>
          <img src="../assets/image/icons/user_2.svg" alt="">
        </button>
      </div>
    </div>
    <div class="home__content">
      <vue-cal :selected-date="date"
               :time-from="9 * 60"
               :time-to="19 * 60"
               hide-view-selector
               hide-weekends
               :disable-views="['years', 'year','month','day']"
               active-view="month"
               :events="events"
               :time-cell-height="99"
               :on-event-click="onEventClick"
      />
      <div role="document" class="v-dialog__content" tabindex="0" v-show="showDialog"
           @click.stop.prevent.self="hideDialog">
        <div class="v-dialog" :style="markerInfoStyle" :class="{ 'content-left': hasLeft, 'content-right': hasRight }">
          <calendar-info :selectedEvent="selectedEvent"/>
        </div>
      </div>
      <div class="add_new">
        <button>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import CalendarInfo from '@/components/Home/CalendarInfo';
import events from '@/data/events';

export default {
  name: 'Home',
  components: {VueCal, Calendar, DatePicker, CalendarInfo},
  data() {
    return {
      hasLeft: false,
      hasRight: false,
      date: new Date(),
      showCalendar: false,
      dateNameText: "",
      visibility: 'hidden',
      masks: {
        mode: 'date',
        title: 'MMMM'
      },
      selectedEvent: {},
      showDialog: false,
      markerInfoStyle: {
        left: '200px',
        top: '200px'
      },
      events: events
    }
  },

  computed: {
    formattedDate() {
      return this.date.format('MM')
    },
    dateName() {
      if (this.formattedDate === '01') this.dateNameText = 'Январь '
      if (this.formattedDate === '02') this.dateNameText = 'Февраль '
      if (this.formattedDate === '03') this.dateNameText = 'Март '
      if (this.formattedDate === '04') this.dateNameText = 'Апрель '
      if (this.formattedDate === '05') this.dateNameText = 'Май '
      if (this.formattedDate === '06') this.dateNameText = 'Июнь '
      if (this.formattedDate === '07') this.dateNameText = 'Июль '
      if (this.formattedDate === '08') this.dateNameText = 'Август '
      if (this.formattedDate === '09') this.dateNameText = 'Сентябрь '
      if (this.formattedDate === '10') this.dateNameText = 'Октябрь '
      if (this.formattedDate === '11') this.dateNameText = 'Ноябрь '
      if (this.formattedDate === '12') this.dateNameText = 'Декабрь '
    }
  },
  methods: {
    onEventClick(event) {
      var element = document.querySelector(".vuecal__event--focus");
      var mod = document.querySelector(".v-dialog__content>.v-dialog");
      var rect = element.getBoundingClientRect();
      var rectMod = mod.getBoundingClientRect();
      var top = element.offsetTop;
      this.selectedEvent = event
      this.showDialog = true
      if (rect.x <= window.innerWidth / 2) {
        this.markerInfoStyle.left = rect.x + rect.width - 82 + 'px';
        this.markerInfoStyle.top = top + 87 + rect.height / 2 + 'px';
        this.hasLeft = false
        this.hasRight = true
      } else {
        this.markerInfoStyle.left = rect.x - rect.width - 222 + 'px';
        this.markerInfoStyle.top = top + 87 + rect.height / 2 + 'px';
        this.hasRight = false
        this.hasLeft = true
        console.log(rect.x, rectMod.width);
      }
    },
    hideDialog() {
      this.showDialog = false
    }
  }
}
</script>
