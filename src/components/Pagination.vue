<template>
  <ul class="pagination-list">
    <li class="pagination-item pagination-item__active">1</li>
    <li class="pagination-item">2</li>
    <li class="pagination-item">3</li>
    <li class="pagination-item">4</li>
    <li class="pagination-item">...</li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style lang="scss" scoped>
.pagination {
  &-list {
    width: 100%;
    height: 49px;
    margin-top: 35px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: inherit;
    }
  }
  &-item {
    font-size: 12px;
    font-weight: 400;
    color: #939393;
    margin-right: 10px;
    padding: 7px 9px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
    &__active {
      background: #19a0fc;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
