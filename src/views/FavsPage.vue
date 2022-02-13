<template>
  <div class="favorities">
    <div class="favorities-header">
        <div class="favorities-menu-item">
           <div class="favorities-arrow">
                <router-link to="/partners-list" class="arrow">
                  <img src="@/assets/image/icons/arrow-left.svg" alt="" />
                </router-link>
           </div>
          <div class="favorities-dashboard" @click="setStatus(true)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 32 32"
          style="fill: #c9c9c9"
        >
          <path
            d="M 11,0 H 4 A 4,4 0 0 0 0,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 V 4 A 4,4 0 0 0 11,0 Z m 2,11 a 2,2 0 0 1 -2,2 H 4 A 2,2 0 0 1 2,11 V 4 A 2,2 0 0 1 4,2 h 7 a 2,2 0 0 1 2,2 z M 28,0 h -7 a 4,4 0 0 0 -4,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 V 4 A 4,4 0 0 0 28,0 Z m 2,11 a 2,2 0 0 1 -2,2 H 21 A 2,2 0 0 1 19,11 V 4 a 2,2 0 0 1 2,-2 h 7 a 2,2 0 0 1 2,2 z M 11,17 H 4 a 4,4 0 0 0 -4,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 v -7 a 4,4 0 0 0 -4,-4 z m 2,11 a 2,2 0 0 1 -2,2 H 4 A 2,2 0 0 1 2,28 v -7 a 2,2 0 0 1 2,-2 h 7 a 2,2 0 0 1 2,2 z M 28,17 h -7 a 4,4 0 0 0 -4,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 v -7 a 4,4 0 0 0 -4,-4 z m 2,11 a 2,2 0 0 1 -2,2 h -7 a 2,2 0 0 1 -2,-2 v -7 a 2,2 0 0 1 2,-2 h 7 a 2,2 0 0 1 2,2 z"
          ></path>
        </svg>
           </div>
        </div>
      <div class="favorities-title">
            <h3>Избранное</h3>
            <p>
            Здесь хранится список ваших избранных
            мастеров и компаий
            </p>
       </div>
    </div>
    <div class="favorities-body">
        <PartnersCart v-for="card in 3" :key="card" :expandable="true"/>
    </div>
  </div>
</template>

<script>
import PartnersCart from "@/components/partners/PartnersCart"
import { mapMutations } from "vuex";

export default {
  name:"favs",
  components:{
    PartnersCart,
  },
  data(){
   return{
    }
  },
   methods: {
    ...mapMutations({
      setStatus: "SET_SIDEBAR_STATUS",
    }),
    }
  
}
</script>

<style lang="scss" scoped>
.favorities{
    &-header{
    display: flex;
    flex-direction: column;
    }

    &-menu-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;
    }

    &-arrow{
    display: flex;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 10px;
    background: #c9c9c9;
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
    }

    &-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 46px;

    h3{
     margin-bottom: 17px;
    }

    p{
        text-align: center;
    }
    }
    
}

</style>