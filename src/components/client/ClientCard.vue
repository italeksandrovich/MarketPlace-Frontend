<template>
  <div class="client-card">
    <div class="client-card-header">
      <div class="client-icon">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <div class="client-header-body">
      <p>{{ item.name }}</p>
      <div class="client-card-adress">
        <div class="adress-title" @click="!showOFF">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="12"
            height="12"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#000000">
                <path
                  d="M93.6755,86l-32.75883,-32.75883l10.75,-10.75l43.50883,43.50883l-43.50883,43.50883l-10.75,-10.75z"
                ></path>
              </g>
            </g>
          </svg>
          <h6>Адрес</h6>
        </div>
        <ul>
          <li v-for="(adr, idx) in item.adresses" :key="idx">
            {{ adr }}
          </li>
        </ul>
      </div>
      <div class="client-subway">
        <div class="subway-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="12"
            height="12"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#000000">
                <path
                  d="M93.6755,86l-32.75883,-32.75883l10.75,-10.75l43.50883,43.50883l-43.50883,43.50883l-10.75,-10.75z"
                ></path>
              </g>
            </g>
          </svg>
          <h6>Метро</h6>
        </div>
        <ul>
          <li v-for="(sbw, idx) in item.subway" :key="idx">{{ sbw }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "client-card",
  data() {
    return {
      showOff: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.client-card {
  background: #f9f9f9;
  width: 200px;
  height: auto;
  padding: 51px 16px 26px 16px;
  border-radius: 10px;
  position: relative;

  &-header {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
  }
  .client-icon {
    background: #c4c4c4;
    padding: 15px;
    border-radius: 10px;
  }

  &-adress {
    li {
      color: #141313;
      font-size: 12px;
      font-weight: 400;
    }
  }

  .adress-title {
    display: flex;
    align-items: center;

    h6 {
      color: #141313;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .subway-title {
    display: flex;
    align-items: center;

    h6 {
      color: #141313;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
