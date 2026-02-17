<template>
  <div class="selector-container">
    <div class="selector-group">
      <label>Род:</label>
      <div class="button-row">
        <button
          v-for="g in ['masculine', 'feminine', 'neuter']"
          :key="g"
          :class="['selector-btn', { active: localGender === g }]"
          @click="selectGender(g as Gender)"
        >
          {{ genderLabel(g) }}
        </button>
      </div>
    </div>

    <div class="selector-group">
      <label>Число:</label>
      <div class="button-row">
        <button
          v-for="n in ['singular', 'plural']"
          :key="n"
          :class="['selector-btn', { active: localNumber === n }]"
          @click="selectNumber(n as Quantity)"
        >
          {{ numberLabel(n) }}
        </button>
      </div>
    </div>

    <div class="selector-group">
      <label>Падеж:</label>
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
          {{ caseLabel(c) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Gender, Quantity, Case } from '../data/cases';

interface Props {
  gender?: Gender | '';
  number?: Quantity | '';
  case?: Case | '';
}

const props = withDefaults(defineProps<Props>(), {
  gender: '',
  number: '',
  case: '',
});

const emit = defineEmits<{
  'update:gender': [value: Gender];
  'update:number': [value: Quantity];
  'update:case': [value: Case];
}>();

const localGender = ref<Gender | ''>(props.gender);
const localNumber = ref<Quantity | ''>(props.number);
const localCase = ref<Case | ''>(props.case);

watch(() => props.gender, (newVal) => {
  localGender.value = newVal || '';
});

watch(() => props.number, (newVal) => {
  localNumber.value = newVal || '';
});

watch(() => props.case, (newVal) => {
  localCase.value = newVal || '';
});

const selectGender = (g: Gender) => {
  localGender.value = g;
  emit('update:gender', g);
};

const selectNumber = (n: Quantity) => {
  localNumber.value = n;
  emit('update:number', n);
};

const selectCase = (c: Case) => {
  localCase.value = c;
  emit('update:case', c);
};

const genderLabel = (g: string): string => {
  const labels: Record<string, string> = {
    masculine: 'Muški rod',
    feminine: 'Ženski rod',
    neuter: 'Srednji rod',
  };
  return labels[g] || g;
};

const numberLabel = (n: string): string => {
  const labels: Record<string, string> = {
    singular: 'Jednina',
    plural: 'Množina',
  };
  return labels[n] || n;
};

const caseLabel = (c: string): string => {
  const labels: Record<string, string> = {
    nominative: 'Nominativ',
    genitive: 'Genitiv',
    dative: 'Dativ',
    accusative: 'Akuzativ',
    locative: 'Lokativ',
    instrumental: 'Instrumental',
  };
  return labels[c] || c;
};
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
  color: #222;
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
  border: 2px solid #bdbdbd;
  background-color: #ffffff;
  color: #222;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.selector-btn:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.selector-btn.active {
  background-color: #bdbdbd;
  border-color: #8f8f8f;
  box-shadow: none;
  font-weight: 600;
  color: #111;
}

.selector-btn.active:hover {
  background-color: #a7a7a7;
}
</style>
