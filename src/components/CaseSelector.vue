<template>
  <div class="selector-container">
    <div class="selector-group">
      <label>Gender:</label>
      <div class="button-row">
        <button
          v-for="g in ['masculine', 'feminine', 'neuter']"
          :key="g"
          :class="['selector-btn', { active: localGender === g }]"
          @click="selectGender(g as Gender)"
        >
          {{ capitalizeFirst(g) }}
        </button>
      </div>
    </div>

    <div class="selector-group">
      <label>Number:</label>
      <div class="button-row">
        <button
          v-for="n in ['singular', 'plural']"
          :key="n"
          :class="['selector-btn', { active: localNumber === n }]"
          @click="selectNumber(n as Quantity)"
        >
          {{ capitalizeFirst(n) }}
        </button>
      </div>
    </div>

    <div class="selector-group">
      <label>Case:</label>
      <div class="button-row cases-row">
        <button
          v-for="c in [
            'nominative',
            'genitive',
            'dative',
            'accusative',
            'locative',
            'instrumental',
          ]"
          :key="c"
          :class="['selector-btn', { active: localCase === c }]"
          @click="selectCase(c as Case)"
        >
          {{ capitalizeFirst(c) }}
        </button>
      </div>
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
    selectGender(g: Gender) {
      this.localGender = g;
      this.$emit('update:gender', g);
    },
    selectNumber(n: Quantity) {
      this.localNumber = n;
      this.$emit('update:number', n);
    },
    selectCase(c: Case) {
      this.localCase = c;
      this.$emit('update:case', c);
    },
    genderLabel(g: string): string {
      const labels: Record<string, string> = {
        masculine: 'Muški rod',
        feminine: 'Ženski rod',
        neuter: 'Srednji rod',
      };
      return labels[g] || g;
    },
    numberLabel(n: string): string {
      const labels: Record<string, string> = {
        singular: 'Jednina',
        plural: 'Množina',
      };
      return labels[n] || n;
    },
    caseLabel(c: string): string {
      const labels: Record<string, string> = {
        nominative: 'Nominativ',
        genitive: 'Genitiv',
        dative: 'Dativ',
        accusative: 'Akuzativ',
        locative: 'Lokativ',
        instrumental: 'Instrumental',
      };
      return labels[c] || c;
    },
  },
});
</script>

<style scoped>
.selector-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
}

.selector-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.button-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.cases-row {
  gap: 8px;
}

.selector-btn {
  padding: 10px 16px;
  border: 2px solid white;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.selector-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.selector-btn.active {
  background-color: #4a90e2;
  border-color: #2e5c8a;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
  font-weight: 600;
}

.selector-btn.active:hover {
  background-color: #357abd;
  box-shadow: 0 6px 16px rgba(74, 144, 226, 0.6);
}
</style>
