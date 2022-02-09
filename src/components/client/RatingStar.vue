<template>
  <div class="star-rating">
    <label
      class="star-rating__star"
      v-for="rating in ratings"
      :key="rating"
      :class="{
        'is-selected': value >= rating && value != null,
        'is-disabled': disabled,
      }"
      v-on:click="set(rating)"
      v-on:mouseover="starOver(rating)"
      v-on:mouseout="starOut"
    >
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        :value="rating"
        :name="name"
        v-model="value"
        :disabled="disabled"
      />★</label
    >
  </div>
</template>

<script>
export default {
  name: "ratings",
  props: {
    name: {
      type: String,
    },
    value: null,
    id: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    starOver(index) {
      if (!this.disabled) {
        this.temp_value = this.value;
        return this.$emit("input", index);
      }
    },
    set(value) {
      if (!this.disabled) {
        this.temp_value = value;
        return (this.value = value);
      }
    },
    starOut() {
      if (!this.disabled) {
        return this.$emit("input", this.temp_value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating {
  &__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ababab;
    transition: color 0.2s ease-out;

    &:hover {
      cursor: pointer;
    }

    &.is-selected {
      color: #ffd700;
    }

    &.is-disabled:hover {
      cursor: default;
    }
  }

  &__checkbox {
    @extend %visually-hidden;
  }
}
</style>
