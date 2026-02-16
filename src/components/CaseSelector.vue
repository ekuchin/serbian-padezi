<template>
  <div class="selector-container">
    <div class="selector-group">
      <label for="gender">Gender:</label>
      <select id="gender" v-model="localGender" @change="emitChanges">
        <option value="">-- Select Gender --</option>
        <option value="masculine">Masculine</option>
        <option value="feminine">Feminine</option>
        <option value="neuter">Neuter</option>
      </select>
    </div>

    <div class="selector-group">
      <label for="number">Number:</label>
      <select id="number" v-model="localNumber" @change="emitChanges">
        <option value="">-- Select Number --</option>
        <option value="singular">Singular</option>
        <option value="plural">Plural</option>
      </select>
    </div>

    <div class="selector-group">
      <label for="case">Case:</label>
      <select id="case" v-model="localCase" @change="emitChanges">
        <option value="">-- Select Case --</option>
        <option value="nominative">Nominative</option>
        <option value="genitive">Genitive</option>
        <option value="dative">Dative</option>
        <option value="accusative">Accusative</option>
        <option value="locative">Locative</option>
        <option value="instrumental">Instrumental</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Gender, Quantity, Case } from '../data/cases';

export default defineComponent({
  name: 'CaseSelector',
  props: {
    gender: {
      type: String as PropType<Gender | ''>,
      default: '',
    },
    number: {
      type: String as PropType<Quantity | ''>,
      default: '',
    },
    case: {
      type: String as PropType<Case | ''>,
      default: '',
    },
  },
  emits: ['update:gender', 'update:number', 'update:case'],
  data() {
    return {
      localGender: this.gender || '',
      localNumber: this.number || '',
      localCase: this.case || '',
    };
  },
  watch: {
    gender(newVal) {
      this.localGender = newVal || '';
    },
    number(newVal) {
      this.localNumber = newVal || '';
    },
    case(newVal) {
      this.localCase = newVal || '';
    },
  },
  methods: {
    emitChanges() {
      this.$emit('update:gender', this.localGender);
      this.$emit('update:number', this.localNumber);
      this.$emit('update:case', this.localCase);
    },
  },
});
</script>

<style scoped>
.selector-container {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.selector-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

select {
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  min-width: 150px;
  cursor: pointer;
  transition: border-color 0.2s;
}

select:hover {
  border-color: #999;
}

select:focus {
  outline: none;
  border-color: #4a90e2;
}
</style>
