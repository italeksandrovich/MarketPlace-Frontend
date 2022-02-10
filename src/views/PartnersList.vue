<template>
  <div class="partners-list">
    <PartnersFilter />
    <PartnersCart v-for="(item, index) in 5" :key="index" />
    <Pagination />
  </div>
</template>

<script>
import PartnersCart from "@/components/partners/PartnersCart";
import Pagination from "@/components/Pagination";
import PartnersFilter from "@/components/partners/PartnersFilter";

export default {
  name: "PartnersList",
  components: {
    PartnersCart,
    Pagination,
    PartnersFilter,
  },
};
</script>

<style lang="scss" scoped></style>
