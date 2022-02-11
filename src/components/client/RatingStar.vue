<template>
  <div class="star-rating">
    <label
      v-for="(rating, index) in ratings"
      :key="index"
      :class="[
        'star-rating__star',
        {
          'is-selected': value >= rating,
          'is-disabled': disabled,
        },
      ]"
      @click="set(rating)"
      @mouseover="starOver(rating)"
      @mouseout="starOut"
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
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ratings: [1, 2, 3, 4, 5],
      tempValue: null,
    };
  },
  methods: {
    starOver(index) {
      if (!this.disabled) {
        this.tempValue = this.value;
        return this.$emit("input", index);
      }
    },
    set(value) {
      if (!this.disabled) {
        this.tempValue = value;

        return (this.value = value);
      }
    },
    starOut() {
      if (!this.disabled) {
        return this.$emit("input", this.tempValue);
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
